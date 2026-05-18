import { Island, Tour } from "@/lib/content";
import IslandCard from "@/components/ui/IslandCard";

interface IslandsGridProps {
  islands: Island[];
  allTours: Tour[];
}

const islandDescriptions: Record<string, string> = {
  palawan: "Известняковые скалы, бирюзовые лагуны и объект ЮНЕСКО — подземная река.",
  boracay: "Белейший пляж и лазурная вода. Самый знаменитый остров страны.",
  cebu: "База для китовых акул, каньонинга и торнадо сардин.",
  bohol: "Шоколадные холмы и крошечные долгопяты — природные феномены.",
  manila: "400 лет истории, Интрамурос и выездные туры к вулкану Тааль.",
  camiguin: "Вулканический остров с горячими источниками — нетронутый и спокойный.",
};

export default function IslandsGrid({ islands, allTours }: IslandsGridProps) {
  const getIsland = (slug: string) => islands.find((i) => i.slug === slug);
  const getTourCount = (slug: string) =>
    allTours.filter((t) => t.island === slug).length || 2;

  const palawan = getIsland("palawan");
  const boracay = getIsland("boracay");
  const cebu = getIsland("cebu");
  const bohol = getIsland("bohol");
  const manila = getIsland("manila");
  const camiguin = getIsland("camiguin");

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

      {/*
        Layout (desktop):
        [ Palawan (tall) ] [ Boracay ] [ Cebu   ]
        [ Palawan        ] [ Bohol   ] [ Manila ]
        [ Camiguin — spans all 3 columns         ]
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {/* Palawan — tall, spans 2 rows */}
        {palawan && (
          <div className="lg:row-span-2">
            <IslandCard
              name={palawan.name}
              slug={palawan.slug}
              description={islandDescriptions["palawan"]}
              tourCount={getTourCount("palawan")}
              featured
            />
          </div>
        )}

        {/* Boracay — top-right col 2 */}
        {boracay && (
          <div>
            <IslandCard
              name={boracay.name}
              slug={boracay.slug}
              description={islandDescriptions["boracay"]}
              tourCount={getTourCount("boracay")}
            />
          </div>
        )}

        {/* Cebu — top-right col 3 */}
        {cebu && (
          <div>
            <IslandCard
              name={cebu.name}
              slug={cebu.slug}
              description={islandDescriptions["cebu"]}
              tourCount={getTourCount("cebu")}
            />
          </div>
        )}

        {/* Bohol — bottom-right col 2 */}
        {bohol && (
          <div>
            <IslandCard
              name={bohol.name}
              slug={bohol.slug}
              description={islandDescriptions["bohol"]}
              tourCount={getTourCount("bohol")}
            />
          </div>
        )}

        {/* Manila — bottom-right col 3 */}
        {manila && (
          <div>
            <IslandCard
              name={manila.name}
              slug={manila.slug}
              description={islandDescriptions["manila"]}
              tourCount={getTourCount("manila")}
            />
          </div>
        )}

        {/* Camiguin — spans all 3 columns as wide bottom card */}
        {camiguin && (
          <div className="lg:col-span-3">
            <IslandCard
              name={camiguin.name}
              slug={camiguin.slug}
              description={islandDescriptions["camiguin"]}
              tourCount={getTourCount("camiguin")}
            />
          </div>
        )}
      </div>
    </section>
  );
}
