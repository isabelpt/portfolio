import { profile } from '../content/profile'
import { projects } from '../content/projects'
import Tag from './Tag'
import ContourLines from './ContourLines'

export default function Hero() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section id="top" className="relative flex min-h-[calc(100vh-4.5rem)] items-center overflow-hidden px-6 py-8">
      <ContourLines />
      <div className="relative mx-auto grid w-full max-w-5xl gap-10 md:grid-cols-5">
        <div className="flex flex-col justify-center md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-lilac)]">
            {profile.location}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[var(--color-navy-deep)] md:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-serif text-xl text-[var(--color-navy)] md:text-2xl">{profile.tagline}</p>
          <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-[var(--color-ink)]/80">
            {profile.bio}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 font-sans text-sm">
            <a
              href={profile.resumeUrl}
              download
              className="hard-shadow border border-[var(--color-navy-deep)] bg-[var(--color-navy)] px-5 py-2.5 font-medium text-white"
            >
              Download Resume
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="border border-[var(--color-navy-deep)] px-5 py-2.5 font-medium text-[var(--color-navy-deep)] transition-colors hover:bg-[var(--color-navy-deep)] hover:text-white"
            >
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border border-[var(--color-navy-deep)] px-5 py-2.5 font-medium text-[var(--color-navy-deep)] transition-colors hover:bg-[var(--color-navy-deep)] hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="space-y-3">
            {featuredProjects.map((project) => (
              <div key={project.id} className="border border-[var(--color-navy-deep)] bg-[var(--color-paper)] p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-lilac)]">
                    {project.award ? 'Award-Winning' : 'Currently Building'}
                  </p>
                  {project.award && (
                    <span aria-label="Award winner" title="Contest winner" className="text-base leading-none">
                      🏆
                    </span>
                  )}
                </div>
                <h3 className="mt-1.5 font-serif text-lg font-semibold text-[var(--color-navy-deep)]">
                  {project.title}
                </h3>
                <p className="mt-1 font-sans text-xs text-[var(--color-ink)]/60">{project.tagline}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-lilac)]">
              Outside the Data
            </p>
            <div className="mt-3 space-y-2.5">
              {profile.outsideTheData.map((item) => (
                <div key={item.label} className="border-l-2 border-[var(--color-navy-deep)] pl-3">
                  <p className="font-sans text-sm font-medium text-[var(--color-navy-deep)]">{item.label}</p>
                  <p className="mt-0.5 font-sans text-xs text-[var(--color-ink)]/70">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
