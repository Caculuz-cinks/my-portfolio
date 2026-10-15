"use client";

const logos = Array.from(
  { length: 14 },
  (_, index) => `/logos/clients/client-${String(index + 1).padStart(2, "0")}.svg`,
);

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
      <div className="flex w-max animate-ticker-scroll items-center gap-14 py-3 md:gap-20">
        {items.map((logo, i) => {
          const isLargerLogo =
            logo.endsWith("client-03.svg") || logo.endsWith("client-04.svg");

          return (
            <span
              key={`${logo}-${i}`}
              className="flex h-8 w-28 shrink-0 items-center justify-center md:h-9 md:w-32"
            >
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className={`h-full w-full object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 ${
                  isLargerLogo ? "scale-[1.18] md:scale-125" : ""
                }`}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
