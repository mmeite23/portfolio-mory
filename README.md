# Portfolio — Mory Junior Meite

> Personal portfolio website — Data Analysis & Artificial Intelligence  
> **Live:** [portfolio-mory.vercel.app](https://portfolio-mory.vercel.app)

---

## Overview

Static portfolio built with vanilla HTML, CSS and JavaScript — no framework, no build step, instant deployment.  
Designed with a modern light theme inspired by Claude AI and Mistral AI visual identities.

---

## Features

- **Smooth project filtering** — filter by AI & Agents, Data Engineering, MLOps, Full-Stack
- **Inline video player** — modal video demo without download (MP4)
- **PDF deliverables** — each project links to its report/presentation
- **Certification badges** — Alteryx, Dataiku, Databricks, DataCamp, PostgreSQL, Python
- **Scroll animations** — fade-in on intersection observer
- **Fully responsive** — mobile hamburger menu, fluid grids
- **Tech stack marquee** — animated scrolling banner
- **One-command deploy** — Vercel CLI

---

## Project Structure

```
portfolio-mory/
├── index.html                  # Main page (single-page)
├── style.css                   # All styles (CSS variables, responsive)
├── main.js                     # Interactions (filter, modal, animations)
│
├── docs/                       # PDF deliverables
│   ├── caceis-final-report.pdf
│   ├── caves-albert-livrable.pdf
│   ├── ml-bank-churn.pdf
│   ├── genai-final.pdf
│   ├── scoria-presentation.pdf
│   ├── double-materiality.pdf
│   ├── supply-chain.pdf
│   ├── airbus-valuation.pdf
│   ├── absolut-vodka.pdf
│   ├── finova-presentation.pdf
│   ├── winederful-ad.pdf
│   ├── projet-licence-2023.pdf
│   └── econometrics-notebook.pdf
│
├── media/                      # Demo videos
│   └── demo-financial-advisor.mp4
│
├── logos/                      # Certification logos
│   ├── alteryx.webp
│   ├── dataiku.png
│   ├── databricks.png
│   ├── datacamp.png
│   ├── postgre.png
│   └── python.png
│
├── prototype/                  # Interactive prototypes
│   └── CACEIS_D4_Prototype.html
│
├── CV_Mory_Jr_Meite_Data_Analyst - IA_2026_FR.pdf
├── vercel.json                 # Vercel config
├── .gitignore
└── README.md
```

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Markup | HTML5 semantic |
| Styling | CSS3 (custom properties, grid, flexbox, animations) |
| Scripting | Vanilla JavaScript (ES6+, IntersectionObserver) |
| Fonts | Inter + JetBrains Mono (Google Fonts) |
| Hosting | Vercel (free tier) |
| Version control | Git / GitHub |

---

## Sections

| Section | Description |
|---------|-------------|
| Hero | Tagline, CTA buttons, stats |
| Tech marquee | Animated stack banner |
| Projets techniques | 12 cards with filter (AI, Data, MLOps, Full-Stack) |
| Projets académiques | 9 cards with PDF links — Mines Paris-PSL |
| Profil | Bio, 6 skill categories, certification badges |
| Contact / Footer | Email, LinkedIn, GitHub |

---

## Local Development

No build step required — open directly in browser:

```bash
# Clone
git clone https://github.com/mmeite23/portfolio-mory.git
cd portfolio-mory

# Open in browser (macOS)
open index.html

# Or serve locally
npx serve .
```

---

## Deployment

Deployed automatically on Vercel. To redeploy manually:

```bash
npx vercel --prod
```

---

## Contact

**Mory Junior Meite**  
MSc Data & AI — Mines Paris-PSL  
[mory-junior.meite@etu.minesparis.psl.eu](mailto:mory-junior.meite@etu.minesparis.psl.eu)  
[linkedin.com/in/mory-jr-meite-ab8902240](https://www.linkedin.com/in/mory-jr-meite-ab8902240/)  
[github.com/mmeite23](https://github.com/mmeite23)
