import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About — Isaiah Adeleke",
};

const bioParagraphs = [
  "I'm Isaiah Adeleke — a Senior AI Product Designer and Co-founder building at the intersection of design, product strategy, and artificial intelligence.",
  "I grew up curious about how things work, studied Computer Engineering with a specialisation in AI and Human-Computer Interaction, and eventually found my way to product design — the place where technical systems meet human experience. That combination is where I do my best work.",
  "Most of my career has been spent building products in environments where the stakes are real. At Helium Health (YC S17), I shipped AI-powered clinical tools used by doctors across Nigeria — products that recovered thousands of hours of documentation time and brought specialist-level support into rural clinics that had never had access to it. At Tride, the company I co-founded, I'm building financial infrastructure for non-profits in Africa.",
  "I care deeply about how AI and humans work together. Not AI as a novelty, but AI as a genuine collaborator — one that makes people more capable without removing them from the decisions that matter. That question shapes everything I design.",
  "When I'm not designing, I'm teaching. I've run AI education classes for mixed audiences because I believe no one should be left behind in this shift. I'm based in Lagos, and looking for remote roles at global companies building things that matter.",
];

const credentials = [
  { title: "Computer Engineering", subtitle: "AI & HCI specialisation" },
  { title: "Helium Health (YC S17)", subtitle: "Senior AI Product Designer" },
  { title: "Tride", subtitle: "Co-founder & CEO" },
];

const skills = [
  "Product Design",
  "AI Product Strategy",
  "Human-AI Interaction",
  "Systems Thinking",
  "Conversation Design",
  "Prototyping",
  "Design Systems",
];

export default function AboutPage() {
  return (
    <section className="pt-40 md:pt-52 pb-24 md:pb-32">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <Reveal className="md:col-span-2 order-2 md:order-1">
            <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              Design is how I think. Building is how I prove it.
            </h1>
            <div className="space-y-5 text-ink/80 leading-relaxed max-w-xl">
              {bioParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-xs uppercase tracking-wide border border-ink/20 rounded-full px-4 py-2"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="order-1 md:order-2">
            <Reveal delay={0.1}>
              <div className="w-full aspect-[4/5] rounded-2xl bg-[#EDE6D8] border border-ink/10 flex items-center justify-center text-muted text-sm">
                Photo of Isaiah Adeleke
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 bg-white rounded-2xl p-6">
                <h2 className="font-serif text-lg mb-4">Credentials</h2>
                <div className="space-y-4">
                  {credentials.map((c) => (
                    <div key={c.title}>
                      <p className="text-sm font-medium">{c.title}</p>
                      <p className="text-sm text-muted">{c.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
