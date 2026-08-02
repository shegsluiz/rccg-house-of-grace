## 2026-08-02 - Custom SVG Components and Accessibility Attributes

**Learning:** Custom SVG components (like `TikTokIcon`) in this codebase often fail to spread props down to the root `<svg>` element. This prevents important accessibility attributes like `aria-hidden="true"` or `focusable="false"` from being applied when the icon is used as a decorative element inside interactive controls (like buttons or links), leading to screen readers announcing confusing graphic semantics.

**Action:** When working with custom SVG icons, ensure they are typed to accept standard SVG attributes (e.g., `React.SVGProps<SVGSVGElement>`) and explicitly spread these props (`{...props}`) onto the underlying `<svg>` tag. This allows standard a11y attributes to correctly apply down the DOM tree.
