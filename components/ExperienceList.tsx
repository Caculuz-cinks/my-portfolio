"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export default function ExperienceList() {
  const [selected, setSelected] = useState(0);
  const job = profile.experience[selected];

  return (
    <div className="mt-12 grid items-start gap-6 md:grid-cols-[.95fr_1.25fr] md:gap-8">
      <div className="flex overflow-x-auto rounded-[1.5rem] border border-ink/10 bg-white/50 md:block" aria-label="Choose an experience">
        {profile.experience.map((item, index) => (
          <button
            key={`${item.company}-${item.period}`}
            type="button"
            aria-pressed={selected === index}
            aria-controls="experience-details"
            onClick={() => setSelected(index)}
            className={`flex w-64 shrink-0 items-center gap-4 border-r border-ink/10 px-6 py-5 text-left transition-colors last:border-r-0 md:w-full md:border-b md:border-r-0 md:last:border-b-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#7C56F6] ${selected === index ? "bg-[#7C56F6] text-white" : "text-[#2D2350] hover:bg-[#7C56F6]/5"}`}
          >
            <span className="min-w-0 flex-1">
              <span className={`block text-[10px] font-semibold uppercase tracking-[.1em] ${selected === index ? "text-white/70" : "text-ink/50"}`}>{item.period}</span>
              <span className="mt-2 block text-lg font-bold">{item.company}</span>
              <span className={`mt-1 block text-xs ${selected === index ? "text-white/80" : "text-ink/60"}`}>{item.role}</span>
            </span>
            <span aria-hidden="true" className={`text-xl ${selected === index ? "text-white" : "text-[#7C56F6]/45"}`}>→</span>
          </button>
        ))}
      </div>

      <div id="experience-details" className="page-card p-7 md:sticky md:top-28 md:p-9" aria-live="polite" aria-atomic="true">
        <p className="text-[10px] font-bold uppercase tracking-[.13em] text-[#7C56F6]">{job.period}</p>
        <h3 className="display-heading mt-5 text-3xl text-[#2D2350] md:text-4xl">{job.company}</h3>
        <p className="mt-3 text-base font-semibold text-[#2D2350]">{job.role}</p>
        <p className="mt-2 text-xs text-muted">{job.location}</p>
        <ul className="mt-8 list-disc space-y-5 pl-5 text-sm leading-relaxed text-ink/75 marker:text-[#7C56F6]">
          {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
      </div>
    </div>
  );
}
