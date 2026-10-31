## 2024-05-19 - Accessible Mobile Menus
**Learning:** In React applications with mobile menus (`Layout.tsx`), toggle buttons for overlays typically require `aria-expanded` properties and `aria-label`s to inform screen readers of their state, which isn't obvious visually. In addition, social icons are often just generic links with an icon inside. They should include `aria-label` or `aria-hidden` along with accessible text.

**Action:** Look for icon-only interactive elements or buttons toggling a state in `Layout.tsx` and ensure `aria-label` or `aria-expanded` is implemented.
