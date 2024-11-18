import { driver } from '@wdio/globals';
import { config } from '../../wdio.conf.js';
import allureReporter from '@wdio/allure-reporter';

export class CommonAction{
    async launchApp() {
        allureReporter.startStep('Launch App');
        await driver.activateApp(config.capabilities.at(0)['appium:bundleId']);
        allureReporter.endStep();
    }

    async closeApp() {
        allureReporter.startStep('Close App');
        await driver.terminateApp(config.capabilities.at(0)['appium:bundleId']);
        allureReporter.endStep();
    }

    async hideIOSKeyboard(){
        allureReporter.startStep('Hide IOS Keyboard');
        await driver.executeScript("mobile: tap", [{ x: 101 , y:101}]);
        allureReporter.endStep();
    }

    async scrollUp(){
        allureReporter.startStep('Scroll Up Screen');
        await driver.executeScript("mobile: swipe", [{ direction: "down" , percentage:25, velocity:500}]);
        allureReporter.endStep();
    }

    async scrollDown(){
        allureReporter.startStep('Scroll Down Screen');
        await driver.executeScript("mobile: swipe", [{ direction: "up" , percentage:25, velocity:500}]);
        allureReporter.endStep();
    }
}

export default new CommonAction();