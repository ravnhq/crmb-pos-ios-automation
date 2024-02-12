import executeWebAction from "../../helper/error-handling.js";
import Screen from "../Screen.js";
import constants from '../../../data/constants.json' assert {type: "json"};
import generateMobileLocator from "../../helper/mobile-locator-generator.js";
import { ACCESSIBILITY_ID, PREDICATE_STRING } from "../../helper/selector-types.js";

class LoginScreen extends Screen {
    constructor() {
        super();
    }
    get login_device_code_input() { return $(`${generateMobileLocator(PREDICATE_STRING,'type == "XCUIElementTypeTextField"')}`) }
    get login_verify_login_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, "Verify to log in")}`) }

    async typeIntoDeviceCodeInput(testid: string, deviceCode: string): Promise<void> {
        const reportingMessage = `${deviceCode} set as Device Code`;
        await executeWebAction(this.typeOnMobileElement, testid, reportingMessage, await this.login_device_code_input, deviceCode);
        await this.explicitPause(constants.timers.short1);
    }

    async tapOnVerifyToLogInButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Verify To Log in Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.login_verify_login_button);
        await this.explicitPause(constants.timers.short2);
    }
}

export default new LoginScreen();