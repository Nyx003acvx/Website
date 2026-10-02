import { profile } from '../data/profile'

export function About() {
  return <section id="about" className="intro section-pad" aria-labelledby="about-title">
    <div className="about-rule"><span className="eyebrow">(01) Who is Shruti?</span><span /></div>
    <div className="about-grid">
      <h2 id="about-title">I believe good work should be <em>thoughtful, useful,</em> and beautifully simple.</h2>
      <div className="about-copy"><p className="about-lead">{profile.shortBio}</p><p>{profile.longBio}</p><a className="round-link" href="mailto:hello@shrutikhisa.com" aria-label="Start a conversation">✦</a></div>
    </div>
    <ul className="about-details" aria-label="Personal details">{profile.details.map((detail, index) => <li key={detail.label}><span className="about-detail-index">0{index + 1}</span><span className="about-detail-label">{detail.label}</span><strong>{detail.value}</strong></li>)}</ul>
  </section>
}
