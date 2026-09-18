import { test, expect } from '@playwright/test';

test('should navigate from Services to the Client Work page', async ({ page }) => {
  await page.goto('https://www.epam.com/');
  await page.getByRole('banner').getByRole('button').first().click();
  await page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'Services', exact: true })
    .click();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();
  await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
});
