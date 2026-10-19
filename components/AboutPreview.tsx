"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function AboutPreview() {
  return (
    <section className="py-8 md:py-12">
      <div className="max-w-content mx-auto px-7 md:px-14 lg:px-20">
        <div className="page-card p-5 md:p-7 overflow-hidden relative">
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-[#C7B8FF]/30 blur-3xl" />
          <div className="grid grid-cols-1 lg:grid-cols-[.58fr_1.42fr] gap-7 lg:gap-10 items-center relative">
            <Reveal>
              <motion.div whileHover={{ rotate: 0, scale: 1.015 }} className="relative aspect-[4/3] lg:aspect-square max-h-[260px] rounded-[1.4rem] overflow-hidden bg-[#E6E0F4] rotate-[-1.5deg] shadow-lg">
                <img src="/photos/home-office.png" alt="Isaiah working at his desk in a warmly lit home office" className="absolute inset-0 w-full h-full object-cover" />
              </motion.div>
            </Reveal>

            <div className="py-2">
              <div>
                <Reveal>
                  <h2 className="display-heading text-4xl md:text-5xl text-[#2D2350]">I design. I build. I grow.</h2>
                </Reveal>
                <Reveal delay={0.08}>
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70">For years, my skills felt like separate pieces of a puzzle, but with AI they are finally coming together.</p>
                </Reveal>
                <Reveal delay={0.12}>
                  <Link href="/about" className="mt-6 inline-flex rounded-xl bg-[#241D35] text-white px-5 py-3 text-xs font-bold w-fit hover:translate-x-1 transition-transform">Read my story →</Link>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
