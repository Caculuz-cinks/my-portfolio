"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { contentItems } from "@/data/content";

export default function ContentList() {
  const [tab, setTab] = useState<"talk" | "writing">("talk");
  const filtered = contentItems.filter((c) => c.type === tab);

  return (
    <div>
      <Reveal>
        <div className="inline-flex bg-white rounded-full p-1 border border-ink/10">
          <button
            onClick={() => setTab("talk")}
            data-cursor-hover
            className={`text-sm px-5 py-2 rounded-full transition-colors ${
              tab === "talk" ? "bg-ink text-cream" : "text-ink/70"
            }`}
          >
            Talks &amp; Classes
          </button>
          <button
            onClick={() => setTab("writing")}
            data-cursor-hover
            className={`text-sm px-5 py-2 rounded-full transition-colors ${
              tab === "writing" ? "bg-ink text-cream" : "text-ink/70"
            }`}
          >
            Writing
          </button>
        </div>
      </Reveal>

      <div className="mt-12 divide-y divide-ink/10">
        {filtered.length === 0 && (
          <p className="py-12 text-muted">
            Nothing here yet — writing is on the way.
          </p>
        )}
        {filtered.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="py-8 flex flex-col md:flex-row md:items-start gap-6"
          >
            {item.hasPhoto && (
              <div className="shrink-0 w-full md:w-40 aspect-[4/3] rounded-xl bg-[#EDE6D8] border border-ink/10 flex items-center justify-center text-xs text-muted text-center px-2">
                Photo
              </div>
            )}
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wide text-muted mb-2">
                {item.category}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl">{item.title}</h3>
              <p className="mt-2 text-muted max-w-xl">{item.description}</p>
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
