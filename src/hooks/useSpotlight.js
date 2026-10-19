import { useCallback, useRef } from 'react'
import { useCachedRect } from '@/hooks/useCachedRect'

export function useSpotlight() {
  const ref = useRef(null)
  const readRect = useCachedRect()

  const onMouseMove = useCallback((event) => {
    const el = ref.current
    if (!el) return
    const rect = readRect(el)
    if (!rect) return
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    el.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }, [readRect])

  return { ref, onMouseMove }
}
