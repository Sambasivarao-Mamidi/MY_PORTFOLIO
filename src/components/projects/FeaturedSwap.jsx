import { useState } from 'react'
import CardSwap, { Card } from '@/components/CardSwap'
import { ProjectCard } from './ProjectCard'
import { featuredProjects } from '@/data/projects'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

function SwapCard({ project }) {
  return (
    <Card
      className="swap-card"
      customClass="flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-left shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
    >
      <div className="relative mb-5 flex-1 overflow-hidden rounded-xl border border-[var(--border)] bg-[linear-gradient(145deg,rgba(177,156,255,0.16),rgba(124,92,255,0.08))]">
        <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
          {project.title}
        </div>
      </div>

      <h3 className="text-xl font-semibold text-[var(--text)]">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[var(--border)] bg-[rgba(177,156,255,0.08)] px-3 py-1 text-xs text-[#c4b5fd]"
          >
            {tech}
          </span>
        ))}
      </div>
    </Card>
  )
}

export function FeaturedSwap() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [paused, setPaused] = useState(false)

  if (prefersReducedMotion) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="featured-swap relative">
        <div className="hidden w-full max-w-[460px] md:block">
          <CardSwap
            width={460}
            height={360}
            cardDistance={48}
            verticalDistance={62}
            delay={6000}
            pauseOnHover
            paused={paused}
            easing="power"
            skewAmount={4}
          >
            {featuredProjects.map((project) => (
              <SwapCard key={project.id} project={project} />
            ))}
          </CardSwap>

          <div className="mt-12 text-center">
            <button
              type="button"
              aria-pressed={paused}
              onClick={() => setPaused((value) => !value)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[var(--border)] px-5 py-2.5 text-sm font-semibold text-[var(--text)] transition-colors duration-200 hover:border-[var(--border-strong)] hover:bg-[rgba(177,156,255,0.08)]"
            >
              {paused ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Resume rotation
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                  </svg>
                  Pause rotation
                </>
              )}
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:hidden">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  )
}