import { projects } from '../content/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="font-serif text-3xl font-semibold text-[var(--color-navy-deep)]">Projects</h2>
      {/* <p className="mt-2 max-w-2xl font-sans text-sm text-[var(--color-ink)]/70">
        A selection of research and projects I've been working on.
      </p> */}

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
