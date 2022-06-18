const SignUpData = require('../../../data/user/sign-up.data');
const PageElement = require('../../../page-elements/sign-up.page');
const PageElementSignUp = require('../../../../shared/page-elements/sign-up.page');
const PageElementOnboarding = require('../../../../shared/page-elements/onboarding.page');

const {
    click,
    shouldBeDefined,
    shouldShowElement, waitUntil, pause, fillField,
} = require('../../../../../helper');

const {
    clearTextSignUpPage1,
    inputSignUpData,
    signUpWithValidData,
    backToPreviousPage
} = require('../../../../shared/scenario/common/sign-up');
const {hideKeyboard} = require('../../../helper');


describe('Sign up flow', () => {
    it('Navigate from splash scene into sign up scene', () => {
        pause(5000);
        waitUntil(PageElementOnboarding.SplashSceneButtonSignUp);
        click(PageElementOnboarding.SplashSceneButtonSignUp);
        shouldBeDefined(PageElementSignUp.SignUpSceneTextInputName);
    });

    it('Negative case sign up existing phone number', () => {
        // Sign Up Page 1
        clearTextSignUpPage1();
        fillField(
            PageElementSignUp.SignUpSceneTextInputName,
            SignUpData.VALID_SIGN_UP_DATA.name
        );
        hideKeyboard();
        fillField(
            PageElementSignUp.SignUpSceneTextInputPhoneNumber,
            SignUpData.EXISTING_PHONE_DATA.phone
        );
        click(PageElementSignUp.SignUpSceneButtonNext);
        waitUntil(PageElementSignUp.SignUpSceneTextErrorInputPhoneNumber);
        shouldShowElement(PageElementSignUp.SignUpSceneTextErrorInputPhoneNumber);
    });

    it('Negative case sign up password character less than 8', () => {
        inputSignUpData(
            SignUpData.VALID_SIGN_UP_DATA.name,
            SignUpData.VALID_SIGN_UP_DATA.phone,
            SignUpData.VALID_SIGN_UP_DATA.email,
            SignUpData.PASSWORD_MINIMUM_DATA.password
        );
        click(PageElementSignUp.SignUpStep2SceneButtonSignUp);
        waitUntil(PageElement.SignUpSceneIconPasswordTooShort);
        shouldShowElement(PageElement.SignUpSceneIconPasswordTooShort);
        shouldShowElement(PageElementSignUp.SignUpStep2SceneButtonHelp);
        backToPreviousPage();
    });

    it('Positive case until isi data diri', () => {
        signUpWithValidData();
    });
});
