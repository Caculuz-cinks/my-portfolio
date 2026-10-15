export type MigrationMap = {
  source: string;
  destination: string;
  status: "migrated" | "source-not-publicly-available";
  notes: string;
};

// Public Framer routes reviewed for this migration. Keep this beside the
// content so future edits retain the provenance of each destination page.
export const migrationMap: MigrationMap[] = [
  {
    source: "https://caculuz.framer.website/",
    destination: "/",
    status: "migrated",
    notes: "Introduction, selected project summaries, testimonials, contact details, and public links.",
  },
  {
    source: "https://caculuz.framer.website/#about",
    destination: "/about",
    status: "migrated",
    notes: "The public source exposes the same homepage introduction; no standalone About route was linked.",
  },
  {
    source: "https://docs.google.com/document/d/1MjqdJ57e6n9DujzUPD-REVU7lEWuDNySsVrnbY3tYAY/edit",
    destination: "/about",
    status: "migrated",
    notes: "Public résumé linked from the Framer homepage; provides career history, education, skills, and documented metrics.",
  },
  {
    source: "https://caculuz.framer.website/tride",
    destination: "/projects/tride",
    status: "migrated",
    notes: "Full public case study and its locally stored public images.",
  },
  {
    source: "https://caculuz.framer.website/#shots",
    destination: "/shots",
    status: "migrated",
    notes: "Public gallery labels are represented in the existing shots content; the Framer page exposes no standalone Shots route.",
  },
  {
    source: "No matching public Framer route found",
    destination: "/projects/idiomscribe",
    status: "source-not-publicly-available",
    notes: "Retained existing codebase content without modification because it could not be compared against the public source.",
  },
  {
    source: "No matching public Framer route found",
    destination: "/projects/care-copilot",
    status: "source-not-publicly-available",
    notes: "Retained existing codebase content without modification because it could not be compared against the public source.",
  },
];
