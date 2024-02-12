import LoginScreen from "../../screen-objects/login/login.screen.js";
import constants from '../../../data/constants.json' assert {type: "json"};
import nativeScreen from "../../screen-objects/native/native.screen.js";
import settingsScreen from "../../screen-objects/settings/settings.screen.js";

const testid = "CRMB"

describe('CRMB-POS - Order Test Scenarios', () => {

    beforeEach(async () => {
        await LoginScreen.typeIntoDeviceCodeInput(testid, constants.testScriptConstants.deviceCode);
        await LoginScreen.tapOnVerifyToLogInButton(testid);
    })

    afterEach(async () => {
        await nativeScreen.tapOnSettingsButton(testid);
        await settingsScreen.tapOnLogoutButton(testid);
        await nativeScreen.tapOnOkButton(testid);
    })

});
