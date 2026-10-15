import Reveal from "@/components/Reveal";
import ContentList from "@/components/ContentList";

export const metadata = {
  title: "Content — Isaiah Adeleke",
};

export default function ContentPage() {
  return (
    <section className="pt-36 md:pt-48 pb-24 md:pb-32">
      <div className="max-w-content mx-auto px-7 md:px-14 lg:px-20">
        <Reveal>
          <h1 className="display-heading gradient-ink text-[clamp(3rem,6vw,5.5rem)]">I share my thoughts.</h1>
          <p className="mt-7 text-lg md:text-xl text-muted max-w-2xl">
            Talks, classes, and writing on AI product design, design strategy, and building in Africa.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-24 page-card p-6 md:p-10">
          <ContentList />
        </div>
      </div>
    </section>
  );
}
