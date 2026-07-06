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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-8 shadow-sm flex flex-col justify-between h-full"
    >
      <p className="text-sm md:text-base leading-relaxed text-ink/80">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6">
        <p className="font-medium">{testimonial.name}</p>
        <p className="text-sm text-muted">{testimonial.role}</p>
      </div>
    </motion.div>
  );
}
