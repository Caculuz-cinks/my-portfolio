"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type NavigationItem = {
  id: string;
  label: string;
};

export default function CaseStudyNavigation({ items }: { items: NavigationItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const readingLine = Math.min(180, window.innerHeight * 0.24);
      let current = sections[0];

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= readingLine) current = section;
      });

      if (current) setActiveId(current.id);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [items]);

  const links = items.map((item) => {
    const active = activeId === item.id;

    return (
      <a
        key={item.id}
        href={`#${item.id}`}
        onClick={() => setActiveId(item.id)}
        aria-current={active ? "location" : undefined}
        className={`relative flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors ${
          active
            ? "bg-[#7C56F6]/10 font-semibold text-[#4930A8]"
            : "text-ink/55 hover:bg-[#7C56F6]/5 hover:text-ink"
        }`}
      >
        {active && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7C56F6]"
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
        )}
        <span>{item.label}</span>
      </a>
    );
  });

  return (
    <>
      <nav
        aria-label="Case study sections"
        className="sticky top-20 z-30 -mx-2 mb-7 overflow-x-auto rounded-2xl border border-white bg-[#FCFAF6]/90 p-2 shadow-[0_12px_40px_rgba(36,39,37,.08)] backdrop-blur-xl no-scrollbar min-[1440px]:hidden"
      >
        <div className="flex gap-1">{links}</div>
      </nav>

      <aside className="absolute inset-y-0 right-[calc(100%+24px)] hidden w-[190px] min-[1440px]:block">
        <nav
          aria-label="Case study sections"
          className="sticky top-28 max-h-[calc(100dvh-140px)] overflow-y-auto rounded-[1.4rem] border border-white bg-[#FCFAF6]/90 p-4 shadow-[0_20px_60px_rgba(36,39,37,.07)] backdrop-blur-xl"
        >
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7C56F6]">
            On this page
          </p>
          <div className="space-y-1">{links}</div>
        </nav>
      </aside>
    </>
  );
}
