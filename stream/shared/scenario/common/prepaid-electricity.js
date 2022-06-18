const {handleBreakTimeModal} = require('./break-time');
const {
    fillField,
    focusInput,
    pressDoneOnKeyboard,
    click,
    shouldShowElement,
    waitUntil,
    DEFAULT_LONG_WAIT,
} = require('../../../../helper');
const {
    ConfirmationTransferSceneButtonConfirmation,
} = require('../../../docter/page-elements/send-money.page');
const {
    TEXT_INPUT_ACCOUNT_NUMBER,
    ICON_GREEN_CHECK_MARK,
    LIST_PRODUCT,
    BUTTON_CONTINUE_TRANSACTION,
    BUTTON_CONTINUE_TRANSACTION_IN_MODAL,
} = require('../../../dp/page-elements/prepaid-electricity.page');
const {
    BANK_PAYMENT_OPTION_TOUCHABLE_BANK_ITEM,
} = require('../../../docter/page-elements/common/bank-payment-option.page');
const {
    ACCOUNT_NUMBER,
    DEFAULT_SELECTED_PACKAGE,
} = require('../../../dp/data/prepaid-electricity');

const fillAccountNumber = (accountNumber) => {
    focusInput(TEXT_INPUT_ACCOUNT_NUMBER);
    fillField(TEXT_INPUT_ACCOUNT_NUMBER, accountNumber || ACCOUNT_NUMBER);
    pressDoneOnKeyboard();
};

const selectProduct = (productId) => {
    const selector = `${LIST_PRODUCT}-${productId || DEFAULT_SELECTED_PACKAGE}`;
    click(selector);
};

const fillPrepaidElectricityForm = (accountNumber, productId) => {
    fillAccountNumber(accountNumber);
    waitUntil(ICON_GREEN_CHECK_MARK);
    shouldShowElement(ICON_GREEN_CHECK_MARK);
    selectProduct(productId);
    click(BUTTON_CONTINUE_TRANSACTION);
    click(BUTTON_CONTINUE_TRANSACTION_IN_MODAL);
};

const handleElectricityPayment = (senderBank) => {
    const selector = `${BANK_PAYMENT_OPTION_TOUCHABLE_BANK_ITEM}-${senderBank}`;
    waitUntil(selector);
    click(selector);
    handleBreakTimeModal();
    waitUntil(ConfirmationTransferSceneButtonConfirmation, DEFAULT_LONG_WAIT);
};

module.exports = {
    fillPrepaidElectricityForm,
    handleElectricityPayment,
};
