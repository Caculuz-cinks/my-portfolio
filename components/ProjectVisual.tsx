import type { ProjectVisual as ProjectVisualData } from "@/data/projects";

function ImageSlot({ label, detail, compact = false }: { label: string; detail: string; compact?: boolean }) {
  return (
    <div className={`relative flex min-h-40 flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-[#7C56F6]/30 bg-gradient-to-br from-white via-[#F9F7FF] to-[#EDE8FF] p-5 ${compact ? "min-h-36" : "md:min-h-52"}`}>
      <span className="absolute right-5 top-5 text-[#7C56F6]/35" aria-hidden="true">
        <svg width="23" height="23" viewBox="0 0 24 24" fill="none"><rect x="2.5" y="3.5" width="19" height="17" rx="3" stroke="currentColor"/><circle cx="8" cy="9" r="1.5" fill="currentColor"/><path d="m4 17 5-5 3.5 3 3-3 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
      <span className="text-[10px] font-bold uppercase tracking-[.16em] text-[#7C56F6]">Image space</span>
      <div>
        <p className="text-base font-semibold text-[#2D2350] md:text-lg">{label}</p>
        <p className="mt-1 text-xs text-ink/50">{detail}</p>
      </div>
    </div>
  );
}

export default function ProjectVisual({ visual, compact = false }: { visual: ProjectVisualData; compact?: boolean }) {
  if (visual.type === "showcase") {
    return (
      <figure className={`rounded-[1.6rem] border border-[#7C56F6]/15 bg-[#F7F4FE] ${compact ? "p-4" : "p-5 md:p-7"}`}>
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[.14em] text-[#4930A8]">{visual.title}</p>
          <span className="flex gap-1.5" aria-hidden="true"><i className="h-2 w-2 rounded-full bg-[#7C56F6]/35" /><i className="h-2 w-2 rounded-full bg-[#7C56F6]/20" /><i className="h-2 w-2 rounded-full bg-[#7C56F6]/10" /></span>
        </div>
        <div className={`grid gap-3 ${visual.slots.length === 2 ? "sm:grid-cols-[1.4fr_.8fr]" : "sm:grid-cols-2"}`}>
          {visual.slots.map((slot) => <ImageSlot key={slot.label} {...slot} compact={compact} />)}
        </div>
        {visual.caption && !compact && <figcaption className="mt-4 text-xs leading-relaxed text-ink/50">{visual.caption}</figcaption>}
      </figure>
    );
  }

  if (visual.type === "comparison") {
    return (
      <div className="grid gap-4 md:grid-cols-2" aria-label="What we assumed versus what we learned">
        {visual.columns.map((column, index) => (
          <div key={column.heading} className={`rounded-[1.4rem] border p-6 md:p-7 ${index === 0 ? "border-ink/10 bg-[#F6F4F0]" : "border-[#7C56F6]/25 bg-[#F0EBFF]"}`}>
            <p className={`text-xs font-bold uppercase tracking-[.16em] ${index === 0 ? "text-ink/45" : "text-[#7C56F6]"}`}>{column.heading}</p>
            <h3 className="mt-8 text-xl font-bold leading-snug text-[#2D2350] md:text-2xl">{column.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">{column.description}</p>
          </div>
        ))}
      </div>
    );
  }

  if (visual.type === "flow") {
    return (
      <div className="grid gap-4 md:grid-cols-2" aria-label="Business model before and after the pivot">
        {visual.columns.map((column, columnIndex) => (
          <div key={column.heading} className={`rounded-[1.4rem] border p-5 md:p-6 ${columnIndex === 0 ? "border-ink/10 bg-[#F6F4F0]" : "border-[#7C56F6]/25 bg-[#F2EEFF]"}`}>
            <p className={`mb-5 text-xs font-bold uppercase tracking-[.16em] ${columnIndex === 0 ? "text-ink/45" : "text-[#7C56F6]"}`}>{column.heading}</p>
            {column.steps.map((step, index) => (
              <div key={step.title}>
                {index > 0 && <div className="py-2 text-center text-xl text-[#7C56F6]/60" aria-hidden="true">↓</div>}
                <div className="rounded-xl border border-white/80 bg-white/85 p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#7C56F6]/10 text-xs font-bold text-[#7C56F6]">{index + 1}</span>
                    <div><p className="font-bold text-[#2D2350]">{step.title}</p><p className="mt-1 text-xs leading-relaxed text-ink/55">{step.description}</p></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (visual.type === "beforeAfter") {
    return (
      <div className="rounded-[1.4rem] border border-[#7C56F6]/15 bg-[#F7F4FE] p-5 md:p-7">
        <p className="mb-5 text-xs font-bold uppercase tracking-[.15em] text-[#4930A8]">Financing across the shopping journey</p>
        <div className="grid gap-4 md:grid-cols-2">
          {visual.columns.map((column, columnIndex) => (
            <div key={column.heading} className="rounded-xl border border-white bg-white/85 p-5">
              <p className={`text-xs font-bold uppercase tracking-[.14em] ${columnIndex ? "text-[#7C56F6]" : "text-ink/45"}`}>{column.heading}</p>
              <ol className="mt-5 space-y-4">
                {column.items.map((item, index) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/70"><span className="font-bold text-[#7C56F6]">0{index + 1}</span><span>{item}</span></li>)}
              </ol>
              <div className="mt-6 border-t border-dashed border-[#7C56F6]/25 pt-4 text-xs font-medium text-ink/45">Image space · {column.heading.toLowerCase()} UI screens</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (visual.type === "groupedBars") {
    return (
      <figure className="rounded-[1.4rem] border border-[#7C56F6]/15 bg-[#F7F4FE] p-5 md:p-8">
        <figcaption className="text-xs font-bold uppercase tracking-[.15em] text-[#4930A8]">Share of checkouts by payment method</figcaption>
        <div className="mt-10 grid grid-cols-[36px_minmax(0,1fr)] gap-3 sm:grid-cols-[44px_minmax(0,1fr)] sm:gap-4" aria-hidden="true">
          <div className="relative h-64 text-[11px] text-ink/45 md:h-80">
            {[100, 75, 50, 25, 0].map((tick) => <span key={tick} className="absolute right-0 translate-y-1/2" style={{ bottom: `${tick}%` }}>{tick}%</span>)}
          </div>
          <div className="relative h-64 border-b border-[#B9AFD2] md:h-80">
            {[100, 75, 50, 25].map((tick) => <span key={tick} className="absolute inset-x-0 border-t border-dashed border-[#D9D2E8]" style={{ bottom: `${tick}%` }} />)}
            <div className="relative z-10 grid h-full grid-cols-2 gap-5 px-2 sm:gap-12 sm:px-6">
              {visual.rows.map((row) => <div key={row.label} className="flex h-full items-end justify-center gap-2 sm:gap-3">
                <div className="relative w-full max-w-28 rounded-t-xl bg-gradient-to-t from-[#5636C9] to-[#7C56F6] shadow-[0_8px_18px_rgba(124,86,246,.16)]" style={{ height: `${row.financing}%` }}><span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-bold text-[#4930A8]">{row.financing}%</span></div>
                <div className="relative w-full max-w-28 rounded-t-xl bg-[#B8ADD1]" style={{ height: `${row.cash}%` }}><span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs font-bold text-[#514866]">{row.cash}%</span></div>
              </div>)}
            </div>
          </div>
        </div>
        <div className="mt-3 ml-[48px] grid grid-cols-2 gap-5 text-center text-xs font-semibold text-[#2D2350] sm:ml-[60px] sm:text-sm">
          {visual.rows.map((row) => <span key={row.label}>{row.label}</span>)}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-7 gap-y-2 text-xs font-medium text-ink/65 sm:text-sm"><span className="flex items-center gap-2"><i className="h-3 w-3 rounded-full bg-[#7C56F6]" />Financing checkout</span><span className="flex items-center gap-2"><i className="h-3 w-3 rounded-full bg-[#B8ADD1]" />Cash checkout</span></div>
        <table className="sr-only"><caption>Share of checkouts by payment method</caption><thead><tr><th>Period</th><th>Financing checkout</th><th>Cash checkout</th></tr></thead><tbody>{visual.rows.map((row) => <tr key={row.label}><th>{row.label}</th><td>{row.financing}%</td><td>{row.cash}%</td></tr>)}</tbody></table>
        <p className="mt-6 border-t border-[#7C56F6]/10 pt-5 text-xs leading-relaxed text-ink/55">{visual.note}</p>
      </figure>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {visual.metrics.map((metric) => <div key={metric.value} className="rounded-[1.4rem] border border-[#7C56F6]/15 bg-gradient-to-br from-white to-[#F1ECFF] p-6">
        <p className="display-heading text-3xl text-[#7C56F6] md:text-4xl">{metric.value}</p>
        <p className="mt-4 text-sm font-semibold leading-snug text-[#2D2350]">{metric.label}</p>
        <p className="mt-2 text-xs leading-relaxed text-ink/55">{metric.detail}</p>
      </div>)}
    </div>
  );
}
