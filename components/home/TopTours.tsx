import Link from "next/link";
import { Tour } from "@/lib/content";
import TourCard from "@/components/ui/TourCard";

interface TopToursProps {
  tours: Tour[];
}

export default function TopTours({ tours }: TopToursProps) {
  return (
    <section className="bg-sand border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="flex items-end justify-between mb-2">
          <div>
            <p className="section-label text-mid mb-3">Популярные маршруты</p>
            <h2 className="font-cormorant text-5xl font-medium text-dark">
              Топ туры
            </h2>
          </div>
          <Link
            href="/tours"
            className="hidden sm:flex items-center gap-2 text-sm text-mid hover:text-dark transition-colors"
          >
            Все {" "}туры
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Tours list */}
        <div className="mt-8">
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

        {/* Mobile all tours link */}
        <div className="mt-8 sm:hidden">
          <Link href="/tours" className="btn-outline w-full text-center block">
            Все туры
          </Link>
        </div>
      </div>
    </section>
  );
}
