"use client";

import Reveal from "./Reveal";
import { contentItems } from "@/data/content";

export default function OtherWorksSection() {
  return (
    <section className="py-20 md:py-28 border-t border-ink/5">
      <div className="max-w-content mx-auto px-5 md:px-6">
        {/* Section Heading */}
        <Reveal>
          <div className="mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B3C2A] tracking-tight">
              I share my thoughts
            </h2>
            <p className="mt-2 text-sm md:text-base text-muted max-w-xl">
              Talks, classes, and articles about AI product design, literacy, and community education.
            </p>
          </div>
        </Reveal>

        {/* Talks & Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contentItems.map((talk) => (
            <Reveal key={talk.id}>
              <div className="bg-white border border-ink/10 rounded-2xl p-6 h-full flex flex-col justify-between hover:border-[#0B3C2A]/30 transition-all duration-300 shadow-sm hover:shadow-md">
                <div>
                  <span className="text-xs bg-creamdark text-ink/75 font-semibold px-2.5 py-1 rounded uppercase tracking-wider">
                    {talk.category.split(" · ")[0]}
                  </span>
                  <h4 className="font-serif text-lg leading-tight text-[#0B3C2A] font-semibold mt-4 mb-2">
                    {talk.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {talk.description}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-ink/5 pt-4 mt-6 text-xs text-muted font-medium">
                  <span>Lagos, Nigeria</span>
                  <span className="bg-[#0B3C2A]/10 text-[#0B3C2A] px-2 py-0.5 rounded-full font-bold">
                    {talk.date}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
