import { useCallback, useRef } from 'react'

export function useSpotlight() {
  const ref = useRef(null)

  const onMouseMove = useCallback((event) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    el.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }, [])

  return { ref, onMouseMove }
}