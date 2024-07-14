class LoginPage {
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('.btn_action'); }
    get errorMessage() { return $('[data-test="error"]'); }

    open() {
        browser.url('https://www.saucedemo.com/');
    }

    login(username, password) {
        this.usernameInput.setValue(username);
        this.passwordInput.setValue(password);
        this.loginButton.click();
    }

    clearInputs() {
        this.usernameInput.clearValue();
        this.passwordInput.clearValue();
    }

    getErrorMessage() {
        return this.errorMessage.getText();
    }
}

module.exports = new LoginPage();
