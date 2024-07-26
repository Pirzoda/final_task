const assert = require('chai').assert;
const LoginPage = require('../pageobjects/LoginPage');
const DashboardPage = require('../pageobjects/DashboardPage');

// Handle exit signals to close WebDriver session gracefully
const handleExit = async (signal) => {
    console.log(`Received ${signal}. Closing WebDriver session gracefully...`);
    if (browser) {
        await browser.deleteSession();
    }
    process.exit(0);
};

process.on('SIGINT', handleExit);
process.on('SIGTERM', handleExit);

// Test Suit
describe('SauceDemo Login Tests', () => {
    // Hook
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com/');
    });
    afterEach(async () => {
        await browser.reloadSession();
    })

    // Test Case N1
    it('Test Login Form with Empty Credentials', async () => {
        await LoginPage.open();
        await LoginPage.clearInputs();
        await LoginPage.login('', '');

        const errorMessage = await LoginPage.getErrorMessage();
        assert.include(errorMessage, 'Username is required');
    });

    // Test Case N2
    it('Test Login Form with Only Username', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', '');

        const errorMessage = await LoginPage.getErrorMessage();
        assert.include(errorMessage, 'Password is required');
    });

    // Test Case N3
    it('Test Login Form with Valid Credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        const isDashboardOpen = await DashboardPage.isOpen();
        assert.isTrue(isDashboardOpen, 'Dashboard page is not opened');
    });
});
