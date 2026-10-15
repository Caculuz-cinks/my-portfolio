"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/shots", label: "UI Shots" },
  { href: "/about", label: "About" },
  { href: "/content", label: "Content" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
        <div className="max-w-content mx-auto px-7 md:px-14 lg:px-20 pt-5 md:pt-7 grid grid-cols-2 md:grid-cols-3 items-center">
          <Link href="/" className="pointer-events-auto flex items-center gap-2.5 w-fit group rounded-full border border-[#241D35]/10 bg-white/90 p-1.5 pr-4 shadow-[0_8px_24px_rgba(36,29,53,.09)] backdrop-blur-xl">
            <span className="w-8 h-8 rounded-full overflow-hidden border border-white shadow-sm bg-creamdark">
              <img src="/photos/isaiah-headshot.png" alt="Isaiah Adeleke" className="w-full h-full object-cover" />
            </span>
            <span className="hidden sm:block font-sans text-sm font-bold tracking-[-0.03em] text-[#241D35]">Isaiah Adeleke</span>
          </Link>

          <nav className="pointer-events-auto hidden md:flex justify-self-center items-center rounded-full bg-white/90 backdrop-blur-xl p-1.5 border border-white shadow-[0_12px_36px_rgba(36,39,37,0.12)]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-cursor-hover
                className={`relative whitespace-nowrap rounded-full px-5 py-2 text-xs font-semibold transition-colors ${isActive(link.href) ? "text-white" : "text-ink/65 hover:text-ink"}`}
              >
                {isActive(link.href) && (
                  <motion.span layoutId="active-nav" className="absolute inset-0 rounded-full bg-[#7C56F6]" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="justify-self-end flex items-center gap-2 pointer-events-auto">
            <a href="mailto:isaiahadeleke01@gmail.com" className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/60 bg-[#4930A8] text-white text-xs font-semibold px-5 py-2.5 shadow-[0_8px_24px_rgba(73,48,168,.2)] hover:-translate-y-0.5 transition-transform">
              Let&apos;s talk
            </a>
            <button onClick={() => setMenuOpen(true)} aria-label="Open menu" className="md:hidden w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center">
              <span className="text-xl">☰</span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-[#F3EFE7] px-6 py-6 flex flex-col">
            <div className="flex justify-between items-center">
              <span className="font-bold">Isaiah Adeleke</span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="w-11 h-11 rounded-full bg-white text-xl shadow-sm">×</button>
            </div>
            <nav className="flex-1 flex flex-col justify-center gap-3">
              {links.map((link, index) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.07 }}>
                  <Link href={link.href} className="display-heading text-[clamp(2.6rem,11vw,4.5rem)] text-[#4930A8]">{link.label}</Link>
                </motion.div>
              ))}
            </nav>
            <a href="mailto:isaiahadeleke01@gmail.com" className="rounded-2xl bg-[#4930A8] text-white py-4 text-center font-semibold">Let&apos;s talk</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
