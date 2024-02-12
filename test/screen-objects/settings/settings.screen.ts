import executeWebAction from "../../helper/error-handling.js";
import Screen from "../Screen.js";
import generateMobileLocator from "../../helper/mobile-locator-generator.js";
import { ACCESSIBILITY_ID, CLASS_CHAIN } from "../../helper/selector-types.js";
import { $ } from '@wdio/globals';


class SettingsScreen extends Screen {
    constructor() {
        super();
    }

    get native_screen_logout_button(){return $(`${generateMobileLocator(ACCESSIBILITY_ID,'Log Out')}`)}
    get native_screen_select_order_label(){return $(`${generateMobileLocator(ACCESSIBILITY_ID,'Select Order Method')}`)}

    async tapOnLogoutButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Logout Button"
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.native_screen_logout_button);
    }
}


export default new SettingsScreen()