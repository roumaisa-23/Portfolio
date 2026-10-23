import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Check, ExternalLink, Github, X } from 'lucide-react'
import ProjectPreview from './ProjectPreview'

export default function ProjectModal({ project, onClose }) {
  const dialog = useRef(null)
  const closeBtn = useRef(null)

  useEffect(() => {
    const previous = document.activeElement
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab') return
      const items = dialog.current.querySelectorAll('a[href], button:not([disabled])')
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      previous?.focus?.()
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center bg-ink/50 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        ref={dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-line bg-paper p-6 shadow-lift sm:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.25 }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-cobalt">{project.kind}</p>
            <h3 id="project-modal-title" className="text-2xl font-bold sm:text-3xl">{project.title}</h3>
          </div>
          <button
            ref={closeBtn}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line bg-white hover:border-ink"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-6 rounded-xl bg-cobalt-tint p-5">
          <ProjectPreview type={project.preview} title={project.title} image={project.image} imageAlt={project.imageAlt} />
        </div>

        <h4 className="mt-6 font-semibold">The problem</h4>
        <p className="mt-1 text-muted">{project.problem}</p>

        <h4 className="mt-5 font-semibold">My contribution</h4>
        <p className="mt-1 text-muted">{project.contribution}</p>

        <h4 className="mt-5 font-semibold">Key features</h4>
        <ul className="mt-2 grid gap-2">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Check size={16} className="mt-1 shrink-0 text-cobalt" aria-hidden="true" /> {f}
            </li>
          ))}
        </ul>

        <h4 className="mt-5 font-semibold">Technologies</h4>
        <ul className="mt-2 flex flex-wrap gap-2">
          {project.stack.map((s) => <li key={s} className="chip">{s}</li>)}
        </ul>

        {(project.live || project.repo) && (
          <div className="mt-7 flex flex-wrap gap-3">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                <ExternalLink size={16} aria-hidden="true" /> View Project
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-outline">
                <Github size={16} aria-hidden="true" /> View Code
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
