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
      <div
        className="relative mb-6 overflow-hidden rounded-xl border border-[var(--border)] bg-[linear-gradient(145deg,rgba(177,156,255,0.14),rgba(124,92,255,0.06))]"
        style={{ aspectRatio: '16 / 9' }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-[var(--muted)]">
          {project.title}
        </div>
      </div>

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