"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/shots", label: "Shots" },
  { href: "/about", label: "About" },
  { href: "/content", label: "Content" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 80) {
      setHidden(false);
    } else if (latest > lastY) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setLastY(latest);
  });

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-cream/70 backdrop-blur-md border-b border-ink/5"
      >
        <div className="max-w-content mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
          {/* Left: Avatar + Name */}
          <Link
            href="/"
            data-cursor-hover
            className="flex items-center gap-3 group"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-ink/10 bg-creamdark flex-shrink-0">
              <img
                src="/profile.jpg"
                alt="Isaiah Adeleke"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <span className="font-serif text-lg tracking-tight font-semibold text-[#0B3C2A] group-hover:text-ink transition-colors duration-300">
              Isaiah Adeleke
            </span>
          </Link>

          {/* Center: Floating Menu (Pill) */}
          <nav className="hidden md:flex items-center bg-[#EDE6D8]/60 border border-ink/10 rounded-full p-1 shadow-sm">
            {links.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  data-cursor-hover
                  className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 ${
                    active
                      ? "bg-[#0B3C2A] text-cream shadow-sm"
                      : "text-ink/80 hover:text-ink hover:bg-ink/5"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="mailto:isaiahadeleke01@gmail.com"
              data-cursor-hover
              className="bg-[#0B3C2A] text-cream text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-ink hover:text-cream shadow-sm transition-all duration-300"
            >
              Let&apos;s talk
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            data-cursor-hover
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2 bg-[#EDE6D8]/60 border border-ink/10 rounded-full w-10 h-10 items-center justify-center"
            aria-label="Open menu"
          >
            <span className="w-5 h-px bg-ink" />
            <span className="w-5 h-px bg-ink" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-cream flex flex-col"
          >
            <div className="max-w-content mx-auto w-full px-6 py-4 flex items-center justify-between border-b border-ink/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-ink/10 bg-creamdark">
                  <img
                    src="/profile.jpg"
                    alt="Isaiah Adeleke"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-serif text-lg tracking-tight font-semibold text-[#0B3C2A]">
                  Isaiah Adeleke
                </span>
              </div>
              <button
                data-cursor-hover
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 bg-[#EDE6D8]/60 border border-ink/10 rounded-full flex items-center justify-center text-xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-6 px-8 max-w-content mx-auto w-full">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i }}
                >
                  <Link
                    href={l.href}
                    className="font-serif text-5xl text-[#0B3C2A] hover:text-ink transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href="mailto:isaiahadeleke01@gmail.com"
                className="mt-6 bg-[#0B3C2A] text-cream text-sm px-6 py-3 rounded-full hover:bg-ink transition-colors"
              >
                Let&apos;s talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
