## 2023-10-27 - Icon Accessibility Integration
**Learning:** Custom SVG components (e.g., icons) in the codebase must be explicitly defined to accept and pass standard accessibility props, such as `aria-hidden`, down to their underlying `<svg>` tags to ensure proper screen reader integration.
**Action:** When adding new custom SVGs, always spread `...props` to the `<svg>` element and type them properly with `React.SVGProps<SVGSVGElement>`.
