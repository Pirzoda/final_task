const assert = require('chai').assert;
const LoginPage = require('../pageobjects/login.page');;
const DashboarPage = require('../pageobjects/dashboard.page');

const LoginPage = new LoginPage();
const DashboardPage = new DashboarPage();

describe('SauceDemo Login Tests', () => {
    beforeEach(async () => {
        await DashboardPage.open();
    });

    afterEach(async () => {
        await browser.reloadSession();
    });

    it('Test Login Form with Empty Credentials', async () => {
        await LoginPage.open();
        await LoginPage.clearInputs();
        await LoginPage.login('', '');

        const errorMessage = await LoginPage.getErrorMessage();
        assert.include(errorMessage, 'Username is required');
    });

    it('Test Login Form with Only Username', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', '');

        const errorMessage = await LoginPage.getErrorMessage();
        assert.include(errorMessage, 'Password is required');
    });

    it('Test Login Form with Valid Credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        const isDashboardOpen = await DashboardPage.isOpen();
        assert.isTrue(isDashboardOpen, 'Dashboard page is not opened');
    });
});

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
