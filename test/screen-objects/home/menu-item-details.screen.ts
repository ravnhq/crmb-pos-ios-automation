import Screen from "../Screen.js";
import { $ } from '@wdio/globals';
import constants from '../../../data/constants.json' assert {type: "json"};
import executeWebAction from "../../helper/error-handling.js";
import generateMobileLocator from "../../helper/mobile-locator-generator.js";
import { ACCESSIBILITY_ID } from "../../helper/selector-types.js";

class MenuItemDetailsScreen extends Screen {

    constructor() {
        super();
    }

    get menu_details_add_to_orden_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, "Add to Order")}`) }
    get menu_details_update_order_button() { return $('~Update Order') }
    get menu_details_plus_button() { return $('~plus-vector') }
    get menu_details_minus_button() { return $('~minus-vector') }
    get menu_details_select_cheese_fillet_option() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, "Cheese filled")}`) }
    get menu_detials_select_thin_option() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, "Thin")}`) }
    get menu_details_select_delux_option() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, "Deluxe")}`) }


    async tapOnAddToOrder(testid: string): Promise<void> {
        const reportingMessage = "Tap on the Add to Order button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.menu_details_add_to_orden_button);
        await this.explicitPause(constants.timers.short1);
    }

    async tapOnUpdateOrderButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Update Order Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.menu_details_update_order_button);
        await this.explicitPause(constants.timers.short1);
    }

    async tapOnPlusButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Plus Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.menu_details_plus_button);
        await this.explicitPause(constants.timers.short1);
    }

    async tapOnMinusButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Minus Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.menu_details_minus_button);
        await this.explicitPause(constants.timers.short1);
    }

    async tapOnCheeseFilletOption(testid: string): Promise<void> {
        const reportingMessage = "Tap on Cheese Fillet Option";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.menu_details_select_cheese_fillet_option);
        await this.explicitPause(constants.timers.short1);
    }

    async tapOnThinOption(testid: string): Promise<void> {
        const reportingMessage = "Tap on Thin Option";
        await driver.execute('mobile: scroll', { direction: 'down' });
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.menu_detials_select_thin_option);
        await this.explicitPause(constants.timers.short1);
    }

    async tapOnDeluxeOption(testid: string): Promise<void> {
        const reportingMessage = "Tap on Deluxe Option";
        await driver.execute('mobile: scroll', { direction: 'down' });
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.menu_details_select_delux_option);
        await this.explicitPause(constants.timers.short1);
    }

}

export default new MenuItemDetailsScreen()