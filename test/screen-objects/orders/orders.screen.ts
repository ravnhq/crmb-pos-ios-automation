import executeWebAction from "../../helper/error-handling.js";
import Screen from "../Screen.js";
import generateMobileLocator from "../../helper/mobile-locator-generator.js";
import { ACCESSIBILITY_ID, CLASS_CHAIN } from "../../helper/selector-types.js";
import { $ } from '@wdio/globals';
import constants from '../../../data/constants.json' assert { type: "json" };


class OrdersScreen extends Screen {
    constructor() {
        super();
    }

    get orders_screen_open_button(){return $(`${generateMobileLocator(ACCESSIBILITY_ID,'Open')}`)}
    get orders_screen_close_button(){return $(`${generateMobileLocator(ACCESSIBILITY_ID,'Closed')}`)}
    get orders_screen_on_hold_button(){return $(`${generateMobileLocator(ACCESSIBILITY_ID,'On Hold')}`)}
    get orders_screen_open_order(){return $$(`${generateMobileLocator(CLASS_CHAIN,'**/XCUIElementTypeCell/XCUIElementTypeOther')}`)}  
    get orders_screen_finish_order_button(){return $(`${generateMobileLocator(ACCESSIBILITY_ID,'Finish Order')}`)} 
    get orders_screen_edit_order_button(){return $(`${generateMobileLocator(ACCESSIBILITY_ID,'Edit Order')}`)} 

    async tapOnOpenButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Open Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.orders_screen_open_button);
    }

    async tapOnCloseButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Close Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.orders_screen_close_button);
    }

    async tapOnHoldOrdersButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on 'On Hold' Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.orders_screen_on_hold_button);
    }

    async tapOnOpenOrder(testid: string, index: number): Promise<void> {
        const reportingMessage = "Tap on open order";
        const openOrder = await this.orders_screen_open_order;
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, openOrder[index]);
    }

    async tapOnFinishOrderButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on finish order button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.orders_screen_finish_order_button);
    }

    async tapOnEditOrderButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Edit order button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.orders_screen_edit_order_button);
        await this.explicitPause(constants.timers.short3);
    }

}

export default new OrdersScreen()