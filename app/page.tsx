import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProjectCard from "@/components/ProjectCard";
import OtherWorksSection from "@/components/OtherWorksSection";
import TestimonialCard from "@/components/TestimonialCard";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <PhilosophySection />

      {/* Timeline Projects Section */}
      <section className="py-20 md:py-28 bg-[#F5F0E8] overflow-hidden">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <Reveal>
            <div className="mb-16 md:mb-24">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0B3C2A] tracking-tight">
                Some recent work
              </h2>
              <p className="mt-2 text-sm md:text-base text-muted max-w-xl">
                These are my project case studies, highlighting product strategy, execution, and metric results.
              </p>
            </div>
          </Reveal>

          {/* Vertical Timeline container */}
          <div className="relative border-l border-ink/10 pl-8 md:pl-16 ml-8 md:ml-20 flex flex-col gap-16 md:gap-24">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          <Reveal>
            <div className="mt-16 ml-8 md:ml-20 pl-8 md:pl-16">
              <Link
                href="/projects"
                data-cursor-hover
                className="inline-flex bg-[#0B3C2A]/10 text-[#0B3C2A] text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[#0B3C2A] hover:text-cream transition-all duration-300 shadow-sm"
              >
                View all case studies →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <OtherWorksSection />

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-[#EDE6D8]/20 border-t border-ink/5">
        <div className="max-w-content mx-auto px-6 md:px-8">
          <Reveal>
            <div className="mb-14">
              <h2 className="font-serif text-2xl md:text-3xl text-[#0B3C2A] tracking-tight">
                Kind words
              </h2>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted">
                A few words from people I&apos;ve worked with
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
