// Illustrative interface previews, drawn with Tailwind. They are NOT screenshots.
// Set `image` in src/data/projects.js to show a real screenshot instead.

const Bar = ({ w = 'w-full', h = 'h-2', tone = 'bg-line' }) => (
  <div className={`${h} ${w} rounded-full ${tone}`} />
)

function Hrms() {
  const stats = ['Employees', 'Attendance', 'Leave', 'Payroll']
  const rows = [['Pending', 'bg-amber-100 text-amber-800'], ['Approved', 'bg-emerald-100 text-emerald-800'], ['Pending', 'bg-amber-100 text-amber-800']]
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-4 gap-2">
        {stats.map((s) => (
          <div key={s} className="rounded-lg border border-line bg-white p-2 shadow-soft">
            <p className="text-[10px] font-semibold text-muted">{s}</p>
            <div className="mt-1.5"><Bar w="w-2/3" h="h-2.5" tone="bg-cobalt/60" /></div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-line bg-white p-3 shadow-soft">
        <p className="mb-1 text-[11px] font-semibold">Leave requests</p>
        {rows.map(([label, tone], i) => (
          <div key={i} className="flex items-center justify-between gap-3 border-t border-line py-2">
            <div className="w-1/2 space-y-1.5"><Bar w="w-3/4" h="h-1.5" tone="bg-ink/70" /><Bar w="w-1/2" h="h-1.5" /></div>
            <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${tone}`}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Mood() {
  const bars = ['h-8', 'h-14', 'h-10', 'h-20', 'h-16', 'h-24', 'h-12']
  return (
    <div className="mx-auto w-full max-w-[260px] rounded-[1.4rem] border-2 border-ink/80 bg-white p-4 shadow-lift">
      <p className="text-[11px] font-semibold">Mood trend</p>
      <div className="mt-3 flex h-28 items-end gap-2">
        {bars.map((h, i) => (
          <div key={i} className={`flex-1 rounded-t-md bg-cobalt ${h}`} style={{ opacity: 0.35 + i * 0.09 }} />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-cobalt-tint p-2 text-[10px] font-semibold text-cobalt">Check in</div>
        <div className="rounded-lg bg-cobalt-tint p-2 text-[10px] font-semibold text-cobalt">Assessment</div>
      </div>
    </div>
  )
}

function Book() {
  return (
    <div className="grid grid-cols-[0.8fr_1fr] gap-4">
      <div className="grid place-items-center rounded-lg bg-white p-4 shadow-soft" style={{ perspective: '600px' }}>
        <div className="flex h-24 w-16 flex-col justify-end rounded-sm bg-cobalt p-2 shadow-lift" style={{ transform: 'rotateY(-24deg)' }}>
          <Bar w="w-3/4" h="h-1.5" tone="bg-white/80" />
          <div className="mt-1"><Bar w="w-1/2" h="h-1.5" tone="bg-white/50" /></div>
        </div>
      </div>
      <div className="space-y-2.5 rounded-lg border border-line bg-white p-3 text-[11px] font-semibold">
        <p>Book title</p><div className="h-5 rounded border border-line" />
        <p>Cover style</p><div className="h-5 rounded border border-line" />
        <span className="inline-block rounded-md bg-cobalt px-3 py-1.5 text-white">Place order</span>
      </div>
    </div>
  )
}

const views = { hrms: Hrms, mood: Mood, book: Book }

export default function ProjectPreview({ type, title, image, imageAlt }) {
  if (image) {
    return <img src={image} alt={imageAlt || `Screenshot of ${title}`} loading="lazy" className="h-full w-full rounded-xl object-cover object-top" />
  }
  const View = views[type] || Hrms
  return (
    <figure className="m-0">
      <div role="img" aria-label={`Illustrative interface preview for ${title}`}>
        <View />
      </div>
      <figcaption className="mt-3 text-xs text-muted">Illustrative interface preview</figcaption>
    </figure>
  )
}
