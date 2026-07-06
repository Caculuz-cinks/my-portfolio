"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { contentItems } from "@/data/content";

export default function OtherWorksSection() {
  // Mock dock icons with different gradients for a premium app feel
  const dockIcons = [
    { label: "Calculator", emoji: "🧮", bg: "from-orange-400 to-amber-500" },
    { label: "Camera", emoji: "📷", bg: "from-sky-400 to-indigo-500" },
    { label: "Calendar", emoji: "📅", bg: "from-rose-400 to-pink-500" },
    { label: "Notes", emoji: "📝", bg: "from-yellow-400 to-orange-500" },
    { label: "Browser", emoji: "🌐", bg: "from-emerald-400 to-teal-500" },
    { label: "Music", emoji: "🎵", bg: "from-purple-400 to-fuchsia-500" },
  ];

  return (
    <section className="py-20 md:py-28 border-t border-ink/5">
      <div className="max-w-content mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <Reveal>
          <div className="mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B3C2A] tracking-tight">
              Some other things I do
            </h2>
            <p className="mt-2 text-sm md:text-base text-muted max-w-xl">
              Side projects, digital utilities, design experiments, and public speaking.
            </p>
          </div>
        </Reveal>

        {/* Modular Grid */}
        <div className="flex flex-col gap-10">
          
          {/* Card 1: Secret Library of Apps */}
          <Reveal>
            <div className="bg-[#EDE6D8]/20 border border-ink/10 rounded-3xl p-6 md:p-10 flex flex-col gap-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] bg-[#0B3C2A]/10 text-[#0B3C2A] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Interactive Utilities
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-[#0B3C2A] mt-3 font-semibold">
                    The secret library of apps.
                  </h3>
                  <p className="mt-2 text-sm text-muted max-w-xl">
                    I design and code mini productivity tools that run natively in the browser. Focused on single-purpose utility, satisfying animations, and keyboard-first design.
                  </p>
                </div>
                <a
                  href="/shots"
                  className="bg-[#0B3C2A] text-cream text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-ink transition-colors duration-300 self-start md:self-center"
                >
                  View library
                </a>
              </div>

              {/* Mock App Window with macOS Dock */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 aspect-[21/9] flex flex-col justify-between items-center relative overflow-hidden shadow-lg select-none">
                {/* Window buttons */}
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                  <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
                </div>

                {/* Dashboard display */}
                <div className="flex-1 flex flex-col items-center justify-center text-center mt-4">
                  <span className="text-emerald-400 font-serif text-3xl font-bold tracking-tight">04:50</span>
                  <span className="text-slate-500 text-[9px] uppercase tracking-widest mt-1">Focus Timer running</span>
                </div>

                {/* macOS Style Dock */}
                <div className="bg-white/10 border border-white/5 backdrop-blur-md rounded-2xl px-4 py-2 flex gap-3.5 shadow-xl items-end mt-2 max-w-full overflow-x-auto scrollbar-none">
                  {dockIcons.map((icon, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.25, y: -8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-tr ${icon.bg} flex items-center justify-center text-base md:text-lg cursor-pointer shadow-md border border-white/10`}
                      title={icon.label}
                    >
                      {icon.emoji}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Talks & Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contentItems.map((talk) => (
              <Reveal key={talk.id}>
                <div className="bg-white border border-ink/10 rounded-2xl p-6 h-full flex flex-col justify-between hover:border-[#0B3C2A]/30 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div>
                    <span className="text-[9px] bg-creamdark text-ink/75 font-semibold px-2 py-0.5 rounded uppercase tracking-wider">
                      {talk.category.split(" · ")[0]}
                    </span>
                    <h4 className="font-serif text-lg leading-tight text-[#0B3C2A] font-semibold mt-4 mb-2">
                      {talk.title}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed">
                      {talk.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-ink/5 pt-4 mt-6 text-[10px] text-muted font-medium">
                    <span>Lagos, Nigeria</span>
                    <span className="bg-[#0B3C2A]/10 text-[#0B3C2A] px-2 py-0.5 rounded-full font-bold">
                      {talk.date}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Events Speaking Collage */}
          <Reveal>
            <div className="bg-[#EDE6D8]/20 border border-ink/10 rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <span className="text-[10px] bg-[#0B3C2A]/10 text-[#0B3C2A] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Community & Education
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-[#0B3C2A] mt-3 font-semibold">
                  Talks, panels &amp; public speaking
                </h3>
                <p className="mt-2 text-xs md:text-sm text-muted leading-relaxed">
                  I love sharing design principles with developer communities, coaching junior designers, and speaking on human-AI collaboration. Since 2023, I have hosted workshops and spoke at events reaching over 2,000+ creators.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-semibold text-[#0B3C2A]">
                  <span className="bg-white/80 border border-[#0B3C2A]/15 px-3 py-1 rounded-full">OSCA Fest Panelist</span>
                  <span className="bg-white/80 border border-[#0B3C2A]/15 px-3 py-1 rounded-full">Lagos Design Week</span>
                  <span className="bg-white/80 border border-[#0B3C2A]/15 px-3 py-1 rounded-full">UI/UX Host</span>
                </div>
              </div>

              {/* Stack of Polaroid-style mock event snaps */}
              <div className="relative h-48 md:h-56 flex items-center justify-center select-none overflow-hidden md:overflow-visible">
                {/* Snap 1 */}
                <div className="absolute w-36 h-40 bg-white border border-ink/5 shadow-md p-2 rounded rotate-[-6deg] translate-x-[-40px] translate-y-[-10px] z-0">
                  <div className="w-full h-[80%] bg-[#EDE6D8] rounded overflow-hidden">
                    <img src="/workshop.jpg" className="w-full h-full object-cover grayscale" alt="event snapshot" />
                  </div>
                  <p className="text-center font-serif text-[8px] font-bold pt-1.5 text-ink/60">Speaking @ OSCA &apos;24</p>
                </div>
                {/* Snap 2 */}
                <div className="absolute w-36 h-40 bg-white border border-ink/5 shadow-lg p-2 rounded rotate-[4deg] translate-x-[40px] translate-y-[10px] z-10 hover:z-20 hover:rotate-0 transition-all duration-300">
                  <div className="w-full h-[80%] bg-creamdark rounded overflow-hidden">
                    <img src="/profile.jpg" className="w-full h-full object-cover grayscale" alt="event snapshot" />
                  </div>
                  <p className="text-center font-serif text-[8px] font-bold pt-1.5 text-ink/60">Lagos Workshop &apos;25</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
