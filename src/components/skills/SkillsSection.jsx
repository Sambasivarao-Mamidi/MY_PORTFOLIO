import { SectionHeading } from '@/components/ui/SectionHeading'
import LogoLoop from '@/components/LogoLoop'
import SpecularCard from '@/components/SpecularCard'
import { skillCategories, techLogos } from '@/data/skills'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

export function SkillsSection() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section id="skills" className="scroll-mt-24 bg-[var(--surface)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Technologies"
          title="Skills and tools"
          description="A practical, grouped view of the technologies I use—focused on what I can explain and apply."
        />

        <LogoLoop
          logos={techLogos}
          speed={prefersReducedMotion ? 0 : 55}
          direction="left"
          logoHeight={28}
          gap={48}
          scaleOnHover
          ariaLabel="Technologies I work with"
          className="mb-16"
          renderItem={(item) => (
            <span
              className="flex items-center justify-center text-[var(--muted)]"
              style={{ fontSize: '28px', lineHeight: 1 }}
            >
              {item.node}
            </span>
          )}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <SpecularCard
              key={category.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6"
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
              <h3 className="mb-2 text-lg font-semibold text-[var(--text)]">{category.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">
                {category.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[var(--border)] bg-[rgba(177,156,255,0.08)] px-3 py-1 text-xs text-[#c4b5fd]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </SpecularCard>
          ))}
        </div>
      </div>
    </section>
  )
}