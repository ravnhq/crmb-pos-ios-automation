import executeWebAction from "../../helper/error-handling.js";
import Screen from "../Screen.js";
import generateMobileLocator from "../../helper/mobile-locator-generator.js";
import { ACCESSIBILITY_ID, CLASS_CHAIN } from "../../helper/selector-types.js";
import { $ } from '@wdio/globals';

class NativeScreen extends Screen {
    constructor() {
        super();
    }

    get native_screen_settings_button(){return $(`${generateMobileLocator(ACCESSIBILITY_ID,'Settings')}`)}
    get native_ok_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID,'Ok')}`) }



    async tapOnSettingsButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Settings Button"
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.native_screen_settings_button);
    }

    async tapOnOkButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Ok Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.native_ok_button);
    }
}


export default new NativeScreen()