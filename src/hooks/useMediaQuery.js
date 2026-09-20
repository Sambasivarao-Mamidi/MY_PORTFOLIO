import { useSyncExternalStore } from 'react'

const getServerSnapshot = () => false

const getSnapshot = (query) => () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false
  return window.matchMedia(query).matches
}

export function useMediaQuery(query) {
  const subscribe = (onStoreChange) => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return () => {}
    }
    const mediaQueryList = window.matchMedia(query)
    mediaQueryList.addEventListener('change', onStoreChange)
    return () => mediaQueryList.removeEventListener('change', onStoreChange)
  }

  return useSyncExternalStore(subscribe, getSnapshot(query), getServerSnapshot)
}