import SideRays from '@/components/SideRays'
import WarpText from '@/components/WarpText'
import ProfileCard from '@/components/ProfileCard'
import ClickSpark from '@/components/ClickSpark'
import { Button } from '@/components/ui/Button'
import { profile, socialLinks } from '@/data/profile'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { useScrollToSection } from '@/hooks/useScrollToSection'

export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const scrollToSection = useScrollToSection()

  const handleProfileContact = () => scrollToSection('#contact')

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[var(--bg)] px-6 pt-40 pb-8 sm:pt-48 lg:pt-36 lg:pb-16"
    >
      {!prefersReducedMotion && (
        <div className="hero-rays pointer-events-none absolute inset-0 -z-10 hidden md:block" aria-hidden="true">
          <SideRays
            speed={0.55}
            rayColor1="#A78BFA"
            rayColor2="#F97316"
            intensity={0.75}
            spread={1.4}
            origin="top-right"
            saturation={1}
            blend={0.5}
            falloff={1.9}
            opacity={0.35}
          />
        </div>
      )}

      <div
        className="hero-rays-static pointer-events-none absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(167,139,250,0.10) 0%, rgba(249,115,22,0.06) 100%)'
        }}
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="flex w-full max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Frontend Developer
          </p>

          <WarpText
            text="Build.\nLearn.\nCreate."
            color="#FAF5FF"
            warpStrength={0.04}
            warpScale={1.45}
            speed={0.18}
            pointerInfluence={0.25}
            pointerStrength={0.18}
            refraction={0.006}
            ripple={false}
            fontSize="clamp(3rem, 8vw, 7rem)"
            fontWeight={800}
            letterSpacing="-0.05em"
            lineHeight={0.9}
            className="w-full"
            style={{ height: 'clamp(190px, 30vw, 330px)' }}
          />

          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-[var(--muted)] lg:mx-0">
            I build responsive and interactive web applications with React, JavaScript, and modern
            development tools.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            {prefersReducedMotion ? (
              <Button href="#projects">View projects</Button>
            ) : (
              <div style={{ width: 'fit-content' }}>
                <ClickSpark sparkColor="#F97316" sparkSize={7} sparkRadius={16} sparkCount={6} duration={300}>
                  <Button href="#projects">View projects</Button>
                </ClickSpark>
              </div>
            )}
            <Button href={socialLinks.email} variant="secondary">
              Contact me
            </Button>
          </div>

          <p className="mt-10 inline-flex items-center gap-2 text-sm text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" aria-hidden="true" />
            Currently building with React, JavaScript, Node.js, and AI-powered tools
          </p>
        </div>

        <div className="w-full max-w-[420px] shrink-0 lg:w-[46%] lg:max-w-[380px] xl:max-w-[420px]">
          <ProfileCard
            name={profile.name}
            title={profile.title}
            handle={profile.handle}
            status={profile.status}
            contactText="Contact me"
            avatarUrl={profile.avatarUrl}
            miniAvatarUrl={profile.miniAvatarUrl}
            showUserInfo
            enableTilt={!prefersReducedMotion}
            enableMobileTilt={false}
            behindGlowEnabled
            behindGlowColor="rgba(167, 139, 250, 0.55)"
            innerGradient="linear-gradient(145deg, #1A1520 0%, #0C0A0D 100%)"
            onContactClick={handleProfileContact}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  )
}