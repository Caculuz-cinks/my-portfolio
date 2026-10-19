"use client";

import { useRef, useState } from "react";

export default function DiagramViewer({ src, alt, title, square = false }: { src: string; alt: string; title: string; square?: boolean }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);

  const fit = () => {
    setZoom(1);
    canvasRef.current?.scrollTo(0, 0);
  };

  return (
    <figure>
      <button type="button" onClick={() => { fit(); dialogRef.current?.showModal(); }} aria-label={`View ${title} in full`} className={`group/diagram relative block h-56 w-full overflow-hidden border bg-[#F0EDE8] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7C56F6] md:h-72 ${square ? "rounded-none border-ink/5" : "rounded-[1.4rem] border-ink/10"}`}>
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover object-top" />
        <span className="absolute inset-0 bg-gradient-to-t from-[#241D35]/60 via-transparent to-transparent" />
        <span className="absolute inset-0 flex items-center justify-center bg-[#241D35]/15 opacity-100 transition-opacity sm:opacity-0 sm:group-hover/diagram:opacity-100 sm:group-focus-visible/diagram:opacity-100"><span className="rounded-full bg-white px-5 py-3 text-sm font-bold text-[#4930A8] shadow-xl">View in full ↗</span></span>
        <span className="absolute bottom-4 left-5 text-sm font-semibold text-white">{title}</span>
      </button>

      <dialog ref={dialogRef} aria-label={title} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }} className="fixed inset-0 m-auto h-[94dvh] max-h-none w-[96vw] max-w-none flex-col overflow-hidden rounded-2xl border border-white/20 bg-[#FCFAF6] p-3 shadow-2xl backdrop:bg-[#241D35]/80 open:flex md:p-5">
        <div className="mb-3 flex shrink-0 flex-wrap items-center justify-between gap-3">
          <h2 className="font-semibold text-[#2D2350]">{title}</h2>
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Zoom out" disabled={zoom === 1} onClick={() => setZoom((value) => Math.max(1, value - 0.5))} className="h-9 w-9 rounded-lg border border-ink/15 bg-white font-bold disabled:opacity-30">−</button>
            <span className="w-12 text-center text-xs tabular-nums text-ink/70">{Math.round(zoom * 100)}%</span>
            <button type="button" aria-label="Zoom in" disabled={zoom === 4} onClick={() => setZoom((value) => Math.min(4, value + 0.5))} className="h-9 w-9 rounded-lg border border-ink/15 bg-white font-bold disabled:opacity-30">+</button>
            <button type="button" onClick={fit} className="h-9 rounded-lg border border-ink/15 bg-white px-3 text-xs font-semibold">Fit</button>
            <button type="button" autoFocus onClick={() => dialogRef.current?.close()} className="h-9 rounded-lg bg-[#4930A8] px-3 text-xs font-bold text-white">Close ×</button>
          </div>
        </div>
        <div ref={canvasRef} className="min-h-0 flex-1 overflow-auto rounded-xl border border-ink/10 bg-white">
          <div style={{ width: `${zoom * 100}%`, height: `${zoom * 100}%` }}>
            <img src={src} alt={alt} className="h-full w-full object-contain" />
          </div>
        </div>
      </dialog>
    </figure>
  );
}
