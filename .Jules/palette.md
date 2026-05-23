## 2026-05-23 - Accessibility of Icon-Only Buttons
**Learning:** Found that icon-only buttons (like mobile menus and social links) in `Layout.tsx` lacked ARIA labels and focus states, which causes screen readers to announce confusing graphic semantics and hinders keyboard navigation.
**Action:** Always add `aria-label` to icon-only buttons/links, use `aria-hidden="true"` on decorative SVGs inside them, and include explicit focus states (e.g., `focus-visible:ring-2 focus-visible:ring-hog-green-400 focus:outline-none`).
