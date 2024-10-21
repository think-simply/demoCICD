const { expect } = require("@playwright/test");
let { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60 * 15000);

require('dotenv').config();

const locator = require ("../fixtures/loginSelector")
class LoginPage {
    constructor(page) {
        this.page = page;
    }
    async visit() {
        await this.page.goto(`${process.env.WEB_URL}`);
        // await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
    try{
        await this.page.locator(locator.usernameLocator).fill(username);
        await this.page.locator(locator.passwordLocator).fill(password);
        await this.page.locator(locator.loginButtonLocator).click({timeout:10000});
    }catch (error) {     
        console.error('Error during login:', error);     
    }
    }
    async validateMessage(message) {
        await expect(this.page.getByText(message)).toBeVisible({timeout:5000});
    }

}
module.exports = { LoginPage };