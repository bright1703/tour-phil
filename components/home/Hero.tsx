import Link from "next/link";

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
        <div className="max-w-4xl">
          {/* Label */}
          <p className="section-label text-sand/40 mb-8">
            С 2008 года — туры с русскоязычным гидом
          </p>

          {/* Main heading */}
          <h1 className="font-cormorant text-sand leading-[0.95] mb-8">
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light italic">
              Филиппины
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium">
              изнутри
            </span>
          </h1>

          {/* Description */}
          <p className="text-sand/60 text-lg max-w-2xl leading-relaxed mb-12">
            Не групповые автобусы и не типовые маршруты. Авторские туры по шести островам —
            с теми, кто живёт здесь и знает это место как свой дом.
          </p>

          {/* CTAs */}
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

          {/* Stats */}
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

        {/* Floating destination cards */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3">
          {["Палаван", "Боракай", "Себу", "Бохоль"].map((island, i) => (
            <div
              key={island}
              className="bg-sand/5 border border-sand/10 backdrop-blur-sm px-5 py-3 text-sand/60 text-sm tracking-wide hover:bg-sand/10 transition-colors cursor-default"
              style={{ transform: `translateX(${i % 2 === 0 ? "0px" : "16px"})` }}
            >
              {island}
            </div>
          ))}
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
