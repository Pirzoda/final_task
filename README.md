# final_task
# SauceDemo Login Form Automation

This project automates the testing of the login form on [SauceDemo](https://www.saucedemo.com/) using WebDriverIO. The tests cover various scenarios for login functionality, following the Page Object pattern and executing in parallel on Chrome and Firefox browsers.

## Test Scenarios

### UC-1: Test Login Form with Empty Credentials
- Navigate to the login page.
- Click the "Login" button with empty "Username" and "Password" fields.
- Validate the error message "Username is required".

### UC-2: Test Login Form with Only Username
- Navigate to the login page.
- Enter any valid username.
- Click the "Login" button with an empty "Password" field.
- Validate the error message "Password is required".

### UC-3: Test Login Form with Valid Username and Password
- Navigate to the login page.
- Enter a valid username from the "Accepted usernames are:" section.
- Enter "secret_sauce" as the password.
- Click the "Login" button.
- Validate the title "Swag Labs" on the dashboard page.

## Tools and Technologies
- **Test Automation Tool**: WebDriverIO
- **Browsers**: Chrome, Firefox
- **Locators**: CSS Selectors
- **Patterns**: Page Object Pattern
- **Assertions**: WebDriverIO built-in assertion library
- **Loggers**: WebDriverIO built-in logging

## Additional Features
- Parallel execution of tests.
- Parametrization of tests using a data provider.
- Comprehensive logging for better test tracking and debugging.

## Installation and Setup

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run tests:
    ```bash
    npm test
    ```

## Project Structure

- `test/specs/`: Contains the test files for different scenarios.
- `test/pageobjects/`: Contains the Page Object classes for different pages.
- `wdio.conf.js`: Configuration file for WebDriverIO.

## Running the Tests

To execute the tests in parallel on both Chrome and Firefox, use the following command:
```bash
npx wdio run wdio.conf.js
