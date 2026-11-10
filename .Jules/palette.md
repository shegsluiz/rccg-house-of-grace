## 2024-05-24 - Add ARIA Labels to Mobile Menu Buttons
**Learning:** Found that the mobile menu toggle buttons in the Layout component and the input fields in the Connect component were missing ARIA labels and visually hidden `<label>` elements, leading to poor accessibility for screen reader users.
**Action:** Ensure all icon-only buttons receive an `aria-label` attribute and `aria-expanded` when they control an overlay. Also ensure all inputs have a visually hidden label.
