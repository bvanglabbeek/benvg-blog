import { test, expect } from '@playwright/test';




  test.describe('Homepage', () => {
    test('should display the site title', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByRole('heading', { name: 'Ben van Glabbeek' })).toBeVisible();
    });

    test('should display navigation links', async ({ page }) => {
      await page.goto('/');
      const nav = await page.getByRole('navigation');
      await expect(nav.getByRole('link', { name: 'Home' })).toBeVisible();
      await expect(nav.getByRole('link', { name: 'Appalachian Trail' })).toBeVisible();
      await expect(nav.getByRole('link', { name: 'Transcen.Digital' })).toBeVisible();
      await expect(nav.getByRole('link', { name: 'About' })).toBeVisible();
    });
  });

  const viewports = [
    { name: 'mobile', width: 375, height: 667 },   // iPhone SE
    { name: 'tablet', width: 768, height: 1024 },  // iPad
    { name: 'desktop', width: 1280, height: 800 }
  ];

  for (const { name, width, height } of viewports) {
    test.describe(`Responsive layout on ${name}`, () => {
      test(`homepage renders correctly on ${name}`, async ({ page }) => {
        await page.setViewportSize({ width, height });
        await page.goto('/');
        await expect(page.getByRole('heading', { name: 'Ben van Glabbeek' })).toBeVisible();
        await expect(page.getByRole('navigation')).toBeVisible();
        // Add more assertions for mobile nav, hero image, etc.
        await expect(page.locator('.blog-posts-grid')).toBeVisible();
      });
    });
  }
 