export type ImpactStat = {
  value?: string;
  label: string;
  direction: "up" | "down";
};

export type ProjectVisual =
  | { type: "showcase"; title: string; slots: { label: string; detail: string }[]; caption?: string }
  | { type: "comparison"; columns: { heading: string; title: string; description: string }[] }
  | { type: "flow"; columns: { heading: string; steps: { title: string; description: string }[] }[] }
  | { type: "beforeAfter"; columns: { heading: string; items: string[] }[] }
  | { type: "groupedBars"; rows: { label: string; financing: number; cash: number }[]; note: string }
  | { type: "metricCards"; metrics: { value: string; label: string; detail: string }[] };

export type ProjectSection = {
  heading: string;
  paragraphs: string[];
  blocks?: (
    | { type: "paragraph"; text: string }
    | { type: "highlight"; text: string }
    | { type: "callout"; text: string }
    | { type: "subheading"; text: string }
    | { type: "quote"; text: string }
    | { type: "bullets"; items: string[] }
    | { type: "steps"; items: string[] }
    | { type: "image"; src: string; alt: string; caption?: string }
    | { type: "imagePlaceholder"; label: string }
  )[];
  quote?: string;
  imagePlaceholder?: string;
  image?: { src: string; alt: string; caption?: string };
  images?: { src: string; alt: string; caption?: string; fullSize?: boolean }[];
  imageLayout?: "grid" | "stacked";
  visual?: ProjectVisual;
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
  overviewStats: { label: string; value: string; detail?: string }[];
  sections: ProjectSection[];
  heroImage?: { src: string; alt: string };
  previewImage?: { src: string; alt: string };
  previewVideo?: { src: string; label: string; poster?: string };
  heroVideo?: { src: string; label: string; poster?: string };
  heroVisual?: Extract<ProjectVisual, { type: "showcase" }>;
  platform?: string;
  sourceUrl?: string;
};

const projectCatalog: Project[] = [
  {
    slug: "energystack",
    previewVideo: {
      src: "/case-studies/energystack/ecommerce-financing-walkthrough.mp4?v=237fa262",
      label: "EnergyStack ecommerce and financing walkthrough",
    },
    heroVideo: {
      src: "/case-studies/energystack/ecommerce-financing-walkthrough.mp4?v=237fa262",
      label: "EnergyStack ecommerce and financing walkthrough",
    },
    year: "2026",
    tags: ["Ecommerce", "Fintech"],
    title: "How user research helped turn EnergyStack into a $450K+ business",
    description: "Led product design from discovery to launch, transforming a vendor-led solar marketplace into a financing-powered commerce platform that generated $450K+ in sales.",
    stats: [
      { value: "$450K+", label: "Gross product sales in under a year", direction: "up" },
      { value: "89%", label: "Financing share of checkouts after redesign", direction: "up" },
    ],
    role: "Lead Product Designer",
    team: "2 Product Designers (including me) · 2 Frontend Engineers · 2 Backend Engineers",
    timeline: "2026",
    platform: "Web and Mobile",
    overviewStats: [
      { value: "$450K+", label: "Gross product sales in under a year" },
      { value: "8%", label: "Increase in total loan book value in the first 2 months" },
      { value: "89%", label: "Financing share of checkouts after redesign" },
    ],
    heroVisual: {
      type: "showcase",
      title: "EnergyStack product showcase",
      slots: [
        { label: "Desktop storefront", detail: "Final desktop storefront image" },
        { label: "Mobile experience", detail: "Final mobile experience image" },
      ],
      caption: "Space reserved for the final EnergyStack desktop storefront and mobile experience.",
    },
    sections: [
      {
        heading: "The idea: Making solar financing and shopping easier",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "At Rivy (formerly Payhippo), we provided financing for customers purchasing solar installations. But customers still needed to be connected to solar vendors to complete their purchases." },
          { type: "paragraph", text: "We saw an opportunity to bring both experiences together." },
          { type: "callout", text: "The initial idea was a marketplace where solar vendors could upload and manage their products, while customers could browse, purchase, and access financing through Rivy." },
          { type: "paragraph", text: "We conducted initial research, received positive feedback, and designed detailed user flows for vendors, customers, and internal administrators." },
          { type: "paragraph", text: "We then created a prototype to validate the concept with our existing solar vendor partners." },
        ],
        images: [
          { src: "/case-studies/energystack/solar-vendor-flow.svg", alt: "Solar vendor flow for the original EnergyStack marketplace concept", caption: "Solar vendor flow", fullSize: true },
          { src: "/case-studies/energystack/customer-flow.svg", alt: "Customer flow for the original EnergyStack marketplace concept", caption: "Customer flow", fullSize: true },
        ],
        imageLayout: "stacked",
      },
      {
        heading: "The interview that challenged our assumptions",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "We scheduled a prototype walkthrough with representatives from three solar vendors who were already working with Rivy." },
          { type: "paragraph", text: "The presentation went well on the surface. Nobody had negative feedback, but there wasn't much excitement either." },
          { type: "image", src: "/case-studies/energystack/user-research.png", alt: "EnergyStack prototype walkthrough with solar vendor representatives during a user research session" },
          { type: "paragraph", text: "So I asked a question:" },
          { type: "quote", text: "Who on your team would be responsible for uploading and managing your products?" },
          { type: "paragraph", text: "That was when we discovered the problem." },
          { type: "callout", text: "The vendors weren't interested in managing another e-commerce platform. They already had established sales processes for their high-ticket solar products, and maintaining an online catalogue meant additional work they didn't want." },
          { type: "paragraph", text: "Our research had validated the opportunity, but not the business model we had designed around it." },
        ],
        visual: {
          type: "comparison",
          columns: [
            { heading: "What we assumed", title: "Vendors would manage their storefronts.", description: "Giving vendors a marketplace would make it easier to connect them with customers." },
            { heading: "What we learned", title: "Vendors wanted sales, not more admin work.", description: "Managing product listings wasn't valuable enough for vendors to change their existing processes." },
          ],
        },
      },
      {
        heading: "From marketplace to commerce platform",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "The research prompted a broader team discussion about how we could solve the same customer problem without relying on vendors to manage storefronts." },
          { type: "paragraph", text: "We collectively decided to pivot." },
          { type: "callout", text: "Instead of building a multi-vendor marketplace, Rivy would own the customer-facing commerce experience, listing and selling solar products while working with vendors to supply and install them." },
          { type: "paragraph", text: "This introduced new operational responsibilities. The company brought in a Head of E-commerce, while we built pricing, inventory, and vendor fulfilment management into our existing internal admin portal." },
          { type: "paragraph", text: "As Lead Product Designer, I led product design through the transition, working with another designer and four engineers to translate the new direction into a working product." },
        ],
        visual: {
          type: "flow",
          columns: [
            { heading: "Original concept", steps: [
              { title: "Solar vendors", description: "Vendors upload and manage their own products" },
              { title: "Marketplace", description: "Hosts multiple vendor storefronts" },
              { title: "Customers", description: "Browse and purchase from vendors" },
            ] },
            { heading: "New approach", steps: [
              { title: "EnergyStack", description: "Rivy manages product listings, pricing, and commerce" },
              { title: "Customer checkout", description: "Customers pay outright or apply for financing" },
              { title: "Vendor fulfilment", description: "Partner vendors supply and install products" },
            ] },
          ],
        },
      },
      {
        heading: "Shipping the MVP in four weeks",
        paragraphs: [
          "With the new model agreed, we moved quickly to validate it.",
          "We prioritised a web-first experience to reduce development complexity and launch faster. Customers could browse solar products, add items to their cart, and choose between paying outright or checking out with Rivy financing.",
          "We also designed the internal tools needed to support product pricing, inventory, and vendor fulfilment.",
          "Working closely with engineering, we moved from the redesigned concept to a working MVP in approximately four weeks.",
          "We subsequently integrated EnergyStack into Rivy's mobile app.",
        ],
        images: [
          { src: "/case-studies/energystack/mvp-product-listing.svg", alt: "EnergyStack product listing with filters and solar bundles", caption: "Product listing" },
          { src: "/case-studies/energystack/mvp-order-details.svg", alt: "EnergyStack order details with items, payment status, and delivery information", caption: "Order details" },
          { src: "/case-studies/energystack/mvp-loan-details.svg", alt: "EnergyStack loan details with repayment schedule and loan status", caption: "Loan details" },
          { src: "/case-studies/energystack/mvp-mobile.svg", alt: "EnergyStack mobile homepage, product listing, and order confirmation screens", caption: "Mobile experience" },
        ],
        imageLayout: "stacked",
      },
      {
        heading: "Improving conversion by making financing visible earlier",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "After launch, we noticed a problem. EnergyStack was attracting visitors, but many weren't progressing to purchase." },
          { type: "paragraph", text: "We conducted a user research audit to understand why." },
          { type: "callout", text: "The biggest friction was cost. Solar installations were expensive, and although Rivy offered financing with as little as 10% upfront and repayment spread over several months, customers only discovered this option when they reached checkout." },
          { type: "image", src: "/case-studies/energystack/financing-before-checkout.svg", alt: "Original EnergyStack checkout where Rivy financing appeared only at the payment step", caption: "Before: Financing was hidden until checkout." },
          { type: "paragraph", text: "By then, many had already left." },
          { type: "paragraph", text: "We realised we were presenting financing as a payment method when it could be a reason to purchase in the first place." },
          { type: "subheading", text: "What we changed" },
          { type: "paragraph", text: "We redesigned how financing appeared throughout the shopping journey." },
          { type: "subheading", text: "Homepage: Show affordability from the beginning" },
          { type: "paragraph", text: "We introduced financing-led banners and product promotions highlighting the option to pay a fraction of the product cost upfront." },
          { type: "image", src: "/case-studies/energystack/mvp-homepage.svg", alt: "EnergyStack homepage promoting an upfront payment with the balance spread over 18 months", caption: "Homepage: Introducing affordability from the beginning." },
          { type: "subheading", text: "Product details: Make financing visible just where they see the prices" },
          { type: "paragraph", text: "Instead of showing only the full price, we displayed personalised financing breakdowns for each product, including the upfront payment and repayment options." },
          { type: "image", src: "/case-studies/energystack/financing-product-details.svg", alt: "EnergyStack product details with monthly payments, upfront cost, and a Get Financing action", caption: "Product details: Making the financing option tangible." },
          { type: "subheading", text: "Checkout: Preserve the choice and show possibility of financing still" },
          { type: "paragraph", text: "Customers could still pay outright or use financing, but they now understood their options before reaching checkout." },
          { type: "image", src: "/case-studies/energystack/financing-checkout.svg", alt: "Updated EnergyStack checkout with an order summary and visible financing breakdown", caption: "Checkout: Keeping financing visible alongside the order summary." },
        ],
      },
      {
        heading: "The impact",
        paragraphs: [],
        blocks: [
          { type: "callout", text: "Following the redesign, financing grew from 47% to 89% of checkouts." },
          { type: "paragraph", text: "By bringing affordability into the product discovery experience, we aligned EnergyStack more closely with what customers needed and Rivy's financing objectives." },
        ],
        visual: {
          type: "groupedBars",
          rows: [
            { label: "Before redesign", financing: 47, cash: 53 },
            { label: "After redesign", financing: 89, cash: 11 },
          ],
          note: "Financing's share of checkouts rose by 42 percentage points. These percentages show payment method share, not the overall visitor-to-purchase conversion rate.",
        },
      },
      {
        heading: "The business impact",
        paragraphs: [
          "EnergyStack quickly showed commercial promise.",
          "Within its first two months, the product generated approximately $35K in gross sales and contributed to an 8% increase in Rivy's total loan book value.",
          "In less than a year, EnergyStack generated over $450K in gross product sales, becoming a significant source of sales for the business.",
        ],
        visual: {
          type: "metricCards",
          metrics: [
            { value: "$35K", label: "Gross sales in the first 2 months", detail: "Early validation of the pivot" },
            { value: "+8%", label: "Increase in total loan book value", detail: "Growth in the first two months" },
            { value: "$450K+", label: "Gross product sales in less than a year", detail: "From marketplace concept to commercial success" },
          ],
        },
      },
      {
        heading: "What I learned",
        paragraphs: [
          "EnergyStack taught me that good product decisions aren't always about building what users initially say they want.",
          "Our first major breakthrough came from discovering that vendors weren't willing to do the work our marketplace required. The second came from realising that financing needed to influence purchasing decisions long before checkout.",
          "In both cases, the solution came from challenging how we'd approached the problem, rather than simply improving the interface.",
        ],
        quote: "Good research doesn't just validate designs. It can change the direction of a business.",
      },
    ],
  },
  {
    slug: "idiomscribe",
    year: "2025",
    tags: ["AI", "Healthcare"],
    title: "Reducing doctors' documentation time by 75% with AI",
    description:
      "Designed an AI-powered clinical documentation experience that helped doctors move from writing medical notes to reviewing AI-generated ones, supporting 6,173 consultation starts across five pilot hospitals in its first month.",
    stats: [
      { value: "6,173", label: "Consultation starts in the first month", direction: "up" },
      { value: "63.3%", label: "Consultation completion rate", direction: "up" },
      { value: "~650 hrs", label: "Estimated documentation time saved", direction: "up" },
      { value: "~75%", label: "Estimated reduction in note-taking time", direction: "up" },
    ],
    role: "Lead Product Designer",
    team: "Kerry (Frontend Lead) · Stanley (Backend Lead) · Osasu (AI & Data Engineer) · Taiwo Osinubi (PM)",
    timeline: "2025 Q3–Q4",
    overviewStats: [
      { label: "Consultations started in the first month", value: "6,173" },
      { label: "Consultation completion rate", value: "63.3%" },
      { label: "Estimated documentation time saved", value: "~650 hrs" },
      { label: "Estimated reduction in note-taking time", value: "~75%" },
    ],
    heroImage: {
      src: "/case-studies/helium-scribe/solution-v2.png",
      alt: "Helium Scribe consultation recording, transcript, and generated note interfaces",
    },
    previewVideo: {
      src: "/case-studies/helium-scribe/heliumscribe-cover.mp4",
      label: "Helium Scribe product demonstration",
      poster: "/case-studies/helium-scribe/solution-v2.png",
    },
    sections: [
      {
        heading: "The problem",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "In a busy Nigerian hospital, doctors can spend 20–40 minutes documenting a consultation after a patient leaves. Multiply that by 12 patients daily, and documentation becomes a second job." },
          { type: "paragraph", text: "Doctors reconstruct conversations from memory, often losing important clinical details. Notes become generic, incomplete, or delayed, affecting continuity of care." },
          { type: "subheading", text: "We spoke to 5 doctors across 5 Nigerian hospitals" },
          { type: "paragraph", text: "We interviewed doctors at hospitals already using HeliumOS, our Electronic Medical Record (EMR) system." },
          { type: "paragraph", text: "Three problems stood out:" },
          { type: "bullets", items: [
            "Delayed documentation: Doctors write notes after consultations, when clinical details are already fading.",
            "Incomplete records: Time pressure leads to shorthand and missing information needed for follow-up care.",
            "Compounding clinical risk: Incomplete notes accumulate across consultations, making continuity of care harder.",
          ] },
        ],
        image: {
          src: "/case-studies/helium-scribe/google-meet-view.png",
          alt: "Remote research session with doctors across Nigerian hospitals",
          caption: "User research session for Helium Scribe",
        },
      },
      {
        heading: "Why AI and not better templates?",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "We explored custom SOAP forms within HeliumOS, allowing doctors to create templates for different consultation types. But doctors still had to manually document every consultation." },
          { type: "paragraph", text: "Voice-to-text wasn't enough either. Raw transcripts contained small talk, irrelevant details, and unstructured clinical information." },
          { type: "paragraph", text: "The problem wasn't the form. It was the act of authoring." },
          { type: "paragraph", text: "AI could interpret conversations, extract clinically relevant information, and generate structured notes without doctors writing everything themselves." },
        ],
      },
      {
        heading: "Designing the solution",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "We designed Helium Scribe as a reusable AI-powered widget, initially integrated into HeliumOS." },
          { type: "paragraph", text: "This was both a product and business decision. The widget architecture allowed us to:" },
          { type: "bullets", items: [
            "Own the technology: Maintain control over the AI experience and underlying tech stack.",
            "Integrate across products: Reuse Helium Scribe across other Helium Health healthcare products.",
            "Create a standalone business: Offer the widget to healthcare partners and third-party EMR providers.",
          ] },
          { type: "paragraph", text: "The experience followed a simple workflow: Start consultation → Capture conversation → Generate note → Review and approve." },
          { type: "paragraph", text: "Helium Scribe listens during consultations and generates structured SOAP notes (Subjective, Objective, Assessment, Plan), matching doctors' existing documentation workflows." },
          { type: "paragraph", text: "Three design decisions were critical:" },
          { type: "bullets", items: [
            "Confidence flagging: Highlight uncertain or incomplete information for review.",
            "Section-level editing: Let doctors edit or regenerate individual sections without losing accurate content.",
            "Doctor approval: Require explicit approval before saving AI-generated notes to patient records.",
          ] },
          { type: "paragraph", text: "Our goal was to shift doctors from writing clinical notes to reviewing them." },
        ],
        imageLayout: "stacked",
        images: [
          { src: "/case-studies/helium-scribe/solution-view-1.png", alt: "Helium Scribe consultation recording and live transcript views" },
          { src: "/case-studies/helium-scribe/solution-view-2.png", alt: "Helium Scribe generated clinical note and mobile pairing views" },
        ],
      },
      {
        heading: "Then we hit a wall",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "Our first implementation of Helium Scribe was a desktop widget within HeliumOS." },
          { type: "paragraph", text: "During early testing, Dr. Lateef Akinola, Consultant Obstetrician and Gynecologist at Medison Specialist Women's Hospital & Fertility Assyst, challenged our biggest assumption." },
          { type: "paragraph", text: "Not every doctor works from a desk." },
          { type: "paragraph", text: "He moved between wards with his phone, rarely using a laptop during consultations. Other doctors also reported that laptop microphones picked up too much background noise, affecting transcription accuracy." },
          { type: "paragraph", text: "Our desktop-only experience didn't reflect how doctors actually worked." },
        ],
        image: {
          src: "/case-studies/helium-scribe/dr-lateef.png",
          alt: "Dr. Lateef Akinola using a phone during a clinical consultation",
          caption: "Dr. Lateef Akinola, Consultant Obstetrician and Gynaecologist at Medison Specialist Women's Hospital & Fertility Assyst in Lekki Phase 1, conducting a consultation with Helium Scribe.",
        },
      },
      {
        heading: "Building a mobile companion",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "We designed a mobile companion app that connects to the Helium Scribe desktop widget using QR code pairing and PIN authorization." },
          { type: "paragraph", text: "The workflow became:" },
          { type: "steps", items: [
            "The doctor opens a patient record and scans the QR code.",
            "The mobile app securely pairs with the EMR session.",
            "The phone captures consultation audio as the doctor moves.",
            "Helium Scribe generates a draft note in the desktop EMR for review.",
          ] },
          { type: "paragraph", text: "This allowed doctors to record consultations at the bedside and return to completed drafts without carrying a laptop." },
        ],
        imageLayout: "stacked",
        images: [
          { src: "/case-studies/helium-scribe/mobile-view-1.png", alt: "Helium Scribe mobile audio quality prompt and secure QR pairing" },
          { src: "/case-studies/helium-scribe/mobile-view-2.png", alt: "Helium Scribe mobile device authorization, recording, and transcript views" },
        ],
      },
      {
        heading: "The consent problem",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "One of our toughest challenges wasn't AI accuracy. It was patient consent." },
          { type: "paragraph", text: "Patients were being recorded without directly interacting with the app. We needed doctors to obtain verbal consent before recording without interrupting the natural consultation flow." },
          { type: "paragraph", text: "After several iterations, we designed a clear consent prompt that fit naturally into the start of each consultation." },
        ],
        image: {
          src: "/case-studies/helium-scribe/consent-capture-view.png",
          alt: "Helium Scribe patient consent capture flow",
        },
      },
      {
        heading: "Designing for accountability",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "Every consultation documented using Helium Scribe was tagged as AI-assisted in the patient record, allowing audit teams to identify and review AI-generated documentation." },
          { type: "paragraph", text: "Combined with explicit doctor approval, this kept clinicians in control of the final medical record." },
        ],
      },
      {
        heading: "Results and impact",
        paragraphs: [],
        blocks: [
          { type: "highlight", text: "6,173 consultations started across five pilot hospitals within the first month of launching HeliumScribe, with a 63.3% completion rate." },
          { type: "highlight", text: "~650 hours of clinical documentation time potentially saved, based on completed consultations and doctors' reported reduction in note-taking time from 12–15 minutes to just 3–4 minutes." },
          { type: "paragraph", text: "Doctors reported spending less time documenting consultations and feeling less exhausted after clinic hours." },
          { type: "paragraph", text: "The biggest change wasn't just faster documentation." },
          { type: "highlight", text: "It was moving doctors from writing clinical notes to reviewing and refining AI-generated documentation." },
        ],
        image: {
          src: "/case-studies/helium-scribe/pilot-performance.png",
          alt: "Helium Scribe performance chart showing consultation event volume and completion rates for November and December 2025",
        },
      },
      {
        heading: "What I learned",
        paragraphs: [],
        blocks: [
          { type: "subheading", text: "Clinical usefulness matters more than technical completeness." },
          { type: "paragraph", text: "Early AI-generated notes were grammatically correct and structurally valid, but doctors sometimes found them lacking clinical depth and appropriate medical terminology. Working directly with clinicians helped us make the documentation more clinically useful, with further refinement still needed." },
          { type: "subheading", text: "Real workflows challenge design assumptions." },
          { type: "paragraph", text: "The mobile companion came directly from observing Dr. Lateef Akinola's workflow. That experience reinforced why designing around actual clinical practices matters more than relying on assumptions about how doctors work." },
          { type: "subheading", text: "What I'd improve next" },
          { type: "highlight", text: "Build for Nigeria's multilingual clinical environment." },
          { type: "paragraph", text: "During the pilot, we discovered that consultations frequently involved Yoruba, Igbo, Pidgin, and other local languages alongside English. Our initial AI model couldn't reliably handle these conversations, limiting its usefulness for some doctors." },
          { type: "paragraph", text: "Expanding local language support and improving clinical terminology became key priorities for making HeliumScribe more reliable across different consultation settings." },
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
    year: "2023",
    tags: ["Fintech", "B2B"],
    title:
      "Streamlining bank account creation: From weeks of paperwork to a 21-minute digital process",
    description:
      "Tride helps non-profit organizations open and manage bank accounts. I designed an onboarding experience to help NGOs get an account sooner, without weeks of paperwork and back-and-forth.",
    stats: [
      { value: "21 min", label: "Fastest account creation", direction: "up" },
      { value: "50%", label: "Drop-off recovery", direction: "up" },
      { value: "57.1%", label: "Cohort completion", direction: "up" },
    ],
    role: "Lead Product Designer",
    team: "Jeremiah · Adebayo · Olamilekan · Ayomide · Isaiah",
    timeline: "2023",
    sourceUrl: "https://caculuz.framer.website/tride",
    heroImage: {
      src: "/case-studies/tride/dashboard-overview-uploaded.png",
      alt: "Tride account overview showing balances, project accounts, transactions, and disbursement updates",
    },
    previewImage: {
      src: "/case-studies/tride/hero.png",
      alt: "Tride onboarding case study cover showing the bank account setup experience",
    },
    previewVideo: {
      src: "/case-studies/tride/transfer-showcase.mp4",
      label: "Tride transfer experience demonstration",
      poster: "/case-studies/tride/hero.png",
    },
    overviewStats: [
      { label: "Fastest account creation", value: "21 min", detail: "From signup to completed onboarding" },
      { label: "Drop-off recovery", value: "50%", detail: "6 of 12 original drop-offs returned and completed" },
      { label: "Cohort completion", value: "57.1%", detail: "8 of 14 original users completed after improvements" },
    ],
    sections: [
      {
        heading: "Challenge and research",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "Opening a corporate bank account in Nigeria can take 4 to 18 weeks, and NGO accounts are no exception. My task was to design an onboarding experience that could get non-profits an account as early as possible while reducing the stress of paperwork and back-and-forth." },
          { type: "paragraph", text: "After speaking with six non-profit founders, the challenge became clear: they needed accounts in their organizations' names to scale. Most had started with personal bank accounts, but donors were beginning to question that arrangement." },
          { type: "paragraph", text: "They approached banks to open organization accounts, but the process stood in their way." },
          { type: "image", src: "/case-studies/tride/challenge-research.png", alt: "Three research findings about the challenges NGO founders faced opening a bank account" },
        ],
      },
      {
        heading: "Getting to work",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "As the product designer, my first task was to understand the compliance requirements for opening an NGO bank account in Nigeria and work with the team to find a suitable infrastructure partner." },
          { type: "paragraph", text: "Two discoveries shaped the approach:" },
          { type: "bullets", items: [
            "Not every piece of information requested by banks is a Central Bank of Nigeria compliance requirement.",
            "Banking infrastructure companies can power accounts through APIs, letting founders complete the process from home.",
          ] },
        ],
      },
      {
        heading: "How I solved this",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "I listed the information and documents required by our infrastructure partner and for CBN compliance. Then I asked: how might we make this long list less stressful for NGO founders while reducing the time it takes to fill it out?" },
          { type: "paragraph", text: "I organized the onboarding requirements into three groups, in the order founders were most likely to have them:" },
          { type: "image", src: "/case-studies/tride/availability-flow.svg", alt: "Onboarding groups: readily available, not so readily available, and might take a while to get" },
          { type: "bullets", items: [
            "Readily available — documents and information a founder can provide immediately.",
            "Not so readily available — items a founder may need to request from someone else, but that person can provide easily.",
            "Might take a while to get — documents the organization may not yet have or must apply for.",
          ] },
          { type: "image", src: "/case-studies/tride/onboarding-flow-diagram.png", alt: "Tride onboarding requirements mapped into three availability groups" },
          { type: "paragraph", text: "This structure let NGOs complete the application progressively instead of confronting every requirement at once." },
        ],
      },
      {
        heading: "One thing I made sure of",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "Founders could save their progress at any point and return to finish the application." },
          { type: "image", src: "/case-studies/tride/save-and-continue.png", alt: "Tride document-upload step with a save-and-continue option" },
        ],
      },
      {
        heading: "Wireframes",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "I created wireframes to visualize and test the flow before moving into detailed designs." },
          { type: "image", src: "/case-studies/tride/wireframes-updated.png", alt: "Tride onboarding wireframes showing organization details and document upload" },
        ],
      },
      {
        heading: "Final designs",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "After several iterations, we settled on the final onboarding designs." },
          { type: "image", src: "/case-studies/tride/final-design-1.png", alt: "Tride final design for organization information" },
          { type: "image", src: "/case-studies/tride/final-design-2.png", alt: "Tride final design for uploading organization documents" },
          { type: "image", src: "/case-studies/tride/final-design-4.png", alt: "Tride final design for the organization review status" },
          { type: "image", src: "/case-studies/tride/dashboard-overview-uploaded.png", alt: "Tride final design for the account overview" },
        ],
      },
      {
        heading: "Mobile responsiveness",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "We also designed the experience to work on mobile." },
          { type: "image", src: "/case-studies/tride/mobile-responsive.png", alt: "Four mobile screens showing Tride's responsive account setup flow" },
        ],
      },
      {
        heading: "The launch revealed a bigger problem",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "Within the first 10 days of launching, only 2 out of 14 organizations (14.3%) completed onboarding." },
          { type: "paragraph", text: "We reached out to users who had dropped off and discovered that the biggest obstacles were providing officers' information and uploading organizational documents." },
          { type: "paragraph", text: "These findings showed that while we had simplified the process of opening an account, some of the requirements still prevented organizations from completing it." },
          { type: "image", src: "/case-studies/tride/initial-conversion.png", alt: "Initial onboarding funnel showing 14 visits and two completed applications" },
          { type: "paragraph", text: "Here's what some customers said when we asked why they dropped off at the officers' information and organizational documents steps." },
          { type: "image", src: "/case-studies/tride/customer-feedback.png", alt: "Customer feedback explaining drop-offs at officer information and organization documents" },
        ],
      },
      {
        heading: "Removing the barriers to onboarding",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "We revisited the onboarding requirements with a legal professional and identified changes to reduce friction:" },
          { type: "bullets", items: ["Reduced the minimum number of trustees from three to two, removing an unnecessary requirement from the initial flow."] },
          { type: "image", src: "/case-studies/tride/revised-officers.png", alt: "Revised Tride officer-information step with two officers" },
          { type: "bullets", items: ["Introduced an account option for early-stage organizations, allowing eligible users to open an account with a ₦500,000 deposit limit while completing additional documentation for an upgrade."] },
          { type: "image", src: "/case-studies/tride/organization-types.png", alt: "Tride account-type selection for individuals and incorporated organizations" },
          { type: "bullets", items: ["Displayed the account limit for individual organizations and encouraged them to upgrade sooner."] },
          { type: "image", src: "/case-studies/tride/account-limit-updated.png", alt: "Tride dashboard showing the deposit limit and organization-document upgrade prompt" },
          { type: "paragraph", text: "These changes allowed more organizations to progress without being blocked by requirements they couldn't immediately fulfil." },
        ],
      },
      {
        heading: "Final results and impact",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "Six users returned and completed setup, opening bank accounts. The clearest test came from a new user who completed the entire onboarding process in 21 minutes—a sharp contrast with the weeks the traditional process could take." },
          { type: "paragraph", text: "They joined at 10:51 a.m. and completed setup at 11:12 a.m." },
          { type: "image", src: "/case-studies/tride/final-results-updated.png", alt: "Tride notifications showing a user joined at 10:51 and completed setup at 11:12" },
        ],
      },
    ],
  },
  {
    slug: "frelapay",
    year: "2022",
    tags: ["Worktech", "Payments"],
    title: "Simplifying work process and cross border payment for gig workers globally",
    description:
      "Frelapay is a worktech solution bridging the gap for freelancers and clients engaging worldwide without the need to establish a physical presence in foreign countries.",
    stats: [
      { label: "Contracts and NDAs before work begins", direction: "up" },
      { label: "Local-currency payments for both sides", direction: "up" },
    ],
    role: "Product Designer & Manager",
    team: "Eniola · Isaiah",
    timeline: "2022",
    sourceUrl: "https://caculuz.framer.website/frelapay",
    heroImage: {
      src: "/case-studies/frelapay/hero.png",
      alt: "Frelapay case study cover showing the product interface",
    },
    overviewStats: [
      { label: "Research focus", value: "Global freelancers" },
      { label: "Product sides", value: "Freelancers + businesses" },
      { label: "Role", value: "UX, UI & design system" },
    ],
    sections: [
      {
        heading: "Challenge",
        paragraphs: [
          "Frelapay's origin story begins with a founder whose international client delayed payment indefinitely and stopped communicating. Conversations with fellow freelancers showed that this was a common challenge in global freelancing.",
        ],
      },
      {
        heading: "Research and discovery",
        paragraphs: [
          "To understand the challenges faced by freelancers working with clients across the globe, I conducted research conversations with freelancers in my professional network and defined personas to focus those conversations.",
          "Three questions guided the research: How long has this problem existed? What methods have freelancers used to solve it? What existing solutions address the global-work friction between freelancers and clients?",
        ],
        image: {
          src: "/case-studies/frelapay/personas.png",
          alt: "Frelapay research personas",
        },
      },
      {
        heading: "The solution",
        paragraphs: [
          "The final solution was designed for both freelancers and businesses: legally tenable contracts and NDAs before work begins; milestone-based invoices so freelancers are paid per milestone; local-currency payments for clients and freelancers; and employer-of-record support to help mitigate taxes and work-permit issues.",
        ],
        image: {
          src: "/case-studies/frelapay/information-architecture.png",
          alt: "Frelapay information architecture",
        },
      },
      {
        heading: "Wireframes and final designs",
        paragraphs: [
          "I developed wireframes to map the holistic user experience, informed by the research and insights. After several iterations, the team settled on the final designs.",
        ],
        image: {
          src: "/case-studies/frelapay/wireframes.png",
          alt: "Frelapay wireframes mapping the user experience",
        },
      },
      {
        heading: "Final designs",
        paragraphs: [
          "The final designs cover contracts and agreements, invoices, project tracking, global payments, freelancer dashboards, and business/client dashboards.",
        ],
        images: [
          { src: "/case-studies/frelapay/contracts.png", alt: "Frelapay contracts and agreements final design" },
          { src: "/case-studies/frelapay/invoices.png", alt: "Frelapay invoices final design" },
          { src: "/case-studies/frelapay/project-tracking.png", alt: "Frelapay project tracking final design" },
          { src: "/case-studies/frelapay/global-payments.png", alt: "Frelapay global payments final design" },
          { src: "/case-studies/frelapay/freelancer-dashboard.png", alt: "Frelapay freelancer dashboard final design" },
          { src: "/case-studies/frelapay/business-dashboard.png", alt: "Frelapay business dashboard final design" },
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "As the product designer behind Frelapay, I brought the idea to life as an employer-of-record product facilitating seamless agreements, work collaboration, invoicing, and global payments for freelancers. The project was a rich learning experience, deeply immersed in development and customer conversations.",
        ],
      },
    ],
  },
];

// Intentionally hidden from the current portfolio direction at the owner's
// request. Keeping the source entries here makes the removal reversible.
export const projects = projectCatalog.filter(
  (project) => !["ember", "frelapay", "care-copilot"].includes(project.slug),
);

export function getProjectBySlug(slug: string) {
  return projectCatalog.find((p) => p.slug === slug);
}
