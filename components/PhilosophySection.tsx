"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function PhilosophySection() {
  return (
    <section className="py-20 md:py-28 bg-[#EDE6D8]/20 border-b border-ink/5">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#0B3C2A] mb-12 max-w-4xl tracking-tight">
            Design is how I think. <br />
            <span className="text-[#0B3C2A]/60">Building is how I prove it.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Interactive Image */}
          <Reveal>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-ink/10 shadow-sm bg-creamdark"
            >
              <img
                src="/workshop.jpg"
                alt="AI Product Design Workshop"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-ink/75 text-cream text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-md backdrop-blur-sm">
                AI Literacy Class · Lagos
              </div>
            </motion.div>
          </Reveal>

          {/* Right: Copy & CTA */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="text-base md:text-lg text-ink/80 leading-relaxed font-normal">
                I bridge the gap between design thinking and frontend engineering. I believe design is a hypothesis until it&apos;s validated by real users interacting with working code. 
              </p>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-sm md:text-base text-muted leading-relaxed">
                By writing code, building high-fidelity prototypes, and participating in engineering cycles, I make sure the intelligence of our AI models translates directly into trust, accessibility, and delightful user workflows.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-8">
                <a
                  href="/about"
                  data-cursor-hover
                  className="inline-flex bg-[#0B3C2A] text-cream text-xs font-semibold px-6 py-3 rounded-full hover:bg-ink hover:text-cream shadow-sm transition-all duration-300"
                >
                  Read my story →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
