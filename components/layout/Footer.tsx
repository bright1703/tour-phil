import Link from "next/link";

const islands = [
  { name: "Боракай", href: "/islands/boracay" },
  { name: "Себу", href: "/islands/cebu" },
  { name: "Палаван", href: "/islands/palawan" },
  { name: "Бохоль", href: "/islands/bohol" },
  { name: "Манила", href: "/islands/manila" },
  { name: "Камигин", href: "/islands/camiguin" },
];

const infoLinks = [
  { name: "Виза", href: "/blog/visa" },
  { name: "Деньги и обмен", href: "/blog/money" },
  { name: "Связь", href: "/blog/communication" },
  { name: "Все туры", href: "/tours" },
  { name: "Контакты", href: "/contacts" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-sand/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-cormorant text-3xl font-medium text-sand block mb-4">
              Tour-Phil
            </Link>
            <p className="text-sm leading-relaxed text-sand/50">
              Туры по Филиппинам с русскоязычным гидом с 2008 года.
            </p>
          </div>

          {/* Islands */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-sand/30 mb-5">Острова</p>
            <ul className="space-y-3">
              {islands.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand/60 hover:text-sand transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-sand/30 mb-5">Информация</p>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand/60 hover:text-sand transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-sand/30 mb-5">Контакты</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://t.me/tourphilippines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sand/60 hover:text-sand transition-colors flex items-center gap-2"
                >
                  <span className="text-sand/30">TG</span> @tourphilippines
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/639267478759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sand/60 hover:text-sand transition-colors flex items-center gap-2"
                >
                  <span className="text-sand/30">WA</span> +63 926 747 8759
                </a>
              </li>
              <li>
                <a
                  href="mailto:phil@tour-phil.com"
                  className="text-sm text-sand/60 hover:text-sand transition-colors flex items-center gap-2"
                >
                  <span className="text-sand/30">@</span> phil@tour-phil.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-sand/30">
            © {new Date().getFullYear()} Tour-Phil. Все права защищены.
          </p>
          <p className="text-xs text-sand/30">
            Информационный ресурс. Туристические услуги оказываются лицензированными партнёрами.
          </p>
        </div>
      </div>
    </footer>
  );
}
