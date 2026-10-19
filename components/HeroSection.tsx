"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "Recent work",
    text: "How I turn complex product problems into clear, shipped experiences.",
    href: "/projects",
    action: "View case studies",
    color: "#F5D7A1",
    rotate: -3.5,
  },
  {
    title: "About me",
    text: "Product designer, builder, teacher—and someone who believes good work should move the business.",
    href: "/about",
    action: "A bit about me",
    color: "#E5DFFC",
    rotate: 2.5,
  },
  {
    title: "I share my thoughts",
    text: "Notes, talks, and classes on AI, product design, and making technology useful.",
    href: "/content",
    action: "Read & watch",
    color: "#D7E8F6",
    rotate: -1.5,
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [0, -55]);

  return (
    <section ref={sectionRef} className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[760px] fine-grid opacity-100 pointer-events-none [mask-image:linear-gradient(to_bottom,black_68%,transparent)]" />
      <div className="max-w-content mx-auto px-7 md:px-14 lg:px-20 relative">
        <motion.div style={{ y: headlineY }} className="max-w-[1220px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#7C56F6]/15 bg-white/75 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7C56F6] shadow-sm"
          >
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[#7C56F6]" /></span>
            Available for selected opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 38 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="display-heading gradient-ink mt-8 text-[clamp(3rem,6.7vw,6.25rem)]"
          >
            Hi, I&apos;m Isaiah.<br />Product designer <span className="text-[#A48AFB]">&amp;</span> builder.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-8 max-w-3xl text-lg md:text-2xl leading-snug tracking-[-0.025em] text-ink/70"
          >
            Senior Product Designer with{" "}
            <span className="group/ml relative inline-flex cursor-help border-b border-dashed border-[#7C56F6]/60 text-[#4930A8]">
              ML
              <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-max max-w-[260px] -translate-x-1/2 translate-y-1 rounded-xl bg-[#241D35] px-4 py-2.5 text-center text-xs font-medium tracking-normal text-white opacity-0 shadow-xl transition duration-150 group-hover/ml:translate-y-0 group-hover/ml:opacity-100">
                Machine Learning and Human Computer Interaction
              </span>
            </span>{" "}
            background working at the intersection of design, engineering, AI, and business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.29 }}
            className="mt-7 max-w-3xl text-base md:text-lg leading-relaxed font-semibold text-ink/80"
          >
            Designing clinical AI products at{" "}
            <span className="group/helium relative inline-flex align-middle">
              <a href="https://heliumhealth.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#7C56F6]/15 bg-white/90 py-1.5 pl-1.5 pr-3 text-sm font-bold text-[#4930A8] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-[#F0ECFF] p-1.5">
                  <img src="/logos/helium-health.svg" alt="" className="h-full w-full object-contain" />
                </span>
                Helium Health (YC ’17)
              </a>
              <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-3 w-80 -translate-x-1/2 translate-y-2 rounded-[1.5rem] border border-ink/10 bg-white p-3 text-[#241D35] opacity-0 shadow-[0_22px_55px_rgba(36,29,53,.18)] transition duration-200 group-hover/helium:translate-y-0 group-hover/helium:opacity-100">
                <span className="flex h-32 items-center justify-center rounded-[1.1rem] bg-[#F0ECFF]">
                  <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-4 shadow-sm">
                    <img src="/logos/helium-health.svg" alt="Helium Health logo" className="h-full w-full object-contain" />
                  </span>
                </span>
                <span className="mt-3 block px-1 text-base font-bold">Helium Health</span>
                <span className="mt-1 block px-1 text-xs font-normal leading-relaxed text-ink/60">Technology and financial infrastructure helping healthcare providers deliver better care across Africa.</span>
              </span>
            </span>{" "}
            {" "}by day. Building products and teaching people how to use AI by night.
          </motion.div>
        </motion.div>

        <motion.div style={{ y: cardsY }} className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 md:px-4 items-stretch">
          {[cards[0], null, cards[1], cards[2]].map((card, index) => card ? (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 50, rotate: card.rotate }}
              animate={{ opacity: 1, y: 0, rotate: card.rotate, transition: { duration: 0.6, delay: 0.2 + index * 0.07, ease: [0.22, 1, 0.36, 1] } }}
              whileHover={{ y: index % 2 === 0 ? -40 : -32, x: index === 1 ? 8 : -5, rotate: index % 2 === 0 ? 3 : -3, scale: 1.07, zIndex: 30 }}
              whileTap={{ scale: 0.98 }}
              className="relative md:-ml-6 min-h-[270px] md:min-h-[325px] rounded-[1.75rem] p-6 flex flex-col justify-between border border-white/80 shadow-[0_24px_52px_rgba(36,39,37,0.10)]"
              style={{ backgroundColor: card.color, zIndex: 12 - index }}
              transition={{ type: "spring", stiffness: 560, damping: 20, mass: 0.55, delay: 0 }}
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink/50">0{index + 1}</span>
                <h2 className="mt-5 display-heading text-3xl md:text-[2.15rem] text-[#241D35]">{card.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">{card.text}</p>
              </div>
              <Link href={card.href} className="w-fit rounded-xl bg-[#241D35] text-white px-4 py-3 text-xs font-bold shadow-md hover:translate-x-1 transition-transform">
                {card.action} <span aria-hidden>↗</span>
              </Link>
            </motion.article>
          ) : (
            <motion.div
              key="portrait-card"
              initial={{ opacity: 0, y: 50, rotate: 1.8 }}
              animate={{ opacity: 1, y: 0, rotate: 1.8, transition: { duration: 0.6, delay: 0.27, ease: [0.22, 1, 0.36, 1] } }}
              whileHover={{ y: -38, x: 4, rotate: -2.5, scale: 1.075, zIndex: 30, transition: { type: "spring", stiffness: 560, damping: 20, mass: 0.55, delay: 0 } }}
              whileTap={{ scale: 0.98 }}
              className="relative z-20 md:-ml-6 min-h-[270px] md:min-h-[325px] overflow-hidden rounded-[1.75rem] border-[6px] border-white bg-[#2D2350] shadow-[0_24px_52px_rgba(36,39,37,0.15)]"
            >
              <img src="/photos/isaiah-hero.png" alt="Isaiah Adeleke" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold text-[#2D2350] shadow-sm">Isaiah Adeleke</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
