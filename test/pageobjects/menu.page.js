import { $ } from '@wdio/globals';
import allureReporter from '@wdio/allure-reporter';

export class MenuPage{
    get iconHamburger() {return $('//XCUIElementTypeButton[@name="tab bar option menu"]');}
    get iconCart() {return $('//XCUIElementTypeButton[@name="tab bar option cart"]');}
    get textMenuCatalog() {return $('//XCUIElementTypeButton[@name="tab bar option catalog"]');}
    get textMenuLogin() {return $('//XCUIElementTypeOther[@name="menu item log in"]');}

    async selectMenuCatalog() {
        allureReporter.startStep('Select Menu "Catalog"');
        await this.iconHamburger.click();
        await this.textMenuCatalog.click();
        allureReporter.endStep();
    }

    async selectMenuLogIn() {
        allureReporter.startStep('Select Menu "Log In"');
        await this.iconHamburger.click();
        await this.textMenuLogin.click();
        allureReporter.endStep();
    }
}

export default new MenuPage();