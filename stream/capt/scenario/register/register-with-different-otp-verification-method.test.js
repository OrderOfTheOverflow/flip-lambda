import SignUpData from '../../../shared/data/user/sign-up.data';
import SignUpPageElement from '../../page-elements/sign-up.page';
import {
    click,
    DEFAULT_LONG_WAIT,
    DEFAULT_VERY_LONG_WAIT,
    DEFAULT_WAIT,
    expectText,
    pause,
    shouldShowElement,
} from '../../../../helper';
import {logout} from '../../helper';
import {clickButtonAppTrackingTransparency, inputOtp, inputPin,} from '../../../shared/scenario/common/login';
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

describe('C52901 - Successfully Register using OTP Send via SMS', () => {
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
        fillFieldOnSignupScene(SignUpData.DATA.name, SignUpData.DATA.phone);
        click(SignUpPageElement.SignUpSceneButtonNext);
        shouldShowElementOnSignupStep2Scene();
    });

    it('Navigate from sign up page 2 to phone number verification options page', () => {
        clearTextInputSignupStep2Scene();
        fillFieldOnSignupStep2Scene(SignUpData.DATA.email);
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

    it('C52901 - Navigate to home page', () => {
        shouldShowElement(SignUpPageElement.KycLandingSceneButtonAcceptModalExit, DEFAULT_WAIT);
        click(SignUpPageElement.KycLandingSceneButtonAcceptModalExit);
        pause(DEFAULT_WAIT);
        expectText(
            SignUpPageElement.HomeContentSceneTextGreeting,
            `${TEXT.ID.Greeting} ${SignUpData.DATA.name.split(' ').shift()}!`,
            DEFAULT_VERY_LONG_WAIT,
        );
    });

    afterAll(() => {
        logout();
    });
});

describe('C52902 - Successfully Register using OTP Send via Whatsapp', () => {
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
        click(SignUpPageElement.PhoneNumberVerificationOptionsSceneButtonWa);
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
        pause(DEFAULT_WAIT);
        click(SignUpPageElement.SetUpPinSceneButtonSucceedNewUserStartUsingFlip);
        expectText(SignUpPageElement.KycLandingSceneTextTitle, TEXT.ID.KycTitle, DEFAULT_WAIT);
    });

    it('Show confirmation close pop up', () => {
        click(SignUpPageElement.KycLandingSceneButtonNavbarClose);
    });

    it('C52902 - Navigate to home page', () => {
        shouldShowElement(SignUpPageElement.KycLandingSceneButtonAcceptModalExit, DEFAULT_WAIT);
        click(SignUpPageElement.KycLandingSceneButtonAcceptModalExit);
        pause(DEFAULT_WAIT);
        expectText(
            SignUpPageElement.HomeContentSceneTextGreeting,
            `${TEXT.ID.Greeting} ${SignUpData.DATA2.name.split(' ').shift()}!`,
            DEFAULT_VERY_LONG_WAIT,
        );
    });

    afterAll(() => {
        logout();
    });
});

describe('C52903 - Successfully Register using Auto choose default option (Send via SMS)', () => {
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
        fillFieldOnSignupScene(SignUpData.DATA3.name, SignUpData.DATA3.phone);
        click(SignUpPageElement.SignUpSceneButtonNext);
        shouldShowElementOnSignupStep2Scene();
    });

    it('Navigate from sign up page 2 to phone number verification options page', () => {
        clearTextInputSignupStep2Scene();
        fillFieldOnSignupStep2Scene(SignUpData.DATA3.email);
        click(SignUpPageElement.SignUpStep2SceneButtonSignUp);
        shouldShowElementOnPhoneNumberVerificationOptions(TEXT.ID.VerificationTitle);
    });

    it('Navigate to phone number verification page via default option', () => {
        pause(DEFAULT_LONG_WAIT);
        shouldShowElementOnPhoneNumberVerification(TEXT.ID.VerificationTitle);
    });

    it('Navigate from phone number verification page to pin input page', () => {
        pause(DEFAULT_WAIT);
        inputOtp(SignUpData.DATA3.email);
    });

    it('Navigate from pin input page to confirmation pin input page', () => {
        shouldShowElement(SignUpPageElement.SetUpPinSceneTextTitle, DEFAULT_WAIT);
        inputPin(SignUpData.DATA3.pin);
        pause(DEFAULT_WAIT);
    });

    it('Navigate from confirmation pin input page to start using flip page', () => {
        shouldShowElement(SignUpPageElement.SetUpPinSceneTextTitle, DEFAULT_WAIT);
        inputPin(SignUpData.DATA3.pin);
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

    it('C52903 - Navigate to home page', () => {
        shouldShowElement(SignUpPageElement.KycLandingSceneButtonAcceptModalExit, DEFAULT_WAIT);
        click(SignUpPageElement.KycLandingSceneButtonAcceptModalExit);
        pause(DEFAULT_WAIT);
        expectText(
            SignUpPageElement.HomeContentSceneTextGreeting,
            `${TEXT.ID.Greeting} ${SignUpData.DATA3.name.split(' ').shift()}!`,
            DEFAULT_VERY_LONG_WAIT,
        );
    });
});
