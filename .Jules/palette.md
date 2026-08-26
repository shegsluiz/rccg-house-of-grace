## 2024-05-19 - Improved Icon Accessibility Patterns
**Learning:** Custom SVG components (e.g., icons) need to explicitly define and pass down standard accessibility props like `aria-hidden` to avoid screen readers announcing confusing graphic semantics for decorative elements.
**Action:** When adding or auditing SVG icons, ensure they accept at least `{ className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }` and pass it to the root `<svg>` tag. Add `aria-hidden="true"` when using them inside interactive elements like links or buttons.
