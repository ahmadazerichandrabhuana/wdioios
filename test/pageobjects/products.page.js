import { $ } from '@wdio/globals';
import allureReporter from '@wdio/allure-reporter';

export class ProductPage{
    get textHeaderProducts() {return $('//XCUIElementTypeStaticText[@name="Products"]');}
    get textHeaderProductsIncorrectXPath() {return $('//XCUIElementTypeStaticText[@name="Productss"]');}

    async verifyHeaderProductsOK() {
        allureReporter.startStep('Verify Header "Products" Appear');
        await expect(this.textHeaderProducts).toBeExisting();
        allureReporter.endStep();
    }

    async verifyHeaderProductsFailed() {
        allureReporter.startStep('Verify Header "Products" Appear... but Failed');
        await expect(this.textHeaderProductsIncorrectXPath).toBeExisting();
        allureReporter.endStep();
    }
}

export default new ProductPage();