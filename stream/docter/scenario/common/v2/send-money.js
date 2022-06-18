import {TRANSFER_TYPE} from '@auto-shared/constants/transfer-type.constant';
import {
    click,
    DEFAULT_LONG_WAIT,
    DEFAULT_WAIT,
    expectText,
    fillField,
    gestures,
    isDisplayed,
    pause,
    pressDoneOnKeyboard,
    shortPause,
    veryShortPause,
    waitUntil
} from '@auto-helper';

const PageElement = require('../../../page-elements/v2/send-money.page');

const TEXT = {
    ACCOUNT_FOUND: 'Rekening tujuan ditemukan!'
};

const TRANSFER_METHOD_TYPE = {
    BANK_TRANSFER: 1,
    BALANCE: 2,
    VIRTUAL_ACCOUNT: 3,
};


export function clickSendMoneyToBank() {
    veryShortPause();
    // waitUntil(
    //     PageElement.BottomSheetTransferTypeTouchableDomestic,
    //     DEFAULT_LONG_WAIT
    // );
    // veryShortPause();
    // click(PageElement.BottomSheetTransferTypeTouchableDomestic);
}

export function clickBottomSheetTransferType(type) {
    if (type === TRANSFER_TYPE.transferBank) {
        clickSendMoneyToBank();
    }
}

export function isUsingCustomKeyboard(accessibilityLabel) {
    return isDisplayed(accessibilityLabel);
}

export function fillAccountNumber(beneficiaryBank) {
    const accountNumber = beneficiaryBank.number.split('');

    if (
        isUsingCustomKeyboard(
            `${PageElement.BeneficiaryAccountSliderTouchableKeypad}-${accountNumber[0]}`
        )
    ) {
        accountNumber.map(item => {
            waitUntil(`${PageElement.BeneficiaryAccountSliderTouchableKeypad}-${item}`);
            click(`${PageElement.BeneficiaryAccountSliderTouchableKeypad}-${item}`);
        });
    } else {
        fillField(
            PageElement.BeneficiaryAccountSliderTextInputBeneficiaryAccount,
            beneficiaryBank.number
        );
    }
}

export function checkAccountNumber() {
    pressDoneOnKeyboard();
    waitUntil(
        PageElement.BeneficiaryAccountSliderTextCheckingBeneficiaryAccount,
        DEFAULT_WAIT,
    );
    shortPause();
    expectText(
        PageElement.BeneficiaryAccountSliderTextBeneficiaryBankTitle,
        TEXT.ACCOUNT_FOUND,
        DEFAULT_WAIT,
    );
}

export function createNewBeneficiaryAccount(beneficiaryBank) {
    const closeLabel = PageElement.DomesticTransferBeneficiarySceneBeneficiaryListTooltipCloseButton;
    if (isDisplayed(PageElement.EmptyBeneficiariesSectionButtonOpenBeneficiaryBankSlider)) {
        click(PageElement.EmptyBeneficiariesSectionButtonOpenBeneficiaryBankSlider);
    } else {
        if (isDisplayed(closeLabel)) {
            click(closeLabel);
        }
        waitUntil(
            PageElement.DomesticTransferBeneficiarySceneButtonAddNewBeneficiary
        );
        click(PageElement.DomesticTransferBeneficiarySceneButtonAddNewBeneficiary);
    }

    waitUntil(PageElement.BeneficiaryBankSliderTextChooseBeneficiaryBank);
    waitUntil(
        PageElement.BeneficiaryBankSliderTextInputBeneficiaryBankSearch,
    );

    waitUntil(
        `${PageElement.BeneficiaryBankSliderTouchableBeneficiaryBankItem}-${beneficiaryBank.id}`
    );
    click(
        `${PageElement.BeneficiaryBankSliderTouchableBeneficiaryBankItem}-${beneficiaryBank.id}`
    );

    fillAccountNumber(beneficiaryBank);
    checkAccountNumber();
}

export const fillTransferAmount = (amount) => {
    const closeLabel = PageElement.DomesticTransferFormSceneAvatarTooltipCloseButton;
    if (isDisplayed(closeLabel)) {
        click(closeLabel);
    }
    waitUntil(PageElement.DomesticTransferFormSceneTextAmount);

    const splitAmount = `${amount}`.split('');
    if (
        isUsingCustomKeyboard(
            `${PageElement.DomesticTransferFormSceneTouchableKeypad}-${splitAmount[0]}`
        )
    ) {
        splitAmount.map(item => {
            waitUntil(`${PageElement.DomesticTransferFormSceneTouchableKeypad}-${item}`);
            click(`${PageElement.DomesticTransferFormSceneTouchableKeypad}-${item}`);
        });
        click(`${PageElement.DomesticTransferFormSceneTouchableKeypad}-submit`);
    } else {
        fillField(PageElement.DomesticTransferFormSceneTextInputAmount, amount);
        pressDoneOnKeyboard();
    }

    waitUntil(PageElement.DomesticTransferFormSceneButtonCreateTransaction, DEFAULT_LONG_WAIT);
    click(PageElement.DomesticTransferFormSceneButtonCreateTransaction);
};

export const handleReviewScene = () => {
    if (
        isDisplayed(
            PageElement.SendMoneyReviewSceneTextInformationAddTransaction
        )
    ) {
        click(PageElement.SendMoneyReviewSceneTouchableInformationAddTransaction);
        waitUntil(
            PageElement.SendMoneyReviewSceneTouchableInformationAddTransaction
        );
    }
    shortPause();
    click(PageElement.SendMoneyReviewSceneButtonCreateTransaction);
};

export const clickSenderBankItem = (senderBank, swipePercentage = .5) => {
    shortPause();
    gestures.swipeUp(swipePercentage);

    const type = TRANSFER_METHOD_TYPE.BANK_TRANSFER;
    click(
        `${PageElement.DomesticTransferPaymentOptionSceneTouchableAlternativePayment}-${type}`
    );

    waitUntil(
        `${PageElement.SenderBankSliderTouchableBeneficiaryBankItem}-${senderBank}`
    );
    click(
        `${PageElement.SenderBankSliderTouchableBeneficiaryBankItem}-${senderBank}`
    );

    waitUntil(PageElement.DomesticTransferPaymentOptionSceneButtonContinue);
    click(PageElement.DomesticTransferPaymentOptionSceneButtonContinue);
    pause();
};

export const clickTransactionConfirmationButton = () => {
    waitUntil(
        PageElement.ConfirmationTransferSceneTouchableConfirmTransaction,
        DEFAULT_LONG_WAIT
    );
    click(PageElement.ConfirmationTransferSceneTouchableConfirmTransaction);

    if (
        isDisplayed(
            PageElement.ConfirmationTransferSliderButtonAcceptConfirmationModal
        )
    ) {
        click(
            PageElement.ConfirmationTransferSliderButtonAcceptConfirmationModal
        );
    }
    shortPause();
};
