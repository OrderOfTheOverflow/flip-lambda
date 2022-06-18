import {click, DEFAULT_LONG_WAIT, pause, shouldShowElement, waitUntil,} from '../../../../helper';
import {inputPin, login, navigateToLoginScene,} from '../../../shared/scenario/common/login';
import LoginData from '../../data/user/login.data';
import LoginPageElement from '../../page-elements/login.page';
import {checkTransferSaldoPopUp, logout} from '../../helper';
import PinPageElement from '../../../shared/page-elements/pin.page';

describe('C53211 - Successfully Login using visible password', () => {
    it('Navigate to Login Scene', () => {
        navigateToLoginScene();
        click(LoginPageElement.LoginSceneButtonShowPassword);
        waitUntil(LoginPageElement.LoginSceneTextTitle);
    });

    it('Login using visible password', () => {
        login(
            LoginData.VALID_LOGIN_SHOW_HIDE_PASSWORD.email,
            LoginData.VALID_LOGIN_SHOW_HIDE_PASSWORD.password,
        );
        waitUntil(PinPageElement.InputPinSceneTextTitle, DEFAULT_LONG_WAIT);
        shouldShowElement(PinPageElement.InputPinSceneForgotPinButton);
        inputPin(LoginData.VALID_LOGIN_SHOW_HIDE_PASSWORD.pin);
    });

    it('C53211 - Expected Navigate to Home Scene', () => {
        waitUntil(LoginPageElement.HomeSceneButtonTabHome, DEFAULT_LONG_WAIT);
        checkTransferSaldoPopUp();
        shouldShowElement(LoginPageElement.HomeContentSceneTextGreeting);
        shouldShowElement(LoginPageElement.HomeSceneButtonTabAccount);
    });

    afterAll(() => {
        logout();
    });
});

describe('C53212 - Successfully Login using hidden password', () => {
    it('Navigate to Login Scene', () => {
        navigateToLoginScene();
        waitUntil(LoginPageElement.LoginSceneTextTitle);
    });

    it('Login using hidden password', () => {
        login(
            LoginData.VALID_LOGIN_SHOW_HIDE_PASSWORD.email,
            LoginData.VALID_LOGIN_SHOW_HIDE_PASSWORD.password,
        );
        waitUntil(PinPageElement.InputPinSceneTextTitle, DEFAULT_LONG_WAIT);
        shouldShowElement(PinPageElement.InputPinSceneForgotPinButton);
        inputPin(LoginData.VALID_LOGIN_SHOW_HIDE_PASSWORD.pin);
    });

    it('C53212 - Expected Navigate to Home Scene', () => {
        waitUntil(LoginPageElement.HomeSceneButtonTabHome, DEFAULT_LONG_WAIT);
        pause();
        shouldShowElement(LoginPageElement.HomeContentSceneTextGreeting);
        shouldShowElement(LoginPageElement.HomeSceneButtonTabAccount);
    });
});
