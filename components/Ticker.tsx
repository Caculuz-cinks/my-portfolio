"use client";

const logos = [
  "Tride",
  "Helium Health",
  "Frelapay",
  "LegalPlace",
  "Centric Software",
  "Mark Taylor",
  "Veend",
];

export default function Ticker() {
  const items = [...logos, ...logos];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="flex w-max animate-ticker-scroll gap-16 py-2">
        {items.map((logo, i) => (
          <span
            key={i}
            className="font-serif text-2xl md:text-3xl text-ink/40 whitespace-nowrap"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}
