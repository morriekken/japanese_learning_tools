# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`japanese_learning_tools` is a collection of browser-based Japanese language learning tools. The project is hosted on GitHub Pages and uses pure vanilla HTML, CSS, and JavaScript — no build system, no package manager, no framework.

## Repository Structure

```
japanese_learning_tools/
├── index.html                    # Landing page — links to all tools
├── shared.css                    # Shared design system (dark theme, gold accents, Japanese fonts)
├── README.md                     # Minimal GitHub readme (stub)
├── .nojekyll                     # Disables Jekyll on GitHub Pages
├── LICENSE                       # MIT (2026)
├── kanji-flip/
│   ├── kanji-flip.html           # Flashcard app with group index + card grid views
│   └── kanji-data.js             # Kanji study data organised into groups
├── katakana-patterns/
│   ├── katakana-patterns.html    # Pattern-based katakana learning tool
│   └── katakana-data.js          # Katakana cluster data (characters, mnemonics, examples)
└── katakana-patterns.zip         # Legacy archive — superseded by katakana-patterns/ directory
```

## Tech Stack

- **Language / Runtime**: Vanilla HTML5, CSS3, JavaScript (ES6+) — no transpilation, no bundling
- **Fonts**: Google Fonts — Noto Serif JP, Noto Sans JP (Japanese), Cinzel (decorative English headings)
- **Hosting**: GitHub Pages
- **Dependencies**: None. Everything runs directly in the browser.
- **Build / Lint / Test**: None configured. There is no `npm`, `make`, or test runner.

## Design System (`shared.css`)

All tools should `<link>` to `../shared.css` (or `./shared.css` from the root). Key tokens:

| Token | Value | Usage |
|---|---|---|
| Background | `#0c0c0f` | Page/card backgrounds |
| Primary accent | `#c9a86c` | Gold — buttons, headings, borders |
| Text primary | `#e8e0d0` | Body text |
| Font (Japanese) | Noto Serif JP / Noto Sans JP | All Japanese characters |
| Font (English accent) | Cinzel | Headers and titles |

Shared CSS provides: `.back-link`, `.tool-header`, `.tool-footer`, button styles, and card components. Prefer extending `shared.css` over adding inline styles.

## Kanji Flip Tool

`kanji-flip/kanji-flip.html` has two views rendered inside a single HTML file:

1. **Group index** — a tile grid listing every kanji group; tap a tile to enter that group.
2. **Card grid** — a 3×3 grid of flip cards. Each card shows a kanji on the front and furigana + English meaning on the back.

The tool uses `display: contents` view containers so both views share the same flex layout root. A back-link returns to the group index (not to `index.html`).

**Adding or editing kanji** — edit `kanji-flip/kanji-data.js`. The data format is:

```js
const kanjiGroups = [
  {
    name: "Group Name",
    cards: [
      { kanji: "人", furigana: "ひと (hito)", meaning: "person" },
      // ...up to 9 cards per group
    ]
  },
  // ...
];
```

## Katakana Patterns Tool

`katakana-patterns/katakana-patterns.html` teaches katakana by grouping visually similar characters into clusters (e.g. シ/ツ/ソ/ン). Each cluster card shows the characters side-by-side with mnemonics and example words, then offers a quiz.

Data lives in `katakana-patterns/katakana-data.js` as a `clusters` array. Each cluster object:

```js
{
  id: 'c0',           // unique string
  title: '...',       // heading
  subtitle: '...',    // short description
  theme: '#e63946',   // accent colour for badge/glyphs
  kana: [
    {
      k: 'シ',        // katakana character
      r: 'shi',       // romanisation
      mnemonic: '...', // memory aid
      examples: [{ k: 'シ...', r: '...', e: 'english' }]
    }
  ],
  diff: '...'         // HTML string explaining visual differences
}
```

## Adding a New Tool

1. Create a subdirectory: `tool-name/tool-name.html`
2. Link `shared.css` from that subdirectory: `<link rel="stylesheet" href="../shared.css">`
3. Include a `.back-link` pointing to `../index.html`
4. Add a tile to `index.html` in the tools grid

## Conventions

- **No frameworks** — keep every tool self-contained in a single HTML file plus optional data files.
- **No external JS** — do not add CDN script tags for libraries; write plain JavaScript.
- **Inline CSS inside tools is acceptable** for tool-specific styles, but shared styles belong in `shared.css`.
- **Japanese-first aesthetics** — typography and color choices should reflect the dark, minimal, gold-accented theme.
- **Semantic HTML** — use proper heading hierarchy, `<main>`, `<header>`, `<footer>`, `<nav>`.
- **No build step** — any file change should be immediately usable in a browser without compilation.

## Deployment

Pushing to `main` deploys automatically to GitHub Pages. There is no CI pipeline. Manual testing in a browser is the only verification step.
