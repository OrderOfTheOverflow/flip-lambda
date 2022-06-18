import {
    buildSelector,
    click,
    DEFAULT_VERY_LONG_WAIT,
    DEFAULT_WAIT,
    expectText,
    gestures,
    isDisplayed,
    shortPause,
    veryShortPause,
    waitUntil
} from '../../../../helper';
import PageElement from '../../../docter/page-elements/send-money.page';
import {clickLeftBackNavigationButton, clickLeftNavigationButton} from './send-money';

const VirtualAccountPageElement = require('../../../shared/page-elements/virtual-account-payment.page');
const {
    pause,
    shouldShowElement,
} = require('../../../../helper');

export const cancelVirtualAccount = () => {
    shortPause();
    const cancelLabel = VirtualAccountPageElement.VIRTUAL_ACCOUNT_PROCESS_SECTION_BUTTON_CANCEL;
    const acceptCancelLabel = VirtualAccountPageElement.VIRTUAL_ACCOUNT_PROCESS_SECTION_BUTTON_ACCEPT_CANCEL;
    waitUntil(cancelLabel, DEFAULT_VERY_LONG_WAIT);
    click(cancelLabel);
    waitUntil(acceptCancelLabel, DEFAULT_WAIT);
    click(acceptCancelLabel);
    shortPause();
};

export const handleVirtualAccountFeeModal = () => {
    shortPause();
    const label = VirtualAccountPageElement.VIRTUAL_ACCOUNT_BANK_MODAL_BUTTON_NEXT;
    if (isDisplayed(label)) {
        click(label);
        shortPause();
    }
    shouldShowElement(VirtualAccountPageElement.VIRTUAL_ACCOUNT_PROCESS_SECTION_TEXT_TRANSACTION_ID, DEFAULT_WAIT);
};

export const ensureVirtualAccountPayment = (title) => {
    pause();
    shouldShowElement(VirtualAccountPageElement.VIRTUAL_ACCOUNT_PAYMENT_OPTION_TEXT_TITLE);
    expectText(VirtualAccountPageElement.VIRTUAL_ACCOUNT_PAYMENT_OPTION_TEXT_TITLE, 'VIRTUAL ACCOUNT (Proses Realtime');

    shouldShowElement(VirtualAccountPageElement.VIRTUAL_ACCOUNT_PAYMENT_OPTION_TEXT_LABEL);
    expectText(VirtualAccountPageElement.VIRTUAL_ACCOUNT_PAYMENT_OPTION_TEXT_LABEL, title ?? 'Biaya');
};

export const ensureVirtualAccountPaymentForBundle = () => {
    pause();
    shouldShowElement(VirtualAccountPageElement.VIRTUAL_ACCOUNT_PAYMENT_OPTION_TEXT_TITLE);
    expectText(VirtualAccountPageElement.VIRTUAL_ACCOUNT_PAYMENT_OPTION_TEXT_TITLE, 'VIRTUAL ACCOUNT (Proses Realtime');
};

export const clickSenderBankItemVirtualAccount = (senderBank, canClick = true) => {
    const bankItemLabel = `${VirtualAccountPageElement.VIRTUAL_ACCOUNT_PAYMENT_OPTION_TOUCHABLE_BANK_ITEM}-${senderBank}`;
    const senderBankElement = $(buildSelector(
        `${VirtualAccountPageElement.VIRTUAL_ACCOUNT_PAYMENT_OPTION_TOUCHABLE_BANK_ITEM}-${senderBank}`));
    gestures.checkIfDisplayedWithScrollDown(senderBankElement, 5);
    shortPause();
    waitUntil(bankItemLabel);
    if (canClick) {
        click(bankItemLabel);
    }
    shortPause();
    if (isDisplayed(PageElement.SendMoneyPaymentOptionSceneTouchable24HourText)) {
        click(PageElement.SendMoneyPaymentOptionSceneTouchable24HourText);
    }
};

export const handleVirtualAccountDoubleTransactionModal = () => {
    shortPause();
    shouldShowElement(VirtualAccountPageElement.VIRTUAL_ACCOUNT_BANK_MODAL_TEXT_TITLE);
    expectText(VirtualAccountPageElement.VIRTUAL_ACCOUNT_BANK_MODAL_TEXT_TITLE, 'Transaksi Ganda');
    const label = VirtualAccountPageElement.VIRTUAL_ACCOUNT_BANK_MODAL_BUTTON_NEXT;
    click(label);
    shortPause();
};

export const ensureTextMessageInfo = (senderBank, text) => {
    const textInfoElement = `${VirtualAccountPageElement.VIRTUAL_ACCOUNT_PAYMENT_OPTION_TEXT_MESSAGE_INFO}-${senderBank}`;
    shouldShowElement(textInfoElement);
    expectText(textInfoElement, text ?? 'Sedang Gangguan');
    shortPause();
};

export const handleUnableToClickSenderBankItemVAForBundle = (senderBank) => {
    clickSenderBankItemVirtualAccount(senderBank, false);

    ensureTextMessageInfo(senderBank, 'Saat ini transfer ke banyak tujuan belum bisa pakai VA ');

    waitUntil(PageElement.NavigationButtonBackLeft, DEFAULT_WAIT);
    click(PageElement.NavigationButtonBackLeft);
    clickLeftNavigationButton();

    const acceptExitLabel = VirtualAccountPageElement.SEND_MONEY_REVIEW_SCENE_BUTTON_ACCEPT_EXIT;
    waitUntil(acceptExitLabel, DEFAULT_WAIT);
    click(acceptExitLabel);
    shortPause();
};

export const handleUnableToClickSenderBankItemVADisturbance = (senderBank) => {
    clickSenderBankItemVirtualAccount(senderBank, false);

    ensureTextMessageInfo(senderBank);

    clickLeftBackNavigationButton();
    veryShortPause();
    clickLeftBackNavigationButton();
    veryShortPause();
    clickLeftNavigationButton();
    veryShortPause();
    clickLeftNavigationButton();
    veryShortPause();
    clickLeftNavigationButton();
    veryShortPause();
};
