import LoginScreen from "../../screen-objects/login/login.screen.js";
import constants from '../../../data/constants.json' assert {type: "json"};
import nativeScreen from "../../screen-objects/native/native.screen.js";
import settingsScreen from "../../screen-objects/settings/settings.screen.js";
import homeScreen from "../../screen-objects/home/home.screen.js";
import menuItemDetailsScreen from "../../screen-objects/home/menu-item-details.screen.js";
import checkoutScreen from "../../screen-objects/checkout/checkout.screen.js";


const testid = "CRMB"

describe('CRMB-POS - Order Test Scenarios', () => {

    beforeEach(async () => {
        await LoginScreen.typeIntoDeviceCodeInput(testid, constants.testScriptConstants.deviceCode);
        await LoginScreen.tapOnVerifyToLogInButton(testid);
        await LoginScreen.explicitPause(constants.timers.short2);
        await nativeScreen.isAllowWhileAppButtonPresent(testid);
    })

    it('POS-002 Create Order / Pick Up / CC payment', async () => {
        await nativeScreen.isAllowWhileAppButtonPresent(testid);
        await homeScreen.tapOnToGoText(testid);
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.searchItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnChargeCustomerButton(testid);
        await checkoutScreen.tapOnContinueButton(testid);
        await checkoutScreen.tapOnGoToPaymentButton(testid);
        await checkoutScreen.typeOnCardNumberInput(testid, constants.testScriptConstants.testCardNumber);
        await checkoutScreen.typeOnExpirationDateInput(testid, constants.testScriptConstants.testExpirationDate);
        await checkoutScreen.typeOnCVCInput(testid, constants.testScriptConstants.testCVC);
        await checkoutScreen.typeOnZIPInput(testid, constants.testScriptConstants.testZip);
        await checkoutScreen.tapOnPayButton(testid);
        await checkoutScreen.tapOnDoneButton(testid);
    });

    it('POS-003 Create Order / Pick Up / Cash payment', async () => {
        await nativeScreen.isAllowWhileAppButtonPresent(testid);
        await homeScreen.tapOnToGoText(testid);
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.searchItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnChargeCustomerButton(testid);
        await checkoutScreen.tapOnContinueButton(testid);
        await checkoutScreen.tapOnPayWithCashButton(testid);
        await checkoutScreen.tapOnCalculateChangeButton(testid);
        await checkoutScreen.typeInCodeNumber(testid, constants.testScriptConstants.employeeCode);
        await checkoutScreen.tapOnContinueButton(testid);
        await checkoutScreen.typeInCodeNumber(testid, constants.testScriptConstants.orderTotal);
        await checkoutScreen.tapOnCompleteTransactionButton(testid);
        await checkoutScreen.isOrderPlacedMessagePresent(testid);
        await checkoutScreen.tapOnDoneButton(testid);
    });

    it('POS-005 Create Order / Dine In / Cash payment', async () => {
        await nativeScreen.isAllowWhileAppButtonPresent(testid);
        await homeScreen.tapOnDineInText(testid);
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.searchItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnChargeCustomerButton(testid);
        await checkoutScreen.typeInCodeNumber(testid, constants.testScriptConstants.tableNumber);
        await checkoutScreen.tapOnEnterButton(testid);
        await checkoutScreen.tapOnPayWithCashButton(testid);
        await checkoutScreen.tapOnCalculateChangeButton(testid);
        await checkoutScreen.typeInCodeNumber(testid, constants.testScriptConstants.employeeCode);
        await checkoutScreen.tapOnContinueButton(testid);
        await checkoutScreen.typeInCodeNumber(testid, constants.testScriptConstants.orderTotal);
        await checkoutScreen.tapOnCompleteTransactionButton(testid);
        await checkoutScreen.isOrderPlacedMessagePresent(testid);
        await checkoutScreen.tapOnDoneButton(testid);
    });

    it('POS-010- Create Order / Curbside / CC payment', async () => {
        await homeScreen.tapOnCurbsideButton(testid);
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.searchItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnChargeCustomerButton(testid);
        await checkoutScreen.tapOnContinueButton(testid);
        await checkoutScreen.tapOnGoToPaymentButton(testid);
        await checkoutScreen.typeOnCardNumberInput(testid, constants.testScriptConstants.testCardNumber);
        await checkoutScreen.typeOnExpirationDateInput(testid, constants.testScriptConstants.testExpirationDate);
        await checkoutScreen.typeOnCVCInput(testid, constants.testScriptConstants.testCVC);
        await checkoutScreen.typeOnZIPInput(testid, constants.testScriptConstants.testZip);
        await checkoutScreen.tapOnPayButton(testid);
        await checkoutScreen.tapOnDoneButton(testid);
    });

    it('POS-011- Create Order / Curbside / Cash payment', async () => {
        await homeScreen.tapOnCurbsideButton(testid);
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.searchItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnChargeCustomerButton(testid);
        await checkoutScreen.tapOnContinueButton(testid);
        await checkoutScreen.tapOnPayWithCashButton(testid);
        await checkoutScreen.tapOnCalculateChangeButton(testid);
        await checkoutScreen.typeInCodeNumber(testid, constants.testScriptConstants.employeeCode);
        await checkoutScreen.tapOnContinueButton(testid);
        await checkoutScreen.typeInCodeNumber(testid, constants.testScriptConstants.orderTotal);
        await checkoutScreen.tapOnCompleteTransactionButton(testid);
        await checkoutScreen.isOrderPlacedMessagePresent(testid);
        await checkoutScreen.tapOnDoneButton(testid);
    });

    afterEach(async () => {
        await nativeScreen.tapOnSettingsButton(testid);
        await settingsScreen.tapOnLogoutButton(testid);
        await nativeScreen.tapOnOkButton(testid);
    })

    

});
