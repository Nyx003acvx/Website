import { useState } from 'react'
import { experience } from '../data/experience'
import { Arrow } from './Arrow'
import { useInView } from '../hooks/useInView'

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref, isVisible } = useInView<HTMLElement>()
  return <section ref={ref} id="experience" className={`experience experience-editorial section-pad${isVisible ? ' is-visible' : ''}`} aria-labelledby="experience-title">
    <div className="experience-intro"><span className="eyebrow">(05) Experience</span><div><h2 id="experience-title">Places, people and<br /><em>problems</em> I’ve worked with.</h2></div></div>
    <div className="experience-list">{experience.map((item, index) => {
      const isOpen = openIndex === index
      const detailId = `experience-detail-${index}`
      return <article className={`experience-entry${isOpen ? ' is-open' : ''}`} key={item.duration}>
        <time>{item.duration}</time><span className="experience-node" aria-hidden="true" />
        <div className="experience-summary"><div className="experience-meta"><span>{item.location}</span><span>0{index + 1}</span></div><h3>{item.company}</h3><h4>{item.position}</h4><p>{item.description}</p><button type="button" aria-expanded={isOpen} aria-controls={detailId} onClick={() => setOpenIndex(isOpen ? null : index)}>More about the work <Arrow /></button></div>
        <div id={detailId} className="experience-details" aria-hidden={!isOpen}><div><span className="eyebrow">Responsibilities</span><ul>{item.responsibilities.map((detail) => <li key={detail}>{detail}</li>)}</ul></div><div><span className="eyebrow">Achievements</span>{item.achievements.length ? <ul>{item.achievements.map((detail) => <li key={detail}>{detail}</li>)}</ul> : <p>Achievement details can be added here.</p>}</div><div className="experience-skills"><span className="eyebrow">Skills used</span><div>{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></div>
      </article>
    })}</div>
  </section>
}
