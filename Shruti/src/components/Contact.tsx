import { Arrow } from './Arrow'
import { GlassCard } from './GlassCard'
import { profile } from '../data/profile'

export function Contact() {
  return <section id="contact" className="contact" aria-labelledby="contact-title">
    <GlassCard raised className="contact-panel">
      <div className="contact-panel-top"><span className="eyebrow">(06) Let’s connect</span><span className="contact-spark" aria-hidden="true">✦</span></div>
      <h2 id="contact-title">Let’s create something <em>meaningful.</em></h2>
      <div className="contact-panel-bottom"><p>Have a project, an opportunity, or a thoughtful idea? I’d love to hear about it.</p><a className="contact-cta" href={`mailto:${profile.contact.email}`}>Get in touch <Arrow /></a></div>
      <div className="contact-socials" aria-label="Social links">{profile.contact.socialLinks.map((link) => link.href ? <a key={link.label} href={link.href}>{link.label} <span aria-hidden="true">↗</span></a> : <span key={link.label} className="social-placeholder">{link.label}</span>)}</div>
    </GlassCard>
  </section>
}
