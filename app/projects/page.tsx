import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects — Isaiah Adeleke",
};

export default function ProjectsPage() {
  return (
    <section className="pt-36 md:pt-48 pb-24 md:pb-32">
      <div className="max-w-content mx-auto px-7 md:px-14 lg:px-20">
        <Reveal>
          <h1 className="display-heading gradient-ink text-[clamp(3rem,6vw,5.5rem)]">Shipped work &amp; the thinking behind it.</h1>
          <p className="mt-7 text-lg md:text-xl text-muted max-w-2xl">
            Products, AI systems, and design decisions worth reading about.
          </p>
        </Reveal>

        <div className="flex flex-col gap-16 md:gap-24 mt-20 md:mt-28">
          {projects.map((p, index) => (
            <ProjectCard key={p.slug} project={p} index={index} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
