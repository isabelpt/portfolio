import { experience } from '../content/experience'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl border-t border-[var(--color-line)] px-6 py-16">
      <SectionHeading index="03" title="Experience" />

      <div className="mt-8 space-y-8">
        {experience.map((item) => (
          <div key={item.org} className="grid gap-2 border-b border-[var(--color-line)] pb-8 md:grid-cols-5">
            <div className="md:col-span-2">
              <p className="font-serif text-lg font-semibold text-[var(--color-navy-deep)]">{item.org}</p>
              <p className="mt-1 font-mono text-xs text-[var(--color-lilac)]">{item.role}</p>
              <p className="mt-1 font-sans text-xs text-[var(--color-ink)]/60">
                {item.location} · {item.dates}
              </p>
            </div>
            <ul className="md:col-span-3 space-y-2 font-sans text-sm leading-relaxed text-[var(--color-ink)]/80">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--color-lilac)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
