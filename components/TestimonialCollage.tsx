"use client";

import { useRef, useState, type CSSProperties } from "react";
import { testimonials } from "@/data/testimonials";

type Note = { name: string; role?: string; quote?: string; src?: string; alt?: string; color: string; tilt: string };

const screenshots = [
  { name: "Davis", src: "/testimonials/davis.png", color: "#BBA7F0", tilt: "-2deg", alt: "Davis Mulyango's recommendation praising Isaiah's UX instincts, thoughtful approach, speed, and collaboration." },
  { name: "Kerry", src: "/testimonials/kerry.png", color: "#A6C8EF", tilt: "1.5deg", alt: "Kerry Ehikioya's recommendation highlighting Isaiah's product thinking, empathy, problem solving, and work on AI healthcare solutions." },
  { name: "Samuel", src: "/testimonials/samuel.png", color: "#A6C69A", tilt: "-4deg", alt: "Samuel: Great designer, better teammate. You made design feel like a team effort, always open to questions and explaining thinking behind a decision. Go do great things." },
  { name: "Daniel", src: "/testimonials/daniel.png", color: "#E7BD56", tilt: "3deg", alt: "Daniel: You're a wonderful team player. You brought transformation to the product. Incredible personality. Wishing you the best in your next endeavour." },
  { name: "Yinka", src: "/testimonials/yinka.png", color: "#8AB5C5", tilt: "-2.5deg", alt: "Yinka: Working with you on the CF upgrade was a really good experience, smooth and quick. You brought the kind of positive attitude everyone would love to have on their team. Wishing you great success in your next endeavour." },
];

const notes: Note[] = [
  ...testimonials.map((item, index) => ({ ...item, color: index === 0 ? "#BBA7F0" : "#E7BD56", tilt: index === 0 ? "-4deg" : "3deg" })),
  ...screenshots,
];

export default function TestimonialCollage() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Note>(notes[0]);

  const card = (item: Note, index: number) => (
    <button
      key={item.name}
      type="button"
      aria-label={`Read ${item.name}'s full recommendation`}
      onClick={() => { setSelected(item); dialogRef.current?.showModal(); }}
      style={{ "--card-tilt": item.tilt, borderColor: item.color } as CSSProperties}
      className={`note note-${index} origin-center rotate-[var(--card-tilt)] rounded-2xl border-[5px] bg-white p-2 text-left shadow-[0_12px_28px_rgba(45,35,80,0.16)] transition-transform duration-300 ease-out hover:!z-30 hover:rotate-0 hover:scale-[1.035] focus-visible:!z-30 focus-visible:rotate-0 focus-visible:scale-[1.035] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4930A8] motion-reduce:transform-none motion-reduce:transition-none md:border-[6px]`}
    >
      <span className="mb-2 flex items-center justify-between gap-2 px-1 text-xs font-bold text-[#4930A8]">{item.name}<span aria-hidden="true">↗</span></span>
      {item.src ? <img src={item.src} alt={item.alt} loading="lazy" className="block h-auto w-full rounded-lg" /> : <div className="px-3 pb-3 md:px-4">
        <p className="line-clamp-4 text-sm leading-relaxed text-ink/75">&ldquo;{item.quote}&rdquo;</p>
        <p className="mt-4 border-t border-ink/10 pt-3 text-xs text-muted">{item.role}</p>
      </div>}
    </button>
  );

  return (
    <div className="mt-10 rounded-[2rem] border border-[#7C56F6]/15 bg-[#F0ECF7] px-5 pt-7 pb-2 md:px-10 md:pt-9" style={{ backgroundImage: "radial-gradient(#C9BEDD 0.7px, transparent 0.7px)", backgroundSize: "20px 20px" }}>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4930A8]">A few notes from my teammates</p>
        <p className="text-xs text-ink/60">Hover to bring forward · Tap to read ↗</p>
      </div>

      <div className="testimonial-stack">{notes.map(card)}</div>

      <dialog ref={dialogRef} aria-label={`${selected.name}'s recommendation`} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }} className="m-auto max-h-[95dvh] w-[calc(100%-2rem)] max-w-6xl overflow-auto rounded-2xl border-0 bg-white p-4 shadow-2xl backdrop:bg-[#241D35]/75 md:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="font-semibold text-[#2D2350]">A note from {selected.name}</p>
          <button type="button" autoFocus onClick={() => dialogRef.current?.close()} className="rounded-full bg-[#F0ECF7] px-4 py-2 text-sm font-semibold text-[#4930A8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Close ×</button>
        </div>
        {selected.src ? <img src={selected.src} alt={selected.alt} className="mx-auto max-h-[78dvh] w-auto max-w-full object-contain" /> : <div className="mx-auto max-w-2xl px-2 py-6 md:px-8">
          <p className="text-base leading-relaxed text-ink/80 md:text-xl">&ldquo;{selected.quote}&rdquo;</p>
          <p className="mt-6 font-semibold text-[#4930A8]">{selected.name}</p>
          <p className="mt-1 text-sm text-muted">{selected.role}</p>
        </div>}
      </dialog>
      <style jsx global>{`
        .testimonial-stack { position: relative; height: calc(450px + 68vw); isolation: isolate; }
        .testimonial-stack .note { position: absolute; width: 88%; }
        .testimonial-stack .note-0 { top: 0; left: 0; z-index: 1; }
        .testimonial-stack .note-1 { top: 76px; right: 0; z-index: 2; }
        .testimonial-stack .note-2 { top: 152px; left: 0; z-index: 3; }
        .testimonial-stack .note-3 { top: 228px; right: 0; z-index: 4; }
        .testimonial-stack .note-4 { top: 304px; left: 0; width: 68%; z-index: 5; }
        .testimonial-stack .note-5 { top: 380px; right: 0; width: 68%; z-index: 6; }
        .testimonial-stack .note-6 { top: 456px; left: 3%; width: 68%; z-index: 7; }
        @media (min-width: 640px) {
          .testimonial-stack { height: 680px; }
          .testimonial-stack .note-0 { top: 5px; left: 1%; width: 44%; }
          .testimonial-stack .note-1 { top: 15px; right: 1%; width: 44%; }
          .testimonial-stack .note-2 { top: 165px; left: 4%; width: 64%; }
          .testimonial-stack .note-3 { top: 270px; right: 1%; width: 64%; }
          .testimonial-stack .note-4 { top: 405px; left: 0; width: 29%; }
          .testimonial-stack .note-5 { top: 425px; left: 35%; width: 29%; }
          .testimonial-stack .note-6 { top: 400px; left: 70%; width: 29%; }
        }
        @media (min-width: 1024px) {
          .testimonial-stack { height: 730px; }
        }
      `}</style>
    </div>
  );
}
