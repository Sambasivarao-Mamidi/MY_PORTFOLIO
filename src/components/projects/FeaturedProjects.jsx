import { Button } from '@/components/ui/Button'
import { featuredProjects } from '@/data/projects'
import './FeaturedProjects.css'

function ProjectSpotlight({ project, index }) {
  return (
    <article className="fp-card" style={{ '--delay': `${index * 110}ms` }}>
      <div className="fp-card__frame">
        <div className="fp-orb" aria-hidden="true" />
        <div className="fp-frame__beam" aria-hidden="true" />
        <span className="fp-index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="fp-monogram" aria-hidden="true">
          {project.title.charAt(0)}
        </span>
      </div>

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