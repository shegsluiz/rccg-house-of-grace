---
name: managing-rccg-website
description: Manages the RCCG House of Grace web application. Use when adding features, modifying UI components, or updating the branding of the RCCG website.
---

# Managing RCCG House of Grace Website

## When to use this skill
- Modifying the hero section, navigation, or footer.
- Adding new church services, events, or ministries.
- Updating site branding, logos, or color schemes.

## Workflow
- [ ] Verify the requested content changes.
- [ ] Locate the appropriate React component (usually in `src/App.tsx`).
- [ ] Apply changes using predefined Tailwind utility classes for consistent branding.
- [ ] Preview changes locally with `npm run dev`.

## Instructions

### Tech Stack
- **Framework**: React + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Motion/React (framer-motion)
- **Icons**: Lucide React

### Branding & UI Guidelines
- **Theme**: Dark mode default (`bg-black text-white`).
- **Accent Colors**: Gradients of purple, pink, and orange (e.g., `from-purple-400 to-pink-500`, `from-orange-400 to-orange-600`).
- **Logo**: Use the custom logo located at `public/logo.png`.
- **Hero Video**: Background video loop located at `public/hero-bg.mp4`. Ensure it maintains an overlay gradient to preserve text legibility (`bg-gradient-to-b from-black/40 via-transparent to-black`).
- **Typography**: Modern sans-serif, using `font-extrabold` and `tracking-tight` for headings.
- **Micro-interactions**: Use `hover:scale-105` and `transition-transform` for buttons, and smooth `motion.div` fades (`initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}`) for entrance animations.

### Common Modifications
- **Navigation Links**: Stored as an array `navLinks` in `src/App.tsx`.
- **Services/Ministries**: Stored as a `services` array of objects (title, description, icon) in `src/App.tsx`.

## Resources
- Ensure `node-v20+` is used for package installation.
- Run `npm install && npm run dev` to start the local environment.
