
## 2026-05-25 - Interactive Icon Accessibility
**Learning:** Icon-only interactive elements (like mobile menu toggles and social links) must have clear `aria-label` attributes, inner SVGs should use `aria-hidden="true"` to prevent screen reader redundancy, and they must include explicit `focus-visible` styles (e.g., `focus-visible:ring-2`) for keyboard accessibility.
**Action:** Always verify keyboard focus states and screen-reader context for icon-only buttons/links during development.
