const { Given, When, Then } = require("@cucumber/cucumber");
const { CheckoutPage } = require("../pages/checkoutPage");

When ("User fill infor to checkout {string} {string} {string}", async(s1,s2,s3)=>{
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.enterCheckoutInfo(s1,s2,s3);
})
Then("Should display the correct total price of added item", async () => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.caculateTotalPriceNotax();

});

