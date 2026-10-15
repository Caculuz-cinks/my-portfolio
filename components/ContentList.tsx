"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { contentItems } from "@/data/content";

export default function ContentList() {
  const [tab, setTab] = useState<"talk" | "writing">("writing");
  const filtered = contentItems.filter((c) => c.type === tab);

  return (
    <div>
      <Reveal>
        <div className="inline-flex bg-white/80 rounded-full p-1.5 border border-ink/10 shadow-sm">
          <button
            onClick={() => setTab("writing")}
            data-cursor-hover
            aria-pressed={tab === "writing"}
            className={`text-sm px-5 py-2 rounded-full transition-colors ${
              tab === "writing" ? "bg-[#7C56F6] text-white" : "text-ink/70"
            }`}
          >
            Writing
          </button>
          <button
            onClick={() => setTab("talk")}
            data-cursor-hover
            aria-pressed={tab === "talk"}
            className={`text-sm px-5 py-2 rounded-full transition-colors ${
              tab === "talk" ? "bg-[#7C56F6] text-white" : "text-ink/70"
            }`}
          >
            Talks &amp; Classes
          </button>
        </div>
      </Reveal>

      <div className="mt-12 divide-y divide-ink/10">
        {filtered.length === 0 && (
          <p className="py-12 text-muted">
            {tab === "writing" ? "More writing is on the way." : "Talks and classes will appear here when available."}
          </p>
        )}
        {filtered.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="py-8 flex flex-col md:flex-row md:items-start gap-6 group"
          >
            {item.type === "talk" && item.href ? (
              <Link href={item.href} aria-label={`Watch ${item.title}`} className="relative block aspect-video w-full shrink-0 overflow-hidden rounded-xl border border-ink/10 bg-[#241D35] md:w-60">
                {item.image && <img src={item.image} alt={`${item.title} — video preview`} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />}
                <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
                <span className="absolute left-3 top-3 rounded-md bg-[#E42B2B] px-2 py-1 text-[10px] font-bold text-white">YouTube</span>
                <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-xl text-[#4930A8] shadow-lg transition-transform group-hover:scale-110"><span className="ml-1">▶</span></span></span>
              </Link>
            ) : item.hasPhoto && (
              item.image && item.href ? (
                <Link href={item.href} className="shrink-0 block w-full md:w-40 aspect-[4/3] overflow-hidden rounded-xl bg-[#F0EDE8] border border-ink/10" aria-label={`Read ${item.title}`}>
                  <img src={item.image} alt={`${item.title} — article cover`} loading="lazy" className="h-full w-full object-cover" />
                </Link>
              ) : (
                <div className="shrink-0 w-full md:w-40 aspect-[4/3] rounded-xl bg-[#F0EDE8] border border-ink/10 flex items-center justify-center text-xs text-muted text-center px-2">
                  Photo
                </div>
              )
            )}
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wide text-muted mb-2">
                {item.category}
              </p>
              <h3 className="font-sans font-semibold tracking-[-0.04em] text-xl md:text-2xl text-[#2D2350] group-hover:text-[#7C56F6] transition-colors">
                {item.href ? <Link href={item.href}>{item.title}</Link> : item.title}
              </h3>
              <p className="mt-2 text-muted max-w-xl">{item.description}</p>
              {item.metric && <p className="mt-3 w-fit rounded-full border border-[#7C56F6]/15 bg-[#7C56F6]/5 px-3 py-1 text-xs font-semibold text-[#4930A8]">{item.metric}</p>}
              {item.href && <Link href={item.href} className={item.type === "talk" ? "mt-4 inline-flex items-center gap-2 rounded-xl bg-[#4930A8] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#7C56F6]" : "mt-4 inline-flex text-xs font-bold text-[#7C56F6] hover:text-[#4930A8]"}>{item.type === "writing" ? "Read article →" : <><span aria-hidden="true">▶</span> Watch Now</>}</Link>}
            </div>
            <div className="shrink-0 text-sm text-muted md:text-right">
              {item.date}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
