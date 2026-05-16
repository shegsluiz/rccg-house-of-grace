## 2024-05-16 - Accessibility enhancements in icon-only buttons
**Learning:** Added `aria-label` to icon-only buttons and `aria-hidden="true"` to inner SVG icons. Also improved keyboard navigation by adding explicit focus states with `focus-visible:ring-2`. This ensures that screen readers announce the purpose of the buttons without confusing graphical descriptions.
**Action:** Always ensure that icon-only interactive elements (buttons, links) contain a descriptive `aria-label`, inner icons are marked as `aria-hidden`, and keyboard focus states are explicitly styled using `focus-visible`.
