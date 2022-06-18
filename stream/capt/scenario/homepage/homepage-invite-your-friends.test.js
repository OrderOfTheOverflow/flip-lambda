import LoginData from '../../data/user/login.data';
import LoginPageElement from '../../page-elements/login.page';
import {checkTransferSaldoPopUp} from '../../helper';
import PinPageElement from '../../../shared/page-elements/pin.page';
import {
    clickButtonAppTrackingTransparency,
    inputPin,
    login,
    navigateToLoginScene,
} from '../../../shared/scenario/common/login';
import {
    click,
    DEFAULT_LONG_WAIT,
    DEFAULT_VERY_LONG_WAIT,
    DEFAULT_WAIT,
    pause,
    shouldShowElement,
    waitUntil,
} from '../../../../helper';

describe('C52952 - Successfully Invite a Friend', () => {
    it('Handle Permission For New User', () => {
        pause(DEFAULT_WAIT);
        clickButtonAppTrackingTransparency();
    });

    it('Navigate to login scene', () => {
        navigateToLoginScene();
    });

    it('Login using valid data', () => {
        login(
            LoginData.VALID_LOGIN_DATA_VERIFIED_NORMAL_USER.email,
            LoginData.VALID_LOGIN_DATA_VERIFIED_NORMAL_USER.password
        );
        waitUntil(PinPageElement.InputPinSceneTextTitle, DEFAULT_LONG_WAIT);
        shouldShowElement(PinPageElement.InputPinSceneTextTitle);
        shouldShowElement(PinPageElement.InputPinSceneForgotPinButton);
        inputPin(LoginData.VALID_LOGIN_DATA_VERIFIED_NORMAL_USER.pin);
    });

    it('Navigate to Homepage', () => {
        waitUntil(LoginPageElement.HomeSceneButtonTabHome, DEFAULT_LONG_WAIT);
        checkTransferSaldoPopUp();
        shouldShowElement(LoginPageElement.HomeContentSceneTextGreeting, DEFAULT_VERY_LONG_WAIT);
        shouldShowElement(LoginPageElement.HomeSceneButtonTabHome);
    });

    it('Navigate to Ajak Teman page', () => {
        shouldShowElement(LoginPageElement.HomeContentSceneButtonInviteFriends, DEFAULT_VERY_LONG_WAIT);
        click(LoginPageElement.HomeContentSceneButtonInviteFriends);
    });

    it('C52952 - Successfully Invite a Friend', () => {
        shouldShowElement(LoginPageElement.ReferralSceneButtonInviteFriends);
        click(LoginPageElement.ReferralSceneButtonInviteFriends);
    });
});
