import { Button } from '@/components/ui/Button'
import { useSpotlight } from '@/hooks/useSpotlight'

export function ProjectCard({ project, large = false }) {
  const { ref, onMouseMove } = useSpotlight()

  return (
    <article
      ref={ref}
      onMouseMove={onMouseMove}
      className={`fx-card flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] ${
        large ? 'p-8' : 'p-6'
      }`}
    >
      <h3 className={`font-semibold text-[var(--text)] ${large ? 'text-2xl' : 'text-lg'}`}>
        {project.title}
      </h3>

      {project.problem && (
        <p className="mt-2 text-sm text-[var(--muted)]">
          <span className="font-medium text-[var(--primary)]">Problem: </span>
          {project.problem}
        </p>
      )}

      <p className={`mt-2 leading-relaxed text-[var(--muted)] ${large ? 'text-base' : 'text-sm'}`}>
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[var(--border)] bg-[rgba(177,156,255,0.08)] px-3 py-1 text-xs text-[#c4b5fd]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
        <Button href={project.liveUrl} variant="secondary" className="px-4 py-2 text-xs">
          Live demo
        </Button>
        <Button href={project.githubUrl} variant="secondary" className="px-4 py-2 text-xs">
          GitHub
        </Button>
      </div>
    </article>
  )
}