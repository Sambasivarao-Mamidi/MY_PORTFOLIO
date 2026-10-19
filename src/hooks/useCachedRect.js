import { useCallback, useRef } from 'react';

/**
 * Returns a function that reads an element's bounding rect at most once per
 * animation frame. Reading getBoundingClientRect inside high-frequency
 * pointers/scroll handlers causes layout thrashing; this coalesces reads to
 * one per frame so the compositor thread isn't blocked on every event.
 */
export function useCachedRect() {
  const rect = useRef(null);
  const frame = useRef(0);

  const read = useCallback((el) => {
    if (!el) return rect.current;
    if (!frame.current) {
      frame.current = requestAnimationFrame(() => {
        frame.current = 0;
        rect.current = el.getBoundingClientRect();
      });
    }
    return rect.current;
  }, []);

  return read;
}
