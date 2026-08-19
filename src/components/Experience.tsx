import { experience } from '../content/experience'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="font-serif text-3xl font-semibold text-[var(--color-navy-deep)]">Experience</h2>

      <div className="mt-8 space-y-8">
        {experience.map((item) => (
          <div key={item.org} className="grid gap-2 border-b border-[var(--color-line)] pb-8 md:grid-cols-5">
            <div className="md:col-span-2">
              <p className="font-serif text-lg font-semibold text-[var(--color-navy-deep)]">{item.org}</p>
              <p className="mt-1 font-sans text-sm text-[var(--color-lilac)]">{item.role}</p>
              <p className="mt-1 font-sans text-xs text-[var(--color-ink)]/60">
                {item.location} · {item.dates}
              </p>
            </div>
            <ul className="md:col-span-3 space-y-2 font-sans text-sm leading-relaxed text-[var(--color-ink)]/80">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-lilac)]" />
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
