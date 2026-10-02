import { skillCategories, supportingSkills, tools } from '../data/skills'
import { Arrow } from './Arrow'
import { useInView } from '../hooks/useInView'

export function Skills() {
  const { ref, isVisible } = useInView<HTMLElement>()
  return <section ref={ref} id="skills" className={`skills skills-editorial section-pad${isVisible ? ' is-visible' : ''}`} aria-labelledby="skills-title">
    <div className="skills-intro"><span className="eyebrow">(02) Skills</span><div><h2 id="skills-title">What I bring<br />to the table.</h2><p>A varied practice, held together by a love of thoughtful, well-made things.</p></div></div>
    <div className="skill-category-list">{skillCategories.map((category) => <article className="skill-category" key={category.number}>
      <header><span>{category.number}</span><h3>{category.name}</h3></header>
      <ul>{category.skills.map((skill) => <li key={skill}><span>{skill}</span><Arrow /></li>)}</ul>
    </article>)}</div>
    <div className="skills-notes"><div className="supporting-skills"><span className="eyebrow">Supporting skills</span><ul>{supportingSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div><div className="tool-shelf"><span className="eyebrow">04 — Tools</span><div>{tools.map((tool) => <span className="tool-pill" key={tool}>{tool}</span>)}</div></div></div>
  </section>
}
