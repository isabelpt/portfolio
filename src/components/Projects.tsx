import { projects } from '../content/projects'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl border-t border-[var(--color-line)] px-6 py-16">
      <SectionHeading index="02" title="Projects" />

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
