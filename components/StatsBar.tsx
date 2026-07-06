"use client";

import { motion } from "framer-motion";

export default function StatsBar() {
  const stats = [
    { value: "7+", label: "years of experience" },
    { value: "$33.5M", label: "raised by my designs" },
  ];

  return (
    <section className="bg-creamdark">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-content mx-auto px-6 md:px-8 py-20 md:py-28 flex flex-col sm:flex-row items-center justify-center gap-14 sm:gap-24 text-center"
      >
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-serif text-5xl md:text-6xl">{s.value}</p>
            <p className="mt-2 text-sm md:text-base text-muted">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
