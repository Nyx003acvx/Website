import { profile } from '../data/profile'

export function Footer() {
  return <footer className="site-footer"><span className="footer-name">Shruti Khisa</span><span>{profile.contact.availability}</span><span>© 2026 Shruti Khisa</span><a className="back-to-top" href="#home">Back to top ↑</a></footer>
}
