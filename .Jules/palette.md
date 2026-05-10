## 2026-05-10 - Added Accessibility to Icon Buttons
**Learning:** In the Layout component, interactive elements like mobile menu toggles and social icons lacked both screen reader labels and clear keyboard focus indicators. The combination of aria-label, aria-expanded and standard Tailwind focus-visible classes effectively fixes this pattern across the app.
**Action:** Always verify icon-only buttons have descriptive aria-label attributes and visible focus states as standard practice for new components.
