import type { Project } from '../types'
import Tag from './Tag'

export default function ProjectCard({ project }: { project: Project }) {
  // The first link is the one worth clicking through to — wrap the thumbnail in it.
  const primaryLink = project.links[0]

  const thumbnail = project.thumbnail && (
    <img
      src={project.thumbnail.src}
      alt={project.thumbnail.alt}
      width={1200}
      height={800}
      loading="lazy"
      decoding="async"
      className="aspect-[3/2] w-full bg-[var(--color-paper)] object-cover"
    />
  )

  return (
    <article className="flex h-full flex-col border border-[var(--color-line)] bg-white/40">
      {thumbnail &&
        (primaryLink ? (
          <a
            href={primaryLink.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} — ${primaryLink.label}`}
            className="block border-b border-[var(--color-line)] transition-opacity hover:opacity-90"
          >
            {thumbnail}
          </a>
        ) : (
          <div className="border-b border-[var(--color-line)]">{thumbnail}</div>
        ))}

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-base font-semibold text-[var(--color-navy-deep)]">{project.title}</h3>
          {project.award && (
            <span aria-label="Award winner" title="Contest winner" className="shrink-0 text-base leading-none">
              🏆
            </span>
          )}
        </div>
        <p className="mt-1 font-mono text-[11px] text-[var(--color-lilac)]">{project.tagline}</p>

        <p className="mt-2 font-sans text-xs leading-relaxed text-[var(--color-ink)]/80">
          {project.description}
        </p>

        {project.techStack.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        )}

        {project.links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-3 pt-3 font-sans text-xs">
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
      </div>
    </article>
  )
}
