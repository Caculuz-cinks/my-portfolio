"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import BrowserMockup from "./BrowserMockup";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <Link href={`/projects/${project.slug}`} data-cursor-hover className="block group relative w-full">
      {/* Timeline Year text */}
      <div className="absolute -left-[100px] md:-left-[160px] top-[26px] w-14 md:w-20 text-right font-serif text-sm md:text-base font-bold text-[#0B3C2A]/70 group-hover:text-[#0B3C2A] transition-colors duration-300">
        {project.year}
      </div>

      {/* Timeline Dot Node */}
      <div className="absolute -left-[39px] md:-left-[71px] top-[30px] w-3.5 h-3.5 rounded-full bg-[#0B3C2A] border-[3px] border-cream z-10 shadow-sm transition-transform duration-300 group-hover:scale-125" />

      {/* Content Grid */}
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-8 first:pt-0"
      >
        {/* Left Side: Metadata and Info */}
        <div className="flex flex-col items-start pr-0 md:pr-4">
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#0B3C2A]/70 mb-3 block">
            {project.tags.join(" · ")}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl leading-tight text-[#0B3C2A] group-hover:text-ink transition-colors duration-300 mb-4">
            {project.title}
          </h3>
          <p className="text-muted leading-relaxed text-sm md:text-base mb-6">
            {project.description}
          </p>

          {/* Stats Bar */}
          <div className="flex flex-col gap-2 mb-6">
            {project.stats.map((s, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-xs text-ink/75">
                <span className="text-[#0B3C2A] font-bold">
                  {s.direction === "up" ? "↑" : "↓"}
                </span>
                <span>{s.label}</span>
              </span>
            ))}
          </div>

          <span className="inline-flex bg-[#0B3C2A] text-cream text-[10px] uppercase font-bold tracking-wider px-4 py-2 rounded-full group-hover:bg-ink transition-all duration-300 shadow-sm">
            Read Study
          </span>
        </div>

        {/* Right Side: High Fidelity Browser Mockup */}
        <div className="w-full">
          <BrowserMockup slug={project.slug} title={project.title} />
        </div>
      </motion.article>
    </Link>
  );
}
