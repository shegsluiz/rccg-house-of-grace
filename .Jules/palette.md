# Palette's Journal

## 2024-05-14 - Interactive SVG Icons
**Learning:** Custom SVG icons used in interactive elements (like social links) need explicit aria-hidden="true" to prevent screen readers from announcing them as confusing graphic objects.
**Action:** Always add aria-hidden="true" and spread props to custom SVG components used within accessible anchor or button elements.

## 2024-05-14 - Icon-only buttons and links
**Learning:** The application uses several icon-only buttons (like mobile menu toggle) and links (like social media icons in the footer) that do not have `aria-label`s. This makes them inaccessible to screen reader users who cannot determine their function.
**Action:** Always add descriptive `aria-label`s to interactive elements that only contain icons and no visible text.
