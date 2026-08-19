import { profile } from '../content/profile'
import { skillGroups } from '../content/skills'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="font-serif text-3xl font-semibold text-[var(--color-navy-deep)]">About</h2>

      <div className="mt-8 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-lilac)]">
            Skills
          </h3>
          <div className="mt-4 space-y-5">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="font-sans text-sm font-medium text-[var(--color-navy)]">{group.label}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[var(--color-lilac-soft)] px-3 py-1 font-sans text-xs text-[var(--color-navy-deep)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-lilac)]">
            Outside the Data
          </h3>
          <div className="mt-4 space-y-4">
            {profile.outsideTheData.map((item) => (
              <div key={item.label} className="border-l-2 border-[var(--color-lilac-soft)] pl-4">
                <p className="font-sans text-sm font-medium text-[var(--color-navy-deep)]">{item.label}</p>
                <p className="mt-1 font-sans text-sm text-[var(--color-ink)]/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
