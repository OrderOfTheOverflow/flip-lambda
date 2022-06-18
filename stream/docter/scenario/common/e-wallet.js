import {
    clickLeftNavigationButton,
    clickSenderBankItem,
    clickTransactionConfirmationButton,
    createNewBeneficiaryAccount,
    fillTransferAmount,
    fillTransferAmountOnly,
    handleFlipPlusModal,
    handleReviewScene
} from '../../../shared/scenario/common/send-money';
import {DEFAULT_VERY_LONG_WAIT, DEFAULT_WAIT, expectText, pause, shortPause, waitUntil} from '../../../../helper';
import {loginNonEmoney, loginUsingEMoney} from '../../../shared/scenario/common/login';
import {logout} from '../../../capt/helper';

const {clickDepositPayment} = require('../../../shared/scenario/common/send-money');
const {inputPin} = require('../../../shared/scenario/common/pin');
const PageElement = require('../../page-elements/send-money.page');
const {shouldShowElement} = require('../../../../helper');

export function handlePaymentUsingDeposit(pin = '111111') {
    clickDepositPayment();
    shortPause();
    waitUntil(PageElement.PinInputSceneKeyboardView);
    inputPin(pin, PageElement.PinInputSceneKeyboardView);
    shouldShowElement(
        PageElement.AntriWithdrawalTransferSceneTextIdTransaction,
        DEFAULT_VERY_LONG_WAIT
    );
}

export function changeUser(email, password, pin, emoney = false) {
    logout();
    pause(DEFAULT_WAIT);
    if (!emoney) {
        loginNonEmoney(email, password, pin);
    } else {
        loginUsingEMoney(email, password, pin);
    }
}

export function handlePaymentUsingBankTransfer(senderBank) {
    clickSenderBankItem(senderBank);
    clickTransactionConfirmationButton();
    shouldShowElement(PageElement.ForwardTransferProcessPageTextIdTransaction);
}

export function fillBeneficiaryAndAmount(beneficiary, amount) {
    createNewBeneficiaryAccount(beneficiary, true);
    fillTransferAmount(amount);
    handleReviewScene();
}

export function fillBeneficiaryAndAmountFlipPlus(beneficiary, amount) {
    createNewBeneficiaryAccount(beneficiary, true);
    fillTransferAmount(amount);
    shouldShowElement(PageElement.SendMoneyTransferFormSceneButtonAcceptFlipPlusModal, DEFAULT_WAIT);
    handleFlipPlusModal();
    handleReviewScene();
}


export function fillBeneficiaryAndAmountAndShowMinimumError(beneficiary, amount) {
    createNewBeneficiaryAccount(beneficiary, true);
    fillTransferAmountOnly(amount);
    expectText(PageElement.SendMoneyTransferFormSceneErrorTextInputAmount, 'Minimal transfer ke');
    clickLeftNavigationButton();
    clickLeftNavigationButton();
    clickLeftNavigationButton();
}

export function fillBeneficiaryAndAmountAndShowMaximumError(beneficiary, amount) {
    createNewBeneficiaryAccount(beneficiary, true);
    fillTransferAmountOnly(amount);
    expectText(PageElement.SendMoneyTransferFormSceneErrorTextInputAmount, 'Maksimal transfer ke');
    clickLeftNavigationButton();
    clickLeftNavigationButton();
    clickLeftNavigationButton();
}
