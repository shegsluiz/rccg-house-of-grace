## 2024-10-21 - Added ARIA attributes to icon-only buttons
**Learning:** Icon-only buttons and links must have `aria-label` attributes for screen reader accessibility. Inner icons should also have `aria-hidden="true"` to prevent screen readers from announcing them.
**Action:** Always add `aria-label` to interactive elements without visible text, and `aria-hidden="true"` to decorative icons.
