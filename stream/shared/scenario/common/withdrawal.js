import {DEFAULT_LONG_WAIT} from '../../../../helper';

const WithdrawalPageElement = require('../../../docter/page-elements/withdrawal.page');
const BeneficiaryBankPageElement = require('../../../docter/page-elements/common/beneficiary-bank.page');

const {clickWithdrawalMenu, openOtherMenu} = require('./menu');
const {
    click,
    fillField,
    focusInput,
    pause,
    pressDoneOnKeyboard,
    shortPause,
    shouldShowElement,
    waitUntil,
} = require('../../../../helper');

export function navigateToWithdrawalScene() {
    openOtherMenu();
    shortPause();

    clickWithdrawalMenu();
    shortPause();
}

export function fillWithdrawalAmount(amount) {
    waitUntil(WithdrawalPageElement.TEXT_AMOUNT_LABEL, DEFAULT_LONG_WAIT);
    fillField(WithdrawalPageElement.TEXT_INPUT_AMOUNT, amount);
    pressDoneOnKeyboard();
}

export function createNewWithdrawalAccount(beneficiaryBank) {
    click(WithdrawalPageElement.BUTTON_ADD_NEW_BENEFICIARY);
    shortPause();

    shouldShowElement(BeneficiaryBankPageElement.TOUCHABLE_BENEFICIARY_BANK);
    click(BeneficiaryBankPageElement.TOUCHABLE_BENEFICIARY_BANK);

    waitUntil(`${WithdrawalPageElement.TOUCHABLE_BANK_ITEM}-${beneficiaryBank.id}`);
    click(`${WithdrawalPageElement.TOUCHABLE_BANK_ITEM}-${beneficiaryBank.id}`);
    shortPause();

    focusInput(WithdrawalPageElement.TEXT_INPUT_BENEFICIARY_ACCOUNT);
    fillField(WithdrawalPageElement.TEXT_INPUT_BENEFICIARY_ACCOUNT, beneficiaryBank.number);
    pressDoneOnKeyboard();
    pause();

    waitUntil(WithdrawalPageElement.BUTTON_ADD_BENEFICIARY_ACCOUNT);
    click(WithdrawalPageElement.BUTTON_ADD_BENEFICIARY_ACCOUNT);
    pause();
}
