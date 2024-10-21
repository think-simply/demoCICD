const { Given, When, Then } = require("@cucumber/cucumber");
const { LoginPage } = require("../pages/loginPage");

Given("User navigates to Login page", async () => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();
});

When("User inputs data with {string} and {string}", async (name,pass) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(name, pass);
});

Then("{string} message will be displayed", async (error_mess) => {
    const loginPage = new LoginPage(page);
    await loginPage.validateMessage(error_mess);

});

