## 2026-05-08 - Added Missing ARIA Labels & Focus States
**Learning:** Found a pattern of missing `aria-label`s and focus states on icon-only interactive elements like mobile menu toggles and social media links in the global `Layout.tsx` component.
**Action:** Next time working on layout or navigation components, proactively ensure all icon-only buttons and anchor tags include descriptive `aria-label`s and clear `focus-visible` styling to support keyboard accessibility.
