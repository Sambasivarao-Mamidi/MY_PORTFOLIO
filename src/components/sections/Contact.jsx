import { Button } from '@/components/ui/Button'
import { socialLinks } from '@/data/profile'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[var(--surface)] px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          Contact
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] sm:text-4xl">
          Let's build something useful.
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-[var(--muted)]">
          I'm open to frontend opportunities, full-stack projects, collaborations, and
          conversations about software development.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href={socialLinks.email}>Email me</Button>
          <Button href={socialLinks.github} variant="secondary">
            GitHub
          </Button>
          <Button href={socialLinks.linkedin} variant="secondary">
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  )
}