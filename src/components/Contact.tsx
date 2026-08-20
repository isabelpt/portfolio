import { profile } from '../content/profile'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl border-t border-[var(--color-line)] px-6 py-16">
      <SectionHeading index="04" title="Contact" />

      <div className="mt-8 border border-[var(--color-navy-deep)] bg-[var(--color-navy-deep)] px-8 py-12 text-center md:px-16">
        <h2 className="font-serif text-3xl font-semibold text-white">Let’s talk</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3 font-sans text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="border border-[var(--color-lilac)] bg-[var(--color-lilac)] px-5 py-2.5 font-medium text-[var(--color-navy-deep)] transition-colors hover:bg-transparent hover:text-white"
          >
            {profile.email}
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border border-white/30 px-5 py-2.5 font-medium text-white transition-colors hover:border-white"
          >
            LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="border border-white/30 px-5 py-2.5 font-medium text-white transition-colors hover:border-white"
          >
            GitHub
          </a>
        </div>
      </div>

      <footer className="mt-10 flex flex-col items-center justify-between gap-3 font-sans text-xs text-[var(--color-ink)]/50 md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>
          Built with React &amp; Tailwind, deployed on Vercel —{' '}
          <a
            href="https://github.com/isabelpt/portfolio"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-[var(--color-lilac)] decoration-2 underline-offset-4 hover:text-[var(--color-ink)]"
          >
            source
          </a>
        </p>
      </footer>
    </section>
  )
}
