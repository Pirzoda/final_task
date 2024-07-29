class LoginPage {
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get errorMessageContainer() { return $('.error-message-container'); }

    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    async clearInputs() {
        await this.usernameInput.clearValue();
        await this.passwordInput.clearValue();
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return this.errorMessageContainer.getText();
    }
}

module.exports = new LoginPage();
