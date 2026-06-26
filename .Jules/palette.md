
## 2024-06-26 - SVG Component Props Expansion
**Learning:** Custom SVG wrapper components (like `TikTokIcon` in `Layout.tsx`) need to accept and spread standard `SVGProps` to support essential accessibility attributes like `aria-hidden="true"`. Without this, screen readers may misinterpret decorative icons within interactive elements.
**Action:** When adding accessibility attributes to custom SVG icons, ensure the component definition extends `React.SVGProps<SVGSVGElement>` and spreads `{...props}` to the root `<svg>` element.
