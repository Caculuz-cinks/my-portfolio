"use client";

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
    } catch {
      // no-op
    }
  };

  return (
    <footer className="bg-cream border-t border-ink/10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-content mx-auto px-5 md:px-6 py-24 md:py-32 text-center"
      >
        <h2 className="font-serif text-4xl md:text-6xl leading-tight max-w-2xl mx-auto">
          Let&apos;s work on something amazing together
        </h2>
        <p className="mt-6 text-lg md:text-xl text-muted">{email}</p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href={`mailto:${email}`}
            data-cursor-hover
            className="bg-ink text-cream text-sm px-6 py-3 rounded-full hover:bg-ink/85 transition-colors"
          >
            Send email
          </a>
          <button
            onClick={copyEmail}
            data-cursor-hover
            className="border border-ink text-ink text-sm px-6 py-3 rounded-full hover:bg-ink hover:text-cream transition-colors"
          >
            {copied ? "Copied!" : "Copy email"}
          </button>
        </div>

        <div className="mt-14 flex items-center justify-center gap-6 text-sm uppercase tracking-wide text-muted">
          <a href="#" data-cursor-hover className="hover:text-ink transition-colors">
            LinkedIn
          </a>
          <a href="#" data-cursor-hover className="hover:text-ink transition-colors">
            X
          </a>
          <a href="#" data-cursor-hover className="hover:text-ink transition-colors">
            TikTok
          </a>
          <a href="#" data-cursor-hover className="hover:text-ink transition-colors">
            Medium
          </a>
        </div>

        <p className="mt-16 text-xs text-muted/70">
          ai.caculuz · Built with Next.js
        </p>
      </motion.div>
    </footer>
  );
}
