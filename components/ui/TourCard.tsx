import Link from "next/link";

interface TourCardProps {
  index?: number;
  name: string;
  slug: string;
  island: string;
  duration: string;
  price_from: number;
  short_description: string;
  tags?: string[];
}

const islandNames: Record<string, string> = {
  boracay: "Боракай",
  cebu: "Себу",
  palawan: "Палаван",
  bohol: "Бохоль",
  manila: "Манила",
  camiguin: "Камигин",
};

export default function TourCard({
  index,
  name,
  slug,
  island,
  duration,
  price_from,
  short_description,
  tags = [],
}: TourCardProps) {
  return (
    <Link href={`/tours/${slug}`} className="group block border-b border-[var(--line)] py-7 hover:bg-sand/50 transition-colors px-2 -mx-2">
      <div className="flex items-start gap-6">
        {index !== undefined && (
          <span className="font-cormorant text-4xl font-light text-mid/30 w-10 shrink-0 leading-none mt-1">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs tracking-widest uppercase text-accent font-medium">
              {islandNames[island] || island}
            </span>
            {tags.map((tag) => (
              <span key={tag} className="text-xs text-mid border border-[var(--line)] px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-cormorant text-2xl font-medium text-dark mb-2 group-hover:text-accent transition-colors">
            {name}
          </h3>
          <p className="text-sm text-mid leading-relaxed line-clamp-2">{short_description}</p>
        </div>
        <div className="shrink-0 text-right">
          <div className="text-xs text-mid mb-1">{duration}</div>
          <div className="font-cormorant text-xl font-medium text-dark">
            от ${price_from}
          </div>
          <div className="mt-3 text-mid group-hover:text-accent transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="ml-auto">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
