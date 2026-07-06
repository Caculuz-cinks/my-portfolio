"use client";

export default function BrowserMockup({ slug, title }: { slug: string; title: string }) {
  // Render different customized UI based on project slug
  const renderContent = () => {
    switch (slug) {
      case "idiomscribe":
        return (
          <div className="flex-1 flex gap-3 p-3 overflow-hidden text-[10px] bg-white rounded-lg">
            {/* Left Column: Ambient Listening */}
            <div className="w-2/5 border-r border-ink/5 pr-3 flex flex-col gap-3 justify-between">
              <div>
                <span className="inline-block bg-[#0B3C2A]/10 text-[#0B3C2A] font-semibold px-2 py-0.5 rounded text-[8px] uppercase tracking-wide">
                  Ambient Audio
                </span>
                <p className="mt-2 text-ink/40 italic leading-snug">
                  &quot;Patient presents with persistent cough for 3 days, no fever...&quot;
                </p>
              </div>
              {/* Waveform */}
              <div className="flex items-center gap-1 h-6">
                {[4, 10, 14, 8, 12, 16, 6, 12, 18, 10, 4, 8, 12, 6].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 bg-[#0B3C2A] rounded-full"
                    style={{ height: `${h * 1.2}px` }}
                  />
                ))}
              </div>
            </div>
            {/* Right Column: Draft SOAP Note */}
            <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
              <div className="flex items-center justify-between border-b border-ink/5 pb-1">
                <span className="font-semibold text-[#0B3C2A]">SOAP Note Draft</span>
                <span className="bg-[#EDE6D8] px-1.5 py-0.5 rounded text-[8px] text-muted">Review Required</span>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <span className="font-bold text-ink/75">Subjective:</span>
                  <p className="text-ink/65">3-day dry cough, mild congestion, chest tightness.</p>
                </div>
                <div>
                  <span className="font-bold text-ink/75">Objective:</span>
                  <p className="text-ink/65">Clear breath sounds. Throat slightly erythematous.</p>
                </div>
                <div className="bg-[#0B3C2A]/5 p-1.5 rounded border border-[#0B3C2A]/10">
                  <span className="font-bold text-[#0B3C2A]">AI Highlight:</span>
                  <p className="text-[#0B3C2A]/90 text-[8px] leading-tight">Click to verify transcript section [02:14].</p>
                </div>
              </div>
            </div>
          </div>
        );

      case "care-copilot":
        return (
          <div className="flex-1 flex gap-3 p-3 overflow-hidden text-[10px] bg-white rounded-lg">
            {/* Left: Patient record */}
            <div className="w-1/2 border-r border-ink/5 pr-3 flex flex-col gap-2">
              <div className="bg-[#EDE6D8]/50 p-2 rounded">
                <span className="text-muted block text-[8px]">PATIENT RECORD</span>
                <span className="font-bold block mt-0.5">Amara K. (Age 28)</span>
                <span className="text-ink/60">Vitals: BP 110/70, Temp 38.5°C</span>
              </div>
              <div>
                <span className="text-muted block text-[8px]">CLINICAL NOTES</span>
                <p className="text-ink/60 leading-snug mt-1">
                  Complaining of acute abdominal pain in right lower quadrant, nausea, onset 12 hours ago.
                </p>
              </div>
            </div>
            {/* Right: Decision support */}
            <div className="flex-1 flex flex-col gap-2">
              <span className="text-muted block text-[8px] font-bold tracking-wide">AI CLINICAL SUGGESTIONS</span>
              <div className="bg-amber-50 border border-amber-200 p-2 rounded flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-800">1. Acute Appendicitis</span>
                  <span className="bg-amber-100 text-amber-800 px-1 py-0.2 rounded text-[7px]">High Risk</span>
                </div>
                <p className="text-amber-700 text-[8px] leading-snug">
                  Vitals and focal pain are highly indicative. Recommend McBurney&apos;s point tenderness check.
                </p>
              </div>
              <div className="border border-[#0B3C2A]/20 bg-[#0B3C2A]/5 p-2 rounded flex flex-col gap-1">
                <span className="font-bold text-[#0B3C2A]">Suggested Questions</span>
                <p className="text-ink/75 text-[8px] leading-tight">
                  &quot;Does coughing or moving increase pain intensity?&quot;
                </p>
              </div>
            </div>
          </div>
        );

      case "ember":
        return (
          <div className="flex-1 flex flex-col justify-between p-3 bg-slate-900 rounded-lg text-[9px] text-white">
            {/* Chat header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-slate-300">Ember · Thinking Partner</span>
              </div>
              <span className="bg-slate-800 text-slate-400 px-2 py-0.5 rounded text-[8px]">Framework: Strategy</span>
            </div>
            {/* Chat Area */}
            <div className="flex-1 flex flex-col gap-2.5 justify-end py-3 overflow-hidden">
              <div className="bg-slate-800 p-2 rounded-lg max-w-[85%] self-end">
                <p className="text-slate-200">
                  I&apos;m stuck on whether to hire a marketing lead or another backend engineer first.
                </p>
              </div>
              <div className="bg-emerald-950/60 border border-emerald-900 p-2 rounded-lg max-w-[90%]">
                <span className="text-emerald-400 font-bold block text-[7px] mb-0.5">EMBER PROMPT</span>
                <p className="text-emerald-200 leading-snug">
                  What is the single biggest bottleneck in your business today? Is it capacity to build, or acquiring new users? Let&apos;s map the impact of both.
                </p>
              </div>
            </div>
            {/* Input box */}
            <div className="bg-slate-800 rounded px-2.5 py-1.5 flex justify-between items-center text-slate-500 text-[8px] border border-slate-700">
              <span>Classified as: Decision Dilemma...</span>
              <span className="text-emerald-500">⌘+Enter</span>
            </div>
          </div>
        );

      case "tride":
        return (
          <div className="flex-1 flex flex-col gap-3 p-3 bg-white rounded-lg text-[10px]">
            {/* Progress bar */}
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#0B3C2A]">Tride Account Creation</span>
              <span className="font-bold text-[#0B3C2A] bg-[#0B3C2A]/10 px-2 py-0.5 rounded">75% Done</span>
            </div>
            {/* Steps checklist */}
            <div className="flex-1 flex flex-col gap-2 justify-center">
              <div className="flex items-center gap-2 text-emerald-600">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-[8px] font-bold">✓</span>
                <span>Corporate Registration Verification (CAC)</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-[8px] font-bold">✓</span>
                <span>Director Identity Verification (BVN/NIN)</span>
              </div>
              <div className="flex items-center gap-2 text-[#0B3C2A] font-medium">
                <span className="w-3.5 h-3.5 rounded-full bg-[#0B3C2A]/10 border border-[#0B3C2A]/30 flex items-center justify-center text-[8px] font-bold animate-pulse">•</span>
                <span>Plain-Language Compliance Attestation</span>
              </div>
            </div>
            {/* Bottom notification */}
            <div className="bg-[#EDE6D8]/50 p-2 rounded border border-ink/5 text-[8px] leading-normal text-muted flex items-center justify-between">
              <span>Time Elapsed: 16m 42s</span>
              <span className="font-bold text-ink">Estimated completion: 4m</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex-1 bg-[#EDE6D8] border border-ink/5 rounded-lg flex items-center justify-center text-muted text-xs">
            {title} Showcase
          </div>
        );
    }
  };

  return (
    <div className="w-full aspect-[4/3] rounded-2xl bg-[#EDE6D8]/50 border border-ink/10 p-3 flex flex-col gap-2.5 shadow-sm transition-all duration-300 hover:shadow-md select-none group-hover:border-[#0B3C2A]/30">
      {/* Browser chrome headers */}
      <div className="flex items-center justify-between px-1">
        {/* Window dots */}
        <div className="flex gap-1.5 items-center">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        {/* URL Bar */}
        <div className="bg-white border border-ink/5 rounded-md px-4 py-0.5 text-[8px] text-muted text-center w-3/5 font-sans font-medium flex justify-center items-center gap-1">
          <span className="text-[#0B3C2A]/40">🔒</span>
          <span>{slug}.tride.co</span>
        </div>
        {/* Placeholder spacer */}
        <div className="w-8" />
      </div>

      {/* Main mockup viewport */}
      {renderContent()}
    </div>
  );
}
