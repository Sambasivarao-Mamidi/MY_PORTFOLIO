import { useCallback } from 'react'

export function useScrollToSection() {
  return useCallback((href) => {
    if (typeof window === 'undefined') return
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.open(href, '_blank', 'noopener,noreferrer')
    }
  }, [])
}