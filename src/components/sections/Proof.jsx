import { SectionHeading } from '@/components/ui/SectionHeading'
import { socialLinks } from '@/data/profile'

const proofItems = [
  {
    title: 'GitHub',
    description: 'Source code for every project, with READMEs and setup instructions.',
    href: socialLinks.github,
    icon: '⌘'
  },
  {
    title: 'Resume',
    description: 'Download a current snapshot of my experience and skills.',
    href: socialLinks.resume,
    icon: '▤'
  },
  {
    title: 'Live demos',
    description: 'Working applications you can try directly in the browser.',
    href: socialLinks.github,
    icon: '→'
  }
]

export function Proof() {
  return (
    <section id="proof" className="scroll-mt-24 bg-[var(--bg)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Proof of work"
          title="Evidence, not claims"
          description="Everything you need to inspect my work and assess my skills directly."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {proofItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-colors duration-200 hover:border-[var(--border-strong)]"
            >
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(167,139,250,0.12)] text-lg text-[var(--primary)]"
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--text)] group-hover:text-[var(--primary)]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}