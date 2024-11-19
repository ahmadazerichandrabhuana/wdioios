# IOS Test Automation using WebdriverIO with Allure Report
This is a simple sample of IOS Test Automation using WebdriverIO with Allure Report.

> [!NOTE]  
> I can only try this code on MacOS, since it needs XCode. Not sure it can be used on Windows/Linux or not. Seems too complicated, IMHO.

## Requirements

1. Install [VS Code](https://code.visualstudio.com/) or any Code Editor you're comfort with. 
2. Install [JDK](https://www.oracle.com/java/technologies/downloads/).
3. Install [Android Studio](https://developer.android.com/studio/install), and install Android SDK using Android Studio.
4. Update JAVA_HOME and ANDROID_HOME to yout PATH file. There is no easy way to explain this. You can refer [here](https://medium.com/@zorozeri/setting-up-java-home-5abae0118bfe) or Google it.
5. Install [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12), and XCode Command Line Tools (`xcode-select --install`).
6. Install [Allure Report](https://allurereport.org/docs/install/).
7. Install [NodeJS](https://nodejs.org/en/download/prebuilt-installer). 
8. Install [Appium](https://appium.io/docs/en/2.2/quickstart/install/) and install appium driver `xcuitest`.
9. Install and run [appium-doctor](https://www.npmjs.com/package/appium-doctor) to make sure all your appium's dependencies are OK, trouble shoot if any red "x" appears (you need to google it yourself).
10. Download and install this [Demo Apps](https://github.com/saucelabs/my-demo-app-rn/releases) into your iOS Device (`.ipa` file) or iOS Simulator (`.zip` file, extract and put the extracted file into iOS Simulator). Credit to [Wim Selles](https://github.com/wswebcreation).
11. Download and open this code repository on your local Code Editor and run this commands :
    ```
    npm install
    ```
    
## Device Connection

Connect your device to your computer, or open iOS Simulator, and check it's udid (or `identifier`) from XCode (Open XCode go to menu `Window` then choose `Device and Simulators`). 

Put the udid/identifier on file `wdio.conf.js` line 63 : 
```
"appium:udid": "{your device udid}"
sample : 
"appium:udid": "7XXDXXXX-FXXX-XX9X-8XXX-XXXXCXXXFXXX"
```
   
## Run Tests
* Run all tests : 
   ```
   npm run wdio
   ```

* Run specific test :
  Open file `wdio.conf.js` and update line 25-28 (comment & un-comment) for necessary file to be executed.

## Open Report
*  Generate report file and open it :

   ```
   allure generate --clean && allure open
   ```
*  Open report without generating report file :

   ```
   allure serve
   ```
   

## Short Repository Explanation

This sample Test Automation only consists of 1 folder : `test`, and have 2 sub-folders : 
   ```
   > pageobjects : each file represents individual app screen (including locators and actions on each page), with exception file 'common.action.js' (contain Common Action on iOS)
   > testcases   : contains testcases to be executed
   ```
File `package.json` and `package-lock.json` contains dependencies for the project, which can be initialized using commmand `npm install`.
File  `wdio.conf.js` is basic config file for wdio-based automation.

## WebdriverIO Appium Documentation
- https://webdriver.io/docs/api/appium/

## Appium Documentation
- https://appium.readthedocs.io/en/latest/en/commands/mobile-command/

## Specific Appium XCUITest Documentation
- https://appium.github.io/appium-xcuitest-driver/7.32/reference/execute-methods/
