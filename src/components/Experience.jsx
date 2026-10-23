import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { jobs } from '../data/experience'
import { education, site } from '../data/site'

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-line bg-white">
      <div className="wrap">
        <SectionHeading title="Experience and education" />
        <div className="grid gap-6">
          {jobs.map((j, i) => (
            <Reveal key={j.role} delay={i * 0.06}>
              <article className="grid gap-5 rounded-2xl border border-line bg-paper p-6 sm:p-8 md:grid-cols-[14rem_1fr] md:gap-10">
                <div>
                  <p className="font-display text-lg font-bold">{j.when}</p>
                  <p className="mt-1 text-sm text-muted">{j.org}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold sm:text-2xl">{j.role}</h3>
                  <ul className="mt-4 grid gap-2.5 text-muted">
                    {j.points.map((t) => (
                      <li key={t} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" aria-hidden="true" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools used">
                    {j.tools.map((t) => <li key={t} className="chip">{t}</li>)}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal>
            <article className="grid gap-5 rounded-2xl border border-line bg-paper p-6 sm:p-8 md:grid-cols-[14rem_1fr] md:gap-10">
              <div>
                <p className="font-display text-lg font-bold">{education.when}</p>
                <p className="mt-1 text-sm text-muted">{education.school}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold sm:text-2xl">{education.degree}</h3>
                <p className="mt-2 text-muted">Languages: {site.languages}</p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
