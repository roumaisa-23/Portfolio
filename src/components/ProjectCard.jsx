import { Check, ExternalLink, Github, Info } from 'lucide-react'
import Reveal from './Reveal'
import ProjectPreview from './ProjectPreview'

export default function ProjectCard({ project, index, onOpen }) {
  const { title, kind, problem, contribution, features, stack, live, repo, needsReview } = project
  const flip = index % 2 === 1

  return (
    <Reveal>
      <article className="group grid overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cobalt/40 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:grid-cols-2">
        <div className={`flex items-center bg-cobalt-tint p-6 sm:p-8 ${flip ? 'md:order-2' : ''}`}>
          <div className="w-full">
            <ProjectPreview type={project.preview} title={title} image={project.image} imageAlt={project.imageAlt} />
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-sm font-medium text-cobalt">{kind}</p>
          <h3 className="mt-1 text-2xl font-bold sm:text-3xl">{title}</h3>
          <p className="mt-3 text-muted">{problem}</p>

          <p className="mt-5 text-sm font-semibold">My contribution</p>
          <p className="mt-1 text-muted">{contribution}</p>

          <ul className="mt-5 grid gap-2">
            {features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <Check size={16} className="mt-0.5 shrink-0 text-cobalt" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
            {stack.map((s) => (
              <li key={s} className="chip">{s}</li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={() => onOpen(project)} className="btn btn-primary">
              <Info size={16} aria-hidden="true" /> Project details
            </button>
            {live && (
              <a href={live} target="_blank" rel="noreferrer" className="btn btn-outline">
                <ExternalLink size={16} aria-hidden="true" /> View Project
              </a>
            )}
            {repo && (
              <a href={repo} target="_blank" rel="noreferrer" className="btn btn-outline">
                <Github size={16} aria-hidden="true" /> View Code
              </a>
            )}
          </div>

          {import.meta.env.DEV && needsReview?.length > 0 && (
            <p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-900">
              Dev note: please review {needsReview.join(', ')} in src/data/projects.js
            </p>
          )}
        </div>
      </article>
    </Reveal>
  )
}
