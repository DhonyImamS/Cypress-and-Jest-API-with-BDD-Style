import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../page/loginpage";

Given('I Open Login Page website QA FABELIO', () => {
    LoginPage.navigatePage('#');
});

When(/^I do input "(.*)" and "(.*)"$/, (usernameVal, passwordVal) => {
    LoginPage.setFieldValue('username', usernameVal);
    LoginPage.setFieldValue('password', passwordVal);
});

And(/^I click button login$/, () => {
    LoginPage.clickButtonLogin();
});

Then(/^I see error "(.*)" on LoginPage$/, (alertText) => {
    LoginPage.assertionText(alertText);
});
