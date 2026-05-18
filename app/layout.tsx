import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tour-Phil — Туры на Филиппины с русскоязычным гидом с 2008 года",
  description: "Авторские туры по Филиппинам с русскоязычным гидом. Боракай, Себу, Палаван, Бохоль, Манила. С 2008 года. Запишитесь в Telegram или WhatsApp.",
  metadataBase: new URL("https://tour-phil.com"),
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://tour-phil.com",
    siteName: "Tour-Phil",
    title: "Tour-Phil — Туры на Филиппины с русскоязычным гидом",
    description: "Авторские туры по Филиппинам с русскоязычным гидом. Боракай, Себу, Палаван, Бохоль, Манила.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour-Phil — Туры на Филиппины",
    description: "Авторские туры по Филиппинам с русскоязычным гидом с 2008 года.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://tour-phil.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-sand text-dark">
        {children}
      </body>
    </html>
  );
}
