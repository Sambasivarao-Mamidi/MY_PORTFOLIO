import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import ScrollExpand from '@/components/ScrollExpand'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const LightPillar = lazy(() => import('@/components/LightPillar'))

const services = [
  {
    name: 'Code',
    badge: 'Web Development',
    description: 'Building responsive, pixel-perfect websites with clean code.',
    icon: '⌬'
  },
  {
    name: 'Design',
    badge: 'UI/UX Design',
    description: 'Designing intuitive interfaces that prioritize user experience.',
    icon: '✦'
  }
]

const stats = [
  { value: 10, suffix: '+', label: 'Projects' },
  { value: 500, suffix: '+', label: 'Hours Code' },
  { value: 8, suffix: '+', label: 'Skills' },
  { value: 20000, suffix: '+', label: 'Lines Code' },
  { value: 100, suffix: '%', label: 'Dedication' }
]

function Stat({ value, suffix, label, started, instant }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (instant) {
      setDisplay(value)
      return undefined
    }
    if (!started) return undefined
    let raf = 0
    const duration = 1400
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, instant, value])

  const pretty = (n) => (value >= 1000 && n >= 1000 ? `${Math.round(n / 1000)}k` : `${n}`)

  return (
    <div className="about-stat">
      <span className="about-stat-value">
        {pretty(display)}
        {suffix}
      </span>
      <span className="about-stat-label">{label}</span>
    </div>
  )
}

export function About() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const isPhone = useMediaQuery('(max-width: 767px)')
  const sectionRef = useRef(null)
  const statsRef = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="scroll-mt-24 bg-[var(--bg)]">
      <ScrollExpand
        mediaType="none"
        title="Turning ideas into working products."
        scrollHint="Scroll to open"
        startWidth={isPhone ? 70 : 42}
        startHeight={isPhone ? 8 : 58}
        startRadius={isPhone ? 10 : 24}
        endRadius={0}
        mediaZoom={1.2}
        scrollDistance={isPhone ? 0.7 : 1.2}
        holdDistance={isPhone ? 0.15 : 0.4}
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
        <div className="about-grid">
          <div className="about-col about-col--text">
            <p className="about-kicker">ABOUT ME</p>
            <h2 className="about-title">
              I&apos;m Sambasivarao, <span className="about-title-accent">Frontend Developer</span>
            </h2>
            <p className="about-bio">
              Great design is more than just aesthetics—it&apos;s about how it works. I blend UI/UX
              psychology with technical performance to craft research-driven, pixel-perfect
              experiences that turn user pain points into delightful solutions—making the web a more
              accessible, enjoyable place for everyone.
            </p>

            <div className="about-block">
              <h3 className="about-block-label">What I Do?</h3>
              <div className="about-services">
                {services.map((service) => (
                  <div key={service.name} className="about-service-card">
                    <div className="about-service-head">
                      <span className="about-service-icon" aria-hidden="true">
                        {service.icon}
                      </span>
                      <span>
                        <strong className="about-service-name">{service.name}</strong>
                        <span className="about-service-badge">{service.badge}</span>
                      </span>
                    </div>
                    <p className="about-service-desc">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-block">
              <h3 className="about-block-label">Fun Facts</h3>
              <div ref={statsRef} className="about-stats">
                {stats.map((stat) => (
                  <Stat
                    key={stat.label}
                    {...stat}
                    started={started}
                    instant={prefersReducedMotion}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollExpand>
    </section>
  )
}