const LoginData = require('../../../data/user/login.data');
const PageElement = require('../../../page-elements/login.page');
const {handlePermissionForNewUser} = require('../../../helper');
const {
    click,
    fillField,
    pause,
    expectText,
    shouldShowElement,
    pressKeyOnIOSKeyboard,
    DEFAULT_VERY_LONG_WAIT,
    waitUntil,
} = require('../../../../../helper');
const TEXT = {
    incorrectPassword: 'Email atau Password salah.'
};

const {clearTextInputLoginScene, login, inputPin} = require('../../../../shared/scenario/common/login');

describe('Login', () => {
    it('Navigate from splash screen into login screen', () => {
        pause(15000);
        handlePermissionForNewUser();
        shouldShowElement(PageElement.SplashSceneButtonLogin);
        click(PageElement.SplashSceneButtonLogin);
        shouldShowElement(PageElement.LoginSceneTextTitle);
    });
    it('Invalid Login wrong email/password', () => {
        clearTextInputLoginScene();
        fillField(
            PageElement.LoginSceneTextInputEmail,
            LoginData.INVALID_LOGIN_DATA.email
        );
        fillField(
            PageElement.LoginSceneTextInputPassword,
            LoginData.INVALID_LOGIN_DATA.password
        );
        pressKeyOnIOSKeyboard('return');
        click(PageElement.LoginSceneButtonLogin);
        waitUntil(PageElement.TextTitleLoginSceneIncorrectPassword);
        expectText(PageElement.TextTitleLoginSceneIncorrectPassword, TEXT.incorrectPassword);
    });
    it('Valid Login without OTP', () => {
        login(
            LoginData.VALID_LOGIN_DATA.email,
            LoginData.VALID_LOGIN_DATA.password
        );
        inputPin(LoginData.VALID_LOGIN_DATA.pin);
        shouldShowElement(PageElement.HomeContentSceneTextGreeting, DEFAULT_VERY_LONG_WAIT);
    });
});
