import { Button } from '@/components/ui/Button'
import { featuredProjects } from '@/data/projects'
import { useSpotlight } from '@/hooks/useSpotlight'
import './FeaturedProjects.css'

function ProjectSpotlight({ project, index }) {
  const { ref, onMouseMove } = useSpotlight()

  return (
    <article
      ref={ref}
      className="fp-card fx-card"
      style={{ '--delay': `${index * 110}ms` }}
      onMouseMove={onMouseMove}
    >
      <div className="fp-card__body">
        <h3 className="fp-title">{project.title}</h3>

        {project.problem && (
          <p className="fp-problem">
            <span className="fp-problem__label">Problem</span>
            {project.problem}
          </p>
        )}

        <p className="fp-desc">{project.description}</p>

        <div className="fp-stack">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="fp-actions">
          <Button href={project.liveUrl} variant="secondary" className="px-4 py-2 text-xs">
            Live demo
          </Button>
          <Button href={project.githubUrl} variant="secondary" className="px-4 py-2 text-xs">
            GitHub
          </Button>
        </div>
      </div>
    </article>
  )
}

export function FeaturedProjects() {
  return (
    <div className="fp-grid">
      {featuredProjects.map((project, index) => (
        <ProjectSpotlight key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}