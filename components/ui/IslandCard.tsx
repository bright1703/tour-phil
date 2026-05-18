import Link from "next/link";

interface IslandCardProps {
  name: string;
  slug: string;
  description: string;
  tourCount: number;
  featured?: boolean;
}

export default function IslandCard({
  name,
  slug,
  description,
  tourCount,
  featured = false,
}: IslandCardProps) {
  return (
    <Link
      href={`/islands/${slug}`}
      className="group block bg-gradient-to-br from-[#1a5c52] to-[#0d3830] hover:from-[#206b5f] hover:to-[#113f35] text-sand p-8 relative overflow-hidden transition-all duration-300 h-full"
    >
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-24 h-24 border-b border-l border-sand/10" />

      <div className={`flex flex-col ${featured ? "min-h-[400px]" : "min-h-[200px]"} justify-between`}>
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-sand/40 mb-3">
            {tourCount} {tourCount === 1 ? "тур" : tourCount < 5 ? "тура" : "туров"}
          </p>
          <h3 className={`font-cormorant font-medium text-sand ${featured ? "text-5xl" : "text-3xl"} leading-tight mb-4 group-hover:text-warm transition-colors duration-300`}>
            {name}
          </h3>
          <p className="text-sm text-sand/60 leading-relaxed max-w-xs">{description}</p>
        </div>

        <div className="flex items-center gap-2 text-sand/40 group-hover:text-sand/80 transition-colors mt-6">
          <span className="text-xs tracking-widest uppercase">Смотреть туры</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
