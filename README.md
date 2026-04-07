# Australia Venus Resource — Website

Static multi-page website for Australia Venus Resource (AVR).

## Structure

```
venus-website/
├── index.html        — Home page
├── projects.html     — Projects page (Korella Mine)
├── corporate.html    — Corporate overview & vision
├── contact.html      — Contact form & details
├── css/styles.css    — Shared styles
├── js/main.js        — Navigation, animations, form handling
└── assets/
    ├── favicon.svg   — SVG favicon (green "V" lettermark)
    └── images/       — Placeholder for local images
```

## Setup

```bash
npm install
npm run build        # builds css/tailwind.min.css
```

### Local preview

```bash
npx serve .
```

### Deploy (Vercel)

Connect the GitHub repo. Set:
- **Build Command:** `npm run build`
- **Output Directory:** `.`

The pre-built `css/tailwind.min.css` is committed to the repo, so the site also works without a build step.

## Contact Form

The contact form on `contact.html` is configured to submit to Formspree. Replace `YOUR_FORM_ID` in `js/main.js` with your actual Formspree endpoint ID. Without a valid endpoint, the form will show a success message and log data to the console.

## Design System

- **Fonts:** Plus Jakarta Sans (headings), Inter (body)
- **Primary color:** `#0d631b`
- **Border radius:** 0px everywhere (sharp, architectural aesthetic)
- **No divider lines** — uses background color shifts and whitespace

See `stitch/venus_resource_core/DESIGN.md` for the full design system specification.
