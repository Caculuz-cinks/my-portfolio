"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import BrowserMockup from "./BrowserMockup";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ project, index = 0, featured = false }: { project: Project; index?: number; featured?: boolean }) {
  const cardImage = project.previewImage ?? project.heroImage;

  return (
    <motion.article
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.75, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-5 md:gap-9"
    >
      <div className="md:pt-8">
        <div className="md:sticky md:top-32 flex items-center md:block gap-3">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#7C56F6] shadow-[0_0_0_7px_rgba(124,86,246,0.09)]" />
          <p className="display-heading text-3xl md:text-4xl text-[#4930A8]/15 md:mt-5">{project.year}</p>
        </div>
      </div>

      <Link href={`/projects/${project.slug}`} data-cursor-hover className="group page-card overflow-hidden block">
        <div className={`p-6 md:p-9 ${featured ? "" : "grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-8 lg:gap-10 items-start"}`}>
          <div className={featured ? "max-w-3xl" : ""}>
            <div className="flex flex-wrap items-center gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[#7C56F6]/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7C56F6]">{tag}</span>
              ))}
            </div>
            <h3 className="mt-6 display-heading text-3xl md:text-4xl lg:text-[2.75rem] text-[#2D2350] group-hover:text-[#7C56F6] transition-colors">
              {project.title}
            </h3>
            <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-ink/65">{project.description}</p>
            <dl className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              {project.stats.map((stat) => (
                <div key={stat.label} className="flex max-w-sm items-baseline gap-2">
                  <dt className="order-2 text-sm font-medium leading-relaxed text-ink/70">{stat.label}</dt>
                  <dd className="order-1 flex shrink-0 items-baseline gap-1.5 whitespace-nowrap text-base font-bold tracking-[-0.03em] text-[#4930A8] md:text-lg"><span aria-hidden="true" className="text-lg font-medium">{stat.direction === "down" ? "↘" : "↗"}</span>{stat.value}</dd>
                </div>
              ))}
            </dl>
            <span className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#241D35] px-5 py-3 text-xs font-bold text-white shadow-md transition-transform group-hover:translate-x-1">
              Read case study <span aria-hidden>→</span>
            </span>
          </div>

          <motion.div whileHover={{ rotate: 0, scale: 1.015 }} className={`${featured ? "mt-9" : ""} ${index % 2 === 0 ? "rotate-[.7deg]" : "rotate-[-.7deg]"} transition-transform duration-500`}>
            {project.previewVideo ? (
              <div className={`${featured ? "aspect-[16/9]" : "aspect-[4/3]"} overflow-hidden rounded-[1.4rem] border border-ink/10 bg-[#EAE5DC] shadow-lg`}>
                <video
                  src={project.previewVideo.src}
                  poster={project.previewVideo.poster}
                  aria-label={project.previewVideo.label}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                />
              </div>
            ) : cardImage ? (
              <div className={`${featured ? "aspect-[16/9]" : "aspect-[4/3]"} rounded-[1.4rem] overflow-hidden bg-[#EAE5DC] border border-ink/10 shadow-lg`}>
                <img src={cardImage.src} alt={cardImage.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.035] transition-transform duration-700" />
              </div>
            ) : project.heroVisual ? (
              <ProjectVisual visual={project.heroVisual} compact />
            ) : (
              <BrowserMockup slug={project.slug} title={project.title} />
            )}
          </motion.div>
        </div>
      </Link>
    </motion.article>
  );
}
