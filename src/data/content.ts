export type ContentItem = {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  hasPhoto: boolean;
  type: "talk" | "writing";
  href?: string;
  image?: string;
  metric?: string;
};

export const contentItems: ContentItem[] = [
  {
    id: "rivy-ai-design-process",
    category: "DESIGN PROCESS · RIVY",
    title: "I Tried to Use AI to Design for Our Users. Here's What Actually Worked.",
    description: "The experiments, failed attempts, and user context that made AI useful in a two-person design team's workflow.",
    date: "June 2026",
    hasPhoto: true,
    type: "writing",
    href: "/content/rivy-ai-design-process",
    image: "/writing/rivy-ai-design-process/cover.svg",
  },
  {
    id: "energystack-financing-checkouts",
    category: "USER RESEARCH · CONVERSION OPTIMISATION",
    title: "How we increased financing checkouts from 47% to 89% by changing where we introduced financing",
    description: "How communicating affordability earlier changed the way EnergyStack customers chose to pay for solar products.",
    date: "2026",
    hasPhoto: true,
    type: "writing",
    href: "/content/energystack-financing-checkouts",
    image: "/writing/energystack-financing-checkouts/cover.svg",
  },
  {
    id: "rivy-solar-calculator",
    category: "PRODUCT DESIGN · RIVY",
    title: "How a Small Design Change Generated 150+ New Leads for Rivy, Without Touching a Single Line of Backend Code",
    description: "A case study on the power of sequencing in product design.",
    date: "2026",
    hasPhoto: true,
    type: "writing",
    href: "/content/rivy-solar-calculator",
    image: "/writing/rivy-solar-calculator/cover.png",
  },
  {
    id: "brass-landing-page",
    category: "LANDING PAGES · DESIGN & BUSINESS",
    title: "Case study: How to design a landing page with high conversion rate",
    description: "A guide to crafting product landing pages with high conversion rate, using Brass as a case study.",
    date: "October 2021",
    hasPhoto: true,
    type: "writing",
    href: "/content/brass-landing-page",
    image: "/writing/brass-landing-page/hero.jpg",
  },
  {
    id: "practical-ai-workshop",
    category: "AI · WORKSHOP",
    title: "Practical AI workshop for work, business, and productivity",
    description: "An independent, hands-on workshop on using AI for everyday work, business, and productivity.",
    date: "2026",
    hasPhoto: true,
    type: "talk",
    href: "https://youtu.be/sQ6tmrkgaeY?si=3uIGP6eU5g8QZgMH",
    metric: "500+ live attendees",
    image: "https://i.ytimg.com/vi/sQ6tmrkgaeY/hqdefault.jpg",
  },
  {
    id: "introduction-to-design-zuri",
    category: "PRODUCT DESIGN · ZURI",
    title: "Introduction to Design",
    description: "An introductory design class I taught at Zuri.",
    date: "2022",
    hasPhoto: true,
    type: "talk",
    href: "https://www.youtube.com/live/xl4geTzd2YY?si=p8epOMx5XHCOqNmd",
    metric: "85K views on YouTube",
    image: "https://i.ytimg.com/vi/xl4geTzd2YY/hqdefault.jpg",
  },
];
