import {shortPause, waitUntil} from '../../../../../helper';
import {hideKeyboard} from '../../../helper';
import {inputOtp} from '../../../../shared/scenario/common/login';

const LoginData = require('../../../data/user/login.data');
const PageElement = require('../../../page-elements/login.page');
const {
    fillField,
    click,
    shouldShowElement,
    clearTextField, pause
} = require('../../../../../helper');
const {handlePermissionForNewUser} = require('../../../helper');

describe('Login using e2pay account', () => {
    it('8540: Login using e2pay account', () => {
        pause(5000);
        handlePermissionForNewUser();
        shouldShowElement(PageElement.SplashSceneButtonLogin);
        click(PageElement.SplashSceneButtonLogin);
        shouldShowElement(PageElement.LoginSceneTextTitle);
        clearTextField(PageElement.LoginSceneTextInputEmail);
        fillField(
            PageElement.LoginSceneTextInputEmail,
            LoginData.VALID_LOGIN_DATA_E2PAY.email
        );
        fillField(
            PageElement.LoginSceneTextInputPassword,
            LoginData.VALID_LOGIN_DATA_E2PAY.password
        );
        hideKeyboard();
        click(PageElement.LoginSceneButtonLogin);
        let userPin = LoginData.VALID_LOGIN_DATA_E2PAY.pin.split('');
        userPin.forEach((number) => {
            click(
                `${PageElement.PhoneNumberVerificationSceneKeyboardView}-${number}`
            );
        });
        inputOtp(LoginData.VALID_LOGIN_DATA_E2PAY.email);
        shortPause();
        waitUntil(PageElement.HomeContentSceneTextGreeting);
        shouldShowElement(PageElement.HomeContentSceneTextGreeting);
    });
});
