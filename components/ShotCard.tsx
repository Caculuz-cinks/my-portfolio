"use client";

import { motion } from "framer-motion";
import type { Shot } from "@/data/shots";

const heightMap: Record<Shot["aspect"], string> = {
  tall: "aspect-[9/16]",
  wide: "aspect-[16/10]",
  square: "aspect-square",
};

export default function ShotCard({ shot }: { shot: Shot }) {
  return (
    <motion.div
      data-cursor-hover
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="break-inside-avoid mb-6 group cursor-pointer"
    >
      <div
        className={`relative w-full ${heightMap[shot.aspect]} rounded-2xl bg-[#EDE6D8] border border-ink/10 overflow-hidden flex items-center justify-center px-4 text-center`}
      >
        <span className="text-muted text-sm">{shot.alt}</span>
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cream text-sm tracking-wide">
            View →
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted">
        {shot.label} — {shot.company}
      </p>
    </motion.div>
  );
}
