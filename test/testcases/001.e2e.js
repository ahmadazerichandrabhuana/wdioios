import CommonAction from '../pageobjects/common.action.js';
import ProductsPage from '../pageobjects/products.page.js';

describe('Simple test for Demo Apps 001', () => {
    
    beforeEach(async () => {await CommonAction.launchApp();});
    afterEach(async () => {await CommonAction.closeApp();});

    it('As an iOS user, I should be able to see page "Products" when first Open the Apps', async () => {
        await ProductsPage.verifyHeaderProductsOK();
        // await CommonAction.scrollDown();
        // await CommonAction.scrollDown();
        // await CommonAction.scrollUp();
        // await CommonAction.scrollUp();
        // await ProductsPage.verifyHeaderProductsOK();
    });
})
