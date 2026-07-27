## 2024-03-24 - Accessibility for Interactive Icons
**Learning:** Decorative icons (like SVGs) used within interactive elements (buttons, links) can confuse screen readers if not properly hidden. Additionally, interactive icon-only elements fail accessibility audits if they don't have descriptive text.
**Action:** Always apply `aria-hidden="true"` to the decorative icon component itself (`<svg>`, Lucide icons, etc.), and ensure the parent `<button>` or `<a>` tag has a descriptive `aria-label`. For toggle buttons, also include `aria-expanded`.
