export default function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-sm text-[var(--color-lilac)]">{index}</span>
      <h2 className="font-serif text-3xl font-semibold text-[var(--color-navy-deep)]">{title}</h2>
    </div>
  )
}
