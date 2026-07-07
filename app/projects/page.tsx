import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects — Isaiah Adeleke",
};

export default function ProjectsPage() {
  return (
    <section className="pt-40 md:pt-52 pb-24 md:pb-32">
      <div className="max-w-content mx-auto px-5 md:px-6">
        <Reveal>
          <h1 className="font-serif text-5xl md:text-6xl">Projects</h1>
          <p className="mt-5 text-lg text-muted max-w-xl">
            Shipped products, AI systems, and design decisions worth reading about.
          </p>
        </Reveal>

        <div className="relative border-l border-ink/10 pl-8 md:pl-16 ml-8 md:ml-20 flex flex-col gap-16 md:gap-24 mt-20">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
