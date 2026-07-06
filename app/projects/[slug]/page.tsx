import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { projects, getProjectBySlug } from "@/data/projects";

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

  return (
    <article className="pt-40 md:pt-52 pb-24 md:pb-32">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-muted mb-4">
            {project.year} · {project.tags.join(" · ")}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight max-w-3xl">
            {project.title}
          </h1>
        </Reveal>

        {/* Overview bar */}
        <Reveal delay={0.1}>
          <div className="mt-12 border-t border-b border-ink/10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted mb-2">
                Role
              </p>
              <p className="text-sm">{project.role}</p>
            </div>
            <div>
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
          </div>
        </Reveal>

        {/* Hero mockup */}
        <Reveal delay={0.15}>
          <div className="mt-12 w-full aspect-[16/9] rounded-2xl bg-[#EDE6D8] border border-ink/10 flex items-center justify-center text-muted">
            {project.title.split(" ").slice(0, 4).join(" ")} — overview screen
          </div>
        </Reveal>

        {/* Impact stats row */}
        <Reveal delay={0.2}>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.overviewStats.map((s) => (
              <div
                key={s.label}
                className="border border-ink/10 rounded-xl p-6 bg-white"
              >
                <p className="font-serif text-2xl md:text-3xl">{s.value}</p>
                <p className="mt-1 text-sm text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Long-form sections */}
        <div className="mt-20 max-w-2xl mx-auto md:mx-0 space-y-16">
          {project.sections.map((section, i) => (
            <Reveal key={i}>
              <h2 className="font-serif text-2xl md:text-3xl mb-5">
                {section.heading}
              </h2>
              <div className="space-y-5">
                {section.paragraphs.map((p, pi) => (
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

              {section.imagePlaceholder && (
                <div className="mt-8 w-full aspect-[16/9] rounded-xl border border-dashed border-ink/30 flex items-center justify-center text-muted text-sm text-center px-6">
                  {section.imagePlaceholder}
                </div>
              )}
            </Reveal>
          ))}
        </div>

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
