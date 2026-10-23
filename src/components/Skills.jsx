import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-line">
      <div className="wrap">
        <SectionHeading
          title="Technical skills"
          intro="The tools from my internship and projects."
        />
        <div className="grid gap-5 md:grid-cols-6">
          {skillGroups.map(({ title, note, icon: Icon, span, items }, i) => (
            <Reveal key={title} delay={i * 0.06} className={span}>
              <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-soft transition hover:border-cobalt/40">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-cobalt-tint text-cobalt">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <p className="mt-3 text-muted">{note}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <li key={s} className="chip">{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
