import { useSyncExternalStore } from "react";

const mobileQuery = "(max-width: 767px)";
const motionQuery = "(prefers-reduced-motion: reduce)";

function subscribe(query, callback) {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return () => {};
  }
  const mql = window.matchMedia(query);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot(query) {
  return () => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return false;
    }
    return window.matchMedia(query).matches;
  };
}

function useMediaQuery(query, serverValue = false) {
  return useSyncExternalStore(
    (callback) => subscribe(query, callback),
    getSnapshot(query),
    () => serverValue
  );
}

export function useDeviceTier() {
  const isMobile = useMediaQuery(mobileQuery);
  const reduceMotion = useMediaQuery(motionQuery);

  if (reduceMotion) return "none";
  if (isMobile) return "low";
  return "high";
}
