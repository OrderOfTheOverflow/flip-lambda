import LoginData from '../../data/user/login.data';
import LoginPageElement from '../../page-elements/login.page';
import HomePageElement from '../../../shared/page-elements/home.page';
import {
    click,
    DEFAULT_LONG_WAIT,
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
    inputPin,
    navigateToLoginScene,
    shouldShowElementOnLoginScene,
} from '../../../shared/scenario/common/login';
import {hideKeyboard} from '../../helper';

const {TEXT} = require('../../data/constant/copywriting/login/text');

describe('C52954 - Successfully redirect to Top-up page using Non-E2pay Account', () => {
    it('Handle Permission For New User', () => {
        pause(DEFAULT_WAIT);
        clickButtonAppTrackingTransparency();
    });

    it('Redirect to Login page', () => {
        navigateToLoginScene();
        clearTextInputLoginScene();
        shouldShowElementOnLoginScene();
        fillField(
            LoginPageElement.LoginSceneTextInputEmail,
            LoginData.VALID_LOGIN_DATA_VERIFIED_NORMAL_USER.email,
        );
        fillField(
            LoginPageElement.LoginSceneTextInputPassword,
            LoginData.VALID_LOGIN_DATA_VERIFIED_NORMAL_USER.password,
        );
        hideKeyboard();
        click(LoginPageElement.LoginSceneButtonLogin);
    });

    it('Redirect to Enter PIN page', () => {
        expectText(
            LoginPageElement.InputPinAfterLoginSceneTextTitle,
            TEXT.ID.InputPinAfterLoginSceneTextTitle,
            DEFAULT_LONG_WAIT,
        );
        shouldShowElement(LoginPageElement.InputPinAfterLoginSceneButtonForgotPin);
        inputPin(LoginData.VALID_LOGIN_DATA_VERIFIED_NORMAL_USER.pin);
        pause();
    });

    it('Redirect to Home page', () => {
        waitUntil(
            HomePageElement.EmoneyActivationTooltipButtonClose,
            DEFAULT_LONG_WAIT,
        );
        click(HomePageElement.EmoneyActivationTooltipButtonClose);
        expectText(
            HomePageElement.HomeContentSceneTextGreeting,
            TEXT.ID.HomeContentSceneTextGreeting,
            DEFAULT_WAIT,
        );
    });

    it('C52954 - Check Top Up Balance Section', () => {
        shouldShowElement(HomePageElement.HomeSceneButtonTopUpBalance);
    });
});
