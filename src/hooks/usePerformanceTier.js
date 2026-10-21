import { useEffect, useState } from 'react'

const isMobileUA = () => {
  if (typeof navigator === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export function usePerformanceTier() {
  const [tier, setTier] = useState('medium')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    const memory = navigator.deviceMemory
    const cores = navigator.hardwareConcurrency
    const mobile = isMobileUA()
    const dpr = window.devicePixelRatio || 1
    const width = window.innerWidth

    let result = 'high'

    if (reduced) {
      result = 'low'
    } else if (mobile && width < 768) {
      result = 'medium'
    }

    if (memory != null && memory < 4) result = 'low'
    else if (memory != null && memory < 8 && result === 'high') result = 'medium'

    if (cores != null && cores < 4) result = 'low'
    else if (cores != null && cores < 8 && result === 'high') result = 'medium'

    if (dpr >= 3 && result === 'high' && mobile) result = 'medium'

    setTier(result)
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-perf-tier', result)
    }
  }, [])

  return tier
}
