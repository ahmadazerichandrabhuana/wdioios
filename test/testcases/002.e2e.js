import CommonAction from '../pageobjects/common.action.js';
import ProductsPage from '../pageobjects/products.page.js';

describe('Simple test for Demo Apps 002', () => {
    
    beforeEach(async () => {await CommonAction.launchApp();});
    afterEach(async () => {await CommonAction.closeApp();});

    it('As an iOS user, I should be able to see page "Products" when first Open the Apps... but Failed', async () => {
        await ProductsPage.verifyHeaderProductsFailed();
    });
})
