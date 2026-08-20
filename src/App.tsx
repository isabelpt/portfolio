import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
// Substack "Writing" section is disabled for now — see src/components/Writing.tsx
// and api/substack.ts. Re-add <Writing /> below (and the nav link) once ready.
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
        <Contact />
      </main>
      <Analytics />
    </div>
  )
}

export default App
