## 2024-05-18 - Keyboard Navigation and Focus Visible
**Learning:** Programmatic `.focus()` calls in Playwright do not consistently trigger `focus-visible` styles which are standard for keyboard navigation a11y testing. Additionally, duplicated mobile/desktop elements in the DOM require careful targeting.
**Action:** Always simulate genuine keyboard navigation (e.g., `page.keyboard.press('Tab')`) and ensure locators are viewport-specific when writing frontend tests for a11y.
