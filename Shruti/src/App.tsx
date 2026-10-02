import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <div className="page-shell">
        <Navbar />
        <main id="content" tabIndex={-1}>
          <Hero /><About /><Skills /><Education /><Projects /><Experience /><Contact /><Footer />
        </main>
      </div>
    </>
  )
}
