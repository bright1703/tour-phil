import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TourCard from "@/components/ui/TourCard";
import { getAllIslands, getIslandBySlug, getToursByIsland } from "@/lib/content";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const islands = getAllIslands();
  return islands.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const island = getIslandBySlug(params.slug);
  if (!island) return {};
  return {
    title: island.seo_title || `${island.name} — туры | Tour-Phil`,
    description: island.seo_description || island.description,
  };
}

export default function IslandPage({ params }: Props) {
  const island = getIslandBySlug(params.slug);
  if (!island) notFound();

  const tours = getToursByIsland(params.slug);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div className="bg-dark text-sand">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <p className="section-label text-sand/40 mb-6">Острова Филиппин</p>
            <h1 className="font-cormorant text-7xl md:text-8xl font-medium text-sand mb-6">
              {island.name}
            </h1>
            <p className="text-sand/60 text-lg max-w-2xl leading-relaxed">
              {island.description}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <div
                className="prose-custom"
                dangerouslySetInnerHTML={{ __html: markdownToHtml(island.body) }}
              />
            </div>

            {/* Contact sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 border border-[var(--line)] p-8">
                <p className="section-label text-mid mb-4">Спланировать поездку</p>
                <p className="text-sm text-mid mb-6 leading-relaxed">
                  Расскажите нам о датах и интересах — подберём лучшие туры на {island.name}.
                </p>
                <a
                  href="https://t.me/tourphilippines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block mb-3"
                >
                  Telegram
                </a>
                <a
                  href="https://wa.me/639267478759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full text-center block"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Tours on this island */}
          {tours.length > 0 && (
            <div className="mt-16 pt-16 border-t border-[var(--line)]">
              <p className="section-label text-mid mb-3">Маршруты</p>
              <h2 className="font-cormorant text-4xl font-medium text-dark mb-8">
                Туры на {island.name}
              </h2>
              {tours.map((tour, i) => (
                <TourCard
                  key={tour.slug}
                  index={i}
                  name={tour.name}
                  slug={tour.slug}
                  island={tour.island}
                  duration={tour.duration}
                  price_from={tour.price_from}
                  short_description={tour.short_description}
                  tags={tour.tags}
                />
              ))}
            </div>
          )}
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
