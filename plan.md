1. **Add Accessibility to Mobile Menu Buttons in `Layout.tsx`:**
   - Add `aria-label` ("Open menu" / "Close menu") and `aria-expanded` to the main mobile menu toggle button.
   - Add `aria-label` ("Close menu") to the overlay close button.
   - Add focus styles (`focus-visible:ring-2 focus-visible:ring-hog-green-400 focus:outline-none`) to both buttons.
   - Add `aria-hidden="true"` to the `Menu` and `X` icons.
2. **Add Accessibility to Footer Social Links in `Layout.tsx`:**
   - Add descriptive `aria-label` attributes to the Facebook, TikTok, YouTube, and Instagram anchor tags.
   - Add focus styles (`focus-visible:ring-2 focus-visible:ring-hog-green-400 focus:outline-none`) to the anchor tags.
   - Add `aria-hidden="true"` to the social icons and update `TikTokIcon` props to accept it.
3. **Frontend Verification:**
   - Start the dev server in the background and use Playwright to verify that the mobile menu toggle works, focus styles appear, and no errors occur.
   - Run `pnpm run lint` and `pnpm build` if `node_modules` exist.
4. **Complete pre-commit steps:**
   - Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.
5. **Submit Changes:**
   - Commit and submit changes on branch `palette-layout-a11y`.
