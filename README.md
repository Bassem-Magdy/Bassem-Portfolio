# Bassem Magdy | Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Run
```bash
npm install
cp .env.example .env.local   # optional: enables the contact form
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Before you deploy: fill the TODOs in `src/data/site.ts`
- `site.email`, `site.url`
- `links.linkedin`
- `links.resume` -> put your PDF at `public/Bassem-Magdy-Resume.pdf`
- Each project's `demo` / `code` URL (buttons appear only when a URL is set;
  "Code" falls back to your GitHub profile)

## Contact form
`/api/contact` validates input (with a honeypot) and sends via [Resend](https://resend.com).
Set `RESEND_API_KEY` and `CONTACT_TO_EMAIL` in Vercel -> Project Settings -> Environment Variables.
Without them, the form shows a friendly fallback with your email address.

## Structure
```
src/
  app/            layout (SEO metadata), page, sitemap, robots, icon, api/contact
  components/     navbar, hero, stats, about, skills, experience, projects, contact, footer
    ui/           section, reveal (Framer Motion), button
  data/site.ts    ALL content + links (edit here)
  lib/            utils, useActiveSection
```
