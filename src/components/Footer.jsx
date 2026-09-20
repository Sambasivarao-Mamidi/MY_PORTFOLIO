import { profile } from '@/data/profile'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import './Footer.css'

const initials = profile.fullName
  .split(' ')
  .map((part) => part.charAt(0))
  .join('')
  .slice(0, 2)

export function Footer() {
  const scrollTo = useScrollToSection()

  return (
    <footer className="footer-signature border-t border-[var(--border)] bg-[var(--bg)] px-6 py-12">
      <span className="footer-signature__sweep" aria-hidden="true" />
      <span className="footer-signature__monogram" aria-hidden="true">
        {initials}
      </span>

      <div className="footer-signature__content mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('#hero')
          }}
          className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}