import { projects } from '../data/projects'
import { Arrow } from './Arrow'
import { useInView } from '../hooks/useInView'

export function Projects() {
  const { ref, isVisible } = useInView<HTMLElement>()
  return <section ref={ref} id="projects" className={`projects projects-editorial section-pad${isVisible ? ' is-visible' : ''}`} aria-labelledby="projects-title">
    <div className="projects-intro"><span className="eyebrow">(04) Portfolio</span><div><h2 id="projects-title">Selected <em>Projects</em></h2><p>A few things I’ve worked on.</p></div></div>
    <div className="project-showcases">{projects.map((project) => <article key={project.number} className={`project-showcase ${project.layout} ${project.accent}`}>
      <div className="project-visual"><div className="project-image">{project.imageSrc ? <img src={project.imageSrc} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} loading="lazy" decoding="async" /> : <div className="project-placeholder" role="img" aria-label={`Image placeholder for ${project.title}`}><span>Project image<br />coming soon</span><i /><b /></div>}</div><span className="project-number">Project {project.number}</span></div>
      <div className="project-info"><div className="project-info-top"><span className="eyebrow">{project.category}</span><time>{project.year}</time></div><h3>{project.title}</h3><p>{project.description}</p><ul className="project-tags" aria-label="Project technologies">{project.technologies.map((tag) => <li key={tag}>{tag}</li>)}</ul>{(project.externalUrl || project.githubUrl) && <div className="project-links">{project.externalUrl && <a href={project.externalUrl} aria-label={`View ${project.title}`}>View project <Arrow /></a>}{project.githubUrl && <a href={project.githubUrl} aria-label={`View ${project.title} on GitHub`}>GitHub ↗</a>}</div>}</div>
    </article>)}</div>
  </section>
}
