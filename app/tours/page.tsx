import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TourCard from "@/components/ui/TourCard";
import { getAllTours } from "@/lib/content";

export const metadata: Metadata = {
  title: "Все туры на Филиппинах — Tour-Phil",
  description: "Полный каталог авторских туров по Филиппинам с русскоязычным гидом. Боракай, Себу, Палаван, Бохоль, Манила, Камигин.",
};

const islandFilters = [
  { slug: "all", name: "Все острова" },
  { slug: "boracay", name: "Боракай" },
  { slug: "cebu", name: "Себу" },
  { slug: "palawan", name: "Палаван" },
  { slug: "bohol", name: "Бохоль" },
  { slug: "manila", name: "Манила" },
  { slug: "camiguin", name: "Камигин" },
];

export default function ToursPage() {
  const tours = getAllTours();

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <div className="border-b border-[var(--line)]">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <p className="section-label text-mid mb-4">Каталог</p>
            <h1 className="font-cormorant text-6xl font-medium text-dark">
              Все туры
            </h1>
            <p className="text-mid mt-4 max-w-xl leading-relaxed">
              {tours.length} маршрутов по шести островам. С русскоязычным гидом, трансфером и полным сопровождением.
            </p>
          </div>

          {/* Island filter tabs */}
          <div className="max-w-7xl mx-auto px-6 flex gap-1 overflow-x-auto pb-px scrollbar-hide">
            {islandFilters.map((f) => (
              <div
                key={f.slug}
                className="shrink-0 px-5 py-3 text-xs tracking-widest uppercase text-mid hover:text-dark transition-colors cursor-pointer border-b-2 border-transparent hover:border-dark"
              >
                {f.name}
              </div>
            ))}
          </div>
        </div>

        {/* Tours list */}
        <div className="max-w-7xl mx-auto px-6 py-12">
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
      </main>
      <Footer />
    </>
  );
}
