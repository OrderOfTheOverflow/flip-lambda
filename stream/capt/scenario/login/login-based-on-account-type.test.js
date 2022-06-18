import LoginData from '../../data/user/login.data';
import LoginPageElement from '../../page-elements/login.page';
import AccountPageElement from '../../../shared/page-elements/account.page';
import {
    click,
    DEFAULT_LONG_WAIT,
    DEFAULT_VERY_LONG_WAIT,
    DEFAULT_WAIT,
    expectText,
    fillField,
    pause,
    shouldShowElement,
    waitUntil,
} from '../../../../helper';
import {
    clearTextInputLoginScene,
    clickButtonAppTrackingTransparency,
    inputOtp,
    inputPin,
    navigateToLoginScene,
    shouldShowElementOnLoginScene,
} from '../../../shared/scenario/common/login';
import {checkTransferSaldoPopUp, hideKeyboard, logout, retryElementClicks,} from '../../helper';

const {TEXT} = require('../../data/constant/copywriting/login/text');

describe('C49444 - Successfully Login Using Verified Normal Account', () => {
    it('Handle Permission For New User', () => {
        pause(DEFAULT_WAIT);
        clickButtonAppTrackingTransparency();
    });

    it('Redirect to Login page', () => {
        navigateToLoginScene();
    });

    it('Redirect to Input PIN page', () => {
        clearTextInputLoginScene();
        shouldShowElementOnLoginScene();
        fillField(
            LoginPageElement.LoginSceneTextInputEmail,
            LoginData.VERIFIED_ACCOUNT.email,
        );
        fillField(
            LoginPageElement.LoginSceneTextInputPassword,
            LoginData.VERIFIED_ACCOUNT.password,
        );
        hideKeyboard();
        click(LoginPageElement.LoginSceneButtonLogin);
    });

    it('Redirect to Home page', () => {
        expectText(
            LoginPageElement.InputPinAfterLoginSceneTextTitle,
            TEXT.ID.InputPinAfterLoginSceneTextTitle,
            DEFAULT_LONG_WAIT,
        );
        shouldShowElement(LoginPageElement.InputPinAfterLoginSceneButtonForgotPin);
        inputPin(LoginData.VERIFIED_ACCOUNT.pin);
        waitUntil(LoginPageElement.HomeSceneButtonTabHome, DEFAULT_LONG_WAIT);
    });

    it('Redirect to Profile Account tab', () => {
        checkTransferSaldoPopUp();
        shouldShowElement(LoginPageElement.HomeSceneButtonTabAccount);
        retryElementClicks(
            LoginPageElement.HomeSceneButtonTabAccount,
            AccountPageElement.AccountSceneButtonUpdateAccountData,
        );
    });

    it('C49444 - Expected Account Verified', () => {
        expectText(
            LoginPageElement.ProfileAccountSceneTextAccountVerification,
            TEXT.ID.ProfileAccountSceneTextAccountVerified,
            DEFAULT_LONG_WAIT,
        );
    });

    afterAll(() => {
        logout();
    });
});

describe('C49788 - Successfully Login Using E2Pay Account', () => {
    it('Handle Permission For New User', () => {
        pause(DEFAULT_WAIT);
        clickButtonAppTrackingTransparency();
    });
    it('Redirect to Login page', () => {
        navigateToLoginScene();
    });
    it('Redirect to Input PIN page', () => {
        clearTextInputLoginScene();
        shouldShowElementOnLoginScene();
        fillField(
            LoginPageElement.LoginSceneTextInputEmail,
            LoginData.E2PAY_ACCOUNT.email,
        );
        fillField(
            LoginPageElement.LoginSceneTextInputPassword,
            LoginData.E2PAY_ACCOUNT.password,
        );
        hideKeyboard();
        click(LoginPageElement.LoginSceneButtonLogin);
        pause(DEFAULT_WAIT);
    });
    it('Redirect to Input OTP page', () => {
        expectText(
            LoginPageElement.InputPinAfterLoginSceneTextTitle,
            TEXT.ID.InputPinAfterLoginSceneTextTitle,
            DEFAULT_LONG_WAIT,
        );
        shouldShowElement(LoginPageElement.InputPinAfterLoginSceneButtonForgotPin);
        inputPin(LoginData.E2PAY_ACCOUNT.pin);
    });
    it('Redirect to Home page', () => {
        pause();
        inputOtp(LoginData.E2PAY_ACCOUNT.email);
    });
    it('Redirect to Profile Account tab', () => {
        waitUntil(
            LoginPageElement.EmoneyActivationSuccessButtonClose,
            DEFAULT_VERY_LONG_WAIT,
        );
        click(LoginPageElement.EmoneyActivationSuccessButtonClose);
        expectText(
            LoginPageElement.HomeContentSceneTextGreeting,
            TEXT.ID.HomeContentSceneTextGreeting,
            DEFAULT_VERY_LONG_WAIT,
        );
        shouldShowElement(LoginPageElement.HomeSceneButtonTabAccount);
        retryElementClicks(
            LoginPageElement.HomeSceneButtonTabAccount,
            AccountPageElement.AccountSceneButtonUpdateAccountData,
        );
    });
    it('C49788 - Expected E2Pay Account Verified', () => {
        pause(DEFAULT_WAIT);
        expectText(
            LoginPageElement.ProfileAccountSceneTextAccountVerification,
            TEXT.ID.ProfileAccountSceneTextAccountVerified,
            DEFAULT_LONG_WAIT,
        );
    });

    afterAll(() => {
        logout();
    });
});

describe('C52959 - Successfully Login Using Non-Indonesian Phone Number Account', () => {
    it('Handle Permission For New User', () => {
        pause(DEFAULT_WAIT);
        clickButtonAppTrackingTransparency();
    });

    it('Redirect to Login page', () => {
        navigateToLoginScene();
    });

    it('Redirect to Input PIN page', () => {
        clearTextInputLoginScene();
        shouldShowElementOnLoginScene();
        fillField(
            LoginPageElement.LoginSceneTextInputEmail,
            LoginData.NON_INDONESIAN_ACCOUNT.email,
        );
        fillField(
            LoginPageElement.LoginSceneTextInputPassword,
            LoginData.NON_INDONESIAN_ACCOUNT.password,
        );
        hideKeyboard();
        click(LoginPageElement.LoginSceneButtonLogin);
    });

    it('Redirect to Home page', () => {
        pause(DEFAULT_WAIT);
        waitUntil(LoginPageElement.InputPinAfterLoginSceneTextTitle);
        expectText(
            LoginPageElement.InputPinAfterLoginSceneTextTitle,
            TEXT.EN.InputPinAfterLoginSceneTextTitle,
            DEFAULT_WAIT,
        );
        shouldShowElement(LoginPageElement.InputPinAfterLoginSceneButtonForgotPin);
        inputPin(LoginData.NON_INDONESIAN_ACCOUNT.pin);
        waitUntil(LoginPageElement.HomeSceneButtonTabHome, DEFAULT_LONG_WAIT);
    });

    it('Redirect to Profile Account tab', () => {
        expectText(
            LoginPageElement.HomeContentSceneTextGreeting,
            TEXT.EN.HomeContentSceneTextGreeting,
            DEFAULT_VERY_LONG_WAIT,
        );
        shouldShowElement(LoginPageElement.HomeSceneButtonTabAccount);
        retryElementClicks(
            LoginPageElement.HomeSceneButtonTabAccount,
            AccountPageElement.AccountSceneButtonUpdateAccountData,
        );
    });

    it('C52959 - Expected Account Verified', () => {
        expectText(
            LoginPageElement.ProfileAccountSceneTextAccountVerification,
            TEXT.EN.ProfileAccountSceneTextAccountVerified,
            DEFAULT_LONG_WAIT,
        );
    });

    afterAll(() => {
        logout();
    });
});

describe('C53208 - Successfully Login Using Unverified Account', () => {
    it('Handle Permission For New User', () => {
        pause(DEFAULT_WAIT);
        clickButtonAppTrackingTransparency();
    });
    it('Redirect to Login page', () => {
        navigateToLoginScene();
    });
    it('Redirect to Input PIN page', () => {
        clearTextInputLoginScene();
        shouldShowElementOnLoginScene();
        fillField(
            LoginPageElement.LoginSceneTextInputEmail,
            LoginData.UNVERIFIED_ACCOUNT.email,
        );
        fillField(
            LoginPageElement.LoginSceneTextInputPassword,
            LoginData.UNVERIFIED_ACCOUNT.password,
        );
        hideKeyboard();
        click(LoginPageElement.LoginSceneButtonLogin);
    });
    it('Redirect to Home page', () => {
        expectText(
            LoginPageElement.InputPinAfterLoginSceneTextTitle,
            TEXT.ID.InputPinAfterLoginSceneTextTitle,
            DEFAULT_LONG_WAIT,
        );
        shouldShowElement(LoginPageElement.InputPinAfterLoginSceneButtonForgotPin);
        inputPin(LoginData.UNVERIFIED_ACCOUNT.pin);
        waitUntil(LoginPageElement.HomeSceneButtonTabHome, DEFAULT_LONG_WAIT);
    });
    it('Redirect to Profile Account tab', () => {
        expectText(
            LoginPageElement.HomeContentSceneTextGreeting,
            TEXT.ID.HomeContentSceneTextGreeting,
            DEFAULT_VERY_LONG_WAIT,
        );
        shouldShowElement(LoginPageElement.HomeSceneButtonTabAccount);
        retryElementClicks(
            LoginPageElement.HomeSceneButtonTabAccount,
            AccountPageElement.AccountSceneButtonUpdateAccountData,
        );
    });
    it('C53208 - Expected Account Unverified', () => {
        expectText(
            LoginPageElement.ProfileAccountSceneTextAccountVerification,
            TEXT.ID.ProfileAccountSceneTextAccountUnverified,
            DEFAULT_LONG_WAIT,
        );
        shouldShowElement(
            LoginPageElement.ProfileAccountSceneButtonVerificationEmail,
        );
    });
});
