import type { Project } from '../types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[var(--color-line)] bg-white/60 p-6 transition-shadow hover:shadow-md hover:shadow-[var(--color-lilac-soft)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-xl font-semibold text-[var(--color-navy-deep)]">{project.title}</h3>
        {project.status && (
          <span className="shrink-0 rounded-full bg-[var(--color-lilac-soft)] px-3 py-1 font-sans text-xs font-medium text-[var(--color-navy)]">
            {project.status}
          </span>
        )}
      </div>
      <p className="mt-1 font-sans text-sm text-[var(--color-lilac)]">{project.tagline}</p>

      <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-[var(--color-ink)]/80">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[var(--color-line)] px-3 py-1 font-sans text-xs text-[var(--color-navy-deep)]"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.links.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-4 border-t border-[var(--color-line)] pt-4 font-sans text-sm">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[var(--color-navy)] underline decoration-[var(--color-lilac)] decoration-2 underline-offset-4 hover:text-[var(--color-navy-deep)]"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </article>
  )
}
