"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/data/projects";
import BrowserMockup from "./BrowserMockup";
import ProjectVisual from "./ProjectVisual";

export default function MoreCaseStudies({ projects }: { projects: Project[] }) {
  const [orderedProjects, setOrderedProjects] = useState(projects);

  if (orderedProjects.length === 0) return null;

  const shuffle = () => {
    setOrderedProjects((current) => [...current.slice(1), current[0]]);
  };

  return (
    <section className="mt-24 md:mt-32">
      <div className="page-card overflow-hidden px-5 py-10 md:px-10 md:py-14">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="display-heading text-4xl text-[#2D2350] md:text-6xl">
              More case studies
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/55 md:text-base">
              Shuffle through more product work and the decisions behind it.
            </p>
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7C56F6]">
            {orderedProjects.length} more to explore
          </span>
        </div>

        <div className="relative mt-8 h-[500px] sm:h-[420px] md:h-[390px]">
          {[...orderedProjects].reverse().map((project, reverseIndex) => {
            const index = orderedProjects.length - 1 - reverseIndex;
            const front = index === 0;

            return (
              <motion.article
                layout
                key={project.slug}
                animate={{
                  y: 28 + index * -14,
                  scale: 1 - index * 0.025,
                  rotate: index % 2 === 0 ? 0 : index * 0.35,
                  opacity: 1 - index * 0.08,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 27 }}
                style={{ zIndex: orderedProjects.length - index }}
                className={`absolute inset-x-0 top-0 overflow-hidden rounded-[1.6rem] border bg-[#FCFAF6] shadow-[0_24px_60px_rgba(45,35,80,.12)] ${
                  front ? "border-[#7C56F6]/20" : "border-ink/10"
                }`}
              >
                <div className="grid min-h-[340px] grid-cols-1 gap-0 sm:grid-cols-[.82fr_1.18fr]">
                  <div className="min-h-44 overflow-hidden bg-[#F0EDE8] p-4 sm:min-h-full">
                    {project.previewVideo ? (
                      <video
                        src={project.previewVideo.src}
                        poster={project.previewVideo.poster}
                        aria-label={project.previewVideo.label}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="h-full w-full rounded-[1.1rem] object-cover"
                      />
                    ) : project.heroImage ? (
                      <img
                        src={project.heroImage.src}
                        alt={project.heroImage.alt}
                        className="h-full w-full rounded-[1.1rem] object-cover"
                      />
                    ) : project.heroVisual ? (
                      <ProjectVisual visual={project.heroVisual} compact />
                    ) : (
                      <div className="flex h-full items-center">
                        <BrowserMockup slug={project.slug} title={project.title} />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-center p-6 md:p-9">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#7C56F6]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#4930A8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-4 line-clamp-4 display-heading text-2xl leading-tight text-[#2D2350] md:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-ink/55 md:text-base">
                      {project.description}
                    </p>
                    <Link
                      href={`/projects/${project.slug}`}
                      data-cursor-hover
                      tabIndex={front ? 0 : -1}
                      aria-hidden={!front}
                      className={`mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-[#2D2350] px-5 py-3 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#7C56F6] ${
                        front ? "pointer-events-auto" : "pointer-events-none"
                      }`}
                    >
                      Read case study <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {orderedProjects.length > 1 && (
          <div className="mt-5 flex justify-center">
            <motion.button
              type="button"
              data-cursor-hover
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={shuffle}
              className="inline-flex items-center gap-2 rounded-full bg-[#7C56F6] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(124,86,246,.28)]"
            >
              <span aria-hidden>↻</span> Shuffle
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
