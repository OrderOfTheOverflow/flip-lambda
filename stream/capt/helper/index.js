/* Put all helper here that related to your stream only */

import {runAppInBackground} from '../../shared/helper';
import {
    click,
    DEFAULT_VERY_LONG_WAIT,
    DEFAULT_WAIT,
    gestures,
    isDisplayed,
    pressKeyOnIOSKeyboard,
    reset,
    waitUntil,
} from '../../../helper';

const PageElement = require('../page-elements/login.page');
const AccountPageElement = require('../../shared/page-elements/account.page');

export const handlePermissionForNewUser = () => {
    if (driver.isIOS) {
        if (
            isDisplayed(
                PageElement.AppTrackingTransparencySliderButtonNext,
                DEFAULT_VERY_LONG_WAIT,
            )
        ) {
            click(PageElement.AppTrackingTransparencySliderButtonNext);
        }
    }
};

export function hideKeyboard() {
    if (driver.isIOS) {
        pressKeyOnIOSKeyboard('return');
    } else if (driver.isAndroid) {
        driver.hideKeyboard();
    }
}

export function checkTransferSaldoPopUp() {
    if (
        isDisplayed(
            PageElement.EmoneyActivationTooltipButtonClose,
            DEFAULT_WAIT,
        )
    ) {
        click(PageElement.EmoneyActivationTooltipButtonClose);
    }
}

export function retryElementClicks(selectedElement, elementAssertion) {
    waitUntil(selectedElement);
    var i = 0;
    while (i < 5) {
        click(selectedElement);
        if (isDisplayed(elementAssertion)) {
            i = 5;
            console.log('No Retry');
        } else {
            i++;
            console.log('Try to get element: ' + i);
        }
    }
    waitUntil(elementAssertion);
}

export function logout() {
    if (isDisplayed(PageElement.HomeSceneButtonTabAccount)) {
        retryElementClicks(
            PageElement.HomeSceneButtonTabAccount,
            AccountPageElement.AccountSceneButtonUpdateAccountData,
        );
        waitUntil(AccountPageElement.AccountSceneButtonUpdateAccountData);
        gestures.swipeUp(0.8);
        waitUntil(AccountPageElement.AccountSceneButtonLogout);
        if (!isDisplayed(AccountPageElement.AccountSceneButtonLogout)) {
            gestures.swipeUp();
        }
        click(AccountPageElement.AccountSceneButtonLogout);
        waitUntil(AccountPageElement.PopUpConfirmLogoutConfirmationText);
        click(AccountPageElement.PopUpConfirmButtonLogout);
        runAppInBackground(4);
    } else {
        reset();
    }
}
