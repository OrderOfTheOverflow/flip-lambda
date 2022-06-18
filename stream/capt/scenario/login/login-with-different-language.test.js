import {
    click,
    DEFAULT_LONG_WAIT,
    DEFAULT_VERY_LONG_WAIT,
    expectText,
    shouldShowElement,
    waitUntil,
} from '../../../../helper';
import {inputPin, login, navigateToLoginScene,} from '../../../shared/scenario/common/login';
import {logout} from '../../helper';
import LoginData from '../../data/user/login.data';
import LoginPageElement from '../../page-elements/login.page';
import PinPageElement from '../../../shared/page-elements/pin.page';

const {TEXT} = require('../../data/constant/copywriting/login/text');

describe('C53209 - Successfully Login using Account who has preference language ID', () => {
    it('Navigate to Login Scene and change language into EN', () => {
        navigateToLoginScene();
        click(LoginPageElement.LoginSceneToggleLanguage);
        waitUntil(LoginPageElement.LoginSceneTextTitle);
    });

    it('Login using Account who has preference language ID', () => {
        login(
            LoginData.VALID_LOGIN_USER_LANGUAGE_ID.email,
            LoginData.VALID_LOGIN_USER_LANGUAGE_ID.password,
        );
        waitUntil(PinPageElement.InputPinSceneTextTitle, DEFAULT_LONG_WAIT);
        shouldShowElement(PinPageElement.InputPinSceneForgotPinButton);
        inputPin(LoginData.VALID_LOGIN_USER_LANGUAGE_ID.pin);
    });

    it('C53209 - Expected Home Scene in Indonesian', () => {
        waitUntil(LoginPageElement.HomeSceneButtonTabHome, DEFAULT_LONG_WAIT);
        waitUntil(LoginPageElement.HomeContentSceneTextGreeting);
        shouldShowElement(LoginPageElement.HomeSceneButtonTabAccount);
        expectText(
            LoginPageElement.HomeContentSceneTextGreeting,
            TEXT.ID.HomeContentSceneTextGreeting,
            DEFAULT_VERY_LONG_WAIT,
        );
    });

    afterAll(() => {
        logout();
    });
});

describe('C53210 - Successfully Login using Account who has preference language EN', () => {
    it('Navigate to Login Scene Language EN', () => {
        navigateToLoginScene();
        waitUntil(LoginPageElement.LoginSceneTextTitle);
    });

    it('Login using Account who has preference language EN', () => {
        login(
            LoginData.VALID_LOGIN_USER_LANGUAGE_EN.email,
            LoginData.VALID_LOGIN_USER_LANGUAGE_EN.password,
        );
        waitUntil(PinPageElement.InputPinSceneTextTitle, DEFAULT_LONG_WAIT);
        shouldShowElement(PinPageElement.InputPinSceneForgotPinButton);
        inputPin(LoginData.VALID_LOGIN_USER_LANGUAGE_EN.pin);
    });

    it('C53210 - Expected Home Scene in English', () => {
        waitUntil(LoginPageElement.HomeSceneButtonTabHome, DEFAULT_LONG_WAIT);
        shouldShowElement(LoginPageElement.HomeContentSceneTextGreeting);
        shouldShowElement(LoginPageElement.HomeSceneButtonTabHome);
        shouldShowElement(LoginPageElement.HomeSceneButtonTabAccount);
        expectText(
            LoginPageElement.HomeContentSceneTextGreeting,
            TEXT.EN.HomeContentSceneTextGreeting,
            DEFAULT_VERY_LONG_WAIT,
        );
    });
});
