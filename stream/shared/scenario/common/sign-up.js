import {hideKeyboard} from '../../../capt/helper';
import {
    clearTextField,
    clearTextPasswordField,
    expectText,
    pause,
    pressDoneOnKeyboard,
    shouldShowElement
} from '../../../../helper';
import {inputOtp} from './login';

const PageElement = require('../../../capt/page-elements/sign-up.page');
const {
    click,
    fillField,
    shouldBeDefined,
    waitUntil,
    shortPause,
    DEFAULT_WAIT,
    DEFAULT_LONG_WAIT
} = require('../../../../helper');
const SignUpData = require('../../data/user/sign-up.data');

export function navigateToSignupScene() {
    waitUntil(PageElement.SplashSceneButtonSignUp, DEFAULT_LONG_WAIT);
    click(PageElement.SplashSceneButtonSignUp);
}

export function signup(name, email, password, phoneNumber) {
    fillField(PageElement.SignUpSceneTextInputName, name);
    fillField(PageElement.SignUpSceneTextInputEmail, email);
    fillField(PageElement.SignUpSceneTextInputPassword, password);
    fillField(PageElement.SignUpSceneTextInputPhoneNumber, phoneNumber);
    click(PageElement.SignUpSceneButtonSignUp);
    shouldBeDefined(PageElement.PhoneNumberVerificationSceneKeyboardView);
}

export function inputSignUpData(name, phone, email, password) {
    // Sign Up Page 1 V2
    clearTextSignUpPage1();
    fillField(
        PageElement.SignUpSceneTextInputName,
        name
    );
    hideKeyboard();
    fillField(
        PageElement.SignUpSceneTextInputPhoneNumber,
        phone
    );
    pause();
    click(PageElement.SignUpSceneButtonNext);

    // Sign Up Page 2 V2
    clearTextSignUpPage2();
    fillField(
        PageElement.SignUpSceneTextInputEmail,
        email
    );
    hideKeyboard();
    fillField(
        PageElement.SignUpSceneTextInputPassword,
        password
    );
}

export function clearTextSignUpPage1() {
    clearTextField(PageElement.SignUpSceneTextInputName);
    clearTextField(PageElement.SignUpSceneTextInputPhoneNumber);
}

export function clearTextSignUpPage2() {
    clearTextField(PageElement.SignUpSceneTextInputEmail);
    clearTextPasswordField(PageElement.SignUpSceneTextInputPassword);
}

export function backToPreviousPage() {
    shortPause();
    waitUntil(PageElement.NavigationButtonBackLeft);
    click(PageElement.NavigationButtonBackLeft);
}

export function inputNewPin() {
    let newPin = SignUpData.VALID_SIGN_UP_DATA.pin.split('');
    newPin.forEach((number) => {
        click(
            `${PageElement.PhoneNumberVerificationSceneKeyboardView}-${number}`
        );
    });
    shortPause();
}

export function signUpWithValidData(skipKYC = false) {
    inputSignUpData(
        SignUpData.VALID_SIGN_UP_DATA.name,
        SignUpData.VALID_SIGN_UP_DATA.phone,
        SignUpData.VALID_SIGN_UP_DATA.email,
        SignUpData.VALID_SIGN_UP_DATA.password
    );
    click(PageElement.SignUpSceneButtonSignUp);

    // Input OTP Process
    // via SMS
    pause();
    waitUntil(PageElement.PhoneNumberVerificationOptionsSceneButtonSms);
    click(PageElement.PhoneNumberVerificationOptionsSceneButtonSms);
    waitUntil(PageElement.OtpSceneTextInputOtp);
    shouldShowElement(PageElement.OtpSceneTextInputOtp);
    inputOtp(SignUpData.VALID_SIGN_UP_DATA.email);

    // Create New PIN
    inputNewPin();

    // Confirmation PIN
    inputNewPin();

    click(PageElement.ButtonStartUseFlip);
    if (skipKYC) {
        waitUntil(PageElement.NavigationButtonClose);

        click(PageElement.NavigationButtonClose);
        click(PageElement.PopUpPersonalDataButtonExit);
    }
}

export function clearTextInputSignupScene() {
    clearTextField(PageElement.SignUpSceneTextInputName);
    clearTextField(PageElement.SignUpSceneTextInputPhoneNumber);
}

export function clearTextInputSignupStep2Scene() {
    clearTextField(PageElement.SignUpStep2SceneTextInputEmail);
    clearTextPasswordField(PageElement.SignUpStep2SceneTextInputPassword);
}

export function fillFieldOnSignupScene(name, phone) {
    fillField(
        PageElement.SignUpSceneTextInputName,
        name,
    );
    fillField(
        PageElement.SignUpSceneTextInputPhoneNumber,
        phone,
    );
    pressDoneOnKeyboard();
}

export function shouldShowElementOnSignupScene() {
    shouldShowElement(PageElement.SignUpSceneButtonToggleLanguage, DEFAULT_WAIT);
    shouldShowElement(PageElement.SignUpSceneTextTitle);
}

export function fillFieldOnSignupStep2Scene(email, isPasswordAlphaNumeric,) {
    fillField(
        PageElement.SignUpStep2SceneTextInputEmail,
        email,
    );
    fillField(
        PageElement.SignUpStep2SceneTextInputPassword,
        isPasswordAlphaNumeric ? SignUpData.DATA.passwordAlphaNumeric : SignUpData.DATA.password,
    );
}

export function shouldShowElementOnSignupStep2Scene() {
    shouldShowElement(PageElement.SignUpStep2SceneButtonToggleLanguage, DEFAULT_WAIT);
    shouldShowElement(PageElement.SignUpStep2SceneButtonTextTermConditionAndPolicyPrivacy);
}

export function shouldShowElementOnPhoneNumberVerificationOptions(title) {
    waitUntil(PageElement.PhoneNumberVerificationOptionsSceneTextTitle);
    shouldShowElement(PageElement.PhoneNumberVerificationOptionsSceneButtonSms);
    shouldShowElement(PageElement.PhoneNumberVerificationOptionsSceneButtonWa);
    expectText(PageElement.PhoneNumberVerificationOptionsSceneTextTitle, title);
    shouldShowElement(PageElement.PhoneNumberVerificationOptionsSceneButton);
}

export function shouldShowElementOnPhoneNumberVerification(title) {
    expectText(PageElement.PhoneNumberVerificationSceneTextTitle, title, DEFAULT_WAIT);
    shouldShowElement(PageElement.PhoneNumberVerificationSceneTextCounter);
    shouldShowElement(PageElement.PhoneNumberVerificationSceneButton);
}

export function shouldShowElementOnSetUpPinScene(title) {
    expectText(PageElement.SetUpPinSceneTextTitleSucceedNewUser, title, DEFAULT_WAIT);
    shouldShowElement(PageElement.SetUpPinSceneImageSucceedNewUser);
    shouldShowElement(PageElement.SetUpPinSceneButtonSucceedNewUserStartUsingFlip);
}
