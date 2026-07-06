export type ContentItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  hasPhoto: boolean;
  type: "talk" | "writing";
};

export const contentItems: ContentItem[] = [
  {
    id: "intro-to-ai",
    category: "AI EDUCATION · LAGOS",
    title: "Introduction to AI — Teaching the Next Generation",
    description:
      "AI Education class for a mixed professional audience, covering practical tools and foundational concepts.",
    date: "2025",
    hasPhoto: true,
    type: "talk",
  },
  {
    id: "no-one-left-behind",
    category: "COMMUNITY CLASS · LAGOS",
    title: "No One Gets Left Behind: AI Literacy in Lagos",
    description:
      "Community class on practical AI tools, built around the idea that access shouldn't depend on background.",
    date: "2025",
    hasPhoto: true,
    type: "talk",
  },
  {
    id: "human-ai-collaboration",
    category: "PRODUCT DESIGN TALK",
    title: "Designing Human-AI Collaboration",
    description:
      "A talk on AI product design principles, and what it means to design for collaboration rather than automation.",
    date: "2025",
    hasPhoto: false,
    type: "talk",
  },
];
