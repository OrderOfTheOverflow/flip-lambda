import LoginPageElement from '../../page-elements/login.page';
import SignUpData from '../../../shared/data/user/sign-up.data';
import SignUpPageElement from '../../page-elements/sign-up.page';
import ReferralPageElement from '../../page-elements/referral.page';
import AccountPageElement from '../../../shared/page-elements/account.page';
import InviteFriendPageElement from '../../page-elements/invite-friend.page';
import {hideKeyboard, logout, retryElementClicks,} from '../../helper';
import {clickButtonAppTrackingTransparency, inputOtp, inputPin,} from '../../../shared/scenario/common/login';
import {
    click,
    DEFAULT_VERY_LONG_WAIT,
    DEFAULT_WAIT,
    expectText,
    fillField,
    isAndroid,
    openDeepLinkUrl,
    pause,
    shortPause,
    shouldShowElement,
} from '../../../../helper';
import {
    clearTextInputSignupScene,
    clearTextInputSignupStep2Scene,
    fillFieldOnSignupScene,
    fillFieldOnSignupStep2Scene,
    navigateToSignupScene,
    shouldShowElementOnPhoneNumberVerification,
    shouldShowElementOnPhoneNumberVerificationOptions,
    shouldShowElementOnSetUpPinScene,
    shouldShowElementOnSignupScene,
    shouldShowElementOnSignupStep2Scene,
} from '../../../shared/scenario/common/sign-up';

const {TEXT} = require('../../data/constant/copywriting/register/text');

describe('C52921 - Successfully Register using Referral Link', () => {
    it('Open via deeplink', () => {
        openDeepLinkUrl(isAndroid() ?
            SignUpData.REFERRAL_DATA.deeplinkAndroid :
            SignUpData.REFERRAL_DATA.deeplinkIOS
        );
    });

    it('Handle permission for new user', () => {
        pause(DEFAULT_WAIT);
        clickButtonAppTrackingTransparency();
    });

    it('Navigate from splash page to sign up page 1', () => {
        navigateToSignupScene();
        shouldShowElementOnSignupScene();
        expectText(
            SignUpPageElement.SignUpSceneTextReferralBox,
            `${SignUpData.REFERRAL_DATA.code.toLowerCase()} a.n. ${SignUpData.REFERRAL_DATA.name}`,
        );
    });

    it('Navigate from sign up page 1 to sign up page 2', () => {
        clearTextInputSignupScene();
        fillFieldOnSignupScene(SignUpData.DATA.name, SignUpData.DATA.phone);
        click(SignUpPageElement.SignUpSceneButtonNext);
        shouldShowElementOnSignupStep2Scene();
    });

    it('Navigate from sign up page 2 to phone number verification options page', () => {
        clearTextInputSignupStep2Scene();
        fillFieldOnSignupStep2Scene(SignUpData.DATA.email);
        hideKeyboard();
        click(SignUpPageElement.SignUpStep2SceneButtonSignUp);
        shouldShowElementOnPhoneNumberVerificationOptions(TEXT.ID.VerificationTitle);
    });

    it('Navigate from phone number verification options page to phone number verification page', () => {
        click(SignUpPageElement.PhoneNumberVerificationOptionsSceneButtonSms);
        shouldShowElementOnPhoneNumberVerification(TEXT.ID.VerificationTitle);
    });

    it('Navigate from phone number verification page to pin input page', () => {
        pause(DEFAULT_WAIT);
        inputOtp(SignUpData.DATA.email);
    });

    it('Navigate from pin input page to confirmation pin input page', () => {
        shouldShowElement(SignUpPageElement.SetUpPinSceneTextTitle, DEFAULT_WAIT);
        inputPin(SignUpData.DATA.pin);
        pause(DEFAULT_WAIT);
    });

    it('Navigate from confirmation pin input page to start using flip page', () => {
        shouldShowElement(SignUpPageElement.SetUpPinSceneTextTitle, DEFAULT_WAIT);
        inputPin(SignUpData.DATA.pin);
        shouldShowElementOnSetUpPinScene(TEXT.ID.SuccessPin);
    });

    it('Navigate from start using flip page to complete personal data page', () => {
        pause(DEFAULT_WAIT);
        click(SignUpPageElement.SetUpPinSceneButtonSucceedNewUserStartUsingFlip);
        expectText(SignUpPageElement.KycLandingSceneTextTitle, TEXT.ID.KycTitle, DEFAULT_WAIT);
    });

    it('Show confirmation close pop up', () => {
        click(SignUpPageElement.KycLandingSceneButtonNavbarClose);
    });

    it('Navigate to home page', () => {
        shouldShowElement(SignUpPageElement.KycLandingSceneButtonAcceptModalExit, DEFAULT_WAIT);
        click(SignUpPageElement.KycLandingSceneButtonAcceptModalExit);
        pause(DEFAULT_WAIT);
        if (isAndroid()) {
            expectText(
                SignUpPageElement.HomeContentSceneTextGreeting,
                `${TEXT.ID.Greeting} ${SignUpData.DATA.name.split(' ').shift()}!`,
                DEFAULT_VERY_LONG_WAIT,
            );
        }
    });

    it('Redirect to profile account tab', () => {
        shouldShowElement(LoginPageElement.HomeSceneButtonTabAccount, DEFAULT_VERY_LONG_WAIT);
        retryElementClicks(
            LoginPageElement.HomeSceneButtonTabAccount,
            AccountPageElement.AccountSceneButtonUpdateAccountData,
        );
        shouldShowElement(AccountPageElement.AccountSceneButtonInviteFriend);
    });

    it('Redirect to referral page', () => {
        click(AccountPageElement.AccountSceneButtonInviteFriend);
    });

    it('C52921 - Successfully use referral code', () => {
        pause(DEFAULT_WAIT);
        expectText(
            ReferralPageElement.textReferralCodeApplied,
            SignUpData.REFERRAL_DATA.code,
        );
        expectText(
            ReferralPageElement.textReferralNameApplied,
            `a.n ${SignUpData.REFERRAL_DATA.name}`,
        );
        click(InviteFriendPageElement.BackButton);
    });

    afterAll(() => {
        logout();
    });
});

describe('C52945 - Successfully Register as Referee by Input Manual Referral Code', () => {
    it('Handle permission for new user', () => {
        pause(DEFAULT_WAIT);
        clickButtonAppTrackingTransparency();
    });

    it('Navigate from splash page to sign up page 1', () => {
        navigateToSignupScene();
        shouldShowElementOnSignupScene();
    });

    it('Navigate from sign up page 1 to sign up page 2', () => {
        clearTextInputSignupScene();
        fillFieldOnSignupScene(SignUpData.DATA2.name, SignUpData.DATA2.phone);
        click(SignUpPageElement.SignUpSceneButtonNext);
        shouldShowElementOnSignupStep2Scene();
    });

    it('Navigate from sign up page 2 to phone number verification options page', () => {
        clearTextInputSignupStep2Scene();
        fillFieldOnSignupStep2Scene(SignUpData.DATA2.email);
        click(SignUpPageElement.SignUpStep2SceneButtonSignUp);
        shouldShowElementOnPhoneNumberVerificationOptions(TEXT.ID.VerificationTitle);
    });

    it('Navigate from phone number verification options page to phone number verification page', () => {
        click(SignUpPageElement.PhoneNumberVerificationOptionsSceneButtonSms);
        shouldShowElementOnPhoneNumberVerification(TEXT.ID.VerificationTitle);
        pause(DEFAULT_WAIT);
    });

    it('Navigate from phone number verification page to pin input page', () => {
        pause(DEFAULT_WAIT);
        inputOtp(SignUpData.DATA2.email);
    });

    it('Navigate from pin input page to confirmation pin input page', () => {
        shouldShowElement(SignUpPageElement.SetUpPinSceneTextTitle, DEFAULT_WAIT);
        inputPin(SignUpData.DATA2.pin);
        pause(DEFAULT_WAIT);
    });

    it('Navigate from confirmation pin input page to start using flip page', () => {
        shouldShowElement(SignUpPageElement.SetUpPinSceneTextTitle, DEFAULT_WAIT);
        inputPin(SignUpData.DATA2.pin);
        shouldShowElementOnSetUpPinScene(TEXT.ID.SuccessPin);
    });

    it('Navigate from start using flip page to complete personal data page', () => {
        click(SignUpPageElement.SetUpPinSceneButtonSucceedNewUserStartUsingFlip);
        expectText(SignUpPageElement.KycLandingSceneTextTitle, TEXT.ID.KycTitle, DEFAULT_WAIT);
    });

    it('Show confirmation close pop up', () => {
        click(SignUpPageElement.KycLandingSceneButtonNavbarClose);
    });

    it('Navigate to home page', () => {
        shouldShowElement(SignUpPageElement.KycLandingSceneButtonAcceptModalExit, DEFAULT_WAIT);
        click(SignUpPageElement.KycLandingSceneButtonAcceptModalExit);
        pause(DEFAULT_WAIT);
        if (isAndroid()) {
            expectText(
                SignUpPageElement.HomeContentSceneTextGreeting,
                `${TEXT.ID.Greeting} ${SignUpData.DATA2.name.split(' ').shift()}!`,
                DEFAULT_VERY_LONG_WAIT,
            );
        }
    });

    it('Redirect to profile account tab', () => {
        shouldShowElement(LoginPageElement.HomeSceneButtonTabAccount, DEFAULT_VERY_LONG_WAIT);
        retryElementClicks(
            LoginPageElement.HomeSceneButtonTabAccount,
            AccountPageElement.AccountSceneButtonUpdateAccountData,
        );
        shouldShowElement(AccountPageElement.AccountSceneButtonInviteFriend);
    });

    it('Redirect to referral page', () => {
        click(AccountPageElement.AccountSceneButtonInviteFriend);
        shouldShowElement(ReferralPageElement.askReferralCodeSection);
        click(ReferralPageElement.touchableUseReferralCode);
    });

    it('Fill section with referral code', () => {
        fillField(
            ReferralPageElement.textInputUseReferralCode,
            SignUpData.REFERRAL_DATA.code,
        );
        shortPause();
        click(ReferralPageElement.buttonUseReferralCode);
    });

    it('C52945 - Successfully use referral code', () => {
        shortPause();
        expectText(
            ReferralPageElement.textReferralCodeApplied,
            SignUpData.REFERRAL_DATA.code,
        );
        expectText(
            ReferralPageElement.textReferralNameApplied,
            `a.n ${SignUpData.REFERRAL_DATA.name}`,
        );
    });
});
