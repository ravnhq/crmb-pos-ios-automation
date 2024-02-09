import { browser } from '@wdio/globals';
import constants from '../../data/constants.json' assert {type: "json"};
// import { Key } from 'webdriverio';
class Screen {

    /**
     * @function tapOnMobileElement It taps on the target mobile element passed as parameter, it should be a WDIO element
     * @param mobileElement Web element returned from the test object being automated
     */
    async tapOnMobileElement(mobileElement: WebdriverIO.Element):Promise<void> {
        try {
            await mobileElement.waitUntil(async () => {
                return (await mobileElement.isExisting())
            }, { timeout: 15000, interval: 1000, timeoutMsg: constants.errorMessages.waitUntilErrorMessage })
            await mobileElement.click();
        } catch (error) {
            throw error;
        }
    }

    /**
     * @function typeOnMobileElement It adds a string value to a Mobile element that is an input field
     * @param mobileInput The mobile input element you want to add the value
     * @param inputText String you want to set on the mobile element
     */
    async typeOnMobileElement(mobileInput: WebdriverIO.Element, inputText: string):Promise<void> {
        try {
            await mobileInput.waitUntil(async () => {
                return (await mobileInput.isExisting())
            }, { timeout: 15000, interval: 1000, timeoutMsg: constants.errorMessages.waitUntilErrorMessage })
            await mobileInput.setValue(inputText);
        } catch (error) {
            throw error;
        }
    }

    /**
     * @function iosScrollMobileElement iOS native scroll animation to a specific Mobile element
     * @param mobileElement Target mobile element you want to scroll to
     * @param direction Scroll direction
     */
    async iosScrollMobileElement(mobileElement: WebdriverIO.Element, direction: string):Promise<void> {
        try {
            await mobileElement.waitUntil(async () => {
                return (await mobileElement.isExisting())
            }, { timeout: 15000, interval: 1000, timeoutMsg: constants.errorMessages.waitUntilErrorMessage })
            await browser.execute('mobile:scroll', { element: mobileElement.elementId, direction: direction });
        } catch (error) {
            throw error;
        }
    }

    /**
     * @function tapOnBackButton Native WDIO action to press on the back button
     */
    async tapOnBackButton() {
        await browser.back();
    }

    /**
     * @function explicitPause Implementing the native WDIO method to create a explicit wait 
     * @param pausePeriod The amount to pause in milisecondss
     */
    async explicitPause(pausePeriod: number): Promise<void> {
        await browser.pause(pausePeriod);
    }

}

export default Screen