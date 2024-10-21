const { Given, When, Then } = require("@cucumber/cucumber");
const { CartPage } = require("../pages/cartPage");

When("User go to checkout page", async () => {
    const cartPage = new CartPage(page);
    await cartPage.moveToCheckout();
});

Then("should display the correct number of item when remove item from cart", async () => {
    const cartPage = new CartPage(page);
    await cartPage.removeFirstProductFromCart();
    await cartPage.itemNumberInCart();


});

