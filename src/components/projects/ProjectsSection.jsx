import { useState } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from './ProjectCard'
import { featuredProjects, secondaryProjects } from '@/data/projects'

export function ProjectsSection() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="projects" className="scroll-mt-24 bg-[var(--bg)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          description="A focused set of projects, each demonstrating a different ability—full-stack architecture, product thinking, and API-driven data."
        />

        <div className="mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <button
            type="button"
            aria-expanded={showMore}
            aria-controls="more-projects"
            onClick={() => setShowMore((value) => !value)}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition-colors duration-200 hover:border-[var(--border-strong)] hover:bg-[rgba(167,139,250,0.08)]"
          >
            {showMore ? 'Show fewer projects' : 'View more projects'}
          </button>
        </div>

        {showMore && (
          <div
            id="more-projects"
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {secondaryProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}