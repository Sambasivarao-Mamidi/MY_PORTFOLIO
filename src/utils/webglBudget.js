const MAX_ACTIVE = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches ? 1 : 1;
const active = new Set();

export function canStartWebGL(id) {
  if (active.has(id)) return true;
  return active.size < MAX_ACTIVE;
}

export function registerWebGL(id) {
  active.add(id);
}

export function unregisterWebGL(id) {
  active.delete(id);
}

export function getActiveCount() {
  return active.size;
}
