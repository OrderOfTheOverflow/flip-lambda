const {
    fillField,
    focusInput,
    pressDoneOnKeyboard,
    click,
    waitUntil,
} = require('../../../../helper');
const {
    TEXT_INPUT_ACCOUNT_NUMBER,
    BUTTON_CONTINUE_TRANSACTION,
} = require('../../../dp/page-elements/postpaid-electricity.page');
const {ACCOUNT_NUMBER} = require('../../../dp/data/postpaid-electricity');

const fillAccountNumber = (accountNumber) => {
    focusInput(TEXT_INPUT_ACCOUNT_NUMBER);
    fillField(TEXT_INPUT_ACCOUNT_NUMBER, accountNumber || ACCOUNT_NUMBER);
    pressDoneOnKeyboard();
};

export const fillPostpaidElectricityForm = (accountNumber) => {
    fillAccountNumber(accountNumber);
    waitUntil(BUTTON_CONTINUE_TRANSACTION);
    click(BUTTON_CONTINUE_TRANSACTION);
};
