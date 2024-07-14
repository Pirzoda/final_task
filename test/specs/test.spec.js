const assert = require('chai').assert;
const LoginPage = require('../pageobjects/LoginPage');
const DashboardPage = require('../pageobjects/DashboardPage');
//Test Suit
describe('SauceDemo Login Tests', () => {
    //test Case N1
    it('Test Login Form with Empty Credentials', () => {
        LoginPage.open();
        LoginPage.clearInputs();
        LoginPage.login('', '');

        const errorMessage = LoginPage.getErrorMessage();
        assert.include(errorMessage, 'Username is required');
    });

    //Test CAse N2
    it('Test Login Form with Only Username', () => {
        LoginPage.open();
        LoginPage.login('standard_user', '');

        const errorMessage = LoginPage.getErrorMessage();
        assert.include(errorMessage, 'Password is required');
    });

    //Test case N3
    it('Test Login Form with Valid Credentials', () => {
        LoginPage.open();
        LoginPage.login('standard_user', 'secret_sauce');

        assert.isTrue(DashboardPage.isOpen(), 'Dashboard page is not opened');
    });
});


