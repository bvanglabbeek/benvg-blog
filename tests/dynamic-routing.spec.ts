import { test, expect } from '@playwright/test';

test.describe('Dynamic Blog Routing', () => {
  test('should load specific blog posts via dynamic routing', async ({ page }) => {
    await page.goto('/blog/how-to-build-social-capital/');
    
    await expect(page).toHaveURL('/blog/how-to-build-social-capital/');
    await expect(page.getByRole('heading', { name: /How to Build Social Capital/i })).toBeVisible();
    await expect(page.locator('.blog-content')).toBeVisible();
    await expect(page.locator('.blog-hero-image')).toBeVisible();
  });

  test('should handle invalid blog slugs gracefully', async ({ page }) => {
    const response = await page.goto('/blog/non-existent-post/');
    
    expect(response?.status()).toBe(404);
    await expect(page.getByRole('heading', { name: /404/i })).toBeVisible();
  });

  test('should display blog metadata correctly', async ({ page }) => {
    await page.goto('/blog/how-to-build-social-capital/');
    
    // Title should contain the blog post title
    await expect(page).toHaveTitle(/How to Build Social Capital/);
    
    // Check if description meta exists
    const descriptionMeta = page.locator('meta[name="description"]');
    if (await descriptionMeta.count() > 0) {
      await expect(descriptionMeta).toHaveAttribute('content', /.+/);
    }
  });

  test('should show blog tags and allow tag navigation', async ({ page }) => {
    await page.goto('/blog/how-to-build-social-capital/');
    
    const tagLinks = page.locator('.blog-tags a, .tags a, [data-testid="blog-tags"] a');
    
    if (await tagLinks.count() > 0) {
      const firstTag = tagLinks.first();
      const tagText = await firstTag.textContent();
      
      await firstTag.click();
      await expect(page).toHaveURL(/\/category\//);
      await expect(page.getByRole('heading')).toContainText(tagText || '');
    }
  });
});