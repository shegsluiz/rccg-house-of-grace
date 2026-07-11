
## 2024-07-11 - Custom SVGs require explicit accessibility props routing
**Learning:** Custom SVG components (unlike `lucide-react` icons) do not automatically handle accessibility props like `aria-hidden` properly unless explicitly typed and spread to the root `<svg>` tag. Without this, decorative custom icons can be confusingly announced by screen readers.
**Action:** When creating or updating custom SVG icon components, always ensure they are typed with `React.SVGProps<SVGSVGElement>` and spread `...props` to the `<svg>` element to allow standard accessibility attributes to be passed down and properly applied.
