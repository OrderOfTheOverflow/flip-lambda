import PageElement from '../../page-elements/send-money.page';
import {click, DEFAULT_WAIT, expectText, isDisplayed, shortPause, waitUntil} from '../../../../helper';

export function handleBankDisturbanceInTransferFormScene() {
    if (isDisplayed(PageElement.TroubleBankInformationModalTouchableAccept, DEFAULT_WAIT)) {
        click(PageElement.TroubleBankInformationModalTouchableAccept);
    }
}

export function expectDisturbanceRunningText(bank) {
    shortPause();
    waitUntil(PageElement.BankDisturbanceRunningTextAlert);
    const disturbanceLabel = bank + ' sedang mengalami gangguan. Transaksi mungkin diproses lebih lama, ya.';
    expectText(PageElement.BankDisturbanceRunningTextAlert, disturbanceLabel, DEFAULT_WAIT);
}
