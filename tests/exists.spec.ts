import { test, expect, type Page } from '@playwright/test'

test('check if Givebox site still exists', async ({ page }) => {

  await page.goto('https://givebox.com/517849');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('SOUTH AFRICA PROGRAM | Teachers Across Borders');
});
