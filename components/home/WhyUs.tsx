const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Живём здесь",
    text: "Наши гиды — русскоязычные резиденты Филиппин. Мы знаем острова не по путеводителям.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "С 2008 года",
    text: "18 лет опыта. Тысячи гостей, сотни маршрутов, ноль типовых туров.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Шесть островов",
    text: "Боракай, Себу, Палаван, Бохоль, Манила и Камигин — весь архипелаг в одних руках.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "Связь 24/7",
    text: "Вы всегда можете написать нам в Telegram или WhatsApp — до, во время и после поездки.",
  },
];

export default function WhyUs() {
  return (
    <section className="border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-16 flex-col md:flex-row gap-6">
          <div>
            <p className="section-label text-mid mb-3">Почему Tour-Phil</p>
            <h2 className="font-cormorant text-5xl font-medium text-dark max-w-sm">
              Мы не туроператор. Мы ваши люди на месте.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f) => (
            <div key={f.title} className="group">
              <div className="text-accent mb-6 group-hover:text-accent-light transition-colors">
                {f.icon}
              </div>
              <h3 className="font-cormorant text-2xl font-medium text-dark mb-3">{f.title}</h3>
              <p className="text-sm text-mid leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
