"use client";

import type { Shot } from "@/data/shots";

export default function ShotCard({ shot, decorative = false, onView }: { shot: Shot; decorative?: boolean; onView: (shot: Shot) => void }) {
  return (
    <figure className="mb-8 break-inside-avoid md:mb-10">
      <button type="button" tabIndex={decorative ? -1 : undefined} aria-label={`View ${shot.label}`} onClick={() => onView(shot)} className="group/shot relative block w-full overflow-hidden rounded-2xl border border-ink/10 bg-white focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7C56F6]">
        <img src={shot.src} alt={decorative ? "" : shot.alt} width={shot.width} height={shot.height} loading="lazy" decoding="async" className="block h-auto w-full transition-transform duration-300 group-hover/shot:scale-[1.015] motion-reduce:transition-none" />
        <span className="absolute inset-0 flex items-center justify-center bg-[#241D35]/25 opacity-0 transition-opacity group-hover/shot:opacity-100 group-focus-visible/shot:opacity-100"><span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#4930A8]">View shot ↗</span></span>
      </button>
      <figcaption className="mt-3 text-[11px] font-medium leading-snug text-[#2D2350] md:text-sm">{shot.label}</figcaption>
    </figure>
  );
}
