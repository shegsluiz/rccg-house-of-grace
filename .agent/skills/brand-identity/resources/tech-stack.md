# Preferred Tech Stack & Implementation Rules

When generating code or UI components for this brand, you **MUST** strictly adhere to the following technology choices.

## Core Stack
* **Framework:** React (TypeScript preferred)
* **Styling Engine:** Tailwind CSS v4 (Mandatory. Do not use plain CSS or styled-components unless explicitly asked.)
* **Component Library:** motion/react for animations (framer-motion).
* **Icons:** Lucide React

## Implementation Guidelines

### 1. Tailwind Usage
* Use utility classes directly in JSX.
* Utilize the color tokens defined in `design-tokens.json` (e.g., use `bg-black text-white` instead of hardcoded hex values).
* **Dark Mode:** Since the theme is natively dark, ensure dark gradients are used (`from-purple-400 to-pink-500`).

### 2. Component Patterns
* **Buttons:** Primary actions must use the solid background (e.g. white or gradient) and pill-shape rounded borders (`rounded-full`). 
* **Layout:** Use Flexbox and CSS Grid via Tailwind utilities for all layout structures.
* **Micro-interactions:** Add smooth interactions using `hover:scale-105` and `transition-all`.

### 3. Forbidden Patterns
* Do NOT use jQuery.
* Do NOT use Bootstrap classes.
* Do NOT create new CSS files; keep styles located within component files via Tailwind.
