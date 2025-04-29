import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Appalachian Trail', path: '/appalachian-trail' },
    { name: 'Transcen.Digital', path: '/transcen-digital' },
    { name: 'About', path: '/about' }
  ];

  for (const { name, path } of navLinks) {
    test(`should navigate to ${name}`, async ({ page }) => {
      await page.goto('/');
      const nav = await page.getByRole('navigation');
      await nav.getByRole('link', { name }).click();
      await expect(page).toHaveURL(path);
    });
  }
}); 