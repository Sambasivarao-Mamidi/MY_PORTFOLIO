import LightRays from '@/components/LightRays'
import WarpText from '@/components/WarpText'
import StrokeText from '@/components/strokeText/StrokeText'
import ProfileCard from '@/components/ProfileCard'
import { Button } from '@/components/ui/Button'
import { profile } from '@/data/profile'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { useScrollToSection } from '@/hooks/useScrollToSection'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const scrollToSection = useScrollToSection()
  const isPhone = useMediaQuery('(max-width: 767px)')

  const canWarp = false;

  const handleProfileContact = () => scrollToSection('#contact')

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[var(--bg)] px-6 pt-36 pb-12 sm:pt-48 sm:pb-16 lg:pt-40 lg:pb-16 md:pt-44"
    >
      {!prefersReducedMotion && (
        <div className="hero-rays pointer-events-none absolute inset-0 -z-10 opacity-80 md:opacity-40" aria-hidden="true">
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
        <div className="hero-light-beams" aria-hidden="true">
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

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-10 sm:gap-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-center lg:gap-8 lg:[grid-template-areas:'name_card'_'texts_card']">
        <div className="flex w-full flex-col items-center text-center md:items-start md:text-left [grid-area:name]">
          <div
            className="relative w-full"
            style={{ height: 'clamp(92px, 11vw, 134px)', minHeight: 'clamp(92px, 11vw, 134px)' }}
          >
            <h1
              className={
                isPhone || canWarp
                  ? 'sr-only'
                  : 'text-[clamp(2.25rem,7.5vw,6.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-[var(--text)]'
              }
              style={{
                marginLeft: isPhone ? 0 : '-1.5rem',
                marginTop: isPhone ? 0 : '1rem',
                transform: isPhone ? 'none' : 'translate(0, 4px)'
              }}
            >
              SambaSivaRao
            </h1>
            {isPhone ? (
              <StrokeText
                text="SambaSivaRao"
                strokeColor="#A78BFA"
                fillColor="#F4F1FF"
                strokeWidth={1.3}
                drawDuration={1.6}
                fillDelay={0.2}
                stagger={0.05}
                ease="power2.out"
                trigger="mount"
                fillMode="wipe"
                fontSize={70}
                fontWeight={800}
                letterSpacing={-4}
                reverse={false}
              />
            ) : canWarp ? (
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
                fontSize="clamp(2.25rem, 7.5vw, 6.5rem)"
                fontWeight={800}
                letterSpacing="-0.04em"
                lineHeight={1.02}
                align={isPhone ? 'center' : 'left'}
                snapY="top"
                className="w-full"
                style={{ height: '100%', minHeight: '100%' }}
              />
            ) : null}
          </div>
        </div>

        <div className="flex w-full flex-col items-center text-center md:items-start md:text-left [grid-area:texts]">
          <h2 className="mt-2 text-base font-bold uppercase tracking-[0.14em] text-[var(--primary)] sm:text-xl">
            Frontend Developer
          </h2>
          <h3 className="mt-2 text-base font-semibold text-[var(--muted)] sm:text-lg lg:text-2xl">
            Building digital experiences that matter.
          </h3>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            I craft responsive, pixel-perfect interfaces that blend thoughtful design with clean
            code. From concept to production, I focus on solving real user problems and delivering
            performant, accessible web experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Button
              href="#projects"
              className="shadow-[0_0_28px_-6px_rgba(91,33,182,0.7)] hover:shadow-[0_0_34px_-4px_rgba(91,33,182,0.9)]"
            >
              See the work
            </Button>
          </div>
        </div>

        <div className="flex w-full max-w-[420px] flex-col items-center justify-self-center shrink-0 lg:w-auto lg:max-w-[380px] lg:justify-self-end xl:max-w-[420px] [grid-area:card]">
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
