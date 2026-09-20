import { useState } from 'react'
import { motion } from 'motion/react'
import LaserFlow from '@/components/LaserFlow'
import { SectionHeading } from '@/components/ui/SectionHeading'
import './Journey.css'

const journey = [
  {
    period: 'Now',
    title: 'Current focus',
    description: 'Building React and full-stack applications.'
  },
  {
    period: 'Recent',
    title: 'Recent work',
    description: 'Creating dashboards, AI tools, and API-driven projects.'
  },
  {
    period: 'Next',
    title: 'Next direction',
    description: 'Developing production-ready applications with strong architecture and polished user experiences.'
  }
]

export function Journey() {
  const [laserDone, setLaserDone] = useState(false)

  return (
    <section id="journey" className="relative scroll-mt-24 overflow-hidden bg-[var(--bg)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="My journey"
          title="Where I'm headed"
          description="An honest view of how I'm developing as a developer."
        />

        <ol className="relative border-l border-[var(--border)] pl-8">
          {journey.map((item) => (
            <li key={item.period} className="relative pb-12 last:pb-0">
              <span
                className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-[var(--primary)] ring-4 ring-[rgba(177,156,255,0.15)]"
                aria-hidden="true"
              />
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                {item.period}
              </p>
              <h3 className="mb-1 text-xl font-semibold text-[var(--text)]">{item.title}</h3>
              <p className="max-w-xl leading-relaxed text-[var(--muted)]">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>

      {!laserDone && (
        <motion.div
          className="journey-laser hidden lg:block"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1, 1, 0] }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 5.5, times: [0, 0.18, 0.55, 1], ease: 'easeInOut' }}
          onAnimationComplete={() => setLaserDone(true)}
        >
          <LaserFlow
            color="#B19CFF"
            horizontalBeamOffset={0.45}
            horizontalSizing={0.5}
            verticalSizing={2}
            wispDensity={1}
            wispSpeed={15}
            wispIntensity={5}
            flowSpeed={0.35}
            flowStrength={0.25}
            fogIntensity={0.45}
            fogScale={0.3}
            fogFallSpeed={0.6}
            decay={1.1}
            falloffStart={1.2}
          />
        </motion.div>
      )}
    </section>
  )
}