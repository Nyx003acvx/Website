import { useEffect, useState } from 'react'
import { navigation } from '../data/navigation'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])
  return <header className="site-header">
    <a href="#home" className="wordmark" aria-label="Shruti Khisa home">S<span>K</span></a>
    <nav id="primary-navigation" className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
      {navigation.map((item) => <a onClick={() => setMenuOpen(false)} key={item.label} href={item.href}>{item.label}</a>)}
    </nav>
    <button className="menu-button" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-controls="primary-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i /><i /></button>
  </header>
}
