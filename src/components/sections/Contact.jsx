import { Button } from '@/components/ui/Button'
import PixelSnow from '@/components/PixelSnow'
import { socialLinks } from '@/data/profile'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import './Contact.css'

export function Contact() {
  const isPhone = useMediaQuery('(max-width: 767px)')
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-[#000] px-6 py-16 md:py-24"
    >
      <div className="contact-galaxy" aria-hidden="true">
        <PixelSnow
          color="#B19CFF"
          variant="snowflake"
          density={isPhone ? 0.15 : 0.25}
          speed={0.6}
          wind={0.15}
          flakeSize={0.7}
          pixelSize={3}
          glow={0.5}
          twinkle={0.25}
          mouseInteraction={!isPhone}
          intro={!isPhone}
          opacity={0.6}
          className="contact-pixel-snow"
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
