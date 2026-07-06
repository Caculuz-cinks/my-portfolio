"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { shots } from "@/data/shots";

export default function UIShowcase() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-muted mb-4"
        >
          Selected UI Work
        </motion.p>
      </div>

      <div
        ref={scrollerRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="overflow-x-auto no-scrollbar"
      >
        <div
          className="flex gap-6 px-6 md:px-8"
          style={{
            animation: paused ? "none" : "shots-scroll 32s linear infinite",
          }}
        >
          {[...shots, ...shots].map((shot, i) => (
            <div
              key={i}
              data-cursor-hover
              className="shrink-0 w-[220px] md:w-[260px] aspect-[9/16] rounded-2xl bg-[#EDE6D8] border border-ink/10 shadow-sm flex items-center justify-center text-center px-4"
            >
              <span className="text-muted text-sm">{shot.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shots-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="max-w-content mx-auto px-6 md:px-8 mt-8">
        <Link
          href="/shots"
          data-cursor-hover
          className="text-sm underline underline-offset-4 hover:text-muted transition-colors"
        >
          View all shots →
        </Link>
      </div>
    </section>
  );
}
