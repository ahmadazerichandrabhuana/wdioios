import { $ } from '@wdio/globals';
import CommonAction from './common.action.js';
import allureReporter from '@wdio/allure-reporter';

export class LoginPage{
    get textHeaderLogin() {return $('//XCUIElementTypeStaticText[@name="Login"]');}
    get inputUsername() {return $('//XCUIElementTypeTextField[@name="Username input field"]');}
    get inputPassword() {return $('//XCUIElementTypeSecureTextField[@name="Password input field"]');}
    get buttonLogin() {return $('//XCUIElementTypeOther[@name="Login button"]');}
    get textErrorLogin() {return $('//XCUIElementTypeStaticText[@name="Provided credentials do not match any user in this service."]');}

    async inputUsernameField(username) {
        allureReporter.startStep('Input Username');
        await this.inputUsername.setValue(username);
        await CommonAction.hideIOSKeyboard();
        allureReporter.endStep();
    }

    async inputPasswordField(password) {
        allureReporter.startStep('Input Password');
        await this.inputPassword.setValue(password);
        await CommonAction.hideIOSKeyboard();
        allureReporter.endStep();
    }

    async clickButtonLogin() {
        allureReporter.startStep('Click button Login');
        await this.buttonLogin.click();
        allureReporter.endStep();
    }

    async verifyErrorAppear(text) {
        allureReporter.startStep('Verify Login Error Appear');
        await expect(this.textErrorLogin).toBeExisting();
        await expect(this.textErrorLogin).toHaveText(text);
        allureReporter.endStep();
    }
}

export default new LoginPage();