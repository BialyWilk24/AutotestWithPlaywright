const { test, expect, firefox } = require('@playwright/test');

//Test search fields 
test('Test search field visible', async({ page }) => {
    await page.goto('https://demoqa.com/books');
    const locator = page.locator('#searchBox.form-control');
    await expect(locator).toBeVisible();
});
test('Test search field starts with', async({ page }) => {
    await page.goto('https://demoqa.com/books');
    const locator = page.locator('#searchBox.form-control');
    await locator.fill('Git Pocket Guide');
    await expect(page.locator('text=Git Pocket Guide')).toContainText('Git Pocket Guide');
});

test('Test search field in the middle', async({ page }) => {
    await page.goto('https://demoqa.com/books');
    const locator = page.locator('#searchBox.form-control');
    await locator.fill(' Pocket');
    await expect(page.locator('text=Git Pocket Guide')).toContainText('Git Pocket Guide');
});

test('Test search field end with', async({ page }) => {
    await page.goto('https://demoqa.com/books');
    const locator = page.locator('#searchBox.form-control');
    await locator.fill(' Guide');
    await expect(page.locator('text=Git Pocket Guide')).toContainText('Git Pocket Guide'); //
});

//rt-tbody

test('Test displays items', async({ page }) => {
    await page.goto('https://demoqa.com/books');
    const locator = page.locator('#searchBox.form-control');
    await locator.fill('');
    await expect(page.locator('.rt-tbody')).toContainText(['Git Pocket Guide'], ['Learning JavaScript Design Patterns'], ['Eloquent JavaScript, Second Edition'], ['Understanding ECMAScript 6']);
});

test('Test drop-down visible', async({ page }) => {
    await page.goto('https://demoqa.com/books');
    const locator = page.locator('.pagination-bottom');
    await expect(locator).toBeVisible();
});

test('Test drop-down page', async({}) => {
    const browser = await firefox.launch({ headless: false, slowMo: 30 });
    const page = await browser.newPage();
    await page.goto('https://demoqa.com/books');
    const dropdown = page.locator('[aria-label="rows per page"]');
    await dropdown.selectOption({ label: '5 rows' });
    await dropdown.selectOption({ label: '10 rows' });
    await dropdown.selectOption({ label: '20 rows' });

});

test('Test next and prev btn', async({ page }) => {
    await page.goto('https://demoqa.com/books');
    const dropdown = page.locator('[aria-label="rows per page"]');
    await dropdown.selectOption({ label: '5 rows' });
    const btnNext = page.locator('text=Next');
    expect(btnNext, 'button is invisible').toBeVisible();
    expect(btnNext, 'button is disabled').toBeEnabled();
    const btnPrev = page.locator('text=Previous');
    expect(btnPrev, 'button is invisible').toBeVisible();
    expect(btnPrev).not.toBeEnabled();
    await btnNext.click();
    await btnPrev.click();
});