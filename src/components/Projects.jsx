import { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects } from '../data/projects'

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <section id="projects" className="section border-t border-line">
      <div className="wrap">
        <SectionHeading
          title="Featured projects"
          intro="A web app, an Android app and a client website."
        />
        <div className="grid gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setSelected} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selected && <ProjectModal key={selected.id} project={selected} onClose={close} />}
      </AnimatePresence>
    </section>
  )
}
