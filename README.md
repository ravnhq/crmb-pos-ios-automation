# CRMB IOS Automation
CRMB iOS Automation is a repository to hold all Automation Test Script for Whitelabel QA as a Regression Suite

#### Before Starting
The WebDriverIO version being used is V8 which uses `ESNext` for Typescript `tsconfig.json` in the `module` compilerOptions, hence, it requires the LTS version of [**Node.js**](https://nodejs.org/es/download/) 

#### Technologies used
- WebDriver IO V8 (Selenium /Node.js)
- Typescript
- Jasmine
- Chai
- Allure Reports
- Appium - Mobile server

#### How to install the project.

First, clone the code repository `$ git clone https://github.com/ravnhq/crmb-ios-automation.git` and
`cd <project_cloned>`


After that, open an integrated terminal and execute the *NPM Install* command: 

```
$ npm i -- to install all required dependencies to run the Automation Framework
```

### How to setup the Whiltelabel QA App to be run on a Mobile Capabilities

First, we need to install Appium globally to be able to run as a server

```
npm i -g appium@next
npm i -g appium-doctor

```
After Having that installed, we need to download Appium Inspector
[**Appium Inspector**](https://github.com/appium/appium-inspector/releases) 

![Appium Inspector Overall View](./assets/Appium%20Inspector%20overall%20GUI.png)

#### Update Xcode to the latest iOS version 17.0

To run the Test Scripts we need a place to launch the application, so for that we need to launch a simulator on the latest IOS version (iPhone 15 Pro Max)

![IOS Simulator](./assets/ios%20simulator%20from%20xcode.png)

Once we have all those initial tools up and running, we need to set it up to Launch the CRMB Application

#### Appium Inspector Settings to launch CRMB App
![Appium Inspector Settings](./assets/Appium%20CRMB%20Settings.png)

- Preferably, the app location should be on the project root folder at: **./app/crmb.app**

![CRMB App location](./assets/crmb%20app%20location.png)

## How to inspect the application and gather web elements

Now that we have Appium, XCODE updated + Simulator Running and Appium inspector 
We can inspect the application for testin purposes

- First, we Launch Appium on port 4724
```appium -p 4724```
- Then we click on **Start Session** on Appium inspector to install the application on the device

![Appium Inspector Running](./assets/Appium%20inspector%20running.png)

Once we confirm the application can be inspected, the same configuration applies for the Automation framework (Which is already in place). For this, we do not need Appium inspector, we just need the Simulator Running (iPhone 15 Pro Max on iOS 17.0)

To run the Automation test scripts, open an integrated terminal and type the following command:

```
$ npm run test:ios -- it will run all Spec files within the Spec array on the wdio.ios.conf.ts file

```

##### Generate and Open Allure reports

For visualizing the Automation execution you need to have installed previously [Java JDK](https://www.oracle.com/java/technologies/downloads/#java17) and being added to the PATH Environment variable to allow the Allure report to be launched.
Once that is installed, you can run the `npm run reports` script on the integrated terminal of the project to launch a local server with the Allure report results, after the Test Execution.

### Issues you might encounter in the Setup process
- Carthage not being installed - https://formulae.brew.sh/formula/carthage
- Brew not recognized by the command line - [Brew not being recognized](https://stackoverflow.com/questions/36657321/after-installing-homebrew-i-get-zsh-command-not-found-brew)
 Look for this answer
 ![Stack overflow question](./assets/stack%20overflow%20question.png)


 ### Useful Links
 - ios Selectors - [Class Chains](https://github.com/facebookarchive/WebDriverAgent/wiki/Class-Chain-Queries-Construction-Rules)
 - ios Selectors - [Predicate String](https://github.com/facebookarchive/WebDriverAgent/wiki/Predicate-Queries-Construction-Rules)