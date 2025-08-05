import { test, expect } from '@playwright/test';

const baseURL = 'http://localhost:8000/#';

test.describe('React Admin Dashboard Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL + '/login');
  });

  test('should show login page', async ({ page }) => {
    await expect(page.getByText('Username')).toBeVisible();
    await expect(page.getByText('Password')).toBeVisible();
    await expect(page.getByText('SIGN IN')).toBeVisible();
  });
});
