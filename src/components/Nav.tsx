import { useEffect, useState } from 'react'
import { profile } from '../content/profile'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? 'border-[var(--color-line)] bg-[var(--color-paper)]/90 backdrop-blur' : 'border-transparent bg-[var(--color-paper)]/60 backdrop-blur'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-lg font-semibold text-[var(--color-navy-deep)]">
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 font-sans text-sm text-[var(--color-ink)] md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-[var(--color-navy)]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          download
          className="hard-shadow hidden border border-[var(--color-navy-deep)] bg-[var(--color-navy)] px-4 py-2 font-sans text-sm font-medium text-white md:inline-block"
        >
          Download Resume
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="border border-[var(--color-line)] p-2 text-[var(--color-navy-deep)] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 5h14M3 10h14M3 15h14" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-paper)] px-6 py-4 font-sans md:hidden">
          <ul className="flex flex-col gap-4 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                download
                className="inline-block border border-[var(--color-navy-deep)] bg-[var(--color-navy)] px-4 py-2 text-white"
              >
                Download Résumé
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
