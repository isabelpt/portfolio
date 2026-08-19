import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Writing from './components/Writing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Writing />
        <Contact />
      </main>
      <Analytics />
    </div>
  )
}

export default App
