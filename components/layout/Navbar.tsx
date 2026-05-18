"use client";

import Link from "next/link";
import { useState } from "react";

const islands = [
  { name: "Боракай", href: "/islands/boracay" },
  { name: "Себу", href: "/islands/cebu" },
  { name: "Палаван", href: "/islands/palawan" },
  { name: "Бохоль", href: "/islands/bohol" },
  { name: "Манила", href: "/islands/manila" },
  { name: "Камигин", href: "/islands/camiguin" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sand/95 backdrop-blur-sm border-b border-[var(--line)]">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-cormorant text-2xl font-medium text-dark tracking-tight">
          Tour-Phil
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {islands.map((island) => (
            <Link
              key={island.href}
              href={island.href}
              className="text-xs tracking-widest uppercase text-mid hover:text-dark transition-colors"
            >
              {island.name}
            </Link>
          ))}
          <Link
            href="/tours"
            className="text-xs tracking-widest uppercase text-mid hover:text-dark transition-colors"
          >
            Все туры
          </Link>
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://t.me/tourphilippines"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden sm:inline-block"
          >
            Написать
          </a>
          <button
            className="lg:hidden p-2 text-dark"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-sand border-t border-[var(--line)] px-6 py-6">
          <div className="flex flex-col gap-5">
            {islands.map((island) => (
              <Link
                key={island.href}
                href={island.href}
                className="text-sm tracking-widest uppercase text-mid hover:text-dark transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {island.name}
              </Link>
            ))}
            <Link
              href="/tours"
              className="text-sm tracking-widest uppercase text-mid hover:text-dark transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Все туры
            </Link>
            <a
              href="https://t.me/tourphilippines"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center mt-2"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
