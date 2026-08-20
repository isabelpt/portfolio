import { skillGroups } from '../content/skills'
import { coursework } from '../content/coursework'
import SectionHeading from './SectionHeading'
import Tag from './Tag'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl border-t border-[var(--color-line)] px-6 py-16">
      <SectionHeading index="01" title="About" />

      <div className="mt-8 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-lilac)]">
            Skills
          </h3>
          <div className="mt-4 space-y-5">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="font-sans text-sm font-medium text-[var(--color-navy)]">{group.label}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-lilac)]">
            Highlighted Coursework
          </h3>
          <div className="mt-4 space-y-2">
            {coursework.current.map((course) => (
              <div key={course} className="border-l-2 border-[var(--color-lilac-soft)] pl-4 font-sans text-sm text-[var(--color-ink)]/80">
                {course}
              </div>
            ))}
          </div>

          {coursework.upcoming.length > 0 && (
            <div className="mt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink)]/40">
                Upcoming
              </p>
              <div className="mt-3 space-y-2">
                {coursework.upcoming.map((course) => (
                  <div
                    key={course}
                    className="border-l-2 border-[var(--color-line)] pl-4 font-sans text-sm text-[var(--color-ink)]/60"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
