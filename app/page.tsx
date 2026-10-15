import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import MentorshipSection from "@/components/MentorshipSection";
import ProjectCard from "@/components/ProjectCard";
import OtherWorksSection from "@/components/OtherWorksSection";
import TestimonialCollage from "@/components/TestimonialCollage";
import Reveal from "@/components/Reveal";
import Ticker from "@/components/Ticker";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="border-y border-ink/8 bg-white/35 py-8 md:py-10">
        <Ticker />
      </section>

      <AboutPreview />

      <section className="py-20 md:py-32" id="work">
        <div className="max-w-content mx-auto px-7 md:px-14 lg:px-20">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-7 mb-16 md:mb-24">
              <div>
                <h2 className="display-heading text-4xl md:text-6xl text-[#2D2350]">Some recent work.</h2>
                <p className="mt-6 max-w-2xl text-base md:text-lg text-ink/65">A quick look at products I&apos;ve shaped from AI to Health tech, Ecommerce, Fintech and others.</p>
              </div>
              <Link href="/projects" className="rounded-xl border border-ink/15 bg-white/60 px-5 py-3 text-xs font-bold text-[#2D2350] hover:bg-[#4930A8] hover:text-white transition-colors w-fit">View all work →</Link>
            </div>
          </Reveal>

          <div className="space-y-16 md:space-y-24">
            {projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} featured />)}
          </div>
        </div>
      </section>

      <OtherWorksSection />

      <MentorshipSection />

      <section className="py-20 md:py-32 overflow-hidden">
        <div className="max-w-content mx-auto px-7 md:px-14 lg:px-20">
          <Reveal>
            <h2 className="display-heading text-4xl md:text-6xl max-w-5xl text-[#2D2350]">What it&apos;s like working with me.</h2>
          </Reveal>

          <TestimonialCollage />
        </div>
      </section>
    </>
  );
}
