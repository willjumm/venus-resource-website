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

No build step required. Open `index.html` in a browser or deploy to any static host.

### Local preview

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

### Deploy

Upload the entire `venus-website/` folder to Netlify, Vercel, GitHub Pages, or any static hosting provider.

## Contact Form

The contact form on `contact.html` is configured to submit to Formspree. Replace `YOUR_FORM_ID` in `js/main.js` with your actual Formspree endpoint ID. Without a valid endpoint, the form will show a success message and log data to the console.

## Design System

- **Fonts:** Plus Jakarta Sans (headings), Inter (body)
- **Primary color:** `#0d631b`
- **Border radius:** 0px everywhere (sharp, architectural aesthetic)
- **No divider lines** — uses background color shifts and whitespace

See `stitch/venus_resource_core/DESIGN.md` for the full design system specification.
