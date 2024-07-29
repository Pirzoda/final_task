const { expect } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard.page');

describe('SauceDemo Login Tests', () => {
    beforeEach(async () => {
        console.log('Navigating to SauceDemo');
        await browser.url('https://www.saucedemo.com/');
    });

    afterEach(async () => {
        console.log('Reloading session');
        await browser.reloadSession();
    });

    it('Test Login Form with Empty Credentials', async () => {
        console.log('Opening login page');
        await LoginPage.open();
        console.log('Clearing inputs');
        await LoginPage.clearInputs();
        console.log('Attempting to login with empty credentials');
        await LoginPage.login('', '');

        console.log('Getting error message');
        const errorMessage = await LoginPage.getErrorMessage();
        console.log('Asserting error message contains "Username is required"');
        expect(errorMessage).toContain('Username is required');
    });

    it('Test Login Form with Only Username', async () => {
        console.log('Opening login page');
        await LoginPage.open();
        console.log('Attempting to login with only username');
        await LoginPage.login('standard_user', '');

        console.log('Getting error message');
        const errorMessage = await LoginPage.getErrorMessage();
        console.log('Asserting error message contains "Password is required"');
        expect(errorMessage).toContain('Password is required');
    });

    it('Test Login Form with Valid Credentials', async () => {
        console.log('Opening login page');
        await LoginPage.open();
        console.log('Attempting to login with valid credentials');
        await LoginPage.login('standard_user', 'secret_sauce');

        console.log('Checking if dashboard is open');
        const isDashboardOpen = await DashboardPage.isOpen();
        console.log('Asserting dashboard page is opened');
        expect(isDashboardOpen).toBeTruthy();
    });
});
