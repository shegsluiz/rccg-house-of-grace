## 2024-06-10 - Hiding Decorative SVG Icons inside ARIA Labeled Wrappers
**Learning:** Screen readers may announce confusing graphic semantics when reading interactive components that only contain SVG graphics, even when the parent element has an `aria-label`.
**Action:** When adding `aria-label` to an icon-only button or link, explicitly add `aria-hidden="true"` to the internal SVG (e.g., `lucide-react` icons) to ensure screen readers only announce the provided label and not redundant graphic information.
