export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-[var(--color-line)] px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-[var(--color-navy-deep)]">
      {children}
    </span>
  )
}
