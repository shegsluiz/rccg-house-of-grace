## 2023-10-27 - Icon-only Mobile Menu Accessibility
**Learning:** Icon-only mobile menu controls require explicit state communication (`aria-expanded`) and focus visibility (`focus-visible` styles) to be accessible to screen reader and keyboard users.
**Action:** Always include `aria-label`, `aria-expanded` (for toggles), visible focus rings, and `aria-hidden="true"` on inner SVGs for icon-only interactive elements.
