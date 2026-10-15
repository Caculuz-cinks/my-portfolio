"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { contentItems } from "@/data/content";

export default function OtherWorksSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-7 md:px-14 lg:px-20">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <h2 className="display-heading text-4xl md:text-6xl text-[#2D2350]">I share my thoughts.</h2>
              <p className="mt-5 max-w-2xl text-ink/65">Ideas from the intersection of AI, product design, teaching, and building useful things.</p>
            </div>
            <Link href="/content" className="rounded-xl bg-[#7C56F6] text-white px-5 py-3 text-xs font-bold w-fit">Explore everything →</Link>
          </div>
        </Reveal>

        <div className="page-card overflow-hidden divide-y divide-ink/10">
          {contentItems.slice(0, 3).map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              whileHover={{ x: 8, backgroundColor: "rgba(124, 86, 246, 0.04)" }}
              className="group p-6 md:p-9 grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-4 md:gap-8 items-center transition-colors"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#7C56F6]">{item.category}</p>
                <p className="mt-2 text-xs text-muted">{item.date}</p>
              </div>
              <div>
                <h3 className="font-sans text-xl md:text-2xl font-semibold tracking-[-0.04em] text-[#2D2350] group-hover:text-[#7C56F6] transition-colors">{item.title}</h3>
                <p className="mt-2 max-w-3xl text-sm text-ink/60">{item.description}</p>
              </div>
              <Link href={item.href ?? "/content"} className="text-xs font-semibold text-[#7C56F6] hover:text-[#4930A8]">
                {item.type === "writing" ? "Read article" : "Explore"} ↗
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
