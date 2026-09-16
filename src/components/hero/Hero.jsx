import { Button } from '@/components/ui/Button'
import { socialLinks } from '@/data/profile'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[var(--bg)] px-6 pt-40 pb-24 sm:pt-48 lg:pt-56"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Frontend Developer
          </p>

          <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight text-[var(--text)] sm:text-6xl lg:text-7xl">
            Build.
            <br />
            Learn.
            <br />
            Create.
          </h1>

          <p className="mx-auto mt-8 max-w-xl leading-relaxed text-[var(--muted)] lg:mx-0">
            I build responsive and interactive web applications with React, JavaScript, and modern
            development tools.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button href="#projects">View projects</Button>
            <Button href={socialLinks.email} variant="secondary">
              Contact me
            </Button>
          </div>

          <p className="mt-10 inline-flex items-center gap-2 text-sm text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" aria-hidden="true" />
            Currently building with React, JavaScript, Node.js, and AI-powered tools
          </p>
        </div>
      </div>
    </section>
  )
}