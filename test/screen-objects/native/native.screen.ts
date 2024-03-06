import executeWebAction from "../../helper/error-handling.js";
import Screen from "../Screen.js";
import generateMobileLocator from "../../helper/mobile-locator-generator.js";
import { ACCESSIBILITY_ID, CLASS_CHAIN } from "../../helper/selector-types.js";
import { $ } from '@wdio/globals';
import constants from '../../../data/constants.json' assert { type: "json" };


class NativeScreen extends Screen {
    constructor() {
        super();
    }

    get native_screen_settings_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Settings')}`) }
    get native_ok_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Ok')}`) }
    get native_screen_allow_while_using_app_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Allow While Using App')}`) }
    get native_allow_allow_once_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Allow Once')}`) }
    get native_allow_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Allow')}`) }
    get native_delete_order_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Delete Order')}`) }
    get native_orders_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Orders')}`) }

    async isAllowWhileAppButtonPresent(testid: string): Promise<void> {
        if (await (await this.native_screen_allow_while_using_app_button).isDisplayed()) {
            await this.tapOnAllowWhileButton(testid);
            return;
        }
    }

    async tapOnAllowButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Allow Button"
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.native_allow_button);
    }

    async tapOnAllowWhileButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Allow While Using the App Button"
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.native_screen_allow_while_using_app_button);

    }

    async tapOnSettingsButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Settings Button"
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.native_screen_settings_button);
    }

    async tapOnOkButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Ok Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.native_ok_button);
    }

    async tapOnDeleteOrderButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Delete Order Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.native_delete_order_button);
    }

    async tapOnOrdersButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Orders Button"
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.native_orders_button);
        await this.explicitPause(constants.timers.short3);
    }
}


export default new NativeScreen()