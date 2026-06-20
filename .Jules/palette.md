## 2026-06-20 - [Added Accessibility to Icon-Only Buttons in Layout]
 **Learning:** Missing `aria-label` and visible focus states (`focus-visible:ring-2 focus-visible:ring-hog-green-400`) makes icon-only buttons entirely inaccessible to keyboard and screen-reader users. Also, SVGs within interactive elements need `aria-hidden="true"` to prevent screen reader redundancy.
 **Action:** Always pair icon-only interactive elements with `aria-label`s and visible focus states, and hide the decorative SVG from screen readers.
