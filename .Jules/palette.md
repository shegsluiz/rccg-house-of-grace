## 2024-05-15 - Icon-only buttons accessibility pattern
 **Learning:** Icon-only buttons (like mobile menu toggles and social links) completely lack context for screen reader users and often miss clear keyboard focus indicators.
 **Action:** Always add `aria-label` to the button/link, `aria-hidden="true"` to the decorative SVG inside, and apply `focus-visible:ring-2 focus-visible:ring-hog-green-400 focus:outline-none` for keyboard accessibility.
