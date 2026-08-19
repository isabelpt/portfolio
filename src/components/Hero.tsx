import { profile } from '../content/profile'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-20 md:pt-28">
      <p className="font-sans text-sm uppercase tracking-[0.2em] text-[var(--color-lilac)]">
        {profile.location}
      </p>
      <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-[var(--color-navy-deep)] md:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-4 max-w-2xl font-serif text-xl text-[var(--color-navy)] md:text-2xl">
        {profile.tagline}
      </p>
      <p className="mt-6 max-w-2xl font-sans text-base leading-relaxed text-[var(--color-ink)]/80">
        {profile.bio}
      </p>

      <div className="mt-8 flex flex-wrap gap-3 font-sans text-sm">
        <a
          href={profile.resumeUrl}
          download
          className="rounded-full bg-[var(--color-navy)] px-5 py-2.5 font-medium text-white transition-colors hover:bg-[var(--color-navy-deep)]"
        >
          Download Resume
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--color-line)] px-5 py-2.5 font-medium text-[var(--color-navy-deep)] transition-colors hover:border-[var(--color-navy)]"
        >
          GitHub
        </a>
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--color-line)] px-5 py-2.5 font-medium text-[var(--color-navy-deep)] transition-colors hover:border-[var(--color-navy)]"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}
