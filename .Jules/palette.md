## 2024-05-12 - Icon-only buttons accessibility pattern
**Learning:** Found several icon-only buttons and social media links that lacked `aria-label`s and visible focus states, making keyboard navigation and screen reader usage difficult.
**Action:** When adding interactive icon elements (like menu toggles or social links), always include descriptive `aria-label`s and `focus-visible:ring-2 focus-visible:ring-hog-green-400 focus:outline-none` utility classes for accessibility. Additionally, always use `rel="noopener noreferrer"` with `target="_blank"`.
