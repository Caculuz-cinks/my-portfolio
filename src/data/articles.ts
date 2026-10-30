export type ArticleBlock =
  | { type: "text" | "subheading" | "quote"; text: string }
  | { type: "bullets" | "steps"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "cards"; columns: { label: string; title: string; text: string }[] }
  | { type: "imageSpace"; title: string; slots: { label: string; detail: string }[]; caption?: string }
  | { type: "journey"; title: string; columns: { label: string; steps: string[]; note?: string }[] }
  | { type: "checkoutChart" }
  | { type: "metrics"; items: { value: string; label: string }[] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  source?: { href: string; label: string };
  cover?: { src: string; alt: string };
  hero?: ArticleBlock;
  sections: { heading?: string; blocks: ArticleBlock[] }[];
};

export const articles: Article[] = [
  {
    slug: "rivy-ai-design-process",
    title: "I Tried to Use AI to Design for Our Users. Here's What Actually Worked.",
    description: "I'm a senior product designer at Rivy. Over the past few months, I've been on an honest, messy, sometimes humbling journey trying to figure out how to make AI genuinely useful in our design process. This is that story — fumbles, dead ends, and all.",
    category: "Design process · Rivy",
    date: "June 2026",
    cover: { src: "/writing/rivy-ai-design-process/cover.svg", alt: "Illustration of the Rivy design process: human context, AI audit, and design judgment" },
    sections: [
      { blocks: [
        { type: "text", text: "I want to be upfront about something before I start: I'm not writing this from a position of having figured it all out. I'm writing it because I spent months trying things that didn't work, eventually landed on things that did, and I think that full picture is more useful to you than a clean success story with all the rough edges trimmed off." },
        { type: "text", text: "At Rivy, I've been the one pushing to embed AI into our design workflow. Not because it's trendy, but because we're doing a significant UX redesign, and the scope of the work is bigger than the bandwidth we have. There are two of us on the design side — myself and another product designer — and something had to give. AI felt like the right place to look for leverage." },
        { type: "text", text: "What I found was more complicated than I expected — and more interesting." },
      ] },
      { heading: "The problem we were actually trying to solve", blocks: [
        { type: "text", text: "Our users at Rivy aren't a homogeneous group. We serve people across a pretty wide spectrum of digital familiarity — from users who navigate apps with complete confidence, to users who are doing this kind of thing seriously for the first time. That mix is common in the markets we operate in, but it creates a genuinely hard design challenge: something that feels intuitive to one end of your user base can feel completely foreign to the other." },
        { type: "text", text: "Good UX for Rivy means designing for both. And doing that well, consistently, across dozens of flows and screens — without the bandwidth to run user research on every single iteration — is exactly the kind of problem I thought AI could help with." },
        { type: "text", text: "What I didn't anticipate was how much groundwork I'd have to lay before the AI could actually be useful." },
      ] },
      { heading: "The experiments that flopped — and why I'm glad I ran them", blocks: [
        { type: "text", text: "Let me save you some time by walking through the things I tried that didn't work. Not to be discouraging, but because knowing where AI currently falls short is genuinely useful information." },
        { type: "text", text: "My first instinct was to close the loop between Claude Code and our actual design system. I connected Rivy's Figma design system to Claude Code via the Figma MCP — which, technically, worked. The connection was live. Claude Code could see our components, our tokens, our documented patterns. Then I asked it to generate a design system markdown file so that anything Claude Code produced would stay in sync with what we'd already built in Figma." },
        { type: "text", text: "It generated the file. It looked thorough. And then when Claude Code actually started producing design outputs, they were... wrong. Not catastrophically, but enough that they weren't usable. The spacing was off. Components were being used in ways that didn't match how we'd defined them. The AI had read the design system; it just hadn't really understood it in the way a designer would." },
        { type: "cards", columns: [
          { label: "Attempt 01 · Partial", title: "Claude Code + Figma MCP", text: "Generated a design system .md file — but outputs still drifted from our actual system. Could read it; couldn't truly apply it." },
          { label: "Attempt 02 · Flopped", title: "Claude Design", text: "Fed our full design system to Claude Design. The results didn't match our direction. Not close enough to be usable." },
          { label: "Attempt 03 · Worst result", title: "Google AI Studio", text: "Generated designs completely disconnected from our design system. Entirely the wrong aesthetic direction." },
        ] },
        { type: "text", text: "When Claude Design launched, I tried that too — fed it our design system, ran the same experiment. The outputs were more visually coherent, but still not where we needed them to be. Not our aesthetic, not our component logic. And then I tried Google AI Studio for design generation. That was the worst of the three — the outputs had no relationship to our design system at all. Wrong everything." },
        { type: "quote", text: "The AI had read the design system. It just hadn't really understood it in the way a designer would." },
        { type: "text", text: "After all of that, I arrived at a conclusion I think is worth stating plainly: AI is not yet at the point where it can reliably generate production-ready UI designs that stay faithful to an established design system. At least not with the tools available right now, and not for our level of specificity. If someone tells you otherwise, ask to see the outputs." },
        { type: "text", text: "That conclusion sounds like a dead end. It wasn't. It actually forced me toward something more useful." },
      ] },
      { heading: "The pivot: improve the process, not the output", blocks: [
        { type: "text", text: "Once I accepted that AI wasn't going to generate our UI for us, I stopped asking it to. Instead, I asked a different question: where in the design process can AI actually reduce friction and accelerate good decision-making?" },
        { type: "text", text: "That reframe changed everything." },
        { type: "text", text: "The place I started was auditing. I connected Claude Code to our Figma files through the Figma MCP and used it to run structured audits of our existing flows. This worked. Claude can scan a design, cross-reference it against documented criteria, and flag inconsistencies, accessibility gaps, and structural issues at a speed no human auditor can match. It's not creative — it's analytical. And analytical is exactly what you want from an auditor." },
        { type: "text", text: "But I still had the context problem. The audit results were technically valid but not anchored to our actual users. Claude didn't know that \"clear\" means something different for a first-time digital user than it does for someone who's been using apps for a decade. Without that grounding, the suggestions were generic." },
      ] },
      { heading: "Building the thing that made everything else work", blocks: [
        { type: "text", text: "To fix the context problem, I built what I now call a UX audit skill — a structured, persistent set of guidelines that lives alongside our AI tooling and defines exactly how to evaluate designs for Rivy's specific user spectrum." },
        { type: "text", text: "It's not just a list of accessibility rules. It's a design philosophy, encoded: how much visual explanation does a UI element need before a non-digitally-trained user can confidently use it? When does an icon alone work, and when does it need a text label? What makes an error message actually helpful versus technically correct but useless? How do you design for trust when your user isn't sure yet whether to trust the product?" },
        { type: "cards", columns: [
          { label: "What the skill encodes", title: "Design rules for both ends of the spectrum", text: "Guidelines that define \"good UX\" specifically for digitally confident users and digitally new users — not generic best practices." },
          { label: "Why it works better than a prompt", title: "Consistent across every session", text: "A one-off prompt drifts. A codified skill stays anchored regardless of who's running the session or what else is in the conversation." },
        ] },
        { type: "text", text: "Building this skill required something I couldn't outsource to the AI: I had to talk to real users. I spoke with a focused group of Rivy users — particularly those on the less digitally familiar end of our spectrum — to identify what was causing friction and what felt clear. These weren't exhaustive research sessions; they were directional conversations. But they gave me the human ground truth that the AI needed to stop being generic." },
        { type: "text", text: "Once the skill was built and those conversations were encoded into it, the quality of Claude's audit outputs changed significantly. Now when I run a flow through it, the suggestions are actually about our users — not a hypothetical composite user from a design textbook." },
      ] },
      { heading: "What the workflow looks like now", blocks: [
        { type: "text", text: "Here's the loop I'm running today: I take an existing screen or a new flow design, run it through the UX audit skill with Claude, and get back a structured critique — what's working, what's likely to confuse users at either end of our spectrum, and specific suggestions for what to change. Claude also generates rough mockups of what an improved version might look like." },
        { type: "text", text: "Those mockups don't go anywhere near production. They go to Figma, where we take the concepts and build the actual polished designs — applying craft, visual judgment, and the specificity that only comes from knowing the product deeply. What Claude gives us is a thinking partner that does the analytical heavy lifting on the first pass. We bring the rest." },
        { type: "text", text: "The honest result: iterations that used to take several days because of the review-feedback-revise cycle now happen in a fraction of the time. We're not waiting on review sessions to find out if a direction is worth pursuing. The AI surfaces the obvious problems early, and we spend our energy on the decisions that actually require design judgment." },
        { type: "quote", text: "What Claude gives us is a thinking partner that does the analytical heavy lifting on the first pass. We bring the rest." },
      ] },
      { heading: "The other thing that's working: rapid prototypes for internal tools", blocks: [
        { type: "text", text: "Separately from the redesign work, I've also been building internal tooling at Rivy. And here, I found a completely different AI use case that's been genuinely valuable." },
        { type: "text", text: "The old way of getting stakeholder feedback on a new internal tool: design the user flows, build out the proper designs, create a prototype, then schedule time to demo it. All of that before anyone important has even reacted to the core idea. Days of work before you know if you're going in the right direction." },
        { type: "text", text: "Now I use Google AI Studio — not for generating production UI designs, which as I said doesn't work — but for generating functional prototypes quickly enough to get feedback the same day. It's rough. It doesn't match our design system. But it's good enough to put in front of stakeholders and ask: does this concept make sense? Is this solving the right problem? Those are questions you can answer from a rough prototype. You don't need a polished design for that conversation." },
        { type: "text", text: "The time savings in that validation loop have changed how I approach new internal tools entirely. I'm getting directional feedback before committing to real design work, which means fewer wasted iterations downstream." },
        { type: "subheading", text: "The honest caveat" },
        { type: "text", text: "This only works because we know exactly when the rough prototype has served its purpose. The risk is letting it linger — using a quick AI prototype as a substitute for proper UX rather than a stepping stone toward it. The speed is only an advantage when you're moving in the right direction." },
      ] },
      { heading: "What I actually learned from all of this", blocks: [
        { type: "text", text: "The fumbles were frustrating at the time, but I don't regret them. Trying to get AI to generate designs that matched our design system taught me something specific and important: AI is not at the point where it can replace the visual and systems judgment that goes into translating a design system into actual screens. That's a concrete, useful piece of knowledge — not a vague feeling." },
        { type: "text", text: "What AI is genuinely good at, right now, in a design workflow: structured analysis, consistent application of documented criteria, fast generation of rough directional concepts, and compressing the time between \"I have an idea\" and \"I have something to react to.\" Those are real capabilities. They're just not the same as design." },
        { type: "subheading", text: "Takeaways — applicable beyond Rivy" },
        { type: "steps", items: [
          "**Know what AI can't do yet.** It cannot reliably generate designs that stay faithful to a specific design system. Don't spend months finding this out the slow way — now you know.",
          "**Use AI to improve your process, not to replace your output.** The audit loop, the rapid prototype for validation — these augment the design work. They don't substitute for it.",
          "**The context problem is real and requires human input to solve.** You have to talk to your users. The AI can then scale and apply that knowledge — but it can't generate it from nothing.",
          "**Build skills, not prompts.** Encode your knowledge into something persistent. A one-off prompt drifts; a codified skill stays consistent across sessions and over time.",
          "**Different tools for different jobs.** Claude Code and the Figma MCP for auditing. AI Studio for rapid prototyping. Don't expect one tool to do all of it well — it won't.",
        ] },
        { type: "text", text: "I'm still in the middle of this. The redesign is ongoing, the skill is still being refined, and I keep discovering new edges of where AI helps and where it doesn't. That's kind of the point — it's not a setup-and-forget system. It's a working practice." },
        { type: "text", text: "But our small design team is doing more thoughtful work in less time than we were six months ago. For a two-person team carrying a significant workload, that matters a lot." },
        { type: "text", text: "If any of this resonates with what you're trying to figure out at your own company, I'd genuinely love to compare notes." },
        { type: "text", text: "— Isaiah Adeleke, Senior Product Designer at Rivy. Questions about the UX audit skill, designing for mixed-literacy users, or any of the tools mentioned? Find me and let's talk." },
      ] },
    ],
  },
  {
    slug: "energystack-financing-checkouts",
    title: "How we increased financing checkouts from 47% to 89% by changing where we introduced financing",
    description: "A simple change in how we communicated affordability transformed how customers chose to pay for solar products on EnergyStack.",
    category: "User research · Conversion optimisation",
    date: "2026",
    hero: { type: "imageSpace", title: "Before and after the EnergyStack redesign", slots: [
      { label: "Before", detail: "Original product details page · financing introduced at checkout" },
      { label: "After", detail: "Redesigned product details page · financing visible while shopping" },
    ] },
    sections: [
      { blocks: [
        { type: "metrics", items: [{ value: "47% → 89%", label: "Financing share of checkouts" }, { value: "+42pp", label: "Increase after redesign" }, { value: "10%", label: "Minimum upfront payment offered" }] },
        { type: "text", text: "**Product:** EnergyStack by Rivy · **Role:** Lead Product Designer · **Focus:** User Research, Conversion Optimisation, E-commerce UX" },
      ] },
      { heading: "We had visitors, but not enough buyers", blocks: [
        { type: "text", text: "EnergyStack was an e-commerce platform we built at Rivy to help customers purchase solar products outright or through financing." },
        { type: "text", text: "After launching, we started noticing something interesting. People were visiting the platform, browsing products, and exploring their options, but many weren't progressing to checkout." },
        { type: "text", text: "We had a product discovery problem, and we needed to understand why." },
        { type: "text", text: "So we conducted a UX and user research audit to identify where customers were dropping off and what might be preventing them from purchasing." },
        { type: "text", text: "One insight stood out: **Solar products were expensive, and affordability was a major barrier to purchase.**" },
        { type: "text", text: "The interesting part? We already had a solution for that." },
      ] },
      { heading: "The solution was already there, just in the wrong place", blocks: [
        { type: "text", text: "Rivy offered financing that allowed customers to pay as little as 10% upfront and spread the remaining cost over several months." },
        { type: "text", text: "But we'd made a critical design decision when building EnergyStack." },
        { type: "text", text: "We introduced financing primarily at checkout." },
        { type: "text", text: "Customers would browse products, add them to their cart, and only then discover that they could choose between paying outright or financing their purchase." },
        { type: "text", text: "On paper, it made sense. Financing was a payment method, so we placed it where customers chose how to pay." },
        { type: "text", text: "**But we had overlooked something: customers who couldn't afford the full price weren't necessarily making it to checkout.**" },
        { type: "text", text: "Someone browsing a solar inverter costing ₦2.3 million might leave immediately after seeing the price, without knowing they could start with approximately ₦230,000." },
        { type: "text", text: "We were waiting until customers had decided to purchase before telling them something that could influence that decision." },
        { type: "journey", title: "The original customer journey", columns: [{ label: "Financing introduced at the end", steps: ["Homepage", "Product listing", "Product details", "Cart", "Checkout", "Financing option"], note: "At product details, customers see the full price, but may leave before discovering financing." }] },
      ] },
      { heading: "We needed to sell affordability, not just products", blocks: [
        { type: "text", text: "Our research changed how we thought about financing." },
        { type: "text", text: "We had initially treated it as a payment option. But for customers purchasing expensive solar equipment, financing could be a key reason to consider buying." },
        { type: "text", text: "That meant affordability needed to be communicated much earlier in the shopping journey." },
        { type: "text", text: "We redesigned three key touchpoints." },
        { type: "subheading", text: "Homepage: Make financing part of the first impression" },
        { type: "text", text: "Previously, the homepage focused on showcasing solar products." },
        { type: "text", text: "We introduced financing-led promotional banners that communicated how customers could purchase products by paying just a fraction of the total cost upfront." },
        { type: "text", text: "Instead of simply advertising a solar solution at its full price, we could communicate that customers could get started with as little as 10% upfront." },
        { type: "text", text: "This meant customers understood that financing was available before they even started exploring products." },
        { type: "imageSpace", title: "Homepage before and after", slots: [{ label: "Before", detail: "Product-focused homepage without prominent financing messaging" }, { label: "After", detail: "Financing banners communicating the low upfront payment" }], caption: "Introduced affordability messaging at the beginning of the shopping journey." },
        { type: "subheading", text: "Product details: Make affordability tangible" },
        { type: "text", text: "This was one of the most important changes." },
        { type: "text", text: "Previously, customers saw the full product price and had to proceed to checkout before exploring financing." },
        { type: "text", text: "We redesigned the product details page to display a financing breakdown specific to each product." },
        { type: "text", text: "For example, instead of presenting only a solar installation priced at ₦2.3 million, customers could also see:" },
        { type: "bullets", items: ["**Full price:** ₦2,300,000", "**Pay from:** ₦230,000 upfront", "**Spread the balance:** Over the available financing period"] },
        { type: "text", text: "These weren't generic financing promotions. The figures were contextual to the product customers were viewing." },
        { type: "text", text: "Our goal was to help customers evaluate affordability while they were still deciding whether a product was within reach." },
        { type: "imageSpace", title: "Product details financing redesign", slots: [{ label: "Before", detail: "Original product price presentation" }, { label: "After", detail: "Upfront payment, product-specific financing breakdown, and financing call to action" }], caption: "We moved financing information closer to the product price, allowing customers to understand their payment options before adding a product to their cart." },
        { type: "subheading", text: "Checkout: Keep both payment options" },
        { type: "text", text: "We didn't remove the original checkout experience." },
        { type: "text", text: "Customers could still choose to pay outright or apply for financing." },
        { type: "text", text: "The difference was that financing was no longer a surprise discovered at the end of the journey." },
        { type: "text", text: "By the time customers reached checkout, they had already been introduced to the possibility of spreading payments." },
        { type: "journey", title: "Moving financing earlier in the journey", columns: [
          { label: "Before", steps: ["Homepage", "Product details", "Cart", "Financing discovered at checkout"] },
          { label: "After", steps: ["Financing promoted on homepage", "Financing breakdown on product details", "Cart", "Checkout with financing or cash"] },
        ] },
      ] },
      { heading: "What changed after the redesign?", blocks: [
        { type: "text", text: "Before the redesign, the checkout split was relatively balanced." },
        { type: "text", text: "47% of checkouts selected financing, while 53% selected cash payments." },
        { type: "text", text: "After introducing financing throughout the shopping journey, that changed significantly." },
        { type: "text", text: "**Financing grew to 89% of checkouts, a 42-percentage-point increase.**" },
        { type: "checkoutChart" },
        { type: "text", text: "This was an important outcome for EnergyStack because the platform was designed not only to sell solar products but also to create more opportunities for customers to access Rivy's financing." },
        { type: "text", text: "The redesign helped make financing a more visible part of the purchase journey and was followed by a significant shift towards financing at checkout." },
        { type: "text", text: "*Note: This metric measures the proportion of checkouts choosing financing, not the overall visitor-to-purchase conversion rate.*" },
      ] },
      { heading: "What I learned: Sometimes the problem isn't your solution, but when you introduce it", blocks: [
        { type: "text", text: "This project changed how I think about communicating value in product experiences." },
        { type: "text", text: "When we first designed EnergyStack, we positioned financing as a payment method because that was where it logically belonged in the transaction flow." },
        { type: "text", text: "But our research helped us see it differently." },
        { type: "text", text: "For someone who could afford a product outright, financing might simply be another payment option." },
        { type: "text", text: "For someone who couldn't, financing could be the difference between considering a purchase and abandoning the idea entirely." },
        { type: "text", text: "The value of financing wasn't limited to checkout. It was relevant from the moment customers started evaluating products." },
        { type: "quote", text: "The biggest lesson for me was simple: Don't wait until users reach the end of a journey to communicate something that could motivate them to begin it." },
      ] },
    ],
  },
  {
  slug: "brass-landing-page",
  title: "Case study: How to design a landing page with high conversion rate",
  description: "A designers guide to crafting product landing pages with high conversion rate, using Brass as a case study.",
  category: "Landing pages · Design & business",
  date: "October 23, 2021",
  source: { href: "https://medium.com/design-bootcamp/how-brass-killed-their-new-landing-page-ef11b01b473f", label: "Originally published in Bootcamp on Medium" },
  cover: { src: "/writing/brass-landing-page/hero.jpg", alt: "Brass banking landing-page hero section" },
  sections: [
    { blocks: [
      { type: "text", text: "On the 21st of October 2021, Brass announced their new look. I immediately fell in love with what I was seeing around, then I went ahead to check out their website." },
      { type: "text", text: "First of, it was beautiful to behold, the interface designers did a clean job, and then something caught my fancy, the purpose of a landing page was well articulated. And I thought to write about it and how designers can learn from it." },
      { type: "text", text: "Presentation and experience of a landing page are also as important as product offerings, having a killer landing page can make all the difference between industry average ROI and conversion rates that stimulates growth." },
      { type: "text", text: "Product designers need to not only focus on product offerings when designing a landing page, but crafting a well articulated page that covers functionality, aesthetics and psychology." },
      { type: "text", text: "To design a landing page with high conversion rate, you have to show customers these things;" },
      { type: "steps", items: ["You understand their problem and can help them solve it.", "How you will help them solve it.", "More reasons why you are the best for them and they can trust you."] },
      { type: "text", text: "Follow me as we explore Brass new landing page and how they brought all this together." },
    ] },
    { heading: "We understand your problem and can help you solve it.", blocks: [
      { type: "subheading", text: "Hero section; highlight customers pain point and how you’re solving it." },
      { type: "text", text: "The Hero section is the first touchpoint customers have with your product, you want to make sure you highlight their problem and how you understand the problem. Customers will only use your product when you are able to show that you understand their problem(Empathy)." },
      { type: "image", src: "/writing/brass-landing-page/hero.jpg", alt: "Brass banking hero section", caption: "Brass banking hero section · trybrass.com" },
      { type: "text", text: "How did Brass approach this? A video that portrayed the day in life of customers and how they fit in. The video showed that brass has taken time to interview and understand their customers lifestyle and the problems they face." },
      { type: "text", text: "They ended the video with something interesting, they said they’re building “honest useful financial products to support ambitious businesses”. Wait, I thought it was just another digital banking solution for businesses, yes it is, but they communicated it in a very brilliant way, they sold their values, spoke about the solution and bought the customers over with the last phrase, I mean, who isn’t ambitious about his business." },
      { type: "text", text: "Brass simply said we are the best for your business financial needs." },
      { type: "text", text: "According to an infographic by socialfresh.com, videos on landing pages increases conversion rates by 86%." },
      { type: "text", text: "Making use of videos is a great practice." },
      { type: "text", text: "Still on the hero section, another important element is the CTA, you have to craft a compelling CTA, the CTA must shout “Click me, click me”." },
      { type: "text", text: "How did Brass approach this? “Open an account in 10 minutes” in this part of the world, it could take about 2 weeks(I’m not so sure, but definitely not 10 minutes or even 1 day) to open a business account. So I mean, who wouldn’t like such a solution, they killed it there also." },
    ] },
    { heading: "How we will help you solve it.", blocks: [
      { type: "subheading", text: "If there are industry challenges, show that you are solving it." },
      { type: "text", text: "Showing that a product has solved challenges that exist in the industry is a very good thing to do. It could increase conversion rate, especially if there are lots of competitors that are currently battling with such challenges." },
      { type: "image", src: "/writing/brass-landing-page/industry-challenges.jpg", alt: "Brass explaining speed, security, and support", caption: "Turning industry challenges into strengths · trybrass.com" },
      { type: "text", text: "How did brass do this? Brass converted this challenges to strengths. The first is speed, opening a business account here, is an hell of experience, but brass says don’t worry, it’ll only take 10 minutes of your time." },
      { type: "text", text: "Another is security, this is another issue with financial institutions, but brass says don’t worry, your money is safe with us and then goes further to tell how they’re making it safe." },
      { type: "text", text: "And the last is support, bad customer service is still a thing, even the regular banks are not left out, but brass clearly said we are here for you whenever you have issues." },
      { type: "text", text: "In summary, show that a product is solving industry problems if there are, by doing this you’re strengthening the trust customers would have for that product." },
      { type: "subheading", text: "A product demo, with less noise." },
      { type: "text", text: "Product demo on a landing page is a great practice and not a new thing, the essence of product demos on a landing page is to communicate visually what you have in writings for faster understanding. They could either be images or a gifs." },
      { type: "image", src: "/writing/brass-landing-page/product-demo.jpg", alt: "Brass product demonstration with less prominent interface details", caption: "A focused product demonstration · trybrass.com" },
      { type: "text", text: "According to an infographic by socialfresh.com, 65% of audiences are visual learners, and visual data is processed 60,000 times faster than text." },
      { type: "text", text: "But most of the times, the demos are always too noisy, what do I mean? showing all the information on a product page when the intention is to only display a flow is too much noise." },
      { type: "text", text: "How did brass solve this? They used the skeleton loader to de-emphasize other parts, what I call reducing the noise, and then made a gif of the particular flow they wanted to show." },
      { type: "subheading", text: "Testimonials from customers" },
      { type: "text", text: "Testimonials are one of the most important pieces of copy you can put on a landing page." },
      { type: "text", text: "The reason for this is they give audience that one final push to signup for a product." },
      { type: "image", src: "/writing/brass-landing-page/testimonials.jpg", alt: "Brass customer testimonials", caption: "Customer testimonials · trybrass.com" },
      { type: "text", text: "According to an infographic by socialfresh.com, “customer testimonials have the highest effectiveness rating for content marketing at 89%.”" },
      { type: "text", text: "It means that testimonials are the most effective type of content you can put on a landing page to get more sales, because they are 89% better at increasing conversion rates, and Brass did just that." },
    ] },
    { heading: "More reasons why we are the best for you and you can trust us.", blocks: [
      { type: "subheading", text: "Add-ons and other advantages" },
      { type: "text", text: "An audience that got to this point is possibly looking for more reasons to use a product, or trying to see if you are best fit for their business needs, you want to make sure you emphasize the product extras at this point." },
      { type: "image", src: "/writing/brass-landing-page/integrations.jpg", alt: "Extra features and integrations offered by Brass", caption: "Extra features offered · trybrass.com" },
      { type: "text", text: "How did Brass do this? They listed products that businesses possibly use and showed that they’ve built brass to work with this products. For example, when a founder of a startup that uses slack as a virtual workspace sees that he can add brass to his workspace for easy financial operations, he would definitely want to sign up." },
      { type: "subheading", text: "You can trust that we will be here for you anytime." },
      { type: "text", text: "An audience/potential customer at this stage might have some fears and is wondering can I truly trust this guys?, so you would want to eliminate their fears. Remember, the goal is to convert every visitor to a user. Everything you are doing on a product landing page should be towards that." },
      { type: "image", src: "/writing/brass-landing-page/support.jpg", alt: "Brass support team", caption: "The support team behind the product · trybrass.com" },
      { type: "text", text: "How did Brass approach this? Brass re-emphasized that their support team will always be available to help incase of any issue. This will reduce the fears of what if…" },
      { type: "text", text: "Emphasizing a good support team behind a product is a very good thing to do, everyone loves a company with a great customer support." },
      { type: "subheading", text: "Still in doubt? Mind you, we are experts at what we do" },
      { type: "text", text: "We are still in the stage where doubt might still exist in potential customers, and blogs are a good way of educating potential customers and helping them know if the product is truly what they need." },
      { type: "text", text: "I have known this to be a great practice for increasing conversion rates, customers want to be sure you are good at what you do and you have knowledge of their sphere of operation." },
      { type: "image", src: "/writing/brass-landing-page/blogs.jpg", alt: "Articles featured on the Brass landing page", caption: "Educating customers through articles · trybrass.com" },
      { type: "text", text: "I love the three blogs brass featured, first one would make potential users know if they truly need brass, second and third blog showed that brass has a good understanding of business operation." },
      { type: "subheading", text: "FAQs" },
      { type: "text", text: "Final chance to clear the doubts, potential users may want to clarify few things before signing up, save them the time of sending a mail or placing a call." },
      { type: "image", src: "/writing/brass-landing-page/faq.jpg", alt: "Brass frequently asked questions", caption: "Frequently asked questions · trybrass.com" },
      { type: "subheading", text: "A final CTA" },
      { type: "text", text: "Don’t waste all the effort you have spent building trust and trying to convert, it’s a good chance to finally close the customer. Bring back the CTA and make it glaring." },
      { type: "image", src: "/writing/brass-landing-page/final-cta.jpg", alt: "Brass final call to action", caption: "A final call to action · trybrass.com" },
      { type: "text", text: "The last thing I want to say about Brass new landing page is their copy, the communication tone is clear and easily understandable. Writing great copies is a must if you will design a landing page with high conversion rate." },
    ] },
    { heading: "In conclusion", blocks: [
      { type: "text", text: "When you are designing a product landing page, do not only focus on aesthetics or product offerings, craft an experience that will eventually lead to conversion, be intentional about it." },
      { type: "text", text: "If you enjoyed this article and learnt something, give some applauds, share with other designers and follow me(I write on design & business contents)." },
    ] },
  ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
