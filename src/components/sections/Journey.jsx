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
    </section>
  )
}