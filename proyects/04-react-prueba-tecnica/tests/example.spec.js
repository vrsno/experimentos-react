// // @ts-check
// const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = "http://localhost:5173/"
const CART_PREFIX_IMAGE_URL = "https://cataas.com"

test("app shows ranom fact and image",async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole("paragraph")
  const image = await page.getByRole("img")

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute("src")

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CART_PREFIX_IMAGE_URL)).toBeTruthy()
});


