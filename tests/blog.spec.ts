import { test, expect } from '@playwright/test';

test.describe('Blog Post', () => {
  test('should display blog post title and content', async ({ page }) => {
    await page.goto('/blog/how-to-build-social-capital/');
    await expect(page.getByRole('heading', { name: /How to Build Social Capital/i })).toBeVisible();
    await expect(page.locator('.blog-hero-image')).toBeVisible();
    await expect(page.locator('.blog-content')).toBeVisible();
  });
}); 