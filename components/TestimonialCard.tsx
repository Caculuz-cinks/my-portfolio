"use client";

import { motion } from "framer-motion";
import type { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, rotate: index % 2 === 0 ? -1 : 1 }}
      whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -10, rotate: 0, scale: 1.01 }}
      className="bg-[#FCFAF6] border border-white rounded-[2rem] p-8 md:p-10 shadow-[0_22px_55px_rgba(36,39,37,0.08)] flex flex-col justify-between h-full"
    >
      <span className="display-heading text-5xl leading-none text-[#7C56F6]/25">“</span>
      <p className="mt-3 text-sm md:text-base leading-relaxed text-ink/75">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-9 pt-6 border-t border-ink/10">
        <p className="font-bold text-[#2D2350]">{testimonial.name}</p>
        <p className="mt-1 text-xs text-muted">{testimonial.role}</p>
      </div>
    </motion.div>
  );
}
