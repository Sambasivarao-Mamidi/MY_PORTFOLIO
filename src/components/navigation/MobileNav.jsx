import { useEffect, useState } from 'react'
import { navItems } from '@/data/navigation'
import { socialLinks } from '@/data/profile'
import { useScrollToSection } from '@/hooks/useScrollToSection'

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const scrollToSection = useScrollToSection()

  const internalLinks = navItems.flatMap((group) =>
    group.links.filter((link) => link.href.startsWith('#'))
  )
  const externalLinks = navItems.flatMap((group) =>
    group.links.filter((link) => !link.href.startsWith('#'))
  )

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  const handleNavigate = (href) => {
    if (!href.startsWith('#')) return
    setOpen(false)
    window.setTimeout(() => scrollToSection(href), 120)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="fixed top-4 right-4 z-[70] flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-2xl md:hidden"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls="mobile-nav-panel"
      >
        <span className="relative flex h-4 w-5 flex-col justify-between" aria-hidden="true">
          <span
            className={`h-px w-full bg-[var(--text)] transition-transform duration-200 ${
              open ? 'translate-y-[7.5px] rotate-45' : ''
            }`}
          />
          <span className={`h-px w-full bg-[var(--text)] transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-px w-full bg-[var(--text)] transition-transform duration-200 ${
              open ? '-translate-y-[7.5px] -rotate-45' : ''
            }`}
          />
        </span>
      </button>

      <div
        id="mobile-nav-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-[rgba(7,6,10,0.7)] backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Close navigation overlay"
        />
        <div
          className={`absolute inset-y-0 right-0 flex w-[min(84vw,360px)] flex-col border-l border-[rgba(255,255,255,0.12)] bg-[linear-gradient(180deg,rgba(15,13,20,0.98),rgba(7,6,10,0.98))] shadow-[0_0_60px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 pt-6">
            <span className="text-xs font-semibold tracking-[0.2em] text-[var(--muted)] uppercase">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] text-lg text-[var(--muted)] transition-colors hover:text-[var(--text)]"
              aria-label="Close navigation"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 pt-4" aria-label="Mobile navigation">
            {internalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault()
                  handleNavigate(link.href)
                }}
                tabIndex={open ? 0 : -1}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-medium text-[var(--text)] transition-colors hover:bg-[rgba(177,156,255,0.1)]"
              >
                {link.label}
                <span className="text-[var(--muted)]" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </nav>

          <div className="border-t border-[rgba(255,255,255,0.08)] px-6 py-6">
            <p className="text-xs font-medium tracking-[0.2em] text-[var(--muted)] uppercase">
              Elsewhere
            </p>
            <div className="mt-3 flex gap-3">
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={open ? 0 : -1}
                  className="flex-1 rounded-xl border border-[var(--border)] px-3 py-3 text-center text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--border-strong)] hover:bg-[rgba(177,156,255,0.08)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={socialLinks.email}
              tabIndex={open ? 0 : -1}
              className="mt-3 block rounded-xl bg-[var(--primary)] px-4 py-3 text-center text-sm font-semibold text-[#07060a] transition-opacity hover:opacity-90"
            >
              Email me
            </a>
          </div>
        </div>
      </div>
    </>
  )
}