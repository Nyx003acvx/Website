import { education } from '../data/education'
import { useInView } from '../hooks/useInView'

export function Education() {
  const { ref, isVisible } = useInView<HTMLElement>()
  return <section ref={ref} id="education" className={`education education-editorial section-pad${isVisible ? ' is-visible' : ''}`} aria-labelledby="education-title">
    <div className="education-intro"><span className="eyebrow">(03) Education</span><div><h2 id="education-title">Where the foundation<br />was <em>built.</em></h2><p>Every chapter adds another layer to the way I see, make, and collaborate.</p></div></div>
    <ol className="education-entries">{education.map((item, index) => <li key={item.year} className="education-entry">
      <time>{item.year}</time><span className="education-point" aria-hidden="true" />
      <article className="education-content"><p className="education-institution">{item.institution}</p><h3>{item.degree}</h3><p className="education-field">{item.field}</p><p className="education-description">{item.description}</p>{item.achievement && <p className="education-achievement"><span>✦</span>{item.achievement}</p>}</article>
      <span className="education-index" aria-hidden="true">0{index + 1}</span>
    </li>)}</ol>
  </section>
}
