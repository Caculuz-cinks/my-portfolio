import Reveal from "@/components/Reveal";
import ContentList from "@/components/ContentList";

export const metadata = {
  title: "Content — Isaiah Adeleke",
};

export default function ContentPage() {
  return (
    <section className="pt-40 md:pt-52 pb-24 md:pb-32">
      <div className="max-w-content mx-auto px-5 md:px-6">
        <Reveal>
          <h1 className="font-serif text-5xl md:text-6xl">Content</h1>
          <p className="mt-5 text-lg text-muted max-w-xl">
            Talks, classes, and writing on AI product design, design strategy, and building in Africa.
          </p>
        </Reveal>

        <div className="mt-14">
          <ContentList />
        </div>
      </div>
    </section>
  );
}
