import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/content";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.seo_title || `${post.title} — Tour-Phil`,
    description: post.seo_description || post.excerpt,
  };
}

const categoryLabels: Record<string, string> = {
  visa: "Виза",
  money: "Деньги",
  transport: "Транспорт",
  communication: "Связь",
  tips: "Советы",
};

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <div className="border-b border-[var(--line)]">
          <div className="max-w-4xl mx-auto px-6 py-20">
            <span className="section-label text-accent mb-4 block">
              {categoryLabels[post.category] || post.category}
            </span>
            <h1 className="font-cormorant text-5xl md:text-6xl font-medium text-dark mb-6">
              {post.title}
            </h1>
            <p className="text-mid text-lg leading-relaxed">{post.excerpt}</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(post.body) }}
          />

          {/* Contact CTA */}
          <div className="mt-16 pt-12 border-t border-[var(--line)] text-center">
            <p className="font-cormorant text-3xl font-medium text-dark mb-4">
              Есть вопросы о поездке на Филиппины?
            </p>
            <p className="text-mid mb-8">
              Напишите нам — ответим подробно и бесплатно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/tourphilippines"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Telegram
              </a>
              <a
                href="https://wa.me/639267478759"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function markdownToHtml(markdown: string): string {
  return markdown
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`)
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[hul]|<\/)(.*\S.*)/gm, (line) => `<p>${line}</p>`)
    .replace(/<p><\/p>/g, "");
}
