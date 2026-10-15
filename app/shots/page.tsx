import Reveal from "@/components/Reveal";
import ShotsGallery from "@/components/ShotsGallery";

export const metadata = {
  title: "UI Shots — Isaiah Adeleke",
};

export default function ShotsPage() {
  return (
    <section className="pt-36 md:pt-48 pb-24 md:pb-32">
      <div className="max-w-content mx-auto px-7 md:px-14 lg:px-20">
        <Reveal>
          <h1 className="display-heading gradient-ink text-[clamp(3rem,6vw,5.5rem)]">UI shots &amp; small details.</h1>
          <p className="mt-7 text-lg md:text-xl text-muted max-w-2xl">
            A collection of web, mobile, and tablet interfaces, alongside brand design and illustrations.
          </p>
        </Reveal>
      </div>
      <ShotsGallery />
    </section>
  );
}
