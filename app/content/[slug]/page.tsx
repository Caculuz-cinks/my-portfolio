import { notFound } from "next/navigation";
import WritingArticle from "@/components/WritingArticle";
import { articles, getArticleBySlug } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  return { title: article ? `${article.title} — Isaiah Adeleke` : "Article", description: article?.description };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();
  return <WritingArticle article={article} />;
}
