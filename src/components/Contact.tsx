import { profile } from '../content/profile'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <div className="rounded-2xl bg-[var(--color-navy-deep)] px-8 py-12 text-center md:px-16">
        <h2 className="font-serif text-3xl font-semibold text-white">Let’s talk</h2>
        {/* <p className="mx-auto mt-3 max-w-md font-sans text-sm text-white/70">
          Open to data and geospatial oriented internships — happy to share more about any project above.
        </p> */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 font-sans text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-[var(--color-lilac)] px-5 py-2.5 font-medium text-[var(--color-navy-deep)] transition-colors hover:bg-white"
          >
            {profile.email}
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/30 px-5 py-2.5 font-medium text-white transition-colors hover:border-white"
          >
            LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/30 px-5 py-2.5 font-medium text-white transition-colors hover:border-white"
          >
            GitHub
          </a>
        </div>
      </div>

      <footer className="mt-10 flex flex-col items-center justify-between gap-3 font-sans text-xs text-[var(--color-ink)]/50 md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React &amp; Tailwind, deployed on Vercel.</p>
      </footer>
    </section>
  )
}
