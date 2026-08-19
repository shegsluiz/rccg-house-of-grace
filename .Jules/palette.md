## 2024-05-18 - Improve Layout Accessibility
**Learning:** Found a recurring pattern of missing `aria-label`s on icon-only buttons/links and lacking keyboard focus rings, alongside outdated `rel="noreferrer"` attributes on external links.
**Action:** Always add descriptive `aria-label`s and `focus-visible` styling (`focus-visible:ring-2 focus-visible:ring-hog-green-400 focus:outline-none`) to interactive elements. Ensure external links use `rel="noopener noreferrer"`.
