import {DEFAULT_WAIT, veryShortPause} from '../../../../helper';

const PageElement = require('../../../docter/page-elements/top-up.page');
const HomePageElement = require('../../../docter/page-elements/home.page');
const BankPaymentPageElement = require('../../../docter/page-elements/common/bank-payment-option.page');
const EmoneyPageElement = require('../../../capt/page-elements/e-money-activation.page');
const ConfirmationPageElement = require('../../../docter/page-elements/confirmation.page');
const VirtualAccountPageElement = require('../../../shared/page-elements/virtual-account-payment.page');

const {
    click,
    DEFAULT_VERY_LONG_WAIT,
    expectText,
    fillField,
    gestures,
    isDisplayed,
    pause,
    pressDoneOnKeyboard,
    shortPause,
    shouldShowElement,
    waitUntil,
    buildSelector,
} = require('../../../../helper');
const {login, navigateToLoginScene} = require('./login');

export function handleLogin(email, password) {
    pause();
    navigateToLoginScene();
    login(email, password);
    pause();

    const isEmoneyActivationCard = isDisplayed(EmoneyPageElement.TEXT_TITLE, DEFAULT_VERY_LONG_WAIT);
    if (isEmoneyActivationCard) {
        click(EmoneyPageElement.BUTTON_CLOSE);
        shortPause();
    }
}

export function prepareTopUpE2Pay() {
    pause();
    waitUntil(HomePageElement.HomeSceneButtonTopUpBalance, DEFAULT_VERY_LONG_WAIT);
    expectText(HomePageElement.HomeSceneTextTopUpBalanceInIcon, 'Top Up');
    click(HomePageElement.HomeSceneButtonTopUpBalance);
    shouldShowElement(PageElement.TopUpEmoneyFormSceneTextTitleFlipSaldo);
}

export function prepareTopUpKoin(isFirstTime) {
    pause();
    waitUntil(HomePageElement.HomeSceneButtonTopUpBalance, DEFAULT_VERY_LONG_WAIT);
    expectText(HomePageElement.HomeSceneTextTopUpBalanceInIcon, 'Top Up');
    click(HomePageElement.HomeSceneButtonTopUpBalance);

    if (isFirstTime) {
        waitUntil(PageElement.AddBalanceModalButtonOk, DEFAULT_WAIT);
        click(PageElement.AddBalanceModalButtonOk);
    }

    shortPause();
    if (isDisplayed(PageElement.EmoneyActivationSceneTextLater)) {
        click(PageElement.EmoneyActivationSceneTextLater);
        shortPause();
    }

    shouldShowElement(PageElement.TopUpFormSceneTextAmountLabel);
}

export function fillTopUpE2PayAmount(amount) {
    expectText(PageElement.TopUpEmoneyFormSceneTextAmountLabelSaldo, 'NOMINAL PENGISIAN SALDO');

    fillField(PageElement.TopUpEmoneyFormSceneTextInputAmountTransfer, amount);
    pressDoneOnKeyboard();

    shouldShowElement(PageElement.TopUpEmoneyFormSceneButtonTopUpSaldo);

    shortPause();
    click(PageElement.TopUpEmoneyFormSceneButtonTopUpSaldo);
}

export function fillTopUpKoinAmount(amount) {
    expectText(PageElement.TopUpFormSceneTextAmountLabel, 'NOMINAL KOIN');

    fillField(PageElement.TopUpFormSceneTextInputAmount, amount);
    pressDoneOnKeyboard();

    shouldShowElement(PageElement.TopUpFormSceneTextButtonContinue);

    shortPause();
    click(PageElement.TopUpFormSceneTextButtonContinue);
    veryShortPause();
    pressDoneOnKeyboard();
}

export const clickSenderBank = (senderBank) => {
    shortPause();
    const senderBankElement = $(buildSelector(
        `${BankPaymentPageElement.BANK_PAYMENT_OPTION_TOUCHABLE_BANK_ITEM}-${senderBank}`
    ));
    gestures.checkIfDisplayedWithScrollDown(senderBankElement, 5);

    shortPause();
    waitUntil(`${BankPaymentPageElement.BANK_PAYMENT_OPTION_TOUCHABLE_BANK_ITEM}-${senderBank}`);
    click(`${BankPaymentPageElement.BANK_PAYMENT_OPTION_TOUCHABLE_BANK_ITEM}-${senderBank}`);

    shortPause();
    if (isDisplayed(PageElement.IndefinitelyTransactionModalTextAction)) {
        shortPause();
        click(PageElement.IndefinitelyTransactionModalTextAction);
    }
};

export const clickSenderBankVA = (senderBank) => {
    shortPause();
    const senderBankElement = $(buildSelector(`${VirtualAccountPageElement.VIRTUAL_ACCOUNT_PAYMENT_OPTION_TOUCHABLE_BANK_ITEM}-${senderBank}`));
    gestures.checkIfDisplayedWithScrollDown(senderBankElement, 5);
    shortPause();
    waitUntil(`${VirtualAccountPageElement.VIRTUAL_ACCOUNT_PAYMENT_OPTION_TOUCHABLE_BANK_ITEM}-${senderBank}`);
    click(`${VirtualAccountPageElement.VIRTUAL_ACCOUNT_PAYMENT_OPTION_TOUCHABLE_BANK_ITEM}-${senderBank}`);
};

export const cancelTransaction = () => {
    shortPause();
    const cancelButtonElement = $(buildSelector(ConfirmationPageElement.ConfirmationTransferSceneButtonCancelTransaction));
    gestures.checkIfDisplayedWithScrollDown(cancelButtonElement, 5);
    shortPause();

    waitUntil(ConfirmationPageElement.ConfirmationTransferSceneButtonCancelTransaction);
    click(ConfirmationPageElement.ConfirmationTransferSceneButtonCancelTransaction);
    shortPause();

    waitUntil(ConfirmationPageElement.ConfirmationTransferSceneButtonAcceptCancelTransaction);
    click(ConfirmationPageElement.ConfirmationTransferSceneButtonAcceptCancelTransaction);
    pause();
};
