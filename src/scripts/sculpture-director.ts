/**
 * Scroll storytelling for the single, page-level sculpture.
 *
 * Sections opt in by declaring a scene in markup, in page order:
 *
 *   <section data-sculpture-scene="hero">    The figure rests on the right (its CSS rest pose).
 *   <section data-sculpture-scene="center">  The figure travels to the viewport centre and
 *                                            holds there while the section is on screen.
 *
 * After the last "center" scene the figure rises, recedes and fades out. With only a hero
 * scene (the current page) it drifts toward the centre and fades as the hero leaves.
 *
 * There is one renderer for the whole page: the director only moves the stage element
 * and tells the renderer when it is worth drawing. A future section becomes a sculpture
 * scene by adding the attribute — no second canvas, no extra WebGL context.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { SculptureState } from './sculpture';

gsap.registerPlugin(ScrollTrigger);

export interface DirectorOptions {
  /** The positioned wrapper around the sculpture inside the fixed stage. */
  orb: HTMLElement;
  state: SculptureState;
  /** Called when the figure enters or leaves the part of the page where it is visible. */
  onActive?: (active: boolean) => void;
}

export function directSculpture({ orb, state, onActive }: DirectorOptions): () => void {
  const scenes = Array.from(document.querySelectorAll<HTMLElement>('[data-sculpture-scene]'));
  const hero = scenes.find((s) => s.dataset.sculptureScene === 'hero');
  if (!hero) return () => {};

  const centers = scenes.filter((s) => s.dataset.sculptureScene === 'center');
  const lastCenter = centers.at(-1);
  const isDesktop = () => window.innerWidth >= 1024;

  // Offsets that put the orb's centre on the viewport centre. The stage is fixed and
  // viewport-sized, so the orb's offset box is its rest position on screen.
  const toCenterX = () => window.innerWidth / 2 - (orb.offsetLeft + orb.offsetWidth / 2);
  const toCenterY = () => window.innerHeight / 2 - (orb.offsetTop + orb.offsetHeight / 2);

  const ctx = gsap.context(() => {
    // --- Hero → next scene ---------------------------------------------------
    const heroLeg = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
        invalidateOnRefresh: true,
        onUpdate: (self) => (state.scroll = self.progress),
      },
    });

    if (lastCenter) {
      // Arrive centred exactly as the first centre scene reaches the top.
      heroLeg.to(orb, { x: toCenterX, y: toCenterY, scale: () => (isDesktop() ? 0.82 : 0.9), duration: 1 }, 0);

      // --- Leave after the last centre scene ---------------------------------
      gsap.fromTo(
        orb,
        { yPercent: 0, autoAlpha: 1 },
        {
          yPercent: -30,
          scale: () => (isDesktop() ? 0.7 : 0.78),
          autoAlpha: 0,
          ease: 'none',
          immediateRender: false,
          scrollTrigger: {
            trigger: lastCenter,
            start: 'bottom bottom',
            end: 'bottom top',
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        }
      );
    } else {
      // No centre scene yet: rise, drift toward centre and recede before the next copy arrives.
      heroLeg
        .to(orb, { x: () => toCenterX() * (isDesktop() ? 0.55 : 0.4), yPercent: -34, scale: 0.74, duration: 1 }, 0)
        .to(orb, { autoAlpha: 0, duration: 0.42, ease: 'power1.in' }, 0.2);
    }

    // --- Render only while the figure can be seen ------------------------------
    ScrollTrigger.create({
      trigger: hero,
      start: 'top bottom',
      endTrigger: lastCenter ?? hero,
      end: 'bottom top',
      onToggle: (self) => onActive?.(self.isActive),
    });
  });

  return () => ctx.revert();
}
