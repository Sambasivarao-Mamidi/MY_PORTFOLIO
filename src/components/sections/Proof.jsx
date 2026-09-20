import { SectionHeading } from '@/components/ui/SectionHeading'
import SpecularCard from '@/components/SpecularCard'
import { socialLinks } from '@/data/profile'
import './Proof.css'

const proofItems = [
  {
    title: 'GitHub',
    description: 'Source code for every project, with READMEs and setup instructions.',
    href: socialLinks.github
  },
  {
    title: 'Resume',
    description: 'Download a current snapshot of my experience and skills.',
    href: socialLinks.resume
  },
  {
    title: 'Live demos',
    description: 'Working applications you can try directly in the browser.',
    href: socialLinks.github
  }
]

function ProofCard({ item, index }) {
  return (
    <SpecularCard
      className="rounded-2xl border border-[var(--border)] bg-[var(--bg)]"
      radius={16}
      lineColor="#b19cff"
      baseColor="#1a1520"
      intensity={1}
      shineSize={10}
      shineFade={40}
      thickness={1}
      speed={0.35}
      followMouse
      proximity={300}
    >
      <a
        href={item.href}
        target={item.href.startsWith('http') ? '_blank' : undefined}
        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="proof-card"
        style={{ '--delay': `${index * 110}ms` }}
      >
        <h3 className="pf-title">{item.title}</h3>
        <p className="pf-desc">{item.description}</p>
        <span className="pf-open">
          Open
          <span className="pf-open__arrow" aria-hidden="true">
            ↗
          </span>
        </span>
      </a>
    </SpecularCard>
  )
}

export function Proof() {
  return (
    <section
      id="proof"
      className="relative scroll-mt-24 overflow-hidden bg-[var(--surface)] px-6 py-24"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(65% 50% at 50% 0%, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0) 100%)'
        }}
      />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Proof of work"
          title="Evidence, not claims"
          description="Everything you need to inspect my work and assess my skills directly."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {proofItems.map((item, index) => (
            <ProofCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}