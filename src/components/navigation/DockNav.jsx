import { useEffect, useRef, useState } from 'react'
import { navItems } from '@/data/navigation'
import { Button } from '@/components/ui/Button'
import { useScrollToSection } from '@/hooks/useScrollToSection'

const SECTION_IDS = ['hero', 'about', 'projects', 'skills', 'journey', 'proof', 'contact']

export function DockNav() {
  const scrollToSection = useScrollToSection()
  const [activeId, setActiveId] = useState('hero')
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false })
  const navRef = useRef(null)
  const linkRefs = useRef({})

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const updateIndicator = () => {
      const el = linkRefs.current[activeId]
      if (!el || !navRef.current) return
      setIndicator({
        left: el.offsetLeft,
        width: el.offsetWidth,
        visible: true
      })
    }
    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    const raf = requestAnimationFrame(updateIndicator)
    return () => {
      window.removeEventListener('resize', updateIndicator)
      cancelAnimationFrame(raf)
    }
  }, [activeId])

  const internalLinks = [
    { label: 'Home', href: '#hero', ariaLabel: 'Go to home section' },
    ...navItems.flatMap((group) => group.links.filter((link) => link.href.startsWith('#')))
  ]
  const externalLinks = navItems.flatMap((group) => group.links.filter((link) => !link.href.startsWith('#')))

  const handleNavClick = (event, href) => {
    if (href.startsWith('#')) {
      event.preventDefault()
      scrollToSection(href)
    }
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-16 sm:pt-24 lg:pt-14">
      <nav
        ref={navRef}
        aria-label="Site navigation"
        className="dock-nav pointer-events-auto relative flex w-full max-w-fit items-center gap-1 overflow-x-auto rounded-full border border-[rgba(255,255,255,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] px-2 py-2 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_0_24px_rgba(177,156,255,0.06)] backdrop-blur-2xl backdrop-saturate-150"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-2 bottom-2 rounded-full bg-[rgba(177,156,255,0.16)] ring-1 ring-inset ring-[rgba(177,156,255,0.14)] shadow-[0_0_16px_-4px_rgba(177,156,255,0.5)] transition-[left,width] duration-300 ease-out"
          style={{
            left: indicator.left,
            width: indicator.width,
            opacity: indicator.visible ? 1 : 0
          }}
        />

        {internalLinks.map((link) => {
          const isActive = activeId === link.href.slice(1)
          return (
            <a
              key={link.href}
              ref={(node) => {
                linkRefs.current[link.href.slice(1)] = node
              }}
              href={link.href}
              aria-label={link.ariaLabel}
              aria-current={isActive ? 'true' : undefined}
              onClick={(event) => handleNavClick(event, link.href)}
              className={`relative z-10 whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? 'text-[var(--primary)]'
                  : 'text-[var(--muted)] hover:text-[var(--text)]'
              }`}
            >
              {link.label}
            </a>
          )
        })}

        <span className="mx-1 h-5 w-px shrink-0 bg-[rgba(255,255,255,0.12)]" aria-hidden="true" />

        {externalLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-label={link.ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-[var(--muted)] transition-colors duration-200 hover:text-[var(--text)]"
          >
            {link.label}
          </a>
        ))}

        <span className="relative z-10 pl-1">
          <Button
            className="rounded-full px-4 py-2 text-sm"
            onClick={() => scrollToSection('#contact')}
          >
            Contact me
          </Button>
        </span>
      </nav>
    </header>
  )
}