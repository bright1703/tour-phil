const reviews = [
  {
    name: "Дина",
    trip: "Экскурсия по Маниле",
    text: "Спасибо за прекрасно организованные экскурсии! Гид знал буквально всё — и исторические факты, и где вкусно поесть. Впечатления на всю жизнь.",
    stars: 5,
  },
  {
    name: "Ольга с семьёй",
    trip: "Боракай + Себу, 10 дней",
    text: "Едем уже третий раз и всегда через Tour-Phil. Организация на высшем уровне, всё чётко по времени, гид — просто золото. Другие варианты даже не рассматриваем.",
    stars: 5,
  },
  {
    name: "Татьяна",
    trip: "Палаван, Эль-Нидо",
    text: "Потрясающая организация и реальная помощь на месте. Когда у нас возникли вопросы с жильём — всё решили за час. Такое отношение редко встретишь.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--warm)" stroke="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-[#f0ebe0] border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="section-label text-mid mb-3">Отзывы</p>
          <h2 className="font-cormorant text-5xl font-medium text-dark">
            Что говорят путешественники
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div key={r.name} className="bg-sand p-8 border border-[var(--line)]">
              <Stars count={r.stars} />
              <p className="text-mid leading-relaxed mt-5 mb-6 text-sm">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="border-t border-[var(--line)] pt-5">
                <p className="font-medium text-dark text-sm">{r.name}</p>
                <p className="text-xs text-mid mt-1">{r.trip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
