import { test, expect } from '@playwright/test';

test.describe('Search page', () => {
  test('has title collection', async ({ page }) => {
    await page.goto('http://localhost:5173/search');
    await expect(page.getByText('Collections')).toBeVisible();
    const collectionOne = page.getByRole('link', { name: 'Collection 1' })
    await collectionOne.click();
    await expect(page.getByText('Product 1')).toBeVisible();
    const productOne = page.getByText('Product 1')
    await productOne.click();
    await expect(page.url()).toBe('http://localhost:5173/product/2')
  });
})

test.describe('Home Page', () => {
  test('Counter button', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    const counterButton = page.getByRole('button', { name: 'Hola' })
    await expect(counterButton).toBeVisible();
    await expect(counterButton).toHaveText('Hola 0')
    await counterButton.click()
    await expect(counterButton).toHaveText('Hola 1')
  });
})

/*test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});*/
