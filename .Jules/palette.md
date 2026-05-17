## 2024-05-17 - Added Accessibility to Icon-Only Buttons
**Learning:** In this application, many core navigational and social elements use SVG icons without accompanying text, creating significant accessibility issues for screen reader users and missing clear focus states for keyboard users.
**Action:** Always add descriptive `aria-label`s to `<a>` or `<button>` tags that contain only icons, hide the SVG itself from screen readers using `aria-hidden="true"`, and apply `focus-visible:ring-2 focus-visible:ring-hog-green-400 focus:outline-none` for keyboard navigation visibility.
