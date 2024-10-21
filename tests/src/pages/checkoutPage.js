const { expect } = require("@playwright/test");
let { setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60 * 15000);
const locator = require("../fixtures/checkoutSelector.json")
class CheckoutPage {
    constructor(page) {
        this.page = page;
    }
    async caculateTotalPriceNotax() {
        // Calculate the total price
        const { subtotal, totalWithTax, roundedTotal } = await this.page.evaluate(() => {
            const priceElements = document.querySelectorAll('.inventory_item_price');
            const subtotal = Array.from(priceElements).reduce((sum, el) => {
                return sum + parseFloat(el.textContent.replace('$', ''));
            }, 0);

            const taxRate = 0.08; // 8% tax
            const tax = subtotal * taxRate;
            const totalWithTax = subtotal + tax;
            // Round to 2 decimal places
            const roundedTotal = parseFloat(totalWithTax.toFixed(2));
            // cách 2
            //   const roundedTotal = parseFloat(totalWithTax.toFixed(2));

            return { subtotal, totalWithTax, roundedTotal };
        });

        // Get the displayed total from the page
        const displayedTotal = await this.page.$eval(locator.totalPrice, el =>
            parseFloat(el.textContent.replace('Total: $', ''))
        );
        // Assertions
        expect(displayedTotal).toBe(roundedTotal);
        expect(displayedTotal).toBeGreaterThanOrEqual(subtotal);
        expect(displayedTotal).toBeLessThanOrEqual(totalWithTax + 0.5); // Allow for rounding up
        expect(displayedTotal).toBeGreaterThanOrEqual(totalWithTax - 0.5);
    }
    async enterCheckoutInfo(s1,s2,s3) {
        await this.page.locator(locator.firstName).fill(s1);
        await this.page.locator(locator.lastName).fill(s2);
        await this.page.locator(locator.postalCode).fill(s3);
        await this.page.locator(locator.continueButton).click();
    }


}
module.exports = { CheckoutPage };