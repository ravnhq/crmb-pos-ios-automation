import constants from '../../../data/constants.json' assert { type: "json" };
import executeWebAction from "../../helper/error-handling.js";
import generateMobileLocator from "../../helper/mobile-locator-generator.js";
import reporter from '../../helper/reporter.js';
import { ACCESSIBILITY_ID, PREDICATE_STRING } from "../../helper/selector-types.js";
import Screen from "../Screen.js";
import { assert } from 'chai';

class CheckoutScreen extends Screen {
    constructor() {
        super();
    }

    get checkout_standard_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Standard')}`) }
    get checkout_schedule_for_later_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Schedule for later')}`)}
    get checkout_charge_customer_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Charge customer')}`) }
    get checkout_continue_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Continue')}`) }
    get checkout_go_to_payment_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Go to payment')}`) }
    get checkout_screen_card_number_input() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Card number')}`) }
    get checkout_screen_expiration_date_input() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'expiration date')}`) }
    get checkout_screen_cvc_input() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'CVC')}`) }
    get checkout_screen_zip_input() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'ZIP')}`) }
    get checkout_screen_pay_button() { return $('-ios class chain:**/XCUIElementTypeButton[`label BEGINSWITH "Pay $"`]') }
    get checkout_done_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Done')}`) }
    get checkout_pay_with_cash_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Pay with cash')}`) }
    get checkout_calculate_change_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, "Calculate change due")}`) }
    get checkout_screen_complete_transaction_button() {return $(`${generateMobileLocator(ACCESSIBILITY_ID, "Complete transaction")}`)}
    get checkout_order_placed_text() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, "Order placed")}`) }
    get home_screen_curbside_button() { return $(`${generateMobileLocator(ACCESSIBILITY_ID, 'Curbside')}`) }

    async tapOnCurbsideButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Curbside Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.home_screen_curbside_button);
        await this.explicitPause(constants.timers.short1);
    }

    async tapOnStandardOptionButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Standard Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.checkout_standard_button);
        await this.explicitPause(constants.timers.short2);
    }

    async tapOnScheduleForLaterOptionButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Schedule for later Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.checkout_schedule_for_later_button);
        await this.explicitPause(constants.timers.short2);
    }

    async tapOnChargeCustomerButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Charge Customer Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.checkout_charge_customer_button);
        await this.explicitPause(constants.timers.short2);
    }

    async tapOnContinueButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Continue Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.checkout_continue_button);
        await this.explicitPause(constants.timers.short2);
    }

    async tapOnGoToPaymentButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Go to payment Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.checkout_go_to_payment_button);
        await this.explicitPause(constants.timers.short2);
    }

    async typeOnCardNumberInput(testid: string, cardNumber: string): Promise<void> {
        await executeWebAction(this.tapOnMobileElement, testid, "Tap on Card Number input", await this.checkout_screen_card_number_input);
        await this.explicitPause(constants.timers.minimum1);
        await executeWebAction(this.typeOnMobileElement, testid, `${cardNumber} set as Card Number`, await this.checkout_screen_card_number_input, cardNumber);
    }

    async typeOnExpirationDateInput(testid: string, expirationDate: string): Promise<void> {
        await executeWebAction(this.tapOnMobileElement, testid, 'Tap on Expiration Date input', await this.checkout_screen_expiration_date_input);
        await this.explicitPause(constants.timers.minimum1);
        await executeWebAction(this.typeOnMobileElement, testid, `${expirationDate} set as Expiration Date`, await this.checkout_screen_expiration_date_input, expirationDate);
    }

    async typeOnCVCInput(testid: string, cvc: string): Promise<void> {
        await executeWebAction(this.tapOnMobileElement, testid, 'Tap on CVC input', await this.checkout_screen_cvc_input);
        await this.explicitPause(constants.timers.minimum1);
        await executeWebAction(this.typeOnMobileElement, testid, `${cvc} set as Card security code`, await this.checkout_screen_cvc_input, cvc);
    }

    async typeOnZIPInput(testid: string, zip: string): Promise<void> {
        await executeWebAction(this.tapOnMobileElement, testid, 'Tap on ZIP input', await this.checkout_screen_zip_input);
        await this.explicitPause(constants.timers.minimum1);
        await executeWebAction(this.typeOnMobileElement, testid, `${zip} set as ZIP code`, await this.checkout_screen_zip_input, zip);
    }

    async tapOnPayButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Pay Button";
        await this.explicitPause(constants.timers.minimum1);
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.checkout_screen_pay_button);
    }

    async tapOnDoneButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Done Button";
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.checkout_done_button);
        await this.explicitPause(constants.timers.short2);
    }

    async tapOnPayWithCashButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Pay with cash Button";
        await this.explicitPause(constants.timers.minimum1);
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.checkout_pay_with_cash_button);
    }

    async tapOnCalculateChangeButton(testid: string): Promise<void> {
        const reportingMessage = `Tap on Calculate Change button`;
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.checkout_calculate_change_button);
        await this.explicitPause(constants.timers.minimum1);
    }

    async tapOnDigitButton(testid: string, numberDigit: string): Promise<void> {
        const reportingMessage = `Tap on ${numberDigit} Digit`;
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await $(`~${numberDigit}`));
        await this.explicitPause(constants.timers.minimum1);
    }

    async typeInCodeNumber(testid: string, number: string): Promise<void> {
        const codeDigits = number.split('');
        for (let i = 0; i < codeDigits.length; i++) {
            await this.tapOnDigitButton(testid, codeDigits[i]);
        }
    }

    async tapOnCompleteTransactionButton(testid: string): Promise<void> {
        const reportingMessage = "Tap on Complete Transaction Button";
        await this.explicitPause(constants.timers.minimum1);
        await executeWebAction(this.tapOnMobileElement, testid, reportingMessage, await this.checkout_screen_complete_transaction_button);
    }

    async isOrderPlacedMessagePresent(testid: string): Promise<void> {
        const reportingMessage = "Confirmation Message is Present";
        try {
            assert.exists(await this.checkout_order_placed_text, constants.errorMessages.chaiErrorMessage);
            reporter.addStep(testid, 'info', reportingMessage);
        } catch (error: any) {
            error.message = `${reportingMessage} - ${error.message}`;
            reporter.addStep(testid, 'error', reportingMessage);
            throw error;
        }
        await this.explicitPause(constants.timers.short2);
    }

}

export default new CheckoutScreen();