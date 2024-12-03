import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/search';

test.describe('Search page', () => {
  test('has title collection', async ({ page }) => {
    const searchPage = new SearchPage(page);
    searchPage.goto();
    
    await expect(page.getByText('Collections')).toBeVisible();
    const collectionOne = page.getByRole('link', { name: 'Collection 1' })
    await collectionOne.click();
    await expect(page.getByText('Product 1')).toBeVisible();
    const productOne = page.getByText('Product 1')
    await productOne.click();
    await expect(page.url()).toBe('http://localhost:5173/product/2')
  });
})

test('Test fill filter', async ({ page }) => {
  const searchPage = new SearchPage(page);
  searchPage.goto();
  searchPage.selectFilter('Collection 0');
  searchPage.search('Product 0');

  await page.getByText('Product 0').click();
  expect(page.url()).toBe('http://localhost:5173/product/1');
  await expect(page.getByText('Product 0')).toBeVisible();
});

/*test.describe('Home Page', () => {
  test('Counter button', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    const counterButton = page.getByRole('button', { name: 'Hola' })
    await expect(counterButton).toBeVisible();
    await expect(counterButton).toHaveText('Hola 0')
    await counterButton.click()
    await expect(counterButton).toHaveText('Hola 1')
  });
})*/

/*test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});*/


/*test.describe('Search Page with Mocked Response', () => {
  test('should display mocked products', async ({ page }) => {
    const mockResponse = {
      status: 'success',
      data: [
        {
          id: 1,
          name: 'Product 0',
          description: 'Description for mocked product 1',
          image: 'https://loremflickr.com/640/480?lock=123456',
          price: 1000,
        },
        {
          id: 2,
          name: 'Product 1',
          description: 'Description for mocked product 2',
          image: 'https://loremflickr.com/640/480?lock=654321',
          price: 2000,
        },
      ],
    };

    await page.route('http://localhost:5001/api/products', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockResponse),
      })
    );

    await page.goto('http://localhost:5173/search');

    await expect(page.getByText('Product 0')).toBeVisible();
    await expect(page.getByText('Product 1')).toBeVisible();
  });
});*/