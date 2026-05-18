import { Island, Tour } from "@/lib/content";
import IslandCard from "@/components/ui/IslandCard";

interface IslandsGridProps {
  islands: Island[];
  allTours: Tour[];
}

const islandOrder = ["palawan", "boracay", "cebu", "bohol", "manila", "camiguin"];

const islandDescriptions: Record<string, string> = {
  palawan: "Известняковые скалы, бирюзовые лагуны и объект ЮНЕСКО — подземная река.",
  boracay: "Белейший пляж и лазурная вода. Самый знаменитый остров страны.",
  cebu: "База для китовых акул, каньонинга и торнадо сардин.",
  bohol: "Шоколадные холмы и крошечные долгопяты — природные феномены.",
  manila: "400 лет истории, Интрамурос и выездные туры к вулкану Тааль.",
  camiguin: "Вулканический остров с горячими источниками — нетронутый и спокойный.",
};

export default function IslandsGrid({ islands, allTours }: IslandsGridProps) {
  const sorted = islandOrder
    .map((slug) => islands.find((i) => i.slug === slug))
    .filter(Boolean) as Island[];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="flex items-end justify-between mb-12 border-b border-[var(--line)] pb-8">
        <div>
          <p className="section-label text-mid mb-3">Направления</p>
          <h2 className="font-cormorant text-5xl font-medium text-dark">
            Шесть островов
          </h2>
        </div>
        <p className="text-sm text-mid max-w-xs text-right leading-relaxed hidden md:block">
          Каждый остров — отдельный мир с собственным характером, пейзажами и маршрутами.
        </p>
      </div>

      {/* Grid: Palawan featured (tall) + 5 others */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {sorted.map((island, i) => {
          const count = allTours.filter((t) => t.island === island.slug).length;
          return (
            <div key={island.slug} className={i === 0 ? "lg:row-span-2" : ""}>
              <IslandCard
                name={island.name}
                slug={island.slug}
                description={islandDescriptions[island.slug] || island.description}
                tourCount={count || 2}
                featured={i === 0}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
