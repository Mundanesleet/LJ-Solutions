/**
 * Cheap synchronous capability check that decides WebGL vs. the SVG fallback
 * before the hero paints. Kept apart from sculpture.ts so Three.js stays out of
 * the initial bundle.
 */
export function supportsSculpture(): boolean {
  try {
    const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
    if (nav.connection?.saveData) return false;
    // Low-memory, low-core devices get the static fallback.
    if ((nav.deviceMemory ?? 8) <= 2 && (nav.hardwareConcurrency ?? 8) <= 4) return false;
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2');
    gl?.getExtension('WEBGL_lose_context')?.loseContext();
    return !!gl;
  } catch {
    return false;
  }
}
