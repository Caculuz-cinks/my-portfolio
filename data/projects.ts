export type ImpactStat = {
  label: string;
  direction: "up" | "down";
};

export type ProjectSection = {
  heading: string;
  paragraphs: string[];
  quote?: string;
  imagePlaceholder?: string;
};

export type Project = {
  slug: string;
  year: string;
  tags: string[];
  title: string;
  description: string;
  stats: ImpactStat[];
  role: string;
  team: string;
  timeline: string;
  overviewStats: { label: string; value: string }[];
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "idiomscribe",
    year: "2025",
    tags: ["AI", "Healthcare"],
    title:
      "Recovering 5,000+ hours of clinical time through ambient AI documentation",
    description:
      "Doctors in Nigeria were spending 20–40 minutes per patient on documentation. I designed an AI system that listens, transcribes, and generates clinical notes in real time — so doctors review instead of author.",
    stats: [
      { label: "5,000+ hours saved", direction: "up" },
      { label: "15 physicians in one hospital", direction: "up" },
    ],
    role: "Senior AI Product Designer",
    team: "1 PM · 2 engineers · 1 clinical advisor",
    timeline: "2025 Q1 – Q2",
    overviewStats: [
      { label: "Time saved per visit", value: "25–35 min" },
      { label: "Physicians onboarded", value: "15" },
      { label: "Documentation accuracy", value: "Reviewed, not authored" },
    ],
    sections: [
      {
        heading: "Doctors were drowning in paperwork, not patients",
        paragraphs: [
          "In Nigerian hospitals, physicians were spending 20 to 40 minutes per patient typing up consultation notes after the fact — time that should have gone to the next patient, or home. Documentation had quietly become the job, and care had become the thing squeezed around it.",
          "The problem wasn't a lack of effort. It was a workflow with no room for a human to just talk to another human without also acting as a stenographer.",
        ],
      },
      {
        heading: "Designing for trust before designing for speed",
        paragraphs: [
          "The obvious move was to bolt a transcription tool onto the consultation. The harder, more important move was earning clinical trust first. Doctors don't adopt a tool that might misquote a diagnosis — they abandon it, quietly, on day two.",
          "I designed the system around a simple principle: AI listens and drafts, the doctor reviews and confirms. Every generated note surfaces its source moment in the conversation, so a physician can verify a claim in seconds instead of re-reading a transcript.",
        ],
        imagePlaceholder: "Ambient listening interface — live consultation view",
      },
      {
        heading: "From transcript to clinical note",
        paragraphs: [
          "The real design problem wasn't speech-to-text — it was turning a messy, human conversation into a structured clinical note a hospital would actually accept. I designed the classification layer that separates symptoms, history, examination findings, and plan from natural conversation, and the review interface that lets a doctor edit any section without leaving their flow.",
        ],
        quote:
          "The first time I used it, I finished a full clinic day early. I didn't believe it until I saw my own calendar.",
        imagePlaceholder: "Structured note review screen — before/after editing",
      },
      {
        heading: "Piloting inside a real hospital, not a lab",
        paragraphs: [
          "We shipped to 15 physicians inside one hospital rather than a broad soft-launch. That let us watch real edge cases: interrupted consultations, multiple patients in one room, doctors switching languages mid-sentence. Each of those shaped a specific design decision rather than a generic one.",
        ],
        imagePlaceholder: "Pilot rollout — physician onboarding flow",
      },
      {
        heading: "Impact",
        paragraphs: [
          "Across the pilot, physicians recovered more than 5,000 hours of documentation time — time that went back into seeing patients, teaching, and, for a few doctors, going home on time for the first time in months. The system is now being scoped for a wider hospital-network rollout.",
        ],
      },
    ],
  },
  {
    slug: "care-copilot",
    year: "2025",
    tags: ["AI", "Healthcare"],
    title:
      "Putting specialist-level clinical knowledge inside every rural consultation",
    description:
      "Rural Nigerian clinicians make high-stakes diagnostic decisions alone. I designed a live AI decision support tool that surfaces differentials, suggests questions, and generates encounter notes — without replacing clinical judgment.",
    stats: [
      { label: "Reduced unnecessary referrals", direction: "up" },
      { label: "Shipped across Nigerian clinics", direction: "up" },
    ],
    role: "Senior AI Product Designer",
    team: "1 PM · 3 engineers · clinical review board",
    timeline: "2025 Q2 – Q3",
    overviewStats: [
      { label: "Clinics live", value: "Multiple regions" },
      { label: "Referral reduction", value: "Notable decrease" },
      { label: "Design principle", value: "Assist, never replace" },
    ],
    sections: [
      {
        heading: "One clinician, no specialist down the hall",
        paragraphs: [
          "In rural Nigerian clinics, a single general clinician often has to make decisions that would normally involve a specialist consult. There's no second opinion in the building — only a referral that could take weeks, if the patient can make the trip at all.",
        ],
      },
      {
        heading: "Designing support that doesn't undermine judgment",
        paragraphs: [
          "The line I had to hold throughout: this tool suggests, it never decides. I designed the differential panel to sit alongside the clinician's own notes, not on top of them — surfacing likely conditions and follow-up questions as prompts, with the clinician always the one who accepts, edits, or dismisses.",
          "Getting the tone of the suggestions right mattered as much as the accuracy. Confident-sounding AI output can quietly override a tired clinician's own judgment. I wrote and tested language that reads as a second opinion, not an answer key.",
        ],
        imagePlaceholder: "Live differential support panel during consultation",
      },
      {
        heading: "Encounter notes that write themselves, correctly",
        paragraphs: [
          "Alongside diagnostic support, the tool generates a structured encounter note from the conversation and the clinician's inputs — reducing the after-visit admin that used to eat into the next patient's slot.",
        ],
        quote:
          "It doesn't tell me what to think. It asks the question I would've asked if I weren't exhausted.",
        imagePlaceholder: "Auto-generated encounter note, editable by clinician",
      },
      {
        heading: "Shipping across clinics with very different constraints",
        paragraphs: [
          "Connectivity, device quality, and clinician comfort with technology varied enormously clinic to clinic. I designed a low-bandwidth mode and a deliberately minimal interface so the tool works as well on a low-end Android tablet as it does in a well-resourced facility.",
        ],
        imagePlaceholder: "Low-bandwidth mode — simplified clinic interface",
      },
      {
        heading: "Impact",
        paragraphs: [
          "Since rollout, clinics using the tool have seen a measurable drop in unnecessary specialist referrals — meaning patients get resolved locally more often, and the referral pathway is reserved for cases that genuinely need it.",
        ],
      },
    ],
  },
  {
    slug: "ember",
    year: "2025",
    tags: ["AI", "Consumer"],
    title:
      "Designing an AI thinking partner that asks better questions than it gives answers",
    description:
      "Busy professionals need structured clarity, not generic chat. I designed Ember's conversation intelligence from scratch — including the classification framework that determines what kind of support someone actually needs.",
    stats: [
      { label: "Rebuilt after first user testing", direction: "up" },
      { label: "In active testing", direction: "up" },
    ],
    role: "Founding Product Designer",
    team: "2 co-founders · 1 engineer",
    timeline: "2025 Q3 – present",
    overviewStats: [
      { label: "Status", value: "In active testing" },
      { label: "Core framework", value: "Conversation classification" },
      { label: "Redesigns", value: "1 full rebuild" },
    ],
    sections: [
      {
        heading: "Chat is easy to build, hard to make useful",
        paragraphs: [
          "Anyone can wire up a chat interface to a model. The actual design problem was different: busy professionals rarely need more words back at them — they need someone to organize the mess in their head into something they can act on.",
        ],
      },
      {
        heading: "The first version, and why it failed",
        paragraphs: [
          "The first version of Ember behaved like a generic assistant — responsive, capable, and forgettable. In early testing, people used it once and didn't come back. The problem wasn't the model's quality, it was that the product had no point of view on what kind of help someone needed in the moment.",
        ],
        imagePlaceholder: "Early version — generic chat interface (deprecated)",
      },
      {
        heading: "Building a classification framework from scratch",
        paragraphs: [
          "I designed a framework that classifies what a person actually brings into a conversation — a decision they're stuck on, a feeling they need to process, a plan they need structured, or a fact they just need confirmed — and routes Ember's response style accordingly. A stuck decision gets sharper questions. A vague worry gets space before it gets advice.",
          "This reframed the whole product: Ember's job became asking better questions, not producing longer answers.",
        ],
        quote: "It felt like it understood what I actually needed, not just what I typed.",
        imagePlaceholder: "Conversation classification framework — flow diagram",
      },
      {
        heading: "Rebuilding after real user testing",
        paragraphs: [
          "Once the classification framework was in place, I rebuilt the interface around it — surfacing Ember's reasoning about what kind of support it's offering, so the person can redirect if it's misread the moment.",
        ],
        imagePlaceholder: "Rebuilt interface — conversation intelligence surfaced",
      },
      {
        heading: "Where it stands",
        paragraphs: [
          "Ember is currently in active testing with a small group of professionals, with the classification framework as the foundation for everything else being built on top of it.",
        ],
      },
    ],
  },
  {
    slug: "tride",
    year: "2024",
    tags: ["Fintech", "B2B"],
    title:
      "Streamlining bank account creation from weeks of paperwork to a 21-minute digital process",
    description:
      "NGOs in Nigeria waited 4–18 weeks to open a bank account. I designed an onboarding flow that reduced that to 21 minutes — then rebuilt it when conversion data showed it wasn't working.",
    stats: [
      { label: "21-minute account opening", direction: "up" },
      { label: "6 users recovered post-redesign", direction: "up" },
    ],
    role: "Co-founder & Product Lead",
    team: "Founding team of 3",
    timeline: "2024 — present",
    overviewStats: [
      { label: "Old process", value: "4–18 weeks" },
      { label: "New process", value: "21 minutes" },
      { label: "Users recovered", value: "6, post-redesign" },
    ],
    sections: [
      {
        heading: "Banking that wasn't built for non-profits",
        paragraphs: [
          "NGOs and non-profits in Nigeria routinely waited between 4 and 18 weeks to open a bank account — a process built around corporate paperwork that assumed a legal team on staff. Tride exists because that wait was actively blocking organizations from doing their work.",
        ],
      },
      {
        heading: "Designing a 21-minute onboarding flow",
        paragraphs: [
          "I designed an end-to-end digital onboarding flow — document collection, verification, and compliance checks — that compressed weeks of back-and-forth into a single guided session an organization could complete in about 21 minutes.",
        ],
        imagePlaceholder: "Onboarding flow — document upload and verification",
      },
      {
        heading: "When the data said it wasn't working",
        paragraphs: [
          "Shipping fast isn't the same as shipping right. Conversion data after launch showed a meaningful drop-off partway through onboarding — the flow was fast, but it wasn't clear, and organizations were abandoning it at the compliance step.",
          "I went back into the data and the flow itself, rebuilt the compliance section around plain language and progressive disclosure instead of a wall of legal requirements, and shipped a second version.",
        ],
        quote: "This felt like the first time a bank actually explained what it needed, and why.",
        imagePlaceholder: "Redesigned compliance step — before/after",
      },
      {
        heading: "Impact",
        paragraphs: [
          "The redesign recovered 6 users who had dropped off in the original flow, and the 21-minute onboarding time held steady even with the added clarity — proof that the original speed wasn't coming at the cost of comprehension.",
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
