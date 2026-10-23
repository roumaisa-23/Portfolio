import { ClipboardList, Route, MonitorSmartphone, Plug, Bug } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const steps = [
  [ClipboardList, 'Understand requirements', 'Clarify what the interface must do and who uses it.'],
  [Route, 'Plan components and flows', 'Sketch the pages, reusable components and user journeys.'],
  [MonitorSmartphone, 'Build responsive interfaces', 'Start on mobile, then scale up to tablet and desktop.'],
  [Plug, 'Integrate APIs and logic', 'Connect the UI to back-end services and handle real data.'],
  [Bug, 'Test, debug and refine', 'Fix issues, tidy the code and polish the details.'],
]

export default function DevelopmentApproach() {
  return (
    <section id="approach" className="section border-t border-line bg-white">
      <div className="wrap">
        <SectionHeading title="How I approach a project" />
        <ol className="grid gap-5 md:grid-cols-5">
          {steps.map(([Icon, title, text], i) => (
            <Reveal key={title} delay={i * 0.07}>
              <li className="relative h-full list-none rounded-2xl border border-line bg-paper p-5">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-cobalt text-white">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm font-bold text-muted">Step {i + 1}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold leading-snug">{title}</h3>
                <p className="mt-2 text-sm text-muted">{text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
