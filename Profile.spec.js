const { test, expect } = require('@playwright/test');

test('Test login button visible', async({ page }) => {
    await page.goto('https://demoqa.com/books');
    const locator = page.locator('#login.btn.btn-primary');
    await expect(locator).toBeVisible();
});


test('Test demoqa login button', async({ page }) => {
    await page.goto('https://demoqa.com/books');
    await page.locator('#login.btn.btn-primary').click();
    await expect(page).toHaveURL('https://demoqa.com/login');
});

test('Test visible login and password fields', async({ page }) => {
    await page.goto('https://demoqa.com/login');
    const UsernameButton = page.locator('#userName.mr-sm-2.form-control');
    const PasswordButton = page.locator('#password.mr-sm-2.form-control');
    const UsernameText = page.locator('#userName-label.form-label');
    const PasswordText = page.locator('#password-label.form-label');
    await expect(UsernameText).toContainText('UserName');
    await expect(UsernameButton).toBeVisible();
    await expect(PasswordText).toContainText('Password');
    await expect(PasswordButton).toBeVisible();
});

test('Test visible New User button', async({ page }) => {
    await page.goto('https://demoqa.com/login');
    const newUser = page.locator('#newUser.btn.btn-primary');
    await expect(newUser).toContainText('New User');
    await expect(newUser).toBeVisible();
});

test('Enter valid login/password into login/password input fields', async({ page }) => {
    await page.goto('https://demoqa.com/login');
    await page.locator('#userName.mr-sm-2.form-control').fill('BialyWilk');
    await page.locator('#password.mr-sm-2.form-control').fill('WolfQest24@');
    await page.locator('#login.btn.btn-primary').click();
    await expect(page).toHaveURL('https://demoqa.com/profile');
});

test('Leave the fields empty and log in', async({ page }) => {
    await page.goto('https://demoqa.com/login');
    await page.locator('#login.btn.btn-primary').click();
    await expect(page).toHaveURL('https://demoqa.com/login');
});

test('Enter valid login with uppercase', async({ page }) => {
    await page.goto('https://demoqa.com/login');
    await page.locator('#userName.mr-sm-2.form-control').fill('BIALYWILK');
    await page.locator('#password.mr-sm-2.form-control').fill('WolfQest24@');
    await page.locator('#login.btn.btn-primary').click();
    await expect(page).not.toHaveURL('https://demoqa.com/profile');
});

test('Enter valid login with lowercase', async({ page }) => {
    await page.goto('https://demoqa.com/login');
    await page.locator('#userName.mr-sm-2.form-control').fill('bialywilk');
    await page.locator('#password.mr-sm-2.form-control').fill('WolfQest24@');
    await page.locator('#login.btn.btn-primary').click();
    await expect(page).not.toHaveURL('https://demoqa.com/profile');
});

test('Enter valid login and invalid password', async({ page }) => {
    await page.goto('https://demoqa.com/login');
    await page.locator('#userName.mr-sm-2.form-control').fill('BialyWilk');
    await page.locator('#password.mr-sm-2.form-control').fill('WolfQest245@');
    await page.locator('#login.btn.btn-primary').click();
    await expect(page).not.toHaveURL('https://demoqa.com/profile');
});