import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudyNavigation from "@/components/CaseStudyNavigation";
import MoreCaseStudies from "@/components/MoreCaseStudies";
import ProjectVisual from "@/components/ProjectVisual";
import DiagramViewer from "@/components/DiagramViewer";
import Reveal from "@/components/Reveal";
import { projects, getProjectBySlug } from "@/data/projects";

function sectionId(heading: string) {
  return `section-${heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  return { title: project ? `${project.title} — Isaiah Adeleke` : "Project" };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();
  const imageFrameClass = project.slug === "energystack"
    ? "overflow-hidden rounded-none border border-ink/5 bg-white"
    : "overflow-hidden rounded-[1.4rem] border border-ink/10 bg-[#F0EDE8]";

  const navigationItems = [
    { id: "case-study-overview", label: "Overview" },
    ...project.sections.map((section) => ({
      id: sectionId(section.heading),
      label: section.heading,
    })),
  ];
  const otherProjects = projects.filter((item) => item.slug !== project.slug);

  return (
    <article className="pt-36 md:pt-48 pb-24 md:pb-32">
      <div className="max-w-content mx-auto px-7 md:px-14 lg:px-20">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-muted mb-4">
            {project.year} · {project.tags.join(" · ")}
          </p>
          <h1 className="display-heading gradient-ink max-w-5xl text-[clamp(2.45rem,4.7vw,4.7rem)]">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/65 md:text-xl">
            {project.description}
          </p>
        </Reveal>

        {/* Overview bar */}
        <Reveal delay={0.1}>
          <div
            id="case-study-overview"
            className={`mt-12 page-card scroll-mt-32 grid grid-cols-1 gap-7 p-7 sm:grid-cols-2 md:p-9 ${project.platform ? "lg:grid-cols-[.8fr_1.6fr_.7fr_.8fr_.8fr]" : "md:grid-cols-[.85fr_1.8fr_.7fr_.85fr]"}`}
          >
            <div>
              <p className="text-xs uppercase tracking-wide text-muted mb-2">
                Role
              </p>
              <p className="text-sm">{project.role}</p>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <p className="text-xs uppercase tracking-wide text-muted mb-2">
                Team
              </p>
              <p className="text-sm">{project.team}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted mb-2">
                Timeline
              </p>
              <p className="text-sm">{project.timeline}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted mb-2">
                Category
              </p>
              <p className="text-sm">{project.tags.join(" · ")}</p>
            </div>
            {project.platform && <div><p className="mb-2 text-xs uppercase tracking-wide text-muted">Platform</p><p className="text-sm">{project.platform}</p></div>}
          </div>
        </Reveal>

        {/* Hero mockup */}
        <Reveal delay={0.15}>
          {project.heroVideo ? (
            <div className="mt-12 w-full overflow-hidden rounded-[2rem] border border-white bg-[#F0EDE8] shadow-[0_30px_75px_rgba(36,39,37,0.12)]">
              <video src={project.heroVideo.src} poster={project.heroVideo.poster} aria-label={project.heroVideo.label} autoPlay muted loop playsInline preload="metadata" className="block h-auto w-full" />
            </div>
          ) : project.heroImage ? (
            <div className="mt-12 w-full overflow-hidden rounded-[2rem] border border-white bg-[#F0EDE8] shadow-[0_30px_75px_rgba(36,39,37,0.12)]">
              <img
                src={project.heroImage.src}
                alt={project.heroImage.alt}
                className="w-full h-auto"
              />
            </div>
          ) : project.heroVisual ? (
            <div className="mt-12"><ProjectVisual visual={project.heroVisual} /></div>
          ) : (
            <div className="mt-12 w-full aspect-[16/9] rounded-[2rem] bg-[#F0EDE8] border border-ink/10 flex items-center justify-center text-muted">
              {project.title.split(" ").slice(0, 4).join(" ")} — overview screen
            </div>
          )}
        </Reveal>

        {/* Impact stats row */}
        <Reveal delay={0.2}>
          <div className={`mt-12 grid grid-cols-1 gap-4 ${project.overviewStats.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}>
            {project.overviewStats.map((s) => (
              <div
                key={s.label}
                className="border border-white rounded-[1.4rem] p-6 bg-white/80 shadow-sm"
              >
                <p className="display-heading text-3xl md:text-4xl text-[#7C56F6]">{s.value}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
                {s.detail && <p className="mt-2 text-xs leading-relaxed text-ink/55">{s.detail}</p>}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Long-form sections */}
        <div className="relative mt-20">
          <CaseStudyNavigation items={navigationItems} />

          <div className="space-y-10">
          {project.sections.map((section) => (
            <section key={section.heading} id={sectionId(section.heading)} className="scroll-mt-32">
            <Reveal className="page-card p-7 md:p-10">
              <h2 className="display-heading text-3xl md:text-4xl text-[#2D2350] mb-6">
                {section.heading}
              </h2>
              <div className="space-y-5">
                {section.blocks
                  ? section.blocks.map((block, blockIndex) => {
                      if (block.type === "subheading") {
                        return (
                          <h3
                            key={blockIndex}
                            className="pt-3 text-xl font-bold leading-snug text-[#2D2350] md:text-2xl"
                          >
                            {block.text}
                          </h3>
                        );
                      }

                      if (block.type === "bullets") {
                        return (
                          <ul
                            key={blockIndex}
                            className="space-y-3 pl-5 text-ink/80 marker:text-[#7C56F6]"
                          >
                            {block.items.map((item) => (
                              <li key={item} className="list-disc leading-relaxed">
                                {item}
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      if (block.type === "steps") {
                        return (
                          <ol
                            key={blockIndex}
                            className="space-y-3 pl-5 text-ink/80 marker:font-bold marker:text-[#7C56F6]"
                          >
                            {block.items.map((item) => (
                              <li key={item} className="list-decimal pl-1 leading-relaxed">
                                {item}
                              </li>
                            ))}
                          </ol>
                        );
                      }

                      if (block.type === "quote") {
                        return <blockquote key={blockIndex} className="border-l-2 border-[#7C56F6] pl-5 text-lg font-semibold italic leading-relaxed text-[#2D2350]">{block.text}</blockquote>;
                      }

                      if (block.type === "highlight") {
                        return <p key={blockIndex} className="text-lg font-semibold leading-relaxed text-[#2D2350]">{block.text}</p>;
                      }

                      if (block.type === "callout") {
                        return <aside key={blockIndex} className="rounded-r-xl border-l-4 border-[#7C56F6] bg-[#7C56F6]/[0.055] px-5 py-5 text-lg font-semibold leading-relaxed text-[#2D2350] md:px-6">{block.text}</aside>;
                      }

                      if (block.type === "image") {
                        return (
                          <figure key={blockIndex} className="pt-3">
                            <div className={imageFrameClass}>
                              <img src={block.src} alt={block.alt} className="h-auto w-full" />
                            </div>
                            {block.caption && <figcaption className="mt-3 text-sm font-semibold text-[#2D2350]">{block.caption}</figcaption>}
                          </figure>
                        );
                      }

                      if (block.type === "imagePlaceholder") {
                        return (
                          <div key={blockIndex} className="flex min-h-56 items-center justify-center rounded-[1.4rem] border border-dashed border-[#7C56F6]/40 bg-[#7C56F6]/[0.035] px-6 py-12 text-center text-sm font-semibold text-[#6D5A97] sm:min-h-72">
                            {block.label}
                          </div>
                        );
                      }

                      return (
                        <p key={blockIndex} className="text-ink/80 leading-relaxed">
                          {block.text}
                        </p>
                      );
                    })
                  : section.paragraphs.map((p, pi) => (
                      <p key={pi} className="text-ink/80 leading-relaxed">
                        {p}
                      </p>
                    ))}
              </div>

              {section.quote && (
                <blockquote className="mt-6 border-l-2 border-ink pl-6 italic text-ink/70">
                  {section.quote}
                </blockquote>
              )}

              {section.visual && <div className="mt-8"><ProjectVisual visual={section.visual} /></div>}

              {section.image && (
                <figure className="mt-8">
                  <div className={imageFrameClass}>
                    <img
                      src={section.image.src}
                      alt={section.image.alt}
                      className="w-full h-auto"
                    />
                  </div>
                  {section.image.caption && (
                    <figcaption className="mt-4 border-l-[3px] border-[#7C56F6] py-1 pl-4 text-base font-semibold leading-relaxed text-[#2D2350] md:text-lg">
                      {section.image.caption}
                    </figcaption>
                  )}
                </figure>
              )}

              {section.images && (
                <div className={`mt-8 ${section.imageLayout === "stacked" ? "space-y-6" : "grid grid-cols-1 gap-4 sm:grid-cols-2"}`}>
                  {section.images.map((image) => image.fullSize ? <DiagramViewer key={image.src} src={image.src} alt={image.alt} title={image.caption ?? image.alt} square={project.slug === "energystack"} /> : (
                    <figure key={image.src}>
                      <div className={imageFrameClass}>
                        <img src={image.src} alt={image.alt} className="w-full h-auto" />
                      </div>
                      {image.caption && <figcaption className="mt-3 text-sm font-semibold text-[#2D2350]">{image.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              )}

              {section.imagePlaceholder && !section.image && (
                <div className="mt-8 w-full aspect-[16/9] rounded-xl border border-dashed border-ink/30 flex items-center justify-center text-muted text-sm text-center px-6">
                  {section.imagePlaceholder}
                </div>
              )}
            </Reveal>
            </section>
          ))}
          </div>
        </div>

        <MoreCaseStudies projects={otherProjects} />

        <Reveal delay={0.1}>
          <div className="mt-20 pt-8 border-t border-ink/10">
            <Link
              href="/projects"
              data-cursor-hover
              className="text-sm underline underline-offset-4 hover:text-muted transition-colors"
            >
              ← Back to projects
            </Link>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
