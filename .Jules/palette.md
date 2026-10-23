## 2025-02-12 - Form Accessibility
**Learning:** In this application's components, inputs often lack visible labels (using only placeholders). When there are no visible text labels, adding visually hidden labels (e.g., using a `sr-only` class) improves accessibility for screen readers.
**Action:** When adding inputs without visible labels, add a `<label>` element with `htmlFor` and the `sr-only` Tailwind class.
