# Aivora LLC — Website

A static single-page website for Aivora LLC.

**Stack:** Vite · React · TypeScript · Tailwind CSS · shadcn/ui · motion · lucide-react

## Develop

```bash
npm install
npm run dev
```

## Build static site

```bash
npm run build
```

Output goes to `dist/` and can be deployed to any static host.

## Project structure

```
src/
├── App.tsx                    # Page composition
├── main.tsx                   # React entry
├── index.css                  # Theme tokens + Tailwind layers
├── lib/utils.ts               # cn() helper
└── components/
    ├── ui/                    # shadcn-style primitives (Button, Card, Input, Textarea)
    ├── Logo.tsx
    ├── Header.tsx
    ├── Hero.tsx
    ├── Products.tsx
    ├── Features.tsx
    ├── About.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## Editing content

All copy is inline in the component files — no CMS, no JSON. The product list lives in `Products.tsx`, the capability list in `Features.tsx`, and the company copy in `Hero.tsx` / `About.tsx`.

The contact form opens the user's mail client to `aivoranow@gmail.com` via a `mailto:` link.
