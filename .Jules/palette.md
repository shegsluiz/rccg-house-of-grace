## 2025-03-05 - Managing Focus States on Custom Modals and Menus
**Learning:** Adding explicit keyboard focus indicators (like `focus-visible:ring`) to mobile navigation toggles is critical because mobile touch targets are often navigated on desktop or tablet views using keyboards where visual hover styling is insufficient to indicate active focus.
**Action:** Always apply `focus-visible` classes to custom drawer toggles and ensure screen readers announce state changes using `aria-expanded`.
