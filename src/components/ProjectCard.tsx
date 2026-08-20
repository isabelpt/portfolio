import type { Project } from '../types'
import Tag from './Tag'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="hard-shadow-lilac flex h-full flex-col border border-[var(--color-navy-deep)] bg-white/60 p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-xl font-semibold text-[var(--color-navy-deep)]">{project.title}</h3>
        {project.status && (
          <span className="shrink-0 border border-[var(--color-lilac)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-[var(--color-navy)]">
            {project.status}
          </span>
        )}
      </div>
      <p className="mt-1 font-mono text-xs text-[var(--color-lilac)]">{project.tagline}</p>

      <p className="mt-4 flex-1 whitespace-pre-line font-sans text-sm leading-relaxed text-[var(--color-ink)]/80">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
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
