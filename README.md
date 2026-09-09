# Jack -- 3D Creator Portfolio

A dark-themed, animation-heavy 3D creator portfolio landing page built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL that Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    FadeIn.tsx            reusable whileInView fade/slide wrapper
    Magnet.tsx             mouse-following magnetic hover effect
    AnimatedText.tsx        character-by-character scroll-reveal text
    ContactButton.tsx        gradient pill CTA
    LiveProjectButton.tsx     ghost/outline pill button
    HeroSection.tsx           full-viewport hero with nav, heading, portrait
    MarqueeSection.tsx        dual-row scroll-driven image marquee
    AboutSection.tsx           bio section with corner decorations
    ServicesSection.tsx        white services list
    ProjectsSection.tsx        sticky-stacking project cards
  App.tsx
  main.tsx
  index.css
```

## Notes

- All images are loaded from the external URLs specified in the brief (motionsites.ai previews, Figma-hosted renders, and higgs.ai/CloudFront project shots). Swap these for your own assets by editing the URL constants at the top of each component file.
- The Kanit font is loaded from Google Fonts in `index.html`.
- Reduced-motion users get animations shortened via a `prefers-reduced-motion` rule in `index.css`.
- The project scale and stacking offsets in `ProjectsSection.tsx` follow the brief's formula: `targetScale = 1 - (totalCards - 1 - index) * 0.03` with each card offset by `index * 28px`.
