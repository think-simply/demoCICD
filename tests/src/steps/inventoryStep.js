const { Given, When, Then }  = require("@cucumber/cucumber");
const { InventoryPage } = require("../pages/inventoryPage");

Then("User will nagivate to Inventory page", async () => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.validateInventoryPageExist();

});

Then("There are 6 items on Inventory page",async () => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.checkItemQuality();
    
});
Then("User is able to add item to cart",async () => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addFirstProductToCart();
    await inventoryPage.verifyAddProductToCart();
    
});

When ("User add items to cart", async () =>{
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addFirstProductToCart();
    await inventoryPage.addSecondProductToCart();
    await inventoryPage.goToCartPage();
})
Then("cart should display the correct number of added item",async () => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.itemNumberInCart();
    
});

Then("Should display the correct order of item when filter is set to Price low to High",async () => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.filterPriceLowToHigh();

});



