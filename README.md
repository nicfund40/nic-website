# Nova Investment Club – Undergraduate Division · website

Static site (HTML + CSS + JS), no build step. **Not published yet.**

## Pages
| File | Page |
|---|---|
| `index.html` | Home: hero, values, events, publications |
| `about.html` | About Us |
| `our-work.html` | Our Work: the NIC-UD Fund and the Quarterly Shareholders Reports (future research files go here) |
| `team.html` | Meet the Team (Fall 2026) |
| `placements.html` | Placements (alumni firms and universities) |
| `contact.html` | Contact |

The top navigation and footer are repeated in every page: change them in all six files.

## Folders
```
css/styles.css                 styles (colours at the top, in :root)
js/config.js                   DOMAIN + placeholder switch  <- only place to change the domain
js/main.js                     mobile menu, scroll animations
assets/img/                    hero, fund roadmap, events, team photos
assets/logos/                  NIC-UD logo, placement logos
assets/pdfs/                   QSR PDFs for download
```

## Preview locally
Open `index.html` in a browser, or run `python -m http.server 8080` in this folder and open http://localhost:8080

## Placeholders
Missing content is marked `<!-- PLACEHOLDER: ... -->` in the code and outlined in orange on the page.
Before launch: fill them in and set `SHOW_PLACEHOLDERS: false` in `js/config.js`.
