import { MonitorSmartphone, Boxes, Plug, Ruler, Bug, Users } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const strengths = [
  [MonitorSmartphone, 'Responsive interface development'],
  [Boxes, 'Component-based React architecture'],
  [Plug, 'API integration'],
  [Ruler, 'Turning UI/UX designs into interfaces'],
  [Bug, 'Debugging and problem-solving'],
  [Users, 'Collaboration and continuous learning'],
]

export default function About() {
  return (
    <section id="about" className="section border-t border-line">
      <div className="wrap grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading title="I build clear interfaces that work on every screen." />
          <Reveal className="space-y-4 text-lg text-muted">
            <p>
              I’m a Frontend Developer with 3 months of internship experience building responsive,
              user-friendly web applications with React.js, JavaScript, HTML5, CSS3 and Tailwind CSS.
            </p>
            <p>
              I turn UI/UX designs into cross-browser interfaces, build reusable React components,
              integrate APIs with Axios, and work with backend developers to deliver a smooth experience.
            </p>
            <p>
              I care about clean, maintainable code and keep learning modern frontend tools. I’m looking
              for an internship or junior role where I can grow through real-world projects.
            </p>
          </Reveal>
        </div>

        <ul className="grid content-start gap-3 sm:grid-cols-2">
          {strengths.map(([Icon, label], i) => (
            <Reveal key={label} delay={i * 0.05}>
              <li className="flex h-full list-none items-start gap-3 rounded-xl border border-line bg-white p-4 shadow-soft">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cobalt-tint text-cobalt">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <span className="pt-1.5 font-medium leading-snug">{label}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
