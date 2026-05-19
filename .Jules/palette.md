## 2024-05-17 - Icon-only element accessibility in Layout.tsx
**Learning:** Found that icon-only buttons (like the mobile menu) and links (like footer socials) lacked screen reader labels and keyboard focus indicators, making them functionally invisible or inaccessible to some users.
**Action:** Always add `aria-label` to the interactive element, `aria-hidden="true"` to the internal SVG, and `focus-visible:ring-2 focus-visible:ring-hog-green-400 focus:outline-none` for explicit keyboard navigation styling.
