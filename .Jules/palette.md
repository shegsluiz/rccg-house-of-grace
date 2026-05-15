## 2024-05-18 - Improve Layout component accessibility
**Learning:** Decorative icons inside interactive elements without ARIA labels can confuse screen reader users. Additionally, missing focus states limit keyboard accessibility.
**Action:** Always add `aria-hidden="true"` to decorative icons, ensure interactive elements have clear `aria-label`s, and implement focus states (`focus-visible:ring-2 focus-visible:ring-hog-green-400 focus:outline-none`) across all similar navigation elements.
