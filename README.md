# Tour-Phil

Туристический сайт для Tour-Phil — русскоязычные туры по Филиппинам с 2008 года.

**Живой сайт:** https://tour-phil.com

## Стек

- Next.js 14 (App Router, SSG)
- TypeScript
- Tailwind CSS
- Decap CMS (контент через /admin)
- Netlify (деплой)

## Локальная разработка

npm install
npm run dev

Открыть: http://localhost:3000

## Структура контента

content/
  tours/        # Туры (markdown с frontmatter)
  islands/      # Острова (6 файлов)
  blog/         # Статьи (виза, деньги, связь)

## CMS (Decap)

Панель управления: /admin
Авторизация через Netlify Identity.

После деплоя:
1. Netlify → Site settings → Identity → Enable
2. Identity → Services → Git Gateway → Enable
3. Invite users через Netlify Identity

## Деплой на Netlify

1. Подключить GitHub репозиторий в Netlify
2. Build command: npm run build
3. Publish directory: out
4. Включить Netlify Identity + Git Gateway

## Контакты

- Telegram: https://t.me/tourphilippines
- WhatsApp: https://wa.me/639267478759
- Email: phil@tour-phil.com
