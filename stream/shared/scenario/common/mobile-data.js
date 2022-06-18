import {DEFAULT_VERY_LONG_WAIT, shortPause, shouldShowElement,} from '../../../../helper';
import {AntriDigitalProductTransferSceneTextTopContent} from '../../../dp/page-elements/antri-digital-product.page';
import PageElement from '../../page-elements/pin.page.js';
import {inputPin} from './pin';
import {clickDepositPayment} from './send-money';
import ConfirmationPageElement from '../../../docter/page-elements/send-money.page';
import {cancelTransaction} from './top-up';

const {handleBreakTimeModal} = require('./break-time');
const {
    clearTextField,
    fillField,
    click,
    waitUntil,
} = require('../../../../helper');
const {
    DIGITAL_PRODUCT_FORM_SCENE_TEXT_INPUT_PHONE_NUMBER,
    DIGITAL_PRODUCT_FORM_SCENE_LIST_ITEM,
} = require('../../../dp/page-elements/mobile-data.page');
const {
    BANK_PAYMENT_OPTION_TOUCHABLE_BANK_ITEM,
} = require('../../../docter/page-elements/common/bank-payment-option.page');
const {
    ACCOUNT_NUMBER,
    DEFAULT_SELECTED_PACKAGE,
} = require('../../../dp/data/mobile-data');

const selectProduct = (productId) => {
    const selector = `${DIGITAL_PRODUCT_FORM_SCENE_LIST_ITEM}-${
        productId || DEFAULT_SELECTED_PACKAGE
    }`;
    click(selector);
};

export const fillMobileDataForm = (accountNumber, productId) => {
    waitUntil(DIGITAL_PRODUCT_FORM_SCENE_TEXT_INPUT_PHONE_NUMBER);
    clearTextField(DIGITAL_PRODUCT_FORM_SCENE_TEXT_INPUT_PHONE_NUMBER);
    shortPause();
    fillField(
        DIGITAL_PRODUCT_FORM_SCENE_TEXT_INPUT_PHONE_NUMBER,
        accountNumber || ACCOUNT_NUMBER,
    );
    shortPause();
    selectProduct(productId);
};

export const handleMobileDataUntilPayment = (senderBank) => {
    const selector = `${BANK_PAYMENT_OPTION_TOUCHABLE_BANK_ITEM}-${senderBank}`;
    waitUntil(selector);
    click(selector);
    handleBreakTimeModal();
    waitUntil(ConfirmationPageElement.ConfirmationTransferSceneButtonConfirmation, DEFAULT_VERY_LONG_WAIT);
};

export const handleMobileDataPayment = (senderBank) => {
    const selector = `${BANK_PAYMENT_OPTION_TOUCHABLE_BANK_ITEM}-${senderBank}`;
    waitUntil(selector);
    click(selector);
    handleBreakTimeModal();
    cancelTransaction();
};

export function handlePaymentUsingDeposit(pin = '111111') {
    clickDepositPayment();
    shortPause();
    waitUntil(PageElement.KeyboardView);
    inputPin(pin, PageElement.KeyboardView);
    shouldShowElement(
        AntriDigitalProductTransferSceneTextTopContent,
        DEFAULT_VERY_LONG_WAIT,
    );
    click(ConfirmationPageElement.NavigationButtonBackLeft);
}
