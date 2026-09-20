import { Button } from '@/components/ui/Button'
import Galaxy from '@/components/Galaxy'
import { socialLinks } from '@/data/profile'
import './Contact.css'

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-[#000] px-6 py-16 md:py-24"
    >
      <div className="contact-galaxy" aria-hidden="true">
        <Galaxy
          className="contact-galaxy"
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0.9}
          hueShift={200}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>

      <div className="contact-content mx-auto max-w-3xl text-center">
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
          <Button href={socialLinks.email} variant="secondary">
            Email me
          </Button>
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