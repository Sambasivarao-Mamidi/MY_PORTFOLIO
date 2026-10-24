import { Suspense, useEffect, useRef, useState } from 'react'
import ScrollExpand from '@/components/ScrollExpand'
import TiltedCard from '@/components/TiltedCard'
import PixelSnow from '@/components/PixelSnow'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import './About.css'
import { useMediaQuery } from '@/hooks/useMediaQuery'


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

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined
    const effectSelector = '.hero-light-beam, .se-media-grid, .bg-grid, .fx-card'
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(({ target, isIntersecting }) => {
          target.classList.toggle('paused', !isIntersecting)
        })
      },
      { rootMargin: '100px', threshold: 0 }
    )
    section.querySelectorAll(effectSelector).forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const aboutContent = (
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

      <div className="about-col about-col--visual">
        <TiltedCard
          imageSrc="/images/dr_doom.jpg"
          altText="SambaSivaRao Mamidi — Frontend Developer"
          captionText="SambaSivaRao — Frontend Developer"
          containerHeight="100%"
          containerWidth="100%"
          imageHeight="clamp(340px, 54vh, 500px)"
          imageWidth="clamp(220px, 34vh, 330px)"
          rotateAmplitude={10}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip
        />
      </div>
    </div>
  )

  if (isPhone) {
    return (
      <section
        id="about"
        ref={sectionRef}
        className="about-section about-mobile scroll-mt-24 bg-[var(--bg)] px-6 py-16"
      >
        <div className="about-snow" aria-hidden="true">
          {!prefersReducedMotion && (
            <Suspense fallback={null}>
              <PixelSnow
                color="#a855f7"
                variant="snowflake"
                density={0.12}
                speed={0.7}
                wind={0.15}
                flakeSize={1}
                pixelSize={4}
                glow={0.15}
                mouseInteraction={false}
                sway={0.3}
                twinkle={0.15}
                accumulate={false}
                depth={0.4}
                brightness={0.7}
                fade={0.15}
                opacity={0.45}
                intro={false}
                lightMode={false}
                dpr={1}
              />
            </Suspense>
          )}
          <div className="about-mobile__snow-gradient" aria-hidden="true" />
        </div>
        <div className="about-mobile__scrim" aria-hidden="true" />
        <div className="about-content about-mobile__content">{aboutContent}</div>
      </section>
    )
  }

  return (
    <section id="about" ref={sectionRef} className="about-section scroll-mt-24 bg-[var(--bg)]">
      <div className="about-snow" aria-hidden="true">
        {!prefersReducedMotion && (
          <Suspense fallback={null}>
            <PixelSnow
              color="#a855f7"
              variant="snowflake"
              density={0.12}
              speed={0.7}
              wind={0.15}
              flakeSize={1}
              pixelSize={4}
              glow={0.15}
              mouseInteraction={true}
              sway={0.3}
              twinkle={0.15}
              accumulate={false}
              depth={0.4}
              brightness={0.7}
              fade={0.15}
              opacity={0.45}
              intro={false}
              lightMode={false}
              dpr={1}
            />
          </Suspense>
        )}
      </div>
      <ScrollExpand
        mediaType="none"
        title="Turning ideas into working products."
        scrollHint="Scroll to open"
        startWidth={42}
        startHeight={58}
        startRadius={24}
        startBiasY={0.5}
        endRadius={0}
        stageHeight={0}
        centerStage={false}
        mediaZoom={1.2}
        scrollDistance={1.2}
        holdDistance={0.4}
        smoothing={0.1}
        overlayScrim={0.45}
        gateOverlay={false}
        useWindowScroll
        enabled
        mediaContent={
          <div className="se-media-beams" aria-hidden="true">
            <div className="hero-light-beam" />
            <div className="hero-light-beam hero-light-beam--2" />
            <div className="hero-light-beam hero-light-beam--3" />
          </div>
        }
      >
        <div className="about-content">{aboutContent}</div>
      </ScrollExpand>
    </section>
  )
}
