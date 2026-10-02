import { Arrow } from './Arrow'
import { AnimatedText } from './AnimatedText'
import { useState } from 'react'
import { profile } from '../data/profile'

export function Hero() {
  const [hasPortrait, setHasPortrait] = useState(Boolean(profile.portraitSrc))
  return <section id="home" className="hero" aria-labelledby="hero-title">
    <div className="hero-meta type-label"><span>Hey there, I’m</span><span>Creative / professional</span><span>{profile.location}</span></div>
    <AnimatedText as="h1" id="hero-title" className="hero-name">Shruti <em>Khisa</em></AnimatedText>
    <div className="hero-portrait-wrap motion-fade-up">
      <div className="hero-portrait-glow" aria-hidden="true" />
      <div className="hero-portrait surface-glass surface-glass--raised">
        {hasPortrait && profile.portraitSrc ? <img src={profile.portraitSrc} alt={profile.portraitAlt} width="800" height="1000" decoding="async" onError={() => setHasPortrait(false)} /> : <div className="portrait-empty" aria-label="Portrait placeholder"><span>Portrait<br />coming soon</span></div>}
        <span className="portrait-stamp">SK<br /><b>✦</b></span>
      </div>
      <span className="portrait-tag tag-top">Currently making<br />meaningful work</span>
      <span className="portrait-tag tag-bottom">Scroll to meet<br />the person behind it</span>
    </div>
    <a className="hero-intro text-link" href="#about">A little more about me <Arrow /></a>
    <div className="hero-scroll" aria-hidden="true"><span /> Scroll to explore</div>
  </section>
}
