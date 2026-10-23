import { useState } from 'react'
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import Reveal from './Reveal'
import { site } from '../data/site'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate({ name, email, message }) {
  const errors = {}
  if (name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!emailPattern.test(email.trim())) errors.email = 'Please enter a valid email address.'
  if (message.trim().length < 10) errors.message = 'Please write at least 10 characters.'
  return errors
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">{label}</label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">{error}</p>}
    </div>
  )
}

const inputClass =
  'w-full rounded-lg border border-line bg-white px-4 py-3 text-base outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/20 aria-[invalid=true]:border-red-600'

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  // idle | sending | sent | error | unconfigured
  const [status, setStatus] = useState('idle')

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  async function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    if (form.get('_gotcha')) return // spam bots fill hidden fields

    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) { setStatus('idle'); return }

    if (!site.formEndpoint) { setStatus('unconfigured'); return }

    setStatus('sending')
    try {
      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setValues({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const linkClass = 'flex items-center gap-3 font-medium transition hover:text-cobalt'

  return (
    <section id="contact" className="section border-t border-line">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            Have an opportunity in mind? Let’s build something meaningful.
          </h2>
          <p className="mt-4 max-w-md text-lg text-muted">
            I’m open to frontend internships and junior roles. Send a message and I’ll get back to you.
          </p>
          <ul className="mt-8 grid gap-4">
            <li>
              <a href={`mailto:${site.email}`} className={linkClass}>
                <Mail size={20} className="text-cobalt" aria-hidden="true" /> {site.email}
              </a>
            </li>
            {site.linkedin && (
              <li>
                <a href={site.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
                  <Linkedin size={20} className="text-cobalt" aria-hidden="true" /> LinkedIn
                </a>
              </li>
            )}
            {site.github && (
              <li>
                <a href={site.github} target="_blank" rel="noreferrer" className={linkClass}>
                  <Github size={20} className="text-cobalt" aria-hidden="true" /> GitHub
                </a>
              </li>
            )}
            <li className="flex items-center gap-3 text-muted">
              <MapPin size={20} className="text-cobalt" aria-hidden="true" /> {site.location}
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="grid gap-5 rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8"
          >
            <Field id="name" label="Name" error={errors.name}>
              <input
                id="name" name="name" type="text" autoComplete="name" className={inputClass}
                value={values.name} onChange={onChange}
                aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined}
              />
            </Field>
            <Field id="email" label="Email" error={errors.email}>
              <input
                id="email" name="email" type="email" autoComplete="email" className={inputClass}
                value={values.email} onChange={onChange}
                aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined}
              />
            </Field>
            <Field id="message" label="Message" error={errors.message}>
              <textarea
                id="message" name="message" rows={5} className={inputClass}
                value={values.message} onChange={onChange}
                aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined}
              />
            </Field>

            {/* honeypot: hidden from people, tempting for bots */}
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              <Send size={16} aria-hidden="true" />
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            <div aria-live="polite">
              {status === 'sent' && (
                <p className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                  Thank you. Your message has been sent and I’ll reply soon.
                </p>
              )}
              {status === 'error' && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-900">
                  Your message couldn’t be sent. Please try again, or email me at{' '}
                  <a className="font-semibold underline" href={`mailto:${site.email}`}>{site.email}</a>.
                </p>
              )}
              {status === 'unconfigured' && (
                <p className="rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-900">
                  This form isn’t connected to an email service yet, so nothing was sent. Please email me at{' '}
                  <a className="font-semibold underline" href={`mailto:${site.email}`}>{site.email}</a>.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
