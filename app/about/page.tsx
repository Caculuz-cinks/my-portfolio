import Reveal from "@/components/Reveal";
import RichText from "@/components/RichText";
import ExperienceList from "@/components/ExperienceList";
import { profile } from "@/data/profile";

export const metadata = { title: "About — Isaiah Adeleke" };

export default function AboutPage() {
  return (
    <section className="pt-36 md:pt-48 pb-24 md:pb-32">
      <div className="max-w-content mx-auto px-7 md:px-14 lg:px-20">
        <Reveal>
          <h1 className="display-heading gradient-ink text-[clamp(3rem,6vw,5.5rem)] max-w-5xl">{profile.aboutTitle}</h1>
        </Reveal>

        <div className="mt-14 md:mt-20 page-card p-6 md:p-10 lg:p-12 grid grid-cols-1 items-start lg:grid-cols-[.65fr_1.35fr] gap-10 lg:gap-14">
          <div className="lg:sticky lg:top-28"><Reveal>
            <div className="aspect-[4/5] max-w-sm mx-auto rounded-[1.8rem] overflow-hidden bg-[#E6E0F4] shadow-lg">
              <img src="/photos/isaiah-about.jpg" alt="Isaiah Adeleke smiling" className="w-full h-full object-cover" />
            </div>
          </Reveal></div>
          <div className="py-2">
            <Reveal delay={0.06}>
              <div className="space-y-6 text-base md:text-lg leading-[1.8] text-ink/75">
                {profile.aboutParagraphs.map((paragraph) => <p key={paragraph}><RichText text={paragraph} /></p>)}
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-9 flex flex-wrap gap-3 border-t border-ink/10 pt-8">
                <a href={profile.talkUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-xl bg-[#241D35] px-6 py-4 text-sm font-bold text-white hover:bg-[#4930A8] transition-colors">Let&apos;s talk <span aria-hidden="true">↗</span></a>
                <a href={profile.resumeUrl} className="inline-flex items-center gap-3 rounded-xl border border-[#7C56F6]/25 bg-white px-6 py-4 text-sm font-bold text-[#4930A8] hover:bg-[#F1EDFF] transition-colors">Download résumé <span aria-hidden="true">↓</span></a>
              </div>
            </Reveal>
          </div>
        </div>

        <section className="mt-24 md:mt-36">
          <Reveal>
            <h2 className="display-heading text-4xl md:text-6xl text-[#2D2350]">Experience, year by year.</h2>
            <p className="mt-5 text-ink/60">Select a role to explore the work behind it.</p>
          </Reveal>

          <ExperienceList />
        </section>

        <section className="mt-24 md:mt-36 page-card p-7 md:p-12">
          <Reveal>
            <h2 className="display-heading text-3xl md:text-4xl text-[#2D2350]">Skills</h2>
            <div className="mt-7 flex flex-wrap gap-3">
              {profile.skills.map((skill) => <span key={skill} className="rounded-full border border-ink/12 bg-white/70 px-5 py-3 text-sm font-semibold text-[#2D2350]">{skill}</span>)}
            </div>
            <div className="mt-10 border-t border-ink/10 pt-8">
              <h2 className="display-heading text-3xl md:text-4xl text-[#2D2350]">Education</h2>
              <h3 className="mt-7 font-bold text-xl text-[#2D2350]">{profile.education.title}</h3>
              <p className="mt-2 text-sm text-muted">{profile.education.subtitle}</p>
            </div>
          </Reveal>
        </section>
      </div>
    </section>
  );
}
