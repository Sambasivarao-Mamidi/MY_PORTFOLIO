import { useEffect, useState } from 'react'
import { navItems } from '@/data/navigation'
import { Button } from '@/components/ui/Button'
import { useScrollToSection } from '@/hooks/useScrollToSection'

const SECTION_IDS = ['hero', 'about', 'projects', 'skills', 'journey', 'proof', 'contact']

export function DockNav() {
  const scrollToSection = useScrollToSection()
  const [activeId, setActiveId] = useState('hero')

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
        aria-label="Site navigation"
        className="dock-nav pointer-events-auto flex w-full max-w-fit items-center gap-1 overflow-x-auto rounded-full border border-[var(--border)] bg-[rgba(15,13,20,0.72)] px-2 py-2 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.8),0_0_0_1px_rgba(177,156,255,0.04)] backdrop-blur-xl"
      >
        {internalLinks.map((link) => {
          const isActive = activeId === link.href.slice(1)
          return (
            <a
              key={link.href}
              href={link.href}
              aria-label={link.ariaLabel}
              aria-current={isActive ? 'true' : undefined}
              onClick={(event) => handleNavClick(event, link.href)}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? 'bg-[rgba(177,156,255,0.16)] text-[var(--primary)]'
                  : 'text-[var(--muted)] hover:bg-[rgba(177,156,255,0.1)] hover:text-[var(--text)]'
              }`}
            >
              {link.label}
            </a>
          )
        })}

        <span className="mx-1 h-5 w-px shrink-0 bg-[var(--border)]" aria-hidden="true" />

        {externalLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-label={link.ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium text-[var(--muted)] transition-colors duration-200 hover:bg-[rgba(177,156,255,0.1)] hover:text-[var(--text)]"
          >
            {link.label}
          </a>
        ))}

        <span className="pl-1">
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