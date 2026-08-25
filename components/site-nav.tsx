'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean,
    ) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight"
        >
          <span className="grid size-7 place-items-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground transition-transform group-hover:rotate-12">
            T
          </span>
          <span>
            Thuso<span className="text-primary">.</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={cn(
                  'rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                  active === link.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="tel:+27695913585"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Call me
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-md border border-border text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height] duration-300 md:hidden',
          open ? 'max-h-96' : 'max-h-0 border-t-transparent',
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={cn(
                  'w-full rounded-lg px-3 py-2.5 text-left text-base font-medium transition-colors',
                  active === link.id
                    ? 'bg-secondary text-primary'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="tel:+27695913585"
              className="block rounded-lg bg-primary px-3 py-2.5 text-center text-base font-semibold text-primary-foreground"
            >
              Call me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
