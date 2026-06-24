# رنگِ مہک · Rang-e-Mehk

> **مٹی بولتی ہے** — *The Clay Speaks.*

An independent, editorial Next.js storefront for **Ghazal Noor's** hand-thrown porcelain perfume vessels. Built around the synesthesia of clay, colour and aroma, the experience guides visitors through an unhurried manifesto before leading into a curated catalogue of three signature 30ml vessels.

---

## The Vessels

| Vessel | Inspiration | Volume |
| --- | --- | --- |
| **Kashi Blue** (کاشی بلیو) | Multan's sacred glazed Kashi-kari tilework | 30ml |
| **Noor-e-Multan** (نورِ ملتان) | The sun-drenched turquoise domes of the City of Saints | 30ml |
| **Wisaal** (وصال) | Unglazed terracotta and rain on raw earth | 30ml |

## Features

- **Synesthetic homepage** — an editorial narrative on the dialogue between maker, clay and scent, leading into a styled product grid.
- **Scent Finder Quiz** — three tactile questions (colour, time of day, texture) score the visitor against their ideal vessel and unlock the exclusive code `KASHI10` for 10% off.
- **Cart ledger** — a slide-out drawer with state managed via React Context and persisted to `localStorage`.
- **Secured checkout** — WhatsApp collection coordination plus logistical COD protection: Cash on Delivery is capped at **PKR 15,000**, beyond which buyers are routed to prepaid Easypaisa / JazzCash / bank transfer to protect fragile porcelain in transit.

## The Palette

| Token | Hex | Meaning |
| --- | --- | --- |
| Mitti | `#C85A32` | Unglazed terracotta clay (buttons, accents) |
| Cobalt | `#003F87` | Sacred glazed tilework (headlines) |
| Turquoise | `#00A896` | Sun-drenched domes (sub-headers, tags) |
| Indigo | `#132238` | Matiari Ajrak vegetable dye (text, borders) |
| Porcelain | `#FAF8F5` | Raw white clay (background) |

## Tech Stack

- [Next.js 14](https://nextjs.org/) (Pages Router)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Project Structure

```
rangemehk-nextjs-ecommerce/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── src/
    ├── styles/globals.css
    ├── data/products.ts
    ├── context/CartContext.tsx
    ├── components/
    │   ├── Navbar.tsx
    │   ├── ProductCard.tsx
    │   ├── CartDrawer.tsx
    │   └── Footer.tsx
    └── pages/
        ├── _app.tsx
        ├── index.tsx
        ├── quiz.tsx
        └── checkout.tsx
```

## Getting Started

```bash
# install dependencies
npm install

# run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the studio.

## Deployment

This project is configured for immediate deployment to [Vercel](https://vercel.com/). Import the repository, accept the detected Next.js defaults, and deploy.

## License

All vessel artwork, copy and branding © Ghazal Noor / Rang-e-Mehk. Hand-thrown with intention.
