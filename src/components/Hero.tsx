import { profile } from '../content/profile'
import { projects } from '../content/projects'
import Tag from './Tag'

export default function Hero() {
  const featured = projects.find((p) => p.featured)

  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-14 md:pt-20">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-lilac)]">
            {profile.location}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[var(--color-navy-deep)] md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-serif text-xl text-[var(--color-navy)] md:text-2xl">{profile.tagline}</p>
          <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-[var(--color-ink)]/80">
            {profile.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 font-sans text-sm">
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

        <div className="md:col-span-2 md:mt-1">
          {featured && (
            <div className="border border-[var(--color-navy-deep)] p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-lilac)]">
                Currently Building
              </p>
              <h3 className="mt-2 font-serif text-lg font-semibold text-[var(--color-navy-deep)]">
                {featured.title}
              </h3>
              <p className="mt-1 font-sans text-xs text-[var(--color-ink)]/60">{featured.tagline}</p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-[var(--color-ink)]/80">
                {featured.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {featured.techStack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-lilac)]">
              Outside the Data
            </p>
            <div className="mt-4 space-y-4">
              {profile.outsideTheData.map((item) => (
                <div key={item.label} className="border-l-2 border-[var(--color-navy-deep)] pl-4">
                  <p className="font-sans text-sm font-medium text-[var(--color-navy-deep)]">{item.label}</p>
                  <p className="mt-1 font-sans text-sm text-[var(--color-ink)]/70">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
