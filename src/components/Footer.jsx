import { socialLinks } from '@/data/profile'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} SambaSivaRao Mamidi
        </p>
        <div className="flex items-center gap-6">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
          >
            GitHub
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
          >
            LinkedIn
          </a>
          <a
            href={socialLinks.email}
            className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}