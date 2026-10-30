from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:3000")
    page.wait_for_timeout(500)

    # Test mobile menu focus and aria-expanded
    menu_btn = page.locator('button[aria-label="Toggle mobile menu"]')
    menu_btn.focus()
    page.wait_for_timeout(500)
    page.screenshot(path='/home/jules/verification/screenshots/menu_focused.png')

    assert menu_btn.get_attribute('aria-expanded') == 'false'

    page.keyboard.press('Enter')
    page.wait_for_timeout(1000)

    # Re-query after state change
    menu_btn = page.locator('button[aria-label="Toggle mobile menu"]')
    assert menu_btn.get_attribute('aria-expanded') == 'true'

    # Test close button
    close_btn = page.locator('button[aria-label="Close mobile menu"]')
    close_btn.focus()
    page.wait_for_timeout(500)
    page.screenshot(path='/home/jules/verification/screenshots/close_focused.png')

    page.keyboard.press('Enter')
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={'width': 375, 'height': 812},
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
