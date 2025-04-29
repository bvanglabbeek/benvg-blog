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