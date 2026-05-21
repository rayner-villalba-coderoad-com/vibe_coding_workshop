import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects">
      <h2><span className="accent">&gt;</span> Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="card project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <div className="project-links">
              {project.links.map(link => (
                <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
