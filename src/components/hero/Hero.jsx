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
            rayColor1="#B19CFF"
            rayColor2="#7C5CFF"
            intensity={0.8}
            spread={1.4}
            origin="top-right"
            saturation={0.9}
            blend={0.45}
            falloff={1.9}
            opacity={0.3}
          />
        </div>
      )}

      {!prefersReducedMotion && (
        <div className="hero-light-beams hidden md:block" aria-hidden="true">
          <div className="hero-light-beam" />
          <div className="hero-light-beam hero-light-beam--2" />
          <div className="hero-light-beam hero-light-beam--3" />
        </div>
      )}

      <div
        className="hero-rays-static pointer-events-none absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(177,156,255,0.08) 0%, rgba(124,92,255,0.05) 45%, transparent 100%)'
        }}
        aria-hidden="true"
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="flex w-full max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[rgba(177,156,255,0.06)] px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-[var(--primary)] shadow-[0_0_10px_var(--primary)]" aria-hidden="true" />
            {profile.status}
          </p>

          <WarpText
            text="Shape.\nBuild.\nShine."
            color="#F4F1FF"
            warpStrength={0.04}
            warpScale={1.45}
            speed={0.18}
            pointerInfluence={0.25}
            pointerStrength={0.18}
            refraction={0.006}
            ripple={false}
            fontSize="clamp(3rem, 8vw, 7rem)"
            fontWeight={800}
            letterSpacing="-0.04em"
            lineHeight={0.9}
            className="w-full mt-8"
            style={{ height: 'clamp(190px, 30vw, 330px)' }}
          />

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[var(--muted)] lg:mx-0">
            Frontend developer turning ideas into luminous, fast, precise interfaces.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            {prefersReducedMotion ? (
              <Button href="#projects">See the work</Button>
            ) : (
              <div style={{ width: 'fit-content' }}>
                <ClickSpark sparkColor="#B19CFF" sparkSize={7} sparkRadius={16} sparkCount={6} duration={300}>
                  <Button href="#projects">See the work</Button>
                </ClickSpark>
              </div>
            )}
            <Button href={socialLinks.email} variant="secondary">
              Contact me
            </Button>
          </div>
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
            behindGlowColor="rgba(177, 156, 255, 0.5)"
            innerGradient="linear-gradient(145deg, #16121F 0%, #07060A 100%)"
            onContactClick={handleProfileContact}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  )
}