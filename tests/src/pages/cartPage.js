const { expect } = require("@playwright/test");
let { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60 * 15000);
const locator = require("../fixtures/cartSelector.json")
class CartPage {
    constructor(page) {
        this.page = page;
    }
    //remove product from cart
    async removeFirstProductFromCart() {
        await this.page.locator(locator.removeButton1).click();
    }
    //verify quality of item in cart
    async itemNumberInCart() {
        const cartItemCount = await this.page.locator(locator.cartQty).innerText();
        expect(parseInt(cartItemCount)).toBe(1);
    }
    //move to checkout page
    async moveToCheckout() {
        await this.page.locator(locator.checkoutButton).click();
    }


}
module.exports = { CartPage };