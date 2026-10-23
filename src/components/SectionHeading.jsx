import Reveal from './Reveal'

export default function SectionHeading({ title, intro }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </Reveal>
  )
}
