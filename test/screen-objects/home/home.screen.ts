import executeWebAction from "../../helper/error-handling.js";
import generateMobileLocator from "../../helper/mobile-locator-generator.js";
import { ACCESSIBILITY_ID, CLASS_CHAIN, PREDICATE_STRING } from "../../helper/selector-types.js";
import Screen from "../Screen.js";
import constants from '../../../data/constants.json' assert {type: "json"};
import { assert } from 'chai';
import reporter from '../../helper/reporter.js';

class HomeScreen extends Screen {
    constructor() {
        super();
    }


    
    get home_screen_search_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Search')}`)}
    get home_screen_menu_item_first_result() { return $(`${generateMobileLocator(CLASS_CHAIN, '**/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeOther/XCUIElementTypeOther')}`)}

    get home_screen_search_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Search')}`) }
    get home_screen_menu_item_first_result() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Bud Light')}`) }
    get home_screen_checkout_button() { return $(`${generateMobileLocator(CLASS_CHAIN, '**/XCUIElementTypeButton[`name == "Checkout"`][2]')}`) }
    get home_screen_take_out_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'ToGo')}`) }
    get home_screen_cancel_order_button() { return $(`${generateMobileLocator(CLASS_CHAIN, '**/XCUIElementTypeButton[`name == "Cancel Order"`]')}`) }
    get home_screen_drive_thru_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Drive-thru')}`) }
    get home_screen_dine_in_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Dine In')}`) }

    get home_screen_clear_search_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Clear text')}`) }
    get home_screen_add_custom_item_option() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'plus-vector')}`) }
    get home_screen_name_custom_item() { return $('-ios class chain:**/XCUIElementTypeTextField[`value == "Custom Item"`]') }
    get home_screen_price_custom_item() { return $$('-ios class chain:**/XCUIElementTypeTextField') }
    get home_screen_add_custom_item_button() { return $('-ios class chain:**/XCUIElementTypeButton[`name == "Add custom item"`]') }

    async typeOnPriceCustomItemInput(testid: string, index: number, itemPrice: string): Promise<void> {
        const reportingMessage = `${itemPrice} set as custom item price`;
        const inputFields = await this.home_screen_price_custom_item;
        await executeWebAction(this.typeOnMobileElement, testid, reportingMessage, inputFields[index], itemPrice);
        await this.explicitPause(constants.timers.short1);
    }

    async typeOnNameCustomItemInput(testid: string, itemName: string): Promise<void> {
        const reportingMessage = `${itemName} set as custom item name`
        await executeWebAction(this.typeOnMobileElement, testid, reportingMessage, await this.home_screen_name_custom_item, itemName);
        await this.explicitPause(constants.timers.short1);
    }

    async tapOnAddCustomItemButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Add Custom Item Button"
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.home_screen_add_custom_item_button);
        await this.explicitPause(constants.timers.short2);
    }

    async tapOnPlusAddItemCustomOption(testid: string): Promise<void> {
        const reportingMessage = "Tap on + Add Custom Item Option"
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.home_screen_add_custom_item_option);
        await this.explicitPause(constants.timers.short2);
    }

    async tapOnCancelOrderButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Cancel Order Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.home_screen_cancel_order_button);
        await this.explicitPause(constants.timers.short2);
    }

    async tapOnSearchBarButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Search bar mobile element";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.home_screen_search_button);
    }

    async typeOnSearchBarInput(testid: string, itemName: string): Promise<void> {
        const reportingMessage = `${itemName} set as search value`
        await executeWebAction(this.typeOnMobileElement, testid, reportingMessage, await this.home_screen_search_button, itemName);
        await this.explicitPause(constants.timers.short1);
    }

    async tapOnItemFirstResult(testid: string): Promise<void> {
        const reportingMessage = "Tap on Item first result";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.home_screen_menu_item_first_result);
        await this.explicitPause(constants.timers.minimum1);
    }

    async tapOnCheckoutButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Check out Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.home_screen_checkout_button);
        await this.explicitPause(constants.timers.short3);
    }

    async tapOnToGoText(testid: string): Promise<void> {
        const reportingMessage = "Tap on To Go Text";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.home_screen_take_out_button);
        await this.explicitPause(constants.timers.short1);
    }

    async tapOnDriveThruText(testid: string): Promise<void> {
        const reportingMessage = "Tap on Drive Thru Text";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.home_screen_drive_thru_button);
        await this.explicitPause(constants.timers.short1);
    }
    async tapOnDineInText(testid: string): Promise<void> {
        const reportingMessage = "Tap on Dine In Text";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.home_screen_dine_in_button);
        await this.explicitPause(constants.timers.short1);
    }
    async tapOnClearSearchButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Clear search button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.home_screen_clear_search_button);
        await this.explicitPause(constants.timers.short1);
    }
    

}

export default new HomeScreen();