## 2026-06-11 - Added ARIA labels and Focus States to Icon Links
**Learning:** Found that social links and mobile menu toggles in the header/footer lack text labels and focus visibility, which limits accessibility for keyboard and screen-reader users.
**Action:** Added `aria-label`, `aria-hidden="true"` on inner SVGs, and focus rings (`focus-visible:ring-2`) to interactive elements next time I encounter icon-only links/buttons in this repository.
