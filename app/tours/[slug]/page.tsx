import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getAllTours, getTourBySlug } from "@/lib/content";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const tours = getAllTours();
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tour = getTourBySlug(params.slug);
  if (!tour) return {};
  return {
    title: tour.seo_title || `${tour.name} — Tour-Phil`,
    description: tour.seo_description || tour.short_description,
    openGraph: {
      title: tour.seo_title || tour.name,
      description: tour.seo_description || tour.short_description,
    },
  };
}

const islandNames: Record<string, string> = {
  boracay: "Боракай",
  cebu: "Себу",
  palawan: "Палаван",
  bohol: "Бохоль",
  manila: "Манила",
  camiguin: "Камигин",
};

export default function TourPage({ params }: Props) {
  const tour = getTourBySlug(params.slug);
  if (!tour) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.short_description,
    touristType: "Русскоязычные туристы",
    offers: {
      "@type": "Offer",
      price: tour.price_from,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "TravelAgency",
        name: "Tour-Phil",
        url: "https://tour-phil.com",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "47",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <div className="bg-dark text-sand">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="section-label text-sand/40">
                {islandNames[tour.island] || tour.island}
              </span>
              {tour.tags?.map((tag) => (
                <span key={tag} className="text-xs text-sand/30 border border-sand/10 px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-cormorant text-5xl md:text-6xl font-medium text-sand mb-6 max-w-3xl">
              {tour.name}
            </h1>
            <p className="text-sand/60 text-lg max-w-2xl leading-relaxed">
              {tour.short_description}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div
                className="prose-custom"
                dangerouslySetInnerHTML={{ __html: markdownToHtml(tour.body) }}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Price card */}
                <div className="border border-[var(--line)] p-8">
                  <p className="section-label text-mid mb-2">Стоимость</p>
                  <p className="font-cormorant text-5xl font-light text-dark mb-1">
                    от ${tour.price_from}
                  </p>
                  <p className="text-xs text-mid mb-6">на человека</p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-sm text-mid">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-mid">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                      Русскоязычный гид
                    </div>
                  </div>
                  <a
                    href="https://t.me/tourphilippines"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block"
                  >
                    Забронировать
                  </a>
                  <a
                    href="https://wa.me/639267478759"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full text-center block mt-3"
                  >
                    WhatsApp
                  </a>
                </div>

                {/* Included */}
                {tour.included.length > 0 && (
                  <div className="border border-[var(--line)] p-8">
                    <p className="section-label text-mid mb-4">Включено</p>
                    <ul className="space-y-2">
                      {tour.included.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-mid">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" className="mt-0.5 shrink-0">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Not included */}
                {tour.not_included.length > 0 && (
                  <div className="border border-[var(--line)] p-8">
                    <p className="section-label text-mid mb-4">Не включено</p>
                    <ul className="space-y-2">
                      {tour.not_included.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-mid">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--warm)" strokeWidth="2" className="mt-0.5 shrink-0">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
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
    .replace(/^\| .+ \|$/gm, (row) => {
      const cells = row.split("|").filter((c) => c.trim());
      return "<tr>" + cells.map((c) => `<td>${c.trim()}</td>`).join("") + "</tr>";
    })
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`)
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[hul]|<tr|<\/)(.*)/gm, (line) => line ? `<p>${line}</p>` : "")
    .replace(/<p><\/p>/g, "")
    .replace(/<p>(<[hul])/g, "$1")
    .replace(/(<\/[hul][^>]*>)<\/p>/g, "$1");
}
