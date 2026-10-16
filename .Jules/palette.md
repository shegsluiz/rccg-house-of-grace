## 2024-10-16 - Add ARIA Labels and Keyboard Focus Rings to Layout
**Learning:** Programmatic `.focus()` commands in Playwright often do not trigger the `focus-visible` styles on interactive elements, making it difficult to capture visual proof of accessibility outlines.
**Action:** When writing verification scripts for `focus-visible` states, simulate user interaction by using `page.keyboard.press("Tab")` to explicitly invoke the visible focus ring for screenshots.
