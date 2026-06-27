## 2024-05-15 - Accessible Navigation and Icon Buttons
**Learning:** Icon-only buttons and links require aria-labels for screen readers and aria-hidden on the SVG itself to prevent redundant readout. Navigation toggles also need aria-expanded and aria-controls to give context about the menu's state. All target="_blank" links must include rel="noopener noreferrer" for security.
**Action:** Always add aria-label and focus-visible styles to icon-only interactive elements, use aria-hidden="true" on internal SVG elements, and ensure secure attributes on external links.
