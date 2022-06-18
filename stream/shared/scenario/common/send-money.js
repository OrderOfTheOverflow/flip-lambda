import {
    DEFAULT_SHORT_WAIT,
    DEFAULT_SUPER_LONG_WAIT,
    DEFAULT_VERY_SHORT_WAIT,
    DEFAULT_WAIT,
    expectText,
    expectToast,
    gestures,
    shortPause,
    veryShortPause,
} from '../../../../helper';
import {loginNonEmoney, loginUsingEMoney} from './login';
import {hideKeyboard} from '../../../capt/helper';

const {LoginData} = require('../../../capt/data/user');
const PageElement = require('../../../docter/page-elements/send-money.page');
const PageElementLogin = require('../../../capt/page-elements/login.page');
const PinElementLogin = require('../../../capt/page-elements/pin.page');
const {
    click,
    isDisplayed,
    pause,
    shouldNotShowElement,
    shouldShowElement,
    waitUntil,
    focusInput,
    fillField,
    pressDoneOnKeyboard,
    DEFAULT_LONG_WAIT,
    DEFAULT_VERY_LONG_WAIT,
} = require('../../../../helper');

export const SERVICE_TYPE = {
    FLIP_INSTANT: 'FLIP_INSTANT',
    FLIP_REGULAR: 'FLIP_REGULAR',
};

export const handleBreakTimeModal = () => {
    if (
        isDisplayed(
            PageElement.SendMoneyTransferFormSceneButtonAcceptBreaktimeModal
        )
    ) {
        click(PageElement.SendMoneyTransferFormSceneButtonAcceptBreaktimeModal);
        shouldNotShowElement(
            PageElement.SendMoneyTransferFormSceneButtonAcceptBreaktimeModal
        );
    }
};

export const handleFlipPlusModal = () => {
    shortPause();
    click(PageElement.SendMoneyTransferFormSceneButtonAcceptFlipPlusModal);
    shouldNotShowElement(
        PageElement.SendMoneyTransferFormSceneButtonAcceptFlipPlusModal,
        DEFAULT_LONG_WAIT
    );
    shortPause();
};

export const handleLimitFlipInstanModal = (serviceType) => {
    pause();
    waitUntil(PageElement.SendMoneyTransferFormSceneButtonFlipInstan, DEFAULT_VERY_LONG_WAIT);
    if (serviceType === SERVICE_TYPE.FLIP_INSTANT) {
        click(PageElement.SendMoneyTransferFormSceneButtonFlipInstan);
    } else {
        click(PageElement.SendMoneyTransferFormSceneButtonFlipRegular);
    }
    shouldNotShowElement(
        PageElement.SendMoneyTransferFormSceneButtonFlipRegular
    );
};

export const clickButtonSendMoney = () => {
    // Home Scene
    waitUntil(PageElement.HomeSceneButtonSendMoney, DEFAULT_SUPER_LONG_WAIT);
    click(PageElement.HomeSceneButtonSendMoney);
};

export const clickLeftNavigationButton = () => {
    shortPause();
    waitUntil(PageElement.NavigationButtonLeft, DEFAULT_LONG_WAIT);
    click(PageElement.NavigationButtonLeft);
};

export const clickLeftBackNavigationButton = () => {
    shortPause();
    waitUntil(PageElement.NavigationButtonBackLeft);
    click(PageElement.NavigationButtonBackLeft);
};

export const handleLeftBackNavigationButton = () => {
    clickLeftBackNavigationButton();
    pause();
};

export const createNewBeneficiaryAccount = (beneficiaryBank, isEWallet) => {
    // Send Money Beneficiary Account Favorite Scene

    if (
        isDisplayed(PageElement.SendMoneyBeneficiaryAccountFavoriteSceneTextTitle, DEFAULT_WAIT)
    ) {
        click(
            PageElement.SendMoneyBeneficiaryAccountFavoriteSceneButtonCreateNewDestination
        );
    }

    // Send Money Create New Beneficiary Account Scene
    shortPause();
    waitUntil(
        PageElement.SendMoneyCreateNewBeneficiaryAccountSceneTouchableBeneficiaryBank,
        DEFAULT_VERY_LONG_WAIT
    );
    click(
        PageElement.SendMoneyCreateNewBeneficiaryAccountSceneTouchableBeneficiaryBank
    );

    shortPause();
    if (isEWallet) {
        click(`${PageElement.EWalletTabBar}-1`);
    }

    waitUntil(
        `${PageElement.SendMoneyCreateNewBeneficiaryAccountSceneTouchableBeneficiaryBankItem}-${beneficiaryBank.id}`,
        DEFAULT_WAIT
    );
    click(
        `${PageElement.SendMoneyCreateNewBeneficiaryAccountSceneTouchableBeneficiaryBankItem}-${beneficiaryBank.id}`
    );

    pause();
    focusInput(
        PageElement.SendMoneyCreateNewBeneficiaryAccountSceneTextInputBeneficiaryAccount
    );
    fillField(
        PageElement.SendMoneyCreateNewBeneficiaryAccountSceneTextInputBeneficiaryAccount,
        beneficiaryBank.number
    );
    pressDoneOnKeyboard();

    pause(DEFAULT_VERY_SHORT_WAIT * 3);
    waitUntil(
        PageElement.SendMoneyCreateNewBeneficiaryAccountSceneButtonContinueTransaction,
        DEFAULT_LONG_WAIT
    );
    click(
        PageElement.SendMoneyCreateNewBeneficiaryAccountSceneButtonContinueTransaction
    );
    pause();
};

export const clickAccountInquiryButton = () => {
    click(
        PageElement.SendMoneyCreateNewBeneficiaryAccountSceneButtonInquiryAccountNumber
    );
};

export const clickContinueToInputAmountButton = () => {
    waitUntil(
        PageElement.SendMoneyCreateNewBeneficiaryAccountSceneButtonContinueTransaction,
        DEFAULT_LONG_WAIT
    );
    click(
        PageElement.SendMoneyCreateNewBeneficiaryAccountSceneButtonContinueTransaction
    );
    pause();
};

export const addNewAccountNumber = (beneficiaryBank, isShortPause) => {
    veryShortPause();
    if (
        isDisplayed(
            PageElement.SendMoneyBeneficiaryAccountFavoriteSceneTextTitle,
            DEFAULT_SHORT_WAIT
        )
    ) {
        click(
            PageElement.SendMoneyBeneficiaryAccountFavoriteSceneButtonCreateNewDestination
        );
    }

    // Send Money Create New Beneficiary Account Scene
    veryShortPause();
    shouldShowElement(
        PageElement.SendMoneyCreateNewBeneficiaryAccountSceneTextTitle,
        DEFAULT_WAIT
    );
    waitUntil(
        PageElement.SendMoneyCreateNewBeneficiaryAccountSceneTouchableBeneficiaryBank,
        DEFAULT_WAIT
    );
    click(
        PageElement.SendMoneyCreateNewBeneficiaryAccountSceneTouchableBeneficiaryBank
    );
    shortPause();
    waitUntil(
        PageElement.SendMoneyCreateNewBeneficiaryAccountSceneTextInputBeneficiaryBankSearch,
        DEFAULT_LONG_WAIT
    );
    focusInput(
        PageElement.SendMoneyCreateNewBeneficiaryAccountSceneTextInputBeneficiaryBankSearch
    );
    fillField(
        PageElement.SendMoneyCreateNewBeneficiaryAccountSceneTextInputBeneficiaryBankSearch,
        beneficiaryBank.searchQuery
    );
    veryShortPause();
    hideKeyboard();
    veryShortPause();
    waitUntil(
        `${PageElement.SendMoneyCreateNewBeneficiaryAccountSceneTouchableBeneficiaryBankItem}-${beneficiaryBank.id}`,
        DEFAULT_LONG_WAIT
    );

    click(
        `${PageElement.SendMoneyCreateNewBeneficiaryAccountSceneTouchableBeneficiaryBankItem}-${beneficiaryBank.id}`
    );

    veryShortPause();

    waitUntil(
        PageElement.SendMoneyCreateNewBeneficiaryAccountSceneTextInputBeneficiaryAccount,
        DEFAULT_LONG_WAIT
    );
    focusInput(
        PageElement.SendMoneyCreateNewBeneficiaryAccountSceneTextInputBeneficiaryAccount
    );
    fillField(
        PageElement.SendMoneyCreateNewBeneficiaryAccountSceneTextInputBeneficiaryAccount,
        beneficiaryBank.number
    );
    pressDoneOnKeyboard();
    isShortPause ? shortPause() : pause();
};

export const fillTransferAmount = (amount, isContainSummaryTransaction) => {
    // Send Money Transfer Form Scene
    waitUntil(
        PageElement.SendMoneyTransferFormSceneTextAmount,
        DEFAULT_LONG_WAIT
    );
    shouldShowElement(PageElement.SendMoneyTransferFormSceneTextAmount, DEFAULT_LONG_WAIT);
    focusInput(PageElement.SendMoneyTransferFormSceneTextInputAmount);
    fillField(PageElement.SendMoneyTransferFormSceneTextInputAmount, amount);
    pressDoneOnKeyboard();
    shortPause();
    shouldShowElement(sendMoneyTransferFormSceneButtonCreateTransaction(isContainSummaryTransaction));
    click(sendMoneyTransferFormSceneButtonCreateTransaction(isContainSummaryTransaction));
    handleBreakTimeModal();
};

export const sendMoneyTransferFormSceneButtonCreateTransaction = (isContainSummaryTransaction) => {
    let pageElement = PageElement.SendMoneyTransferFormSceneButtonCreateTransaction;
    if (isContainSummaryTransaction) {
        pageElement = PageElement.SendMoneyTransferFormSceneButtonCreateTransactionWithSummary;
    }

    return pageElement;
};

export const fillTransferAmountOnly = (amount) => {
    // Send Money Transfer Form Scene
    shouldShowElement(PageElement.SendMoneyTransferFormSceneTextAmount);
    focusInput(PageElement.SendMoneyTransferFormSceneTextInputAmount);
    fillField(PageElement.SendMoneyTransferFormSceneTextInputAmount, amount);
    pressDoneOnKeyboard();
};

export const clickSenderBankItem = (senderBank, percentage = .9) => {
    // Send Money Payment Option Scene
    shortPause();
    gestures.swipeUp(percentage);
    waitUntil(
        `${PageElement.SendMoneyPaymentOptionSceneTouchableBankItem}-${senderBank}`
    );
    click(
        `${PageElement.SendMoneyPaymentOptionSceneTouchableBankItem}-${senderBank}`
    );

    if (isDisplayed(PageElement.SendMoneyPaymentOptionSceneTouchable24HourText, DEFAULT_WAIT)) {
        click(PageElement.SendMoneyPaymentOptionSceneTouchable24HourText);
    }
    pause();
};

export const clickDepositPayment = () => {
    waitUntil(
        `${PageElement.SendMoneyPaymentOptionSceneTouchableDepositPayment}`
    );
    click(`${PageElement.SendMoneyPaymentOptionSceneTouchableDepositPayment}`);
};

export const clickTransactionConfirmationButton = () => {
    // Confirmation Transfer Scene
    waitUntil(
        PageElement.ConfirmationTransferSceneButtonConfirmation,
        DEFAULT_LONG_WAIT
    );
    click(PageElement.ConfirmationTransferSceneButtonConfirmation);

    if (
        isDisplayed(
            PageElement.ConfirmationTransferSceneButtonAcceptTransferConfirmationModal
        )
    ) {
        click(
            PageElement.ConfirmationTransferSceneButtonAcceptTransferConfirmationModal
        );
    }
    pause();
};

export const handleReviewScene = () => {
    // Send Money Review Scene
    shortPause();
    if (
        isDisplayed(
            PageElement.SendMoneyReviewSceneTextAddTransaction
        )
    ) {
        click(PageElement.SendMoneyReviewSceneTouchableInformationAddTransaction);
        shouldNotShowElement(
            PageElement.SendMoneyReviewSceneTouchableInformationAddTransaction
        );
    }
    shortPause();
    if (isDisplayed(PageElement.SendMoneyReviewSceneButtonCreateTransaction)) {
        click(PageElement.SendMoneyReviewSceneButtonCreateTransaction);
    }
};

export const createSingleTransfer = (bank, amount, serviceType) => {
    createNewBeneficiaryAccount(bank);
    fillTransferAmount(amount);
    handleLimitFlipInstanModal(serviceType);
};

export function prepareCreateTransaction(email, password, pin) {
    pause();
    loginNonEmoney(email, password, pin);
    clickButtonSendMoney();
}

export function prepareCreateTransactionForEmoneyUser(email, password, pin) {
    if (!email) {
        email = LoginData.VALID_LOGIN_DATA_E2PAY.email;
    }
    if (!password) {
        password = LoginData.VALID_LOGIN_DATA_E2PAY.password;
    }
    if (!pin) {
        pin = LoginData.VALID_LOGIN_DATA_E2PAY.pin;
    }
    pause();
    waitUntil(PageElementLogin.SplashSceneButtonLogin, DEFAULT_SUPER_LONG_WAIT);
    loginUsingEMoney(email, password, pin);
    pause();
    clickButtonSendMoney();
}

export const handleBundleTransferReviewScene = (isDirectToPayment) => {
    if (
        isDisplayed(
            PageElement.SendMoneyReviewSceneTextAddTransaction
        )
    ) {
        click(
            PageElement.SendMoneyReviewSceneTouchableInformationAddTransaction
        );
        shouldNotShowElement(
            PageElement.SendMoneyReviewSceneTouchableInformationAddTransaction
        );
    }

    shortPause();
    if (!isDirectToPayment) {
        if (
            isDisplayed(PageElement.SendMoneyReviewSceneButtonAddTransaction, DEFAULT_WAIT)
        ) {
            click(PageElement.SendMoneyReviewSceneButtonAddTransaction);
        }
    } else {
        if (
            isDisplayed(PageElement.SendMoneyReviewSceneButtonCreateTransaction, DEFAULT_WAIT)
        ) {
            click(PageElement.SendMoneyReviewSceneButtonCreateTransaction);
        }
    }
};

export function waitForOverlayProgressAnimation() {
    shouldShowElement(PageElement.OverlayProgressAnimationView);
    pause(DEFAULT_LONG_WAIT);
}

export function shouldDisplayToast(text) {
    expectToast(text);
}

export function shouldHaveMessage(accessibilityLabel, textMatcher) {
    shortPause();
    expectText(accessibilityLabel, textMatcher);
}

export function closeBeneficiaryListPage() {
    shortPause();
    if (
        isDisplayed(PageElement.SendMoneyBeneficiaryAccountFavoriteSceneTextTitle)
    ) {
        clickLeftNavigationButton();
    }
}

export function inputPinAfterLogin(pin) {
    waitUntil(
        `${PinElementLogin.TextTitle}`,
        DEFAULT_LONG_WAIT
    );
    let userPin = pin.split('');
    userPin.forEach((number) => {
        waitUntil(
            `${PageElementLogin.PhoneNumberVerificationSceneKeyboardView}-${number}`,
        );
        click(
            `${PageElementLogin.PhoneNumberVerificationSceneKeyboardView}-${number}`
        );
    });
}
