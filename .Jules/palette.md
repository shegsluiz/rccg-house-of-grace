## 2024-07-17 - Added a11y attributes to external social icons & dynamic toggles
**Learning:** Custom SVG icons exported as simple functional components (like TikTokIcon) lack standard DOM props, causing a11y directives (e.g. `aria-hidden`) to be dropped if not explicitly typed and spread (`...props`) down to the internal `<svg>`.
**Action:** When implementing generic `aria-hidden` tags on iconography wrapped in interactive anchors/buttons, immediately ensure the custom SVG component accepts `React.SVGProps<SVGSVGElement>`.
