import {
    clearTextField,
    click,
    DEFAULT_SHORT_WAIT,
    DEFAULT_VERY_LONG_WAIT,
    DEFAULT_VERY_SHORT_WAIT,
    fillField,
    focusInput,
    isDisplayed,
    pressDoneOnKeyboard,
    shortPause,
    shouldShowElement,
    waitUntil
} from '../../../../helper';
import {
    DIGITAL_PRODUCT_FORM_SCENE_LIST_ITEM,
    DIGITAL_PRODUCT_FORM_SCENE_TEXT_INPUT_PHONE_NUMBER
} from '../../../dp/page-elements/mobile-data.page';
import * as PREPAID_ELECTRICITY from '../../../dp/page-elements/prepaid-electricity.page';
import * as POSTPAID_ELECTRICITY from '../../../dp/page-elements/postpaid-electricity.page';
import {BANK_PAYMENT_OPTION_TOUCHABLE_BANK_ITEM} from '../../../docter/page-elements/common/bank-payment-option.page';
import {handleBreakTimeModal} from './break-time';
import {cancelTransaction} from './top-up';
import {clickDepositPayment} from './send-money';
import PageElement from '../../page-elements/pin.page';
import {inputPin} from './pin';
import {RepeatDigitalProductTransactionButton} from '../../../dp/page-elements/antri-digital-product.page';
import ConfirmationPageElement from '../../../docter/page-elements/send-money.page';

export const selectProduct = (productId) => {
    if (isDisplayed(`${DIGITAL_PRODUCT_FORM_SCENE_LIST_ITEM}-${productId}`)) {
        click(`${DIGITAL_PRODUCT_FORM_SCENE_LIST_ITEM}-${productId}`);
    } else {
        click(`${PREPAID_ELECTRICITY.LIST_PRODUCT}-${productId}`);
    }
};

export const fillPhoneNumber = (accountNumber) => {
    waitUntil(DIGITAL_PRODUCT_FORM_SCENE_TEXT_INPUT_PHONE_NUMBER);
    clearTextField(DIGITAL_PRODUCT_FORM_SCENE_TEXT_INPUT_PHONE_NUMBER);
    shortPause();
    fillField(
        DIGITAL_PRODUCT_FORM_SCENE_TEXT_INPUT_PHONE_NUMBER, accountNumber
    );
    pressDoneOnKeyboard();
};

export const fillElectricityAccountNumber = (accountNumber) => {
    if (!isDisplayed(PREPAID_ELECTRICITY.BUTTON_ACCOUNT_INQUIRY, DEFAULT_VERY_SHORT_WAIT)) {
        focusInput(POSTPAID_ELECTRICITY.TEXT_INPUT_ACCOUNT_NUMBER);
        fillField(
            POSTPAID_ELECTRICITY.TEXT_INPUT_ACCOUNT_NUMBER, accountNumber,
        );
        pressDoneOnKeyboard();
        shortPause();
    } else {
        focusInput(PREPAID_ELECTRICITY.TEXT_INPUT_ACCOUNT_NUMBER);
        fillField(
            PREPAID_ELECTRICITY.TEXT_INPUT_ACCOUNT_NUMBER, accountNumber,
        );
        pressDoneOnKeyboard();
        shortPause();
    }
};

export const handleDigitalProductPaymentUsingBankTransfer = (senderBank) => {
    const selector = `${BANK_PAYMENT_OPTION_TOUCHABLE_BANK_ITEM}-${senderBank}`;
    waitUntil(selector);
    click(selector);
    handleBreakTimeModal();
    cancelTransaction();
};

export const handleDigitalProductPaymentUsingBalance = (pin) => {
    shortPause();
    if (isDisplayed(
        ConfirmationPageElement
            .SendMoneyPaymentOptionSceneTouchableDepositPaymentElectricityOnly, DEFAULT_SHORT_WAIT)) {
        click(ConfirmationPageElement.SendMoneyPaymentOptionSceneTouchableDepositPaymentElectricityOnly);
    } else {
        clickDepositPayment();
    }
    waitUntil(PageElement.InputPinSceneTextTitle);
    inputPin(pin, PageElement.KeyboardView);
    shouldShowElement(
        RepeatDigitalProductTransactionButton,
        DEFAULT_VERY_LONG_WAIT,
    );
    click(ConfirmationPageElement.NavigationButtonBackLeft);
};
