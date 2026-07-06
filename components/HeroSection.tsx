"use client";

import { motion } from "framer-motion";
import Ticker from "./Ticker";

export default function HeroSection() {
  const cardsData = [
    {
      id: 1,
      type: "note",
      title: "Co-founder @ Tride",
      text: "Building fintech solutions for African organizations, compressing bank onboarding from weeks to minutes.",
      bgColor: "bg-[#F9D371] text-[#1A1A1A]",
      rotation: "rotate-[-3deg] hover:rotate-[0deg]",
      zIndex: "hover:z-10",
    },
    {
      id: 2,
      type: "photo",
      src: "/profile.jpg",
      caption: "Yes, this is me! 👋",
      bgColor: "bg-white text-[#1A1A1A] p-3 shadow-md",
      rotation: "rotate-[2deg] hover:rotate-[0deg]",
      zIndex: "hover:z-10",
    },
    {
      id: 3,
      type: "note",
      title: "AI & Human-AI",
      text: "Designing intelligent systems. I focus on ambient documentation, specialist copilots, and thinking partners.",
      bgColor: "bg-[#A7D0CD] text-[#1A1A1A]",
      rotation: "rotate-[-1.5deg] hover:rotate-[0deg]",
      zIndex: "hover:z-10",
    },
    {
      id: 4,
      type: "cta",
      title: "Work with me",
      text: "Currently based in Lagos, Nigeria. Available for selected design consulting & advising.",
      actionText: "Let's chat",
      actionLink: "mailto:isaiahadeleke01@gmail.com",
      bgColor: "bg-[#E5D4ED] text-[#1A1A1A]",
      rotation: "rotate-[4deg] hover:rotate-[0deg]",
      zIndex: "hover:z-10",
    },
  ];

  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-8">
        {/* Top Header */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block bg-[#0B3C2A]/10 text-[#0B3C2A] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              Available for work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#0B3C2A]"
          >
            Hi, I&apos;m Isaiah. <br />
            <span className="text-[#0B3C2A]/70">Product Designer &amp; Builder.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-base md:text-lg text-muted max-w-2xl leading-relaxed font-normal"
          >
            I design intelligent systems where humans and AI collaborate. Formerly Helium Health (YC S17) and Co-founder at Tride. Based in Lagos, Nigeria.
          </motion.p>
        </div>

        {/* Sticker Cards Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-24"
        >
          {/* Horizontal Swiper for Mobile, Grid for Desktop */}
          <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible pb-6 md:pb-0 px-2 -mx-6 md:mx-0 scrollbar-none snap-x snap-mandatory">
            {cardsData.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className={`snap-center flex-shrink-0 w-[280px] md:w-auto h-[340px] md:h-[360px] rounded-2xl p-6 shadow-sm border border-ink/5 flex flex-col justify-between transition-all duration-300 ${card.bgColor} ${card.rotation} ${card.zIndex}`}
              >
                {card.type === "photo" ? (
                  <div className="flex flex-col h-full justify-between p-1 bg-white rounded-xl">
                    <div className="w-full h-[82%] rounded-lg overflow-hidden bg-creamdark relative border border-ink/5">
                      <img
                        src={card.src}
                        alt="Profile Picture"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <p className="text-center font-serif text-sm font-semibold tracking-tight pt-2 text-[#0B3C2A]">
                      {card.caption}
                    </p>
                  </div>
                ) : (
                  <>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider opacity-60 font-semibold">
                        {card.title}
                      </span>
                      <p className="mt-4 font-serif text-lg leading-snug font-medium">
                        {card.text}
                      </p>
                    </div>

                    {card.type === "cta" && card.actionText && card.actionLink ? (
                      <a
                        href={card.actionLink}
                        className="mt-6 inline-flex self-start bg-[#0B3C2A] text-cream text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-ink hover:text-cream transition-all duration-300 shadow-sm"
                      >
                        {card.actionText} →
                      </a>
                    ) : (
                      <span className="text-xl self-end opacity-20">★</span>
                    )}
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Logo Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-20 md:mt-28 border-t border-b border-ink/5 py-8 bg-[#EDE6D8]/20"
      >
        <p className="text-center text-xs uppercase tracking-widest text-muted mb-6 font-semibold">
          Companies and organizations I&apos;ve collaborated with
        </p>
        <Ticker />
      </motion.div>
    </section>
  );
}
