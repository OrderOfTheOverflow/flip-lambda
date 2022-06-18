import LoginData from '../../data/user/login.data';
import LoginPageElement from '../../page-elements/login.page';
import PinPageElement from '../../../shared/page-elements/pin.page';
import {otpVerification} from '../../../shared/scenario/common/otp';
import PasswordPageElement from '../../page-elements/input-password.page';
import {inputPin, login, navigateToLoginScene,} from '../../../shared/scenario/common/login';
import {click, DEFAULT_LONG_WAIT, fillField, shouldShowElement, waitUntil,} from '../../../../helper';
import {hideKeyboard} from '../../helper';
import {shouldHaveMessage,} from '../../../shared/scenario/common/send-money';

describe('C55523 - Successfully Forgot PIN', () => {
    it('Redirected to Login page', () => {
        navigateToLoginScene();
        waitUntil(LoginPageElement.LoginSceneTextTitle);
    });

    it('Redirected to Enter PIN page', () => {
        login(
            LoginData.VALID_LOGIN_USER_LANGUAGE_ID.email,
            LoginData.VALID_LOGIN_USER_LANGUAGE_ID.password,
        );
        waitUntil(PinPageElement.InputPinSceneTextTitle, DEFAULT_LONG_WAIT);
        shouldShowElement(PinPageElement.InputPinSceneForgotPinButton);
    });

    it('Redirected to Input Password page', () => {
        click(PinPageElement.InputPinSceneForgotPinButton);
        waitUntil(PasswordPageElement.VerifPasswordSceneTextSubTitle);
        fillField(
            PasswordPageElement.VerifPasswordSceneTextInputPassword,
            LoginData.VALID_LOGIN_USER_LANGUAGE_ID.password,
        );
        hideKeyboard();
        click(PasswordPageElement.VerifPasswordSceneButtonNext);
    });

    it('Redirected to Change PIN page', () => {
        waitUntil(PasswordPageElement.NewPinSceneTextInfo);
        shouldHaveMessage(
            PasswordPageElement.NewPinSceneTextInfo,
            'Buat PIN baru akunmu',
        );
        inputPin(LoginData.VALID_LOGIN_USER_LANGUAGE_ID.pin);
    });

    it('Redirected to Confirmation New PIN page', () => {
        waitUntil(PasswordPageElement.ConfirmationNewPinSceneTextInfo);
        shouldHaveMessage(
            PasswordPageElement.ConfirmationNewPinSceneTextInfo,
            'Masukkan ulang PIN baru akunmu.',
        );
        inputPin(LoginData.VALID_LOGIN_USER_LANGUAGE_ID.pin);
    });

    it('Redirected to Input OTP page', () => {
        otpVerification(LoginData.VALID_LOGIN_USER_LANGUAGE_ID.email);
    });

    it('C55523 - Pin Successfully Changed', () => {
        waitUntil(LoginPageElement.HomeSceneButtonTabHome, DEFAULT_LONG_WAIT);
    });
});
