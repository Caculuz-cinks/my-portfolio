import Link from "next/link";
import Reveal from "@/components/Reveal";
import RichText from "@/components/RichText";
import ProjectVisual from "@/components/ProjectVisual";
import type { Article, ArticleBlock } from "@/data/articles";

function ArticleVisual({ block }: { block: ArticleBlock }) {
  if (block.type === "text") return <p className="text-base leading-[1.85] text-ink/80 md:text-lg"><RichText text={block.text} /></p>;
  if (block.type === "subheading") return <h3 className="pt-4 text-xl font-bold leading-snug text-[#2D2350] md:text-2xl">{block.text}</h3>;
  if (block.type === "quote") return <blockquote className="rounded-r-2xl border-l-2 border-[#7C56F6] bg-[#7C56F6]/5 px-6 py-5 text-lg font-semibold leading-relaxed text-[#4930A8]">{block.text}</blockquote>;
  if (block.type === "bullets" || block.type === "steps") {
    const Tag = block.type === "steps" ? "ol" : "ul";
    return <Tag className={`space-y-4 pl-6 text-base leading-[1.85] text-ink/80 marker:text-[#7C56F6] md:text-lg ${block.type === "steps" ? "list-decimal marker:font-bold" : "list-disc"}`}>{block.items.map((item) => <li key={item}><RichText text={item} /></li>)}</Tag>;
  }
  if (block.type === "image") return <figure className="py-3"><div className="overflow-hidden rounded-[1.4rem] border border-ink/10 bg-white"><img src={block.src} alt={block.alt} loading="lazy" className="h-auto w-full" /></div>{block.caption && <figcaption className="mt-3 text-xs font-medium leading-relaxed text-muted">{block.caption}</figcaption>}</figure>;
  if (block.type === "imageSpace") return <ProjectVisual visual={{ type: "showcase", title: block.title, slots: block.slots, caption: block.caption }} />;
  if (block.type === "cards") return <div className={`grid gap-4 py-3 ${block.columns.length === 3 ? "lg:grid-cols-3" : "sm:grid-cols-2"}`}>{block.columns.map((column) => <div key={column.title} className="rounded-2xl border border-[#7C56F6]/15 bg-[#F4F0FF] p-6"><p className="text-[10px] font-bold uppercase tracking-[.13em] text-[#7C56F6]">{column.label}</p><h3 className="mt-5 text-lg font-bold leading-snug text-[#2D2350]">{column.title}</h3><p className="mt-3 text-sm leading-relaxed text-ink/65">{column.text}</p></div>)}</div>;
  if (block.type === "metrics") return <div className="grid gap-4 sm:grid-cols-3">{block.items.map((item) => <div key={item.label} className="rounded-2xl border border-[#7C56F6]/15 bg-[#F4F0FF] p-6"><p className="display-heading text-3xl text-[#7C56F6]">{item.value}</p><p className="mt-3 text-xs font-semibold leading-relaxed text-[#2D2350]">{item.label}</p></div>)}</div>;
  if (block.type === "journey") return <figure className="rounded-[1.5rem] border border-[#7C56F6]/15 bg-[#F5F1FE] p-5 md:p-7"><figcaption className="mb-6 text-xs font-bold uppercase tracking-[.12em] text-[#4930A8]">{block.title}</figcaption><div className={`grid gap-5 ${block.columns.length > 1 ? "sm:grid-cols-2" : ""}`}>{block.columns.map((column) => <div key={column.label}><p className="mb-4 text-sm font-semibold text-[#4930A8]">{column.label}</p><ol>{column.steps.map((step, index) => <li key={step}><div className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm ${step.toLowerCase().includes("financing") ? "border-[#7C56F6]/30 bg-[#7C56F6]/10 font-bold text-[#4930A8]" : "border-white bg-white/90 text-ink/70"}`}><span className="text-xs text-[#7C56F6]">0{index + 1}</span>{step}</div>{index < column.steps.length - 1 && <div aria-hidden="true" className="py-1 text-center text-[#7C56F6]/70">↓</div>}</li>)}</ol>{column.note && <p className="mt-4 rounded-xl border border-dashed border-[#7C56F6]/25 px-4 py-3 text-xs leading-relaxed text-[#4930A8]">{column.note}</p>}</div>)}</div></figure>;
  if (block.type === "checkoutChart") return <figure className="rounded-[1.5rem] border border-[#7C56F6]/15 bg-[#F5F1FE] p-5 md:p-7"><figcaption className="text-sm font-bold text-[#2D2350]">Financing checkout share before and after the redesign</figcaption><div className="mt-7 space-y-6">{[{label:"Before redesign",financing:47,cash:53},{label:"After redesign",financing:89,cash:11}].map((row) => <div key={row.label}><p className="mb-2 text-xs font-semibold text-ink/70">{row.label}</p><div className="flex h-12 overflow-hidden rounded-xl text-xs font-bold sm:text-sm" role="img" aria-label={`${row.label}: ${row.financing}% financing, ${row.cash}% cash`}><div className="flex items-center justify-center bg-[#7C56F6] text-white" style={{width:`${row.financing}%`}}>{row.financing}%</div><div className="flex items-center justify-center bg-[#DDD6EB] text-[#514866]" style={{width:`${row.cash}%`}}>{row.cash}%</div></div></div>)}</div><div className="mt-5 flex flex-wrap gap-5 text-xs text-ink/65"><span className="flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full bg-[#7C56F6]"/>Financing</span><span className="flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full bg-[#DDD6EB]"/>Cash</span></div><p className="mt-6 border-t border-[#7C56F6]/15 pt-5 text-sm text-[#4930A8]"><strong>+42 percentage points</strong> in financing&apos;s share of checkouts after the redesign.</p></figure>;
  return null;
}

export default function WritingArticle({ article }: { article: Article }) {
  return (
    <article className="pb-24 pt-36 md:pb-32 md:pt-48">
      <div className="mx-auto max-w-content px-7 md:px-14 lg:px-20">
        <Reveal>
          <Link href="/content" className="text-xs font-bold uppercase tracking-[.14em] text-[#7C56F6] hover:text-[#4930A8]">← Back to writing</Link>
          <p className="mt-10 text-xs font-bold uppercase tracking-[.14em] text-muted">{article.category}</p>
          <h1 className="display-heading mt-5 max-w-5xl text-[clamp(2.7rem,5.2vw,5.5rem)] text-[#2D2350]">{article.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-ink/65 md:text-xl">{article.description}</p>
          <p className="mt-6 text-xs text-muted">By Isaiah Adeleke · {article.date}</p>
          {article.source && <a href={article.source.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-xs font-semibold text-[#7C56F6]">{article.source.label} ↗</a>}
        </Reveal>
        {article.cover && <Reveal delay={0.1}><div className="mt-12 overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_25px_65px_rgba(36,39,37,.1)]"><img src={article.cover.src} alt={article.cover.alt} className="h-auto w-full" /></div></Reveal>}
        {article.hero && <div className="mt-12"><ArticleVisual block={article.hero} /></div>}
        <div className="mx-auto mt-16 max-w-4xl space-y-10 md:mt-20">
          {article.sections.map((section, index) => <Reveal key={index}><section className="page-card p-7 md:p-12">{section.heading && <h2 className="display-heading mb-7 text-3xl leading-[1.08] text-[#2D2350] md:text-4xl">{section.heading}</h2>}<div className="space-y-6">{section.blocks.map((block, blockIndex) => <ArticleVisual key={blockIndex} block={block} />)}</div></section></Reveal>)}
          <Link href="/content" className="inline-flex rounded-xl bg-[#241D35] px-6 py-4 text-sm font-bold text-white hover:bg-[#4930A8]">← Back to writing</Link>
        </div>
      </div>
    </article>
  );
}
