import { test, expect } from '@playwright/test';

test.describe('404 Page', () => {
  test('should display custom 404 message', async ({ page }) => {
    await page.goto('/this-page-does-not-exist');
    await expect(page.getByText(/404|not found|page not found/i)).toBeVisible();
  });
}); 