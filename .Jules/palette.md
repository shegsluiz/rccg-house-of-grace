## 2024-03-20 - [Accessibility]
**Learning:** Found several icon-only interactive elements lacking proper ARIA labels and focus states, leading to poor screen reader support and poor keyboard navigation.
**Action:** Always ensure icon-only buttons have descriptive `aria-label`s, dynamic attributes (like `aria-expanded` for toggles), clear focus-visible outlines (`focus-visible:ring-2 focus-visible:ring-hog-green-400 focus:outline-none`), and add `aria-hidden="true"` to underlying decorative SVGs/icons.
