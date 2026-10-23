import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'

const links = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Contact', 'contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(links.map(([, id]) => id))

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label={`${site.name}, back to top`}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-cobalt font-display text-sm font-bold text-white">
            RA
          </span>
          <span className="font-display text-lg font-bold">{site.name}</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'true' : undefined}
              className={`text-sm font-medium transition-colors hover:text-cobalt ${
                active === id ? 'text-cobalt' : 'text-muted'
              }`}
            >
              {label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary !py-2.5">Let’s Talk</a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-paper md:hidden">
          <ul className="wrap flex flex-col gap-1 py-4">
            {links.map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium hover:bg-cobalt-tint"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
                Let’s Talk
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
