import SignUpData from '../../../shared/data/user/sign-up.data';
import SignUpPageElement from '../../page-elements/sign-up.page';
import {
    click,
    DEFAULT_VERY_LONG_WAIT,
    DEFAULT_WAIT,
    expectText,
    fillField,
    pause,
    pressDoneOnIOSKeyboard,
    shouldShowElement,
} from '../../../../helper';
import {hideKeyboard, logout} from '../../helper';
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
import {SignUpSceneDropdownCountryCode} from '../../../shared/page-elements/sign-up.page';

const {TEXT} = require('../../data/constant/copywriting/register/text');

describe('C49808 - Successfully Register using Indonesian Phone Number', () => {
    it('Handle Permission For New User', () => {
        pause(DEFAULT_WAIT);
        clickButtonAppTrackingTransparency();
    });

    it('Navigate to sign up page', () => {
        navigateToSignupScene();
        shouldShowElementOnSignupScene();
    });

    it('Input valid name and phone number then navigate to sign up step 2 page', () => {
        clearTextInputSignupScene();
        fillField(
            SignUpPageElement.SignUpSceneTextInputName,
            SignUpData.DATA_PREFIX_INDONESIAN.name,
        );
        click(SignUpSceneDropdownCountryCode);
        fillField(
            SignUpPageElement.SignUpSceneTextInputCountry,
            SignUpData.DATA_PREFIX_INDONESIAN.country,
        );
        hideKeyboard();
        click(`${SignUpPageElement.SignUpSceneSelectedCountry}-${SignUpData.DATA_PREFIX_INDONESIAN.country}`);
        fillField(
            SignUpPageElement.SignUpSceneTextInputPhoneNumber,
            SignUpData.DATA_PREFIX_INDONESIAN.phone,
        );
        pressDoneOnIOSKeyboard();
        pause();
        click(SignUpPageElement.SignUpSceneButtonNext);
    });

    it('Input valid email and password then navigate to phone number verification options page', () => {
        shouldShowElementOnSignupStep2Scene();
        clearTextInputSignupStep2Scene();
        fillField(
            SignUpPageElement.SignUpStep2SceneTextInputEmail,
            SignUpData.DATA_PREFIX_INDONESIAN.email,
        );
        fillField(
            SignUpPageElement.SignUpStep2SceneTextInputPassword,
            SignUpData.DATA_PREFIX_INDONESIAN.password,
        );
        hideKeyboard();
        click(SignUpPageElement.SignUpStep2SceneButtonSignUp);
        shouldShowElementOnPhoneNumberVerificationOptions(TEXT.ID.VerificationTitle);
    });

    it('Navigate to phone number verification page and input OTP', () => {
        click(SignUpPageElement.PhoneNumberVerificationOptionsSceneButtonSms);
        shouldShowElementOnPhoneNumberVerification(TEXT.ID.VerificationTitle);
        pause(DEFAULT_WAIT);
        inputOtp(SignUpData.DATA_PREFIX_INDONESIAN.email);
    });

    it('Navigate to setup pin input page', () => {
        shouldShowElement(SignUpPageElement.SetUpPinSceneTextTitle, DEFAULT_WAIT);
        inputPin(SignUpData.DATA_PREFIX_INDONESIAN.pin);
        pause(DEFAULT_WAIT);
    });

    it('Navigate to confirmation pin input page then navigate to start using flip page', () => {
        shouldShowElement(SignUpPageElement.SetUpPinSceneTextTitle, DEFAULT_WAIT);
        pause(DEFAULT_WAIT);
        inputPin(SignUpData.DATA_PREFIX_INDONESIAN.pin);
        shouldShowElementOnSetUpPinScene(TEXT.ID.SuccessPin);
    });

    it('Navigate to lengkapi data diri page', () => {
        click(SignUpPageElement.SetUpPinSceneButtonSucceedNewUserStartUsingFlip);
        expectText(SignUpPageElement.KycLandingSceneTextTitle, TEXT.ID.KycTitle, DEFAULT_WAIT);
    });

    it('Show confirmation close pop up', () => {
        click(SignUpPageElement.KycLandingSceneButtonNavbarClose);
        pause(DEFAULT_WAIT);
    });

    it('C49808 - Navigate to home page', () => {
        shouldShowElement(SignUpPageElement.KycLandingSceneButtonAcceptModalExit, DEFAULT_WAIT);
        click(SignUpPageElement.KycLandingSceneButtonAcceptModalExit);
        pause(DEFAULT_WAIT);
        expectText(
            SignUpPageElement.HomeContentSceneTextGreeting,
            `${TEXT.ID.Greeting} ${SignUpData.DATA_PREFIX_INDONESIAN.name.split(' ').shift()}!`,
            DEFAULT_VERY_LONG_WAIT,
        );
    });

    afterAll(() => {
        logout();
    });
});

describe('C55629 - Successfully Register using Non Indonesian Phone Number', () => {
    it('Handle Permission For New User', () => {
        pause(DEFAULT_WAIT);
        clickButtonAppTrackingTransparency();
    });

    it('Navigate to sign up page', () => {
        navigateToSignupScene();
        shouldShowElementOnSignupScene();
    });

    it('Input valid name and phone number then navigate to sign up step 2 page', () => {
        clearTextInputSignupScene();
        fillField(
            SignUpPageElement.SignUpSceneTextInputName,
            SignUpData.DATA_PREFIX_NON_INDONESIAN.name,
        );
        click(SignUpSceneDropdownCountryCode);
        fillField(
            SignUpPageElement.SignUpSceneTextInputCountry,
            SignUpData.DATA_PREFIX_NON_INDONESIAN.country,
        );
        hideKeyboard();
        click(`${SignUpPageElement.SignUpSceneSelectedCountry}-${SignUpData.DATA_PREFIX_NON_INDONESIAN.country}`);
        fillField(
            SignUpPageElement.SignUpSceneTextInputPhoneNumber,
            SignUpData.DATA_PREFIX_NON_INDONESIAN.phone,
        );
        pressDoneOnIOSKeyboard();
        pause(DEFAULT_WAIT);
        click(SignUpPageElement.SignUpSceneButtonNext);
    });

    it('Input valid email and password then navigate to phone number verification page', () => {
        shouldShowElementOnSignupStep2Scene();
        clearTextInputSignupStep2Scene();
        fillField(
            SignUpPageElement.SignUpStep2SceneTextInputEmail,
            SignUpData.DATA_PREFIX_NON_INDONESIAN.email,
        );
        fillField(
            SignUpPageElement.SignUpStep2SceneTextInputPassword,
            SignUpData.DATA_PREFIX_NON_INDONESIAN.password,
        );
        hideKeyboard();
        click(SignUpPageElement.SignUpStep2SceneButtonSignUp);
    });

    it('Navigate to phone number verification page and input OTP', () => {
        shouldShowElementOnPhoneNumberVerification(TEXT.ID.VerificationTitle);
        inputOtp(SignUpData.DATA_PREFIX_NON_INDONESIAN.email);
        pause(DEFAULT_WAIT);
    });

    it('Navigate to setup pin input page', () => {
        shouldShowElement(SignUpPageElement.SetUpPinSceneTextTitle, DEFAULT_WAIT);
        inputPin(SignUpData.DATA_PREFIX_NON_INDONESIAN.pin);
        pause(DEFAULT_WAIT);
    });

    it('Navigate to confirmation pin input page then navigate to start using flip page', () => {
        shouldShowElement(SignUpPageElement.SetUpPinSceneTextTitle, DEFAULT_WAIT);
        pause(DEFAULT_WAIT);
        inputPin(SignUpData.DATA_PREFIX_NON_INDONESIAN.pin);
        shouldShowElementOnSetUpPinScene(TEXT.ID.SuccessPin);
    });

    it('Navigate to lengkapi data diri page', () => {
        click(SignUpPageElement.SetUpPinSceneButtonSucceedNewUserStartUsingFlip);
        expectText(SignUpPageElement.KycLandingSceneTextTitle, TEXT.ID.KycTitle, DEFAULT_WAIT);
    });

    it('Show confirmation close pop up', () => {
        click(SignUpPageElement.KycLandingSceneButtonNavbarClose);
        pause(DEFAULT_WAIT);
    });

    it('C55629 - Navigate to home page', () => {
        shouldShowElement(SignUpPageElement.KycLandingSceneButtonAcceptModalExit, DEFAULT_WAIT);
        click(SignUpPageElement.KycLandingSceneButtonAcceptModalExit);
        pause(DEFAULT_WAIT);
        expectText(
            SignUpPageElement.HomeContentSceneTextGreeting,
            `${TEXT.ID.Greeting} ${SignUpData.DATA_PREFIX_NON_INDONESIAN.name.split(' ').shift()}!`,
            DEFAULT_VERY_LONG_WAIT,
        );
    });

    afterAll(() => {
        logout();
    });
});

describe('C55630 - Successfully Register using Password contains uppercase and lowercase alphabet', () => {
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

    it('C55630 - Navigate to home page', () => {
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

describe('C55669 - Successfully Register using Password contains uppercase and lowercase alphanumeric', () => {
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
        fillFieldOnSignupScene(SignUpData.DATA2.name, SignUpData.DATA2.phone);
        click(SignUpPageElement.SignUpSceneButtonNext);
        shouldShowElementOnSignupStep2Scene();
    });

    it('Navigate from sign up step 2 page to phone number verification options page', () => {
        clearTextInputSignupStep2Scene();
        fillFieldOnSignupStep2Scene(SignUpData.DATA2.email, true);
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

    it('Navigate from start using flip page to one more stage page', () => {
        pause(DEFAULT_WAIT);
        click(SignUpPageElement.SetUpPinSceneButtonSucceedNewUserStartUsingFlip);
        expectText(SignUpPageElement.KycLandingSceneTextTitle, TEXT.ID.KycTitle, DEFAULT_WAIT);
    });

    it('Show confirmation close pop up', () => {
        click(SignUpPageElement.KycLandingSceneButtonNavbarClose);
    });

    it('C55669 - Navigate to home page', () => {
        shouldShowElement(SignUpPageElement.KycLandingSceneButtonAcceptModalExit, DEFAULT_WAIT);
        click(SignUpPageElement.KycLandingSceneButtonAcceptModalExit);
        pause(DEFAULT_WAIT);
        expectText(
            SignUpPageElement.HomeContentSceneTextGreeting,
            `${TEXT.ID.Greeting} ${SignUpData.DATA2.name.split(' ').shift()}!`,
            DEFAULT_VERY_LONG_WAIT,
        );
    });
});
