import {hideKeyboard} from '../../helper';
import LoginData from '../../data/user/login.data';
import LoginPageElement from '../../page-elements/login.page';
import ForgotPasswordPageElement from '../../page-elements/forgot-password.page';
import {clickButtonAppTrackingTransparency, navigateToLoginScene,} from '../../../shared/scenario/common/login';
import {
    click,
    DEFAULT_LONG_WAIT,
    DEFAULT_WAIT,
    fillField,
    pause,
    shouldShowElement,
    waitUntil,
} from '../../../../helper';

describe('C54763 - Successfully Request Forgot Password', () => {
    it('Handle permission for new user', () => {
        pause(DEFAULT_WAIT);
        clickButtonAppTrackingTransparency();
    });

    it('Redirect to Login Page', () => {
        navigateToLoginScene();
        waitUntil(LoginPageElement.LoginSceneTextTitle);
    });

    it('Redirect to Forgot Password Page', () => {
        click(LoginPageElement.LoginSceneButtonForgotPassword);
        waitUntil(ForgotPasswordPageElement.TextTitle);
        shouldShowElement(ForgotPasswordPageElement.TextSubTitle);
        shouldShowElement(ForgotPasswordPageElement.TextInputEmail);
        shouldShowElement(ForgotPasswordPageElement.ButtonSendEmail);
    });

    it('Input email user', () => {
        fillField(
            ForgotPasswordPageElement.TextInputEmail,
            LoginData.VALID_LOGIN_USER_LANGUAGE_ID.email
        );
        hideKeyboard();
        click(ForgotPasswordPageElement.ButtonSendEmail);
    });

    it('C54763 - Show Pop Up Sent Email', () => {
        waitUntil(ForgotPasswordPageElement.ViewPopUpEmailSent, DEFAULT_LONG_WAIT);
        shouldShowElement(ForgotPasswordPageElement.ButtonOpenEmail);
    });
});
