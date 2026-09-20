import FlipCard from '@/components/FlipCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

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
  return (
    <section id="journey" className="scroll-mt-24 bg-[var(--bg)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="My journey"
          title="Where I'm headed"
          description="An honest view of how I'm developing as a developer."
        />

        <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:items-start">
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

          <div className="flex justify-center lg:justify-end">
            <FlipCard
              front={
                <img
                  src="/images/dr_doom.jpg"
                  alt="Dark figure in a metal mask"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              }
              back={
                <div className="flip-card__back">
                  <p className="flip-card__back-sub">DR. DOOM</p>
                  <p className="flip-card__back-quote">
                    "Every villain was once a hero. Code until it's worthy."
                  </p>
                </div>
              }
              axis="y"
              flipOnClick
              draggable
              dragDistance={0}
              tilt
              tiltMax={12}
              glare
              glareOpacity={0.22}
              hoverScale={1.03}
              perspective={1100}
              stiffness={170}
              damping={20}
              width={300}
              height={400}
              radius={22}
              background="#16121f"
              color="#f4f1ff"
              shadow
              shadowColor="#000000"
              shadowOpacity={0.45}
              ariaLabel="Journey flip card"
            />
          </div>
        </div>
      </div>
    </section>
  )
}