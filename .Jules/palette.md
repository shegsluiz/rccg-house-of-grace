## 2024-08-14 - Custom Icons and aria-hidden passthrough
**Learning:** Custom SVG components (e.g., `TikTokIcon`) must explicitly define and pass down accessibility props like `aria-hidden` to their underlying `<svg>` element to function correctly with screen readers, unlike standard `lucide-react` icons.
**Action:** When creating or using custom SVG icon components, ensure their TypeScript interface accepts standard aria attributes (e.g., `aria-hidden?: boolean | 'true' | 'false'`) and explicitly applies them to the root `<svg>` tag.
