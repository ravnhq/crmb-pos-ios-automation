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
    })

    it('POS-002 Create Order / Pick Up / CC payment', async () => {
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

    it('POS-004 Create Order / Dine In / CC payment', async () => {
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.searchItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnDineInText(testid);
        await checkoutScreen.tapOnChargeCustomerButton(testid);
        await checkoutScreen.tapOnContinueButton(testid);
        await checkoutScreen.typeInCodeNumber(testid, constants.testScriptConstants.tableNumber);
        await checkoutScreen.tapOnEnterButton(testid);
        await checkoutScreen.tapOnGoToPaymentButton(testid);
        await checkoutScreen.typeOnCardNumberInput(testid, constants.testScriptConstants.testCardNumber);
        await checkoutScreen.typeOnExpirationDateInput(testid, constants.testScriptConstants.testExpirationDate);
        await checkoutScreen.typeOnCVCInput(testid, constants.testScriptConstants.testCVC);
        await checkoutScreen.typeOnZIPInput(testid, constants.testScriptConstants.testZip);
        await checkoutScreen.tapOnPayButton(testid);
        await checkoutScreen.tapOnDoneButton(testid);
    });

    it('POS-005 Create Order / Dine In / Cash payment', async () => {
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.searchItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnDineInText(testid);
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


      it('POS-006 Create Order / Drive Thru / CC payment', async () => {
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.searchItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnDriveThruText(testid);
        await checkoutScreen.tapOnChargeCustomerButton(testid);
        await checkoutScreen.tapOnContinueButton(testid);
        await checkoutScreen.typeInCodeNumber(testid, constants.testScriptConstants.tableNumber);
        await checkoutScreen.tapOnEnterButton(testid);
        await checkoutScreen.tapOnGoToPaymentButton(testid);
        await checkoutScreen.typeOnCardNumberInput(testid, constants.testScriptConstants.testCardNumber);
        await checkoutScreen.typeOnExpirationDateInput(testid, constants.testScriptConstants.testExpirationDate);
        await checkoutScreen.typeOnCVCInput(testid, constants.testScriptConstants.testCVC);
        await checkoutScreen.typeOnZIPInput(testid, constants.testScriptConstants.testZip);
        await checkoutScreen.tapOnPayButton(testid);
        await checkoutScreen.tapOnDoneButton(testid);
    });

    it('POS-007 Create Order / Drive Thru / Cash Payment', async () => {
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.searchItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnDriveThruText(testid);
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
  
    it('POS-010- Create Order / Curbside / CC payment', async () => {
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.searchItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnCurbsideButton(testid);
        await checkoutScreen.tapOnStandardOptionButton(testid);
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
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.searchItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnStandardOptionButton(testid);
        await checkoutScreen.tapOnCurbsideButton(testid);
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


    it('POS-013- Create Order / Scheduled', async () => {
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.searchItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnCurbsideButton(testid);
        await checkoutScreen.tapOnScheduleForLaterOptionButton(testid);
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


    it('POS-014 - Cancel Order', async () => {
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.searchItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCancelOrderButton(testid);
    });
  
      it('POS-015- Add Custom Item', async () => {
        await homeScreen.tapOnPlusAddItemCustomOption(testid);
        await homeScreen.typeOnNameCustomItemInput(testid, constants.testScriptConstants.customItemName);
        await homeScreen.typeOnPriceCustomItemInput(testid, constants.numbers.one, constants.testScriptConstants.customItemPrice);
        await homeScreen.tapOnAddCustomItemButton(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnCurbsideButton(testid);
        await checkoutScreen.tapOnScheduleForLaterOptionButton(testid);
        await checkoutScreen.tapOnChargeCustomerButton(testid);
        await checkoutScreen.tapOnContinueButton(testid);
        await checkoutScreen.tapOnPayWithCashButton(testid);
        await checkoutScreen.tapOnCalculateChangeButton(testid);
        await checkoutScreen.typeInCodeNumber(testid, constants.testScriptConstants.employeeCode);
        await checkoutScreen.tapOnContinueButton(testid);
        await checkoutScreen.typeInCodeNumber(testid, constants.testScriptConstants.orderTotalPlusCustomItem);
        await checkoutScreen.tapOnCompleteTransactionButton(testid);
        await checkoutScreen.isOrderPlacedMessagePresent(testid);
        await checkoutScreen.tapOnDoneButton(testid);
    });
  
     it('POS-016 - Use a discount in order', async () =>{
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.searchItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnDineInText(testid);
        await checkoutScreen.tapOnChargeCustomerButton(testid);
        await checkoutScreen.typeInCodeNumber(testid, constants.testScriptConstants.tableNumber);
        await checkoutScreen.tapOnEnterButton(testid);
        await checkoutScreen.tapOnPayWithCashButton(testid);
        await checkoutScreen.tapOnCalculateChangeButton(testid);
        await checkoutScreen.typeInCodeNumber(testid, constants.testScriptConstants.employeeCode);
        await checkoutScreen.tapOnContinueButton(testid);
        await checkoutScreen.typeInCodeNumber(testid, constants.testScriptConstants.orderTotal);
        await checkoutScreen.tapOnStandardOptionButton(testid);
        await checkoutScreen.typeOnDiscountInput(testid, constants.testScriptConstants.discountCode);
        await checkoutScreen.tapOnApplyDiscountButton(testid);        
        await checkoutScreen.typeInCodeNumber(testid, constants.testScriptConstants.orderTotalWithDiscount);
        await checkoutScreen.tapOnCompleteTransactionButton(testid);
        await checkoutScreen.isOrderPlacedMessagePresent(testid);
        await checkoutScreen.tapOnDoneButton(testid);
    });

    it('POS-017 - Add more items from checkout screen', async () => {
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.searchItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnAddItemButton(testid);
        await checkoutScreen.tapOnAddMoreItemsButton(testid);
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.tapOnClearSearchButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.additionalItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnChargeCustomerButton(testid);
        await checkoutScreen.tapOnContinueButton(testid);
        await checkoutScreen.tapOnPayWithCashButton(testid);
        await checkoutScreen.tapOnCalculateChangeButton(testid);
        await checkoutScreen.typeInCodeNumber(testid, constants.testScriptConstants.employeeCode);
        await checkoutScreen.tapOnContinueButton(testid);
        await checkoutScreen.typeInCodeNumber(testid, constants.testScriptConstants.orderTotalWithAdditionalItems);
        await checkoutScreen.tapOnCompleteTransactionButton(testid);
        await checkoutScreen.isOrderPlacedMessagePresent(testid);
        await checkoutScreen.tapOnDoneButton(testid);
    });

    it('POS-018 - Change order type from checkout screen', async () => {
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.searchItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnDineInText(testid);
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

    it('POS-019 - Change owner order in checkout screen', async () => {
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.searchItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnCustomerLookupButton(testid);
        await checkoutScreen.typeIntoLookupFormModalInputs(testid,2,constants.testScriptConstants.customerPhoneNumber);
        await checkoutScreen.typeIntoLookupFormModalInputs(testid,3,constants.testScriptConstants.userFirstName);
        await checkoutScreen.typeIntoLookupFormModalInputs(testid,4,constants.testScriptConstants.userLastName);
        await checkoutScreen.tapOnConfirmCustomerButton(testid);
        await checkoutScreen.isCustomerInfoDisplayed(testid);
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

    it('POS-020 - Close checkout modal(tips/table)', async () => {
        await homeScreen.tapOnSearchBarButton(testid);
        await homeScreen.typeOnSearchBarInput(testid, constants.testScriptConstants.searchItem);
        await homeScreen.tapOnItemFirstResult(testid);
        await menuItemDetailsScreen.tapOnAddToOrder(testid);
        await homeScreen.tapOnCheckoutButton(testid);
        await checkoutScreen.tapOnChargeCustomerButton(testid);
        await checkoutScreen.tapOnCloseButton(testid);
        await checkoutScreen.tapOnDineInText(testid);
        await checkoutScreen.tapOnChargeCustomerButton(testid);
        await checkoutScreen.tapOnCloseButton(testid);
        await checkoutScreen.tapOnBackButton();
    });
  
    afterEach(async () => {
        await nativeScreen.tapOnSettingsButton(testid);
        await settingsScreen.tapOnLogoutButton(testid);
        await nativeScreen.tapOnOkButton(testid);
    })

});
