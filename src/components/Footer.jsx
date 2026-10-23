import { Github, Linkedin, Mail } from 'lucide-react'
import { site } from '../data/site'

export default function Footer() {
  const link = 'grid h-10 w-10 place-items-center rounded-lg border border-line bg-white transition hover:border-cobalt hover:text-cobalt'
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col items-start justify-between gap-5 py-8 sm:flex-row sm:items-center">
        <div>
          <p className="font-display font-bold">{site.name}</p>
          <p className="text-sm text-muted">
            {site.role} © {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex gap-3">
          {site.github && <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className={link}><Github size={18} /></a>}
          {site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className={link}><Linkedin size={18} /></a>}
          <a href={`mailto:${site.email}`} aria-label="Send an email" className={link}><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  )
}
