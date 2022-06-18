import LoginData from '../../data/user/login.data';
import LoginPageElement from '../../page-elements/login.page';
import PinPageElement from '../../../shared/page-elements/pin.page';
import {click, DEFAULT_LONG_WAIT, shouldShowElement, waitUntil} from '../../../../helper';
import {inputPin, login, navigateToLoginScene,} from '../../../shared/scenario/common/login';
import {logout} from '../../helper';

describe('C53226 - Successfully Login using Account that has created a PIN', () => {
    it('Navigate to login scene', () => {
        navigateToLoginScene();
        waitUntil(LoginPageElement.LoginSceneTextTitle);
    });

    it('Login using account has created pin', () => {
        login(
            LoginData.VALID_LOGIN_DATA_HAS_CREATED_PIN.email,
            LoginData.VALID_LOGIN_DATA_HAS_CREATED_PIN.password,
        );
        waitUntil(PinPageElement.InputPinSceneTextTitle, DEFAULT_LONG_WAIT);
        shouldShowElement(PinPageElement.InputPinSceneForgotPinButton);
        inputPin(LoginData.VALID_LOGIN_DATA_HAS_CREATED_PIN.pin);
    });

    it('C53226 - Navigated to home scene', () => {
        waitUntil(LoginPageElement.HomeSceneButtonTabHome, DEFAULT_LONG_WAIT);
        shouldShowElement(LoginPageElement.HomeContentSceneTextGreeting);
        shouldShowElement(LoginPageElement.HomeSceneButtonTabAccount);
    });

    afterAll(() => {
        logout();
    });
});

describe('C53227 - Successfully Login using Account that hasn\'t created a PIN', () => {
    it('Navigate to login scene', () => {
        navigateToLoginScene();
        waitUntil(LoginPageElement.LoginSceneTextTitle);
        shouldShowElement(LoginPageElement.LoginSceneButtonForgotPassword);
        shouldShowElement(LoginPageElement.LoginSceneToggleLanguage);
    });

    it('Login using account hasn\'t created pin', () => {
        login(
            LoginData.VALID_LOGIN_DATA_HAS_NOT_CREATED_PIN.email,
            LoginData.VALID_LOGIN_DATA_HAS_NOT_CREATED_PIN.password,
        );
    });

    it('Navigated to Home Scene & Pop Up Create Pin Appears', () => {
        waitUntil(LoginPageElement.SetupPinSliderTextTitle, DEFAULT_LONG_WAIT);
        shouldShowElement(LoginPageElement.SetupPinSliderButtonCreatePin);
    });

    it('C53227 - Check Product Menu List & Top Up Button is not clickable', () => {
        click(LoginPageElement.HomeContentSceneButtonTopUp);
        click(`${LoginPageElement.HomeContentSceneIconMenu}-4`);
        shouldShowElement(LoginPageElement.SetupPinSliderTextTitle);
        shouldShowElement(LoginPageElement.SetupPinSliderButtonCreatePin);
    });
});
