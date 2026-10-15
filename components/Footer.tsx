"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "isaiahadeleke01@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <footer className="pb-7 md:pb-10">
      <div className="max-w-content mx-auto px-7 md:px-14 lg:px-20">
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="page-card p-7 md:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_.65fr] gap-12 lg:gap-20">
            <div>
              <h2 className="display-heading text-4xl md:text-6xl text-[#2D2350] max-w-4xl">Let&apos;s work on something useful together.</h2>
              <p className="mt-6 text-base md:text-lg text-muted">{email}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${email}`} className="rounded-xl bg-[#241D35] text-white text-xs font-bold px-5 py-3">Send email ↗</a>
                <button onClick={copyEmail} className="rounded-xl border border-ink/15 bg-white text-ink text-xs font-bold px-5 py-3">{copied ? "Copied!" : "Copy email"}</button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-2">
              <div>
                <h3 className="font-bold text-[#2D2350]">Navigation</h3>
                <div className="mt-5 flex flex-col gap-3 text-sm text-muted">
                  <Link href="/projects">Recent work</Link><Link href="/about">About me</Link><Link href="/content">Thoughts</Link><Link href="/shots">UI shots</Link>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#2D2350]">Elsewhere</h3>
                <div className="mt-5 flex flex-col gap-3 text-sm text-muted">
                  <a href="https://www.linkedin.com/in/isaiahadeleke/">LinkedIn</a><a href="https://x.com/caculuz">X</a><a href="https://medium.com/@caculuz">Medium</a><a href="https://www.tiktok.com/@ai.caculuz">TikTok</a><a href="https://www.instagram.com/ai.caculuz/">Instagram</a><a href="https://cal.com/isaiah-adeleke/30min">Schedule a call</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="mt-6 px-2 flex flex-col sm:flex-row justify-between gap-2 text-[10px] uppercase tracking-[0.14em] text-muted/65">
          <p>Design & code © 2026 Isaiah Adeleke</p><p>Built in Lagos, shared globally</p>
        </div>
      </div>
    </footer>
  );
}
