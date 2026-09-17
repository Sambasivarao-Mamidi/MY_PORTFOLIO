import { Suspense, lazy } from 'react'
import ScrollExpand from '@/components/ScrollExpand'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

const LightPillar = lazy(() => import('@/components/LightPillar'))

export function About() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section id="about" className="scroll-mt-24 bg-[var(--bg)]">
      <ScrollExpand
        mediaType="none"
        title="Turning ideas into working products."
        scrollHint="Scroll to open"
        startWidth={42}
        startHeight={58}
        startRadius={24}
        endRadius={0}
        mediaZoom={1.2}
        scrollDistance={1.2}
        holdDistance={0.4}
        smoothing={0.1}
        overlayScrim={0.45}
        useWindowScroll
        enabled
        mediaContent={
          <>
            <div className="se-media-grid" aria-hidden="true" />
            {!prefersReducedMotion && (
              <Suspense fallback={null}>
                <LightPillar
                  topColor="#5227FF"
                  bottomColor="#FF9FFC"
                  intensity={1}
                  rotationSpeed={0.3}
                  glowAmount={0.002}
                  pillarWidth={3}
                  pillarHeight={0.4}
                  noiseIntensity={0.5}
                  pillarRotation={25}
                  interactive={false}
                  mixBlendMode="screen"
                  quality="high"
                />
              </Suspense>
            )}
            <div className="se-media-beams" aria-hidden="true">
              <div className="hero-light-beam" />
              <div className="hero-light-beam hero-light-beam--2" />
              <div className="hero-light-beam hero-light-beam--3" />
            </div>
          </>
        }
      >
        <p className="inline-flex items-center rounded-full border border-[rgba(177,156,255,0.35)] bg-[rgba(177,156,255,0.1)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] shadow-[0_0_20px_-6px_rgba(177,156,255,0.6)]">
          About me
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[var(--text)]/85 sm:text-base">
          I&apos;m a developer focused on building useful, responsive, and well-structured web
          applications. I enjoy turning ideas into working products—from the first interface to the
          final API.
        </p>
      </ScrollExpand>
    </section>
  )
}