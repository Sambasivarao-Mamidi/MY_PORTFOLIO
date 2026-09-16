import { SectionHeading } from '@/components/ui/SectionHeading'

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
  return (
    <section id="about" className="scroll-mt-24 bg-[var(--bg)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About me"
          title="Turning ideas into working products"
          description="I'm a developer focused on building useful, responsive, and well-structured web applications. I enjoy turning ideas into working products—from the first interface to the final API."
        />

        <p className="mb-12 max-w-2xl leading-relaxed text-[var(--muted)]">
          I'm currently improving my skills in React, full-stack JavaScript, backend development, and
          AI-assisted software development.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {focusCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-colors duration-200 hover:border-[var(--border-strong)]"
            >
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(177,156,255,0.12)] text-lg text-[var(--primary)]"
                aria-hidden="true"
              >
                {card.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--text)]">{card.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}