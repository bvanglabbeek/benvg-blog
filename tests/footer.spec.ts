import { test, expect } from '@playwright/test';

test.describe('Footer', () => {
  test('should display LinkedIn social link with correct URL', async ({ page }) => {
    await page.goto('/');
    const linkedin = await page.getByRole('link', { name: /linkedin/i });
    await expect(linkedin).toBeVisible();
    await expect(linkedin).toHaveAttribute('href', 'https://linkedin.com/in/bvanglabbeek');
  });
}); 