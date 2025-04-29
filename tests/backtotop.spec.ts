import { test, expect } from '@playwright/test';

test.describe('Back to Top Button', () => {
  test('should scroll to top when clicked', async ({ page }) => {
    await page.goto('/');
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    // Wait for the button to appear
    const button = await page.locator('#back-to-top');
    await expect(button).toBeVisible();
    // Click the button
    await button.click();
    // Wait until scrollY is less than 10
    await page.waitForFunction(() => window.scrollY < 10);
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(10);
  });
}); 