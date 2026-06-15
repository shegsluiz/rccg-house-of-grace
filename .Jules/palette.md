## 2023-10-27 - Icon Accessibility in Layout
**Learning:** Found multiple icon-only buttons (mobile menu) and links (footer social icons) missing `aria-label`s and `aria-hidden` attributes on inner SVGs. Without these, screen readers announce generic or confusing information.
**Action:** Always apply `aria-label` to the interactive element (button/a) and `aria-hidden="true"` to the decorative SVG inside when creating icon-only interactive components.
