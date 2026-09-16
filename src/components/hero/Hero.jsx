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
      className="relative isolate overflow-hidden bg-[var(--bg)] px-6 pt-44 pb-8 sm:pt-60 lg:pt-40 lg:pb-16"
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
          <WarpText
            text="Shape. Build. Shine."
            color="#F4F1FF"
            warpStrength={0.04}
            warpScale={1.45}
            speed={0.18}
            pointerInfluence={0.25}
            pointerStrength={0.18}
            refraction={0.006}
            ripple={false}
            fontSize="clamp(2.75rem, 7.5vw, 6.5rem)"
            fontWeight={800}
            letterSpacing="-0.04em"
            lineHeight={1.02}
            className="w-full mt-10"
            style={{ height: 'clamp(110px, 15vw, 180px)' }}
          />

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[var(--muted)] lg:mx-0">
            Great design is more than just aesthetics—it&apos;s about how it works. As a UI/UX
            Designer and Frontend Developer, I focus on the intersection of human psychology and
            technical performance. I use research-driven design to solve user pain points and modern
            codebases to bring those solutions to life. My goal is simple: to make the web a more
            accessible, enjoyable place for everyone.
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
            showUserInfo={false}
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