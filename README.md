# NoctuaRx Website

Clinical telepharmacy website for NoctuaRx (a DBA of TheraIntel LLC).

Built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**. Designed for one-click deployment on **Vercel**.

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel via GitHub

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Done. Live in ~60 seconds.

### Custom Domain
- In Vercel dashboard → **Settings → Domains**
- Add `noctuarx.com` (or your domain)
- Update DNS: add a CNAME pointing to `cname.vercel-dns.com`

---

## Project Structure

```
noctuarx/
├── app/
│   ├── layout.tsx       # Root layout + metadata/SEO
│   ├── page.tsx         # Main page (imports all sections)
│   └── globals.css      # Global styles + fonts
├── components/
│   ├── Navbar.tsx       # Sticky nav with mobile menu
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # 5-card core services grid
│   ├── Coverage.tsx     # Coverage scenarios section
│   ├── HowWeWork.tsx    # 4-step process
│   ├── Stats.tsx        # Stats + Why NoctuaRx panel
│   ├── Clinical.tsx     # 8-card clinical programs grid
│   ├── Testimonial.tsx  # Quote + stat row
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer with nav + social
├── public/              # Drop logo here as logo.svg or logo.png
├── vercel.json
├── tailwind.config.js
└── package.json
```

---

## Adding Your Logo

1. Drop your logo file into `/public/` (e.g. `logo.svg`)
2. In `Navbar.tsx` and `Footer.tsx`, replace the inline SVG owl with:
```tsx
import Image from "next/image";
<Image src="/logo.svg" alt="NoctuaRx" width={120} height={32} />
```

---

## Contact Form Backend

The form is currently front-end only (logs to state). To wire it up:

**Option A — Resend (recommended)**
```bash
npm install resend
```
Create `/app/api/contact/route.ts` and call `resend.emails.send(...)`.

**Option B — Formspree**
Change the form `action` to your Formspree endpoint. No backend needed.

**Option C — Netlify Forms / Vercel serverless**
Add `name="contact"` and `data-netlify="true"` to the form element.
