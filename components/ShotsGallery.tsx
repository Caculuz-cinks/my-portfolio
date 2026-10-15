"use client";

import { useEffect, useRef, useState } from "react";
import ShotCard from "./ShotCard";
import { shots, type Shot } from "@/data/shots";

export default function ShotsGallery() {
  const paneRef = useRef<HTMLDivElement>(null);
  const region = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Shot | null>(null);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || hovering || focused || reducedMotion || selected) return;
    let frame = 0;
    let previous = 0;
    let visible = false;
    let position = paneRef.current?.scrollTop ?? 0;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    if (region.current) observer.observe(region.current);
    const animate = (time: number) => {
      const elapsed = previous ? Math.min(time - previous, 64) / 1000 : 0;
      previous = time;
      const pane = paneRef.current;
      if (visible && !document.hidden && pane) {
        const loopHeight = pane.firstElementChild?.getBoundingClientRect().height ?? 0;
        position += elapsed * 28;
        if (loopHeight && position >= loopHeight) position -= loopHeight;
        pane.scrollTop = position;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [paused, hovering, focused, reducedMotion, selected]);

  return (
    <div ref={region} className="mx-auto mt-14 max-w-[1440px] px-5 md:px-10 lg:px-14">
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted">Scroll to explore. Hover or focus a design to pause.</p>
        {!reducedMotion && <button type="button" onClick={() => setPaused((value) => !value)} aria-pressed={paused} className="rounded-full border border-[#7C56F6]/25 bg-white px-5 py-2.5 text-xs font-bold text-[#4930A8]">{paused ? "Resume motion ▶" : "Pause motion Ⅱ"}</button>}
      </div>
      <div onTouchStart={() => setPaused(true)} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
            <div ref={paneRef} tabIndex={0} aria-label="UI shots gallery. Scroll to browse designs." className="no-scrollbar h-[160dvh] min-h-[1000px] overflow-y-auto overscroll-contain focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7C56F6] md:h-[180dvh] md:min-h-[1500px]">
              {[false, true].map((duplicate) => (
                <div key={String(duplicate)} aria-hidden={duplicate || undefined} className="columns-2 gap-5 px-1 pb-1 md:columns-3 md:gap-7 xl:columns-4">
                  {shots.map((shot) => <ShotCard key={shot.id} shot={shot} decorative={duplicate} onView={(item) => { setSelected(item); dialogRef.current?.showModal(); }} />)}
                </div>
              ))}
            </div>
      </div>
      <dialog ref={dialogRef} aria-label={selected?.label ?? "UI shot"} onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }} className="fixed inset-0 m-auto h-[94dvh] max-h-none w-[96vw] max-w-none flex-col overflow-hidden rounded-2xl border-0 bg-[#FCFAF6] p-4 shadow-2xl backdrop:bg-[#241D35]/80 open:flex md:p-6">
        <div className="mb-4 flex shrink-0 items-center justify-between gap-4">
          <p className="text-sm font-semibold text-[#2D2350] md:text-base">{selected?.label}</p>
          <button type="button" autoFocus onClick={() => dialogRef.current?.close()} className="shrink-0 rounded-full bg-[#4930A8] px-4 py-2 text-xs font-bold text-white">Close ×</button>
        </div>
        {selected && <img src={selected.src} alt={selected.alt} className="min-h-0 w-full flex-1 object-contain" />}
      </dialog>
    </div>
  );
}
