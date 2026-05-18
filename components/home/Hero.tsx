import Link from "next/link";

const destinations = [
  { name: "Палаван", sub: "Underground River · UNESCO" },
  { name: "Боракай", sub: "Белый пляж · Лазурная вода" },
  { name: "Себу", sub: "Китовые акулы · Каньонинг" },
  { name: "Бохоль", sub: "Шоколадные холмы · Долгопяты" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dark overflow-hidden flex items-center pt-16">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1c1a17] via-[#2a3020] to-[#1a2a28]" />

      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-sand" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-sand" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-sand" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-sand" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <div>
            <p className="section-label text-sand/40 mb-8">
              С 2008 года — туры с русскоязычным гидом
            </p>

            <h1 className="font-cormorant text-sand leading-[0.95] mb-8">
              <span className="block text-6xl sm:text-7xl md:text-8xl font-light italic">
                Филиппины
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl font-medium">
                изнутри
              </span>
            </h1>

            <p className="text-sand/60 text-lg max-w-xl leading-relaxed mb-12">
              Не групповые автобусы и не типовые маршруты. Авторские туры по шести островам —
              с теми, кто живёт здесь и знает это место как свой дом.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <a
                href="https://t.me/tourphilippines"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Написать в Telegram
              </a>
              <Link href="/tours" className="btn-outline border-sand/20 text-sand hover:bg-sand hover:text-dark">
                Все туры
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-sand/10 max-w-xl">
              <div>
                <p className="font-cormorant text-4xl font-light text-sand">18</p>
                <p className="text-xs tracking-widest uppercase text-sand/40 mt-1">лет</p>
              </div>
              <div>
                <p className="font-cormorant text-4xl font-light text-sand">6</p>
                <p className="text-xs tracking-widest uppercase text-sand/40 mt-1">островов</p>
              </div>
              <div>
                <p className="font-cormorant text-4xl font-light text-sand">40+</p>
                <p className="text-xs tracking-widest uppercase text-sand/40 mt-1">маршрутов</p>
              </div>
            </div>
          </div>

          {/* Right side — destination cards */}
          <div className="hidden lg:flex flex-col gap-4 justify-center">
            {destinations.map((dest, i) => (
              <div
                key={dest.name}
                className="bg-gradient-to-r from-[#1a5c52] to-[#0d3830] border border-[#2a7a6e]/40 px-7 py-5 text-sand group hover:from-[#206b5f] hover:to-[#113f35] transition-all duration-300 cursor-default"
                style={{ transform: `translateX(${i % 2 === 0 ? "0px" : "24px"})` }}
              >
                <p className="font-cormorant text-2xl font-medium group-hover:text-warm transition-colors">
                  {dest.name}
                </p>
                <p className="text-xs text-sand/50 tracking-wide mt-1">{dest.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sand/30">
        <span className="text-xs tracking-widest uppercase">Прокрутить</span>
        <div className="w-px h-12 bg-gradient-to-b from-sand/30 to-transparent" />
      </div>
    </section>
  );
}
