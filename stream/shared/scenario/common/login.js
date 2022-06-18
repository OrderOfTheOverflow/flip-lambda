import {
    DEFAULT_LONG_WAIT,
    DEFAULT_SUPER_LONG_WAIT,
    DEFAULT_VERY_LONG_WAIT,
    DEFAULT_WAIT,
    isAndroid,
    isDisplayed,
    isIOS,
    pause,
    shortPause,
    veryShortPause,
} from '../../../../helper';
import {requestApi} from '../../../../networking/base';
import {getOtp} from '../../../capt/api/user';
import {hideKeyboard} from '../../../capt/helper';
import AppTrackingTransparencyPageElement from '../../../capt/page-elements/app-tracking-transparency-slider.page';
import EmoneyPageElement from '../../../capt/page-elements/e-money-activation.page';
import LoginData from '../../data/user/login.data';
import HomePageElement from '../../page-elements/home.page';
import {inputPinAfterLogin} from './send-money';
import {OtpSceneTextInputOtp} from '../../../capt/page-elements/sign-up.page';

const PageElement = require('../../../capt/page-elements/login.page');
const {
    click,
    fillField,
    waitUntil,
    clearTextField,
    clearTextPasswordField,
    shouldShowElement,
} = require('../../../../helper');

export function clearTextInputLoginScene() {
    waitUntil(PageElement.LoginSceneTextInputEmail, DEFAULT_LONG_WAIT);
    clearTextField(PageElement.LoginSceneTextInputEmail);
    clearTextPasswordField(PageElement.LoginSceneTextInputPassword);
}

export function shouldShowElementOnLoginScene() {
    shouldShowElement(PageElement.LoginSceneTextTitle);
    shouldShowElement(PageElement.LoginSceneButtonForgotPassword);
    shouldShowElement(PageElement.LoginSceneToggleLanguage);
}

export function navigateToLoginScene() {
    waitUntil(PageElement.SplashSceneButtonLogin, DEFAULT_VERY_LONG_WAIT);
    click(PageElement.SplashSceneButtonLogin);
}

export function clickButtonAppTrackingTransparency() {
    if (isIOS() && isDisplayed(AppTrackingTransparencyPageElement.BUTTON_NEXT, DEFAULT_WAIT)) {
        click(AppTrackingTransparencyPageElement.BUTTON_NEXT);
        shortPause();
    }
}

export function login(email, password) {
    waitUntil(PageElement.LoginSceneTextInputEmail, DEFAULT_VERY_LONG_WAIT);
    clearTextInputLoginScene();
    fillField(PageElement.LoginSceneTextInputEmail, email);
    waitUntil(PageElement.LoginSceneTextInputPassword);
    fillField(PageElement.LoginSceneTextInputPassword, password);
    hideKeyboard();
    waitUntil(PageElement.LoginSceneButtonLogin, DEFAULT_LONG_WAIT);
    click(PageElement.LoginSceneButtonLogin);
}

export function inputPin(pin) {
    waitUntil(`${PageElement.PhoneNumberVerificationSceneKeyboardView}-5`, DEFAULT_LONG_WAIT);

    let userPin = pin.split('');
    userPin.forEach((number) => {
        click(
            `${PageElement.PhoneNumberVerificationSceneKeyboardView}-${number}`,
        );
    });
}

export function inputOtp(email) {
    let otp = '';
    email = email ?? LoginData.VALID_LOGIN_DATA_E2PAY.email;
    let otpData = requestApi(getOtp(email)).data.user_otp;
    otp = otpData.split('');
    shortPause();
    const LABELS = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX'];
    LABELS.forEach((label, index) => {
        waitUntil(
            `${PageElement.PhoneNumberVerificationScene}-TEXT_INPUT-OTP_${label}`,
        );
        fillField(
            `${PageElement.PhoneNumberVerificationScene}-TEXT_INPUT-OTP_${label}`,
            otp[index],
        );
    });
}

export function inputOTPByUser(varOtp) {
    let otp = varOtp.split('');
    waitUntil(OtpSceneTextInputOtp, DEFAULT_SUPER_LONG_WAIT)
    const LABELS = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX'];
    LABELS.forEach((label, index) => {
        waitUntil(
            `${PageElement.PhoneNumberVerificationScene}-TEXT_INPUT-OTP_${label}`,
            DEFAULT_VERY_LONG_WAIT
        );
        fillField(
            `${PageElement.PhoneNumberVerificationScene}-TEXT_INPUT-OTP_${label}`,
            otp[index],
        );
    });
}

export function handleAfterLoginEMoney(email) {
    pause();
    inputOtp(email);
    waitUntil(
        PageElement.EmoneyActivationSuccessButtonClose,
        DEFAULT_VERY_LONG_WAIT,
    );
    click(PageElement.EmoneyActivationSuccessButtonClose);
    if (isAndroid()) {
        waitUntil(PageElement.HomeContentSceneTextGreeting);
        shouldShowElement(PageElement.HomeContentSceneTextGreeting);
    }
    shortPause();
}

export function loginUsingEMoney(email, password, pin) {
    clickButtonAppTrackingTransparency();
    navigateToLoginScene();
    login(email, password);
    pause();
    inputPinAfterLogin(pin);
    handleAfterLoginEMoney(email);
}

function handleEmoneyActivationCard() {
    if (isDisplayed(EmoneyPageElement.TEXT_TITLE, DEFAULT_WAIT)) {
        waitUntil(EmoneyPageElement.BUTTON_CLOSE);
        click(EmoneyPageElement.BUTTON_CLOSE);

        /*
        * Sometimes the activation card is shown again after we click
        * */
        pause();
        if (isDisplayed(EmoneyPageElement.BUTTON_CLOSE)) {
            click(EmoneyPageElement.BUTTON_CLOSE);
        }
    }
}

export function loginUnVerifiedUser(email, password) {
    if (!email) {
        email = LoginData.VALID_LOGIN_DATA.email;
    }
    if (!password) {
        password = LoginData.VALID_LOGIN_DATA.password;
    }
    clickButtonAppTrackingTransparency();
    navigateToLoginScene();
    login(email, password);
    pause();
}

export function loginNonEmoney(email, password, pin) {
    if (!email) {
        email = LoginData.VALID_LOGIN_DATA.email;
    }
    if (!password) {
        password = LoginData.VALID_LOGIN_DATA.password;
    }
    if (!pin) {
        pin = LoginData.VALID_LOGIN_DATA.pin;
    }
    clickButtonAppTrackingTransparency();
    navigateToLoginScene();
    login(email, password);
    pause();
    inputPinAfterLogin(pin);
    pause(DEFAULT_WAIT);
    handleEmoneyActivationCard();
}

export function reLoginNonEmoney(email, password, pin) {
    if (!email) {
        email = LoginData.VALID_LOGIN_DATA.email;
    }
    if (!password) {
        password = LoginData.VALID_LOGIN_DATA.password;
    }
    if (!pin) {
        pin = LoginData.VALID_LOGIN_DATA.pin;
    }
    clickButtonAppTrackingTransparency();
    navigateToLoginScene();
    login(email, password);
    pause(DEFAULT_LONG_WAIT);
    inputPinAfterLogin(pin);
    pause(DEFAULT_VERY_LONG_WAIT);
}

export function loginFirstTimeUntilProfilePage(email, password, pin) {
    loginNonEmoney(email, password, pin);
    veryShortPause();
    waitUntil(HomePageElement.HomeSceneTouchableTabAccount, DEFAULT_LONG_WAIT);
    click(HomePageElement.HomeSceneTouchableTabAccount);
}

export function loginUntilProfilePage(email, password, pin) {
    reLoginNonEmoney(email, password, pin);
    veryShortPause();
    waitUntil(HomePageElement.HomeSceneTouchableTabAccount, DEFAULT_LONG_WAIT);
    click(HomePageElement.HomeSceneTouchableTabAccount);
}

