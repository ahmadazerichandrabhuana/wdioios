import CommonAction from '../pageobjects/common.action.js';
import ProductsPage from '../pageobjects/products.page.js';
import LoginPage from '../pageobjects/login.page.js';
import MenuPage from '../pageobjects/menu.page.js';

describe('Simple test for Login into Demo Apps', () => {
    
    beforeEach(async () => {await CommonAction.launchApp();});
    afterEach(async () => {await CommonAction.closeApp();});

    it('As an iOS user, I should be able to see Error when input incorrect Username and Password', async () => {
        await MenuPage.selectMenuLogIn();
        await LoginPage.inputUsernameField("MyName");
        await LoginPage.inputPasswordField("Unknown");
        await LoginPage.clickButtonLogin();
        await LoginPage.verifyErrorAppear("Provided credentials do not match any user in this service.");
    });

    it('As an iOS user, I should be redirected to "Products" Page when input correct Username and Password', async () => {
        await MenuPage.selectMenuLogIn();
        await LoginPage.inputUsernameField("bob@example.com");
        await LoginPage.inputPasswordField("10203040");
        await LoginPage.clickButtonLogin();
        await ProductsPage.verifyHeaderProductsOK();
    });
});
