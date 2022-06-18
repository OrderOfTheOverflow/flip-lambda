import SignUpData from '../../../shared/data/user/sign-up.data';
import SignUpPageElement from '../../page-elements/sign-up.page';
import {click, DEFAULT_VERY_LONG_WAIT, DEFAULT_WAIT, expectText, pause, shouldShowElement,} from '../../../../helper';
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

describe('C52899 - Successfully Register using toggle language setting ID', () => {
    it('Handle Permission For New User', () => {
        pause(DEFAULT_WAIT);
        clickButtonAppTrackingTransparency();
    });

    it('Navigate from splash page into sign up page', () => {
        navigateToSignupScene();
        shouldShowElementOnSignupScene();
    });

    it('Navigate from sign up page to sign up step 2 page', () => {
        clearTextInputSignupScene();
        fillFieldOnSignupScene(SignUpData.DATA.name, SignUpData.DATA.phone);
        click(SignUpPageElement.SignUpSceneButtonNext);
        shouldShowElementOnSignupStep2Scene();
    });

    it('Navigate from sign up step 2 page to phone number verification options page', () => {
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

    it('Navigate from start using flip page to one more stage page', () => {
        pause(DEFAULT_WAIT);
        click(SignUpPageElement.SetUpPinSceneButtonSucceedNewUserStartUsingFlip);
        expectText(SignUpPageElement.KycLandingSceneTextTitle, TEXT.ID.KycTitle, DEFAULT_WAIT);
    });

    it('Show confirmation close pop up', () => {
        click(SignUpPageElement.KycLandingSceneButtonNavbarClose);
    });

    it('C52899 - Navigate to home page', () => {
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

describe('C52900 - Successfully Register using toggle language setting EN', () => {
    it('Handle Permission For New User', () => {
        pause(DEFAULT_WAIT);
        clickButtonAppTrackingTransparency();
    });

    it('Set toggle language to EN', () => {
        shouldShowElement(SignUpPageElement.SplashSceneButtonToggleLanguage, DEFAULT_WAIT);
        click(SignUpPageElement.SplashSceneButtonToggleLanguage);
    });

    it('Navigate from splash page into sign up page', () => {
        navigateToSignupScene();
        shouldShowElementOnSignupScene();
    });

    it('Navigate from sign up page to sign up step 2 page', () => {
        clearTextInputSignupScene();
        fillFieldOnSignupScene(SignUpData.DATA2.name, SignUpData.DATA2.phone);
        click(SignUpPageElement.SignUpSceneButtonNext);
        shouldShowElementOnSignupStep2Scene();
    });

    it('Navigate from sign up step 2 page to phone number verification options page', () => {
        clearTextInputSignupStep2Scene();
        fillFieldOnSignupStep2Scene(SignUpData.DATA2.email);
        click(SignUpPageElement.SignUpStep2SceneButtonSignUp);
        shouldShowElementOnPhoneNumberVerificationOptions(TEXT.EN.VerificationTitle);
    });

    it('Navigate from phone number verification options page to phone number verification page', () => {
        click(SignUpPageElement.PhoneNumberVerificationOptionsSceneButtonSms);
        shouldShowElementOnPhoneNumberVerification(TEXT.EN.VerificationTitle);
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
        shouldShowElementOnSetUpPinScene(TEXT.EN.SuccessPin);
    });

    it('Navigate from start using flip page to one more stage page', () => {
        pause(DEFAULT_WAIT);
        click(SignUpPageElement.SetUpPinSceneButtonSucceedNewUserStartUsingFlip);
        expectText(SignUpPageElement.KycLandingSceneTextTitle, TEXT.EN.KycTitle, DEFAULT_WAIT);
    });

    it('Show confirmation close pop up', () => {
        click(SignUpPageElement.KycLandingSceneButtonNavbarClose);
    });

    it('C52900 - Navigate to home page', () => {
        shouldShowElement(SignUpPageElement.KycLandingSceneButtonAcceptModalExit, DEFAULT_WAIT);
        click(SignUpPageElement.KycLandingSceneButtonAcceptModalExit);
        pause(DEFAULT_WAIT);
        expectText(
            SignUpPageElement.HomeContentSceneTextGreeting,
            `${TEXT.EN.Greeting} ${SignUpData.DATA2.name.split(' ').shift()}!`,
            DEFAULT_VERY_LONG_WAIT,
        );
    });
});
