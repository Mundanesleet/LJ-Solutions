/**
 * The LJ sculpture — two cupped sheets of liquid glass with incandescent edges,
 * deformed on the GPU with 3D simplex noise. One renderer for the whole page:
 * scenes move the stage around it (see sculpture-director.ts), never duplicate it.
 * Loaded lazily (dynamic import) so it never blocks content.
 *
 * Performance contract:
 *  - DPR capped (1 on touch/small screens, 1.5 on desktop) and lowered further if
 *    frames run slow.
 *  - Render loop runs only while the director marks it active and the tab is visible.
 *  - With reduced motion a single still frame is drawn; no loop runs.
 */
import {
  BufferAttribute,
  BufferGeometry,
  Color,
  DoubleSide,
  Group,
  Mesh,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector3,
  WebGLRenderer,
} from 'three';

export interface SculptureState {
  /** 0 → 1 as the hero scrolls away: winds the sheets and turns the form. */
  scroll: number;
  /** Pointer position, -0.5 → 0.5 on each axis. */
  px: number;
  py: number;
}

export interface SculptureOptions {
  state: SculptureState;
  reducedMotion: boolean;
}

export interface SculptureController {
  /** Start/stop the render loop (the director calls this as scenes enter and leave). */
  setActive(active: boolean): void;
  /** Redraw one still frame (reduced motion). */
  redraw(): void;
  destroy(): void;
}

/** The sculpture's meshes plus how the shared rig should pose and move it. */
interface Look {
  group: Group;
  materials: ShaderMaterial[];
  cameraZ: number;
  base: [number, number, number];
  spin: number;
  pointer: number;
  scrollTurn: number;
  glow: number;
}

const PALETTE = {
  ink: new Color('#0a0a0a'),
  orange: new Color('#ff4d00'),
  dim: new Color('#cc3d00'),
  cream: new Color('#f5f0e8'),
};

// ---------------------------------------------------------------------------
// Shaders
// ---------------------------------------------------------------------------

// Ashima / Stefan Gustavson 3D simplex noise (MIT).
const NOISE = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
`;


const GLOW_FRAG = /* glsl */ `
uniform vec3 uOrange;
uniform float uTime;
uniform float uIntensity;
varying vec2 vUv;
void main(){
  float d = length(vUv - 0.5) * 2.0;
  float g = exp(-d * d * 3.2) * (0.85 + 0.15 * sin(uTime * 0.9));
  // Alpha falls to zero at the edges so the canvas stays transparent around the glow.
  gl_FragColor = vec4(uOrange, g * uIntensity);
  #include <colorspace_fragment>
}
`;

const GLOW_VERT = /* glsl */ `
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;

// ---------------------------------------------------------------------------
// Geometry
// ---------------------------------------------------------------------------

interface RibbonSpec {
  curve: (t: number) => Vector3;
  width: number;
  twist: number; // full turns along the length
  segments: number;
  across: number;
}

const TAU = Math.PI * 2;

// ---------------------------------------------------------------------------
// Variant B — liquid glass. Two wide, cupped sheets. Each cross-section is
// rebuilt on the GPU from its centre, side and face vectors, so the sheets can
// twist around their own spine and drift as whole sections: the silhouette
// changes slowly while the surface itself never ripples or jitters.
// ---------------------------------------------------------------------------

const GLASS_VERT = /* glsl */ `
uniform float uTime;
uniform float uMorph;
uniform float uCup;
attribute vec3 aCenter;
attribute vec3 aSide;
attribute vec3 aFace;
attribute vec3 aTan;
attribute float aEdge;
attribute float aAlong;
attribute float aWidth;
varying vec3 vWorld;
varying vec3 vNormalW;
varying float vEdge;
varying float vAlong;
${NOISE}
vec3 rotAxis(vec3 v, vec3 k, float a){
  float c = cos(a), s = sin(a);
  return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c);
}
void main(){
  float t = uTime * 0.35;
  // Slow torsion travelling along the sheet; scroll winds it further.
  float tw = sin(aAlong * 3.1 + t * 0.9) * 0.55
           + sin(aAlong * 1.3 - t * 0.6) * 0.35
           + uMorph * (aAlong - 0.5) * 1.8;
  vec3 side = rotAxis(aSide, aTan, tw);
  vec3 face = rotAxis(aFace, aTan, tw);

  // Low-frequency drift of whole cross-sections: the silhouette breathes.
  vec3 q = aCenter * 0.45 + vec3(t * 0.35, t * 0.22, -t * 0.18);
  vec3 c = aCenter + vec3(
    snoise(q),
    snoise(q + vec3(5.2, 1.3, 0.0)),
    snoise(q + vec3(0.0, 9.1, 2.7))
  ) * 0.22 * (1.0 + uMorph * 0.6);

  float w = aWidth * (0.88 + 0.12 * sin(aAlong * 5.0 - t * 0.8));
  float s = aEdge;
  // Cupped cross-section reads as a thick curved pane of glass, not paper.
  vec3 p = c + side * s * w + face * uCup * (1.0 - s * s) * w;
  vec3 n = normalize(face + side * 2.0 * uCup * s);

  vec4 wp = modelMatrix * vec4(p, 1.0);
  vWorld = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * n);
  vEdge = s;
  vAlong = aAlong;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`;

const GLASS_FRAG = /* glsl */ `
uniform vec3 uInk;
uniform vec3 uOrange;
uniform vec3 uDim;
uniform vec3 uCream;
uniform float uOpacity;
uniform float uTime;
uniform float uMorph;
varying vec3 vWorld;
varying vec3 vNormalW;
varying float vEdge;
varying float vAlong;
void main(){
  vec3 N = normalize(vNormalW);
  vec3 V = normalize(cameraPosition - vWorld);
  if (dot(N, V) < 0.0) N = -N;
  float ndv = clamp(dot(N, V), 0.0, 1.0);
  float fres = pow(1.0 - ndv, 3.0);

  vec3 L = normalize(vec3(-0.5, 0.8, 0.6));
  float diff = clamp(dot(N, L), 0.0, 1.0);
  vec3 R = reflect(-V, N);
  float spec = pow(clamp(dot(R, L), 0.0, 1.0), 90.0);
  // A soft studio strip reflected in the glass.
  float env = smoothstep(0.45, 0.7, R.y) * (1.0 - smoothstep(0.7, 0.95, R.y));

  // Orange lives on the edges and grazing angles only.
  float edge = smoothstep(0.8, 1.0, abs(vEdge));
  float rim = clamp(fres * 1.1 + edge * 0.85, 0.0, 1.0);

  vec3 col = uInk;
  col += uDim * 0.24 * diff;                    // smoky body, lit from the key
  col += uOrange * 0.07 * (1.0 - ndv);          // light transmitted through the glass
  col = mix(col, uOrange, rim * 0.85);
  col += uOrange * pow(rim, 3.0) * 0.9;
  col += uCream * (spec * 0.55 + env * 0.16 * (1.0 - rim));

  // Faces turned from the light are denser and darker: that is the volume.
  float shade = 1.0 - diff;
  float alpha = 0.09 + 0.3 * shade * (1.0 - rim) + rim * 0.8 + spec * 0.5 + env * 0.1;
  gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0) * uOpacity);
  #include <colorspace_fragment>
}
`;

function buildSheet({ curve, width, twist, segments, across }: RibbonSpec): BufferGeometry {
  const pts: Vector3[] = [];
  for (let i = 0; i <= segments; i++) pts.push(curve(i / segments));
  const tangents = pts.map((_, i) =>
    pts[Math.min(i + 1, segments)].clone().sub(pts[Math.max(i - 1, 0)]).normalize()
  );
  const normals: Vector3[] = [];
  const up = Math.abs(tangents[0].y) < 0.9 ? new Vector3(0, 1, 0) : new Vector3(1, 0, 0);
  normals.push(new Vector3().crossVectors(tangents[0], up).normalize());
  for (let i = 1; i <= segments; i++) {
    const prev = normals[i - 1];
    normals.push(prev.clone().sub(tangents[i].clone().multiplyScalar(prev.dot(tangents[i]))).normalize());
  }

  const rows = across + 1;
  const count = (segments + 1) * rows;
  const attr = {
    position: new Float32Array(count * 3),
    aCenter: new Float32Array(count * 3),
    aSide: new Float32Array(count * 3),
    aFace: new Float32Array(count * 3),
    aTan: new Float32Array(count * 3),
    aEdge: new Float32Array(count),
    aAlong: new Float32Array(count),
    aWidth: new Float32Array(count),
  };
  const side = new Vector3();
  const bin = new Vector3();
  const face = new Vector3();

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const T = tangents[i];
    bin.crossVectors(T, normals[i]);
    const ang = t * twist * Math.PI * 2;
    side.copy(normals[i]).multiplyScalar(Math.cos(ang)).addScaledVector(bin, Math.sin(ang));
    face.crossVectors(T, side).normalize();
    // Tapered, slightly uneven width — poured, not extruded.
    const w = width * Math.pow(Math.sin(Math.PI * t), 0.45) * (0.85 + 0.15 * Math.sin(t * 7 + 0.5));
    const p = pts[i];
    for (let j = 0; j < rows; j++) {
      const s = (j / across) * 2 - 1;
      const k = i * rows + j;
      attr.position.set([p.x + side.x * s * w, p.y + side.y * s * w, p.z + side.z * s * w], k * 3);
      attr.aCenter.set([p.x, p.y, p.z], k * 3);
      attr.aSide.set([side.x, side.y, side.z], k * 3);
      attr.aFace.set([face.x, face.y, face.z], k * 3);
      attr.aTan.set([T.x, T.y, T.z], k * 3);
      attr.aEdge[k] = s;
      attr.aAlong[k] = t;
      attr.aWidth[k] = w;
    }
  }

  const index: number[] = [];
  for (let i = 0; i < segments; i++) {
    for (let j = 0; j < across; j++) {
      const a = i * rows + j;
      const b = a + rows;
      index.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }

  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(attr.position, 3));
  for (const name of ['aCenter', 'aSide', 'aFace', 'aTan'] as const) {
    geo.setAttribute(name, new BufferAttribute(attr[name], 3));
  }
  for (const name of ['aEdge', 'aAlong', 'aWidth'] as const) {
    geo.setAttribute(name, new BufferAttribute(attr[name], 1));
  }
  geo.setIndex(index);
  return geo;
}

function glassMaterial(opacity: number, cup: number) {
  return new ShaderMaterial({
    vertexShader: GLASS_VERT,
    fragmentShader: GLASS_FRAG,
    transparent: true,
    depthWrite: false,
    side: DoubleSide,
    uniforms: {
      uTime: { value: 0 },
      uMorph: { value: 0 },
      uCup: { value: cup },
      uOpacity: { value: opacity },
      uInk: { value: PALETTE.ink },
      uOrange: { value: PALETTE.orange },
      uDim: { value: PALETTE.dim },
      uCream: { value: PALETTE.cream },
    },
  });
}

const glassCurves = {
  // Main sheet: an open figure-eight loop folding back through depth.
  main: (t: number) => {
    const u = 0.25 + t * TAU * 0.9;
    return new Vector3(1.5 * Math.sin(u), 0.62 * Math.sin(2 * u), 0.85 * Math.cos(u));
  },
  // Secondary sheet: one long sweep crossing the loop once.
  sweep: (t: number) =>
    new Vector3(-1.4 + 2.8 * t, 0.55 * Math.sin(Math.PI * t * 1.2 + 0.4) - 0.25, 0.65 * Math.cos(Math.PI * t * 1.6)),
};

function buildGlass(isSmall: boolean): Look {
  const mainMat = glassMaterial(1, 0.36);
  const sweepMat = glassMaterial(0.9, 0.28);
  const main = new Mesh(
    buildSheet({ curve: glassCurves.main, width: 0.9, twist: 0.85, segments: isSmall ? 220 : 320, across: isSmall ? 16 : 24 }),
    mainMat
  );
  const sweep = new Mesh(
    buildSheet({ curve: glassCurves.sweep, width: 0.56, twist: 0.55, segments: isSmall ? 140 : 200, across: isSmall ? 12 : 18 }),
    sweepMat
  );
  // Positions are rebuilt in the shader, so CPU bounds are only approximate.
  main.frustumCulled = false;
  sweep.frustumCulled = false;
  sweep.renderOrder = 1;
  main.renderOrder = 2;

  const group = new Group();
  group.add(sweep, main);
  group.position.x = -0.3; // pull the mass back from the cropped right edge
  return {
    group,
    materials: [mainMat, sweepMat],
    cameraZ: 8.6,
    base: [0.42, -0.5, 0.32],
    spin: 0.035,
    pointer: 0.22,
    scrollTurn: 0.9,
    glow: 0.18,
  };
}

// ---------------------------------------------------------------------------

export function mountSculpture(host: HTMLElement, { state, reducedMotion }: SculptureOptions): SculptureController {
  const isSmall = window.matchMedia('(max-width: 767px), (pointer: coarse)').matches;
  let dpr = Math.min(window.devicePixelRatio || 1, isSmall ? 1 : 1.5);

  const renderer = new WebGLRenderer({
    antialias: !isSmall,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(dpr);
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;opacity:0;transition:opacity 1.2s cubic-bezier(0.16,1,0.3,1)';
  host.appendChild(canvas);

  const scene = new Scene();
  const camera = new PerspectiveCamera(30, 1, 0.1, 50);
  const look = buildGlass(isSmall);
  camera.position.set(0, 0, look.cameraZ);

  const sculpture = new Group();
  sculpture.rotation.set(...look.base);
  sculpture.add(look.group);
  scene.add(sculpture);

  // Inner light: a soft bloom behind the forms.
  const glowMat = new ShaderMaterial({
    vertexShader: GLOW_VERT,
    fragmentShader: GLOW_FRAG,
    transparent: true,
    depthWrite: false,
    depthTest: false,
    uniforms: { uOrange: { value: PALETTE.orange }, uTime: { value: 0 }, uIntensity: { value: look.glow } },
  });
  const glow = new Mesh(new PlaneGeometry(5.2, 5.2), glowMat);
  glow.position.z = -1.2;
  glow.renderOrder = 0;
  scene.add(glow);

  const materials = look.materials;

  // --- sizing -------------------------------------------------------------
  const resize = () => {
    const { clientWidth: w, clientHeight: h } = host;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(host);
  resize();

  // --- loop ---------------------------------------------------------------
  let time = 4; // start mid-flow, not at the noise origin
  let last = performance.now();
  let raf = 0;
  let running = false;
  let active = true;
  let slowFrames = 0;
  let rotX = 0;
  let rotY = 0;
  let spin = 0;

  const draw = (dt: number) => {
    time += dt;
    const s = state.scroll;
    spin += dt * look.spin;

    // Ease toward pointer + scroll targets (slow ease: no snapping to the cursor).
    const k = 1 - Math.exp(-dt * 1.8);
    rotX += (state.py * look.pointer * 0.7 - rotX) * k;
    rotY += (state.px * look.pointer - rotY) * k;

    const [bx, by, bz] = look.base;
    sculpture.rotation.x = bx + rotX + s * 0.5;
    sculpture.rotation.y = by + rotY + spin + s * look.scrollTurn;
    sculpture.rotation.z = bz + s * 0.3;

    for (const m of materials) {
      m.uniforms.uTime.value = time;
      m.uniforms.uMorph.value = s;
    }
    glowMat.uniforms.uTime.value = time;
    glowMat.uniforms.uIntensity.value = look.glow * (1 + s * 0.7);

    renderer.render(scene, camera);
  };

  const frame = (now: number) => {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;

    // Adaptive quality: sustained slow frames lower the pixel ratio.
    if (dt > 0.022) slowFrames++;
    else slowFrames = Math.max(0, slowFrames - 1);
    if (slowFrames > 40 && dpr > 0.75) {
      dpr = Math.max(0.75, dpr - 0.25);
      renderer.setPixelRatio(dpr);
      resize();
      slowFrames = 0;
    }

    draw(dt);
  };

  const start = () => {
    if (running || reducedMotion) return;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  };

  const stop = () => {
    running = false;
    cancelAnimationFrame(raf);
  };

  const sync = () => (active && !document.hidden ? start() : stop());
  document.addEventListener('visibilitychange', sync);

  // First frame, then reveal the canvas.
  draw(0);
  requestAnimationFrame(() => (canvas.style.opacity = '1'));
  sync();

  return {
    setActive(next) {
      active = next;
      sync();
    },
    redraw: () => {
      if (!running) draw(0);
    },
    destroy() {
      stop();
      ro.disconnect();
      document.removeEventListener('visibilitychange', sync);
      scene.traverse((o) => {
        if (o instanceof Mesh) {
          o.geometry.dispose();
          (o.material as ShaderMaterial).dispose();
        }
      });
      renderer.dispose();
      canvas.remove();
    },
  };
}
