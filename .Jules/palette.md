## 2024-05-24 - Custom SVG Accessibility Props
**Learning:** Custom SVG icons in this codebase (like `TikTokIcon`) often lack the ability to accept standard accessibility props like `aria-hidden` or `role`. This prevents proper integration with icon-only buttons where the inner SVG must be hidden from screen readers.
**Action:** Always define custom SVG components using `React.SVGProps<SVGSVGElement>` and spread the props `...props` to the root `<svg>` element to ensure they can receive `aria-hidden="true"`.
