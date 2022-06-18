/* Put all helper here that related to your stream only */
import {click, isDisplayed, pressKeyOnIOSKeyboard} from '../../../helper';
import OnboardingPageElement from '../page-elements/onboarding.page';
import HomePageElement from '../page-elements/home.page';

const {DEFAULT_LONG_WAIT, DEFAULT_WAIT} = require('../../../helper');

export const handlePermissionForNewUser = () => {
    if (driver.isIOS) {
        if (
            isDisplayed(
                OnboardingPageElement.AppTrackingTransparencySliderButtonNext,
                DEFAULT_LONG_WAIT,
            )
        ) {
            click(
                OnboardingPageElement.AppTrackingTransparencySliderButtonNext,
            );
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

export function runAppInBackground(seconds) {
    driver.background(seconds);
}

export function goToNextFieldOniOS() {
    if (driver.isIOS) {
        pressKeyOnIOSKeyboard('next');
    }
}

export function checkTransferSaldoPopUp() {
    if (
        isDisplayed(
            HomePageElement.EmoneyActivationTooltipButtonClose,
            DEFAULT_WAIT,
        )
    ) {
        click(HomePageElement.EmoneyActivationTooltipButtonClose);
    }
}
