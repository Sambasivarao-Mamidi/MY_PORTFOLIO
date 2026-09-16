import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import ScrollExpand from '@/components/ScrollExpand'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

const LightPillar = lazy(() => import('@/components/LightPillar'))

const focusCards = [
  {
    title: 'Build',
    description: 'Creating complete web applications from first interface to final API.',
    icon: '⚙'
  },
  {
    title: 'Learn',
    description: 'Exploring modern tools, framework patterns, and architecture decisions.',
    icon: '◆'
  },
  {
    title: 'Improve',
    description: 'Refining performance, design, usability, and code quality.',
    icon: '▲'
  }
]

export function About() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const contentRef = useRef(null)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContent(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const revealed = showContent || prefersReducedMotion

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

      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div
          ref={contentRef}
          className={`transition-all duration-700 ease-out ${
            revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-[var(--muted)]">
            I&apos;m currently improving my skills in React, full-stack JavaScript, backend
            development, and AI-assisted software development.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            {focusCards.map((card, index) => (
              <div
                key={card.title}
                style={{ transitionDelay: revealed ? `${index * 120}ms` : '0ms' }}
                className={`transition-all duration-700 ease-out ${
                  revealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-colors duration-200 hover:border-[var(--border-strong)]">
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(177,156,255,0.12)] text-lg text-[var(--primary)]"
                    aria-hidden="true"
                  >
                    {card.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[var(--text)]">{card.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}