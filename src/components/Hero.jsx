import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { site } from '../data/site'

const code = [
  ['name', '"Roumaisa Abbasi"'],
  ['role', '"Frontend Developer"'],
  ['stack', '["React", "Tailwind CSS", "JavaScript"]'],
  ['location', '"Islamabad, Pakistan"'],
  ['openTo', '["Internship", "Junior role"]'],
]

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-white text-ink transition hover:border-cobalt hover:text-cobalt"
    >
      {children}
    </a>
  )
}

export default function Hero() {
  return (
    <section id="top" className="wrap grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium">
          <span className="h-2 w-2 rounded-full bg-emerald-500 motion-safe:animate-pulse" aria-hidden="true" />
          {site.availability}
        </p>

        <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
          Building Thoughtful Digital Experiences.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-muted">
          I’m {site.name}, a Frontend Developer passionate about creating responsive, intuitive, and
          visually refined web applications with React.js and modern web technologies.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary">
            Explore My Work <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
          {site.resume && (
            <a href={site.resume} download className="btn btn-outline">
              <Download size={16} aria-hidden="true" /> Resume
            </a>
          )}
        </div>

        <div className="mt-8 flex gap-3">
          {site.github && (
            <IconLink href={site.github} label="GitHub profile"><Github size={20} /></IconLink>
          )}
          {site.linkedin && (
            <IconLink href={site.linkedin} label="LinkedIn profile"><Linkedin size={20} /></IconLink>
          )}
          <IconLink href={`mailto:${site.email}`} label="Send an email"><Mail size={20} /></IconLink>
        </div>
      </div>

      <motion.div
        role="img"
        aria-label="Code snippet describing Roumaisa Abbasi: Frontend Developer in Islamabad, working with React, Tailwind CSS and JavaScript, open to internship and junior roles."
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
        className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift"
      >
        <div className="flex items-center justify-between border-b border-line bg-cobalt-tint px-5 py-3">
          <span className="font-mono text-xs font-medium text-cobalt">developer.js</span>
          <span className="font-mono text-xs text-muted">React · Tailwind</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm" aria-hidden="true">
          <code>
            <span className="text-cobalt">const</span> developer = {'{'}
            {'\n'}
            {code.map(([key, value], i) => (
              <motion.span
                key={key}
                className="block"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
              >
                {'  '}
                {key}: <span className="text-emerald-700">{value}</span>,
              </motion.span>
            ))}
            {'};'}
            <span className="ml-1 inline-block h-4 w-[2px] translate-y-0.5 bg-cobalt motion-safe:animate-pulse" />
          </code>
        </pre>
      </motion.div>
    </section>
  )
}
