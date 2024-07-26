const assert = require('chai').assert;
const LoginPage = require('../pageobjects/login.page');;
const DashboarPage = require('../pageobjects/dashboard.page');


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
        assert.include(errorMessage, 'Username is required');
    });

    it('Test Login Form with Only Username', async () => {
        console.log('Opening login page');
        await LoginPage.open();
        console.log('Attempting to login with only username');
        await LoginPage.login('standard_user', '');

        console.log('Getting error message');
        const errorMessage = await LoginPage.getErrorMessage();
        console.log('Asserting error message contains "Password is required"');
        assert.include(errorMessage, 'Password is required');
    });

    it('Test Login Form with Valid Credentials', async () => {
        console.log('Opening login page');
        await LoginPage.open();
        console.log('Attempting to login with valid credentials');
        await LoginPage.login('standard_user', 'secret_sauce');

        console.log('Checking if dashboard is open');
        const isDashboardOpen = await DashboardPage.isOpen();
        console.log('Asserting dashboard page is opened');
        assert.isTrue(isDashboardOpen, 'Dashboard page is not opened');
    });
});