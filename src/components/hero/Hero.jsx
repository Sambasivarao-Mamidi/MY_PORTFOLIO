import LightRays from '@/components/LightRays'
import WarpText from '@/components/WarpText'
import ProfileCard from '@/components/ProfileCard'
import { Button } from '@/components/ui/Button'
import { profile } from '@/data/profile'
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
        <div className="hero-rays pointer-events-none absolute inset-0 -z-10 hidden opacity-40 md:block" aria-hidden="true">
          <LightRays
            raysOrigin="top-center"
            raysColor="#B19CFF"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
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
        <div className="flex w-full max-w-2xl flex-col items-start text-left">
          {prefersReducedMotion ? (
            <h1 className="text-[clamp(2.75rem,7.5vw,6.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-[var(--text)]">
              SambaSivaRao
            </h1>
          ) : (
            <WarpText
              text="SambaSivaRao"
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
              align="left"
              snapY="top"
              className="w-full"
              style={{ height: 'clamp(92px, 11vw, 134px)', minHeight: 'clamp(92px, 11vw, 134px)' }}
            />
          )}
          <h2 className="mt-2 text-xl font-bold uppercase tracking-[0.14em] text-[var(--primary)] sm:text-2xl">
            Frontend Developer
          </h2>
          <h3 className="mt-2 text-lg font-semibold text-[var(--muted)] sm:text-xl lg:text-2xl">
            Shape. Build. Shine.
          </h3>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            Great design is more than just aesthetics—it&apos;s about how it works. As a UI/UX
            Designer and Frontend Developer, I focus on the intersection of human psychology and
            technical performance. I use research-driven design to solve user pain points and modern
            codebases to bring those solutions to life. My goal is simple: to make the web a more
            accessible, enjoyable place for everyone.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#projects">See the work</Button>
          </div>
        </div>

        <div className="w-full max-w-[420px] shrink-0 lg:w-[46%] lg:max-w-[380px] xl:max-w-[420px]">
          <ProfileCard
            name={profile.name}
            title={profile.title}
            handle={profile.handle}
            status={profile.status}
            contactText="Contact me"
            avatarUrl="/images/dr_doom.jpg"
            miniAvatarUrl="/images/dr_doom.jpg"
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