import Reveal from "@/components/Reveal";
import ShotCard from "@/components/ShotCard";
import { shots } from "@/data/shots";

export const metadata = {
  title: "UI Shots — Isaiah Adeleke",
};

export default function ShotsPage() {
  return (
    <section className="pt-40 md:pt-52 pb-24 md:pb-32">
      <div className="max-w-content mx-auto px-5 md:px-6">
        <Reveal>
          <h1 className="font-serif text-5xl md:text-6xl">UI Shots</h1>
          <p className="mt-5 text-lg text-muted max-w-xl">
            A closer look at interface details from Veend, Tride, Frelapay, and other products I&apos;ve designed.
          </p>
        </Reveal>

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6">
          {shots.map((shot) => (
            <ShotCard key={shot.id} shot={shot} />
          ))}
        </div>
      </div>
    </section>
  );
}
