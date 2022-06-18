const platform = {};

const SplashScene = 'SPLASH_SCENE';
const SignUpScene = 'SIGNUP_SCENE';
const SignUpStep2Scene = 'SIGNUP_STEP_2_SCENE';
const PhoneNumberVerificationScene = 'PHONE_NUMBER_VERIFICATION_SCENE';
const PhoneNumberVerificationOptionsScene =
    'PHONE_NUMBER_VERIFICATION_OPTIONS_SCENE';
const SetUpPinScene = 'SET_UP_PIN_SCENE';
const KycLandingScene = 'KYC_LANDING_SCENE';
const HomeContentScene = 'HOME_CONTENT_SCENE';
const FullIdentityFormModal = 'FULL_IDENTITY_FORM_MODAL';
const SelectCityModal = 'SELECT_CITY_MODAL';
const BirthdayModal = 'BIRTHDAY_MODAL';
const CountryModal = 'COUNTRY_MODAL';

platform.ios = {
    SplashSceneButtonSignUp: `${SplashScene}-BUTTON-SIGN_UP`,
    SplashSceneButtonToggleLanguage: `${SplashScene}-BUTTON-TOGGLE_LANGUAGE`,
    SignUpSceneButtonToggleLanguage: `${SignUpScene}-BUTTON-TOGGLE_LANGUAGE`,
    SignUpSceneTextTitle: `${SignUpScene}-TEXT-TITLE`,
    SignUpSceneTextInputName: `${SignUpScene}-TEXT_INPUT-FULL_NAME`,
    SignUpSceneTextInputPhoneNumber: `${SignUpScene}-TEXT_INPUT-PHONE_NUMBER`,
    SignUpSceneButtonNext: `${SignUpScene}-BUTTON-NEXT`,
    SignUpSceneTextReferralBox: `${SignUpScene}-TEXT-REFERRAL_BOX`,
    SignUpSceneTextInputCountry: `${CountryModal}-TEXT_INPUT-SEARCH`,
    SignUpSceneSelectedCountry: `${CountryModal}-SELECTED-COUNTRY`,
    SignUpStep2SceneButtonToggleLanguage: `${SignUpStep2Scene}-BUTTON-TOGGLE_LANGUAGE`,
    SignUpStep2SceneButtonTextTermConditionAndPolicyPrivacy:
        `${SignUpStep2Scene}-BUTTON-TEXT_TERM_CONDITION_AND_POLICY_PRIVACY`,
    SignUpStep2SceneTextInputEmail: `${SignUpStep2Scene}-TEXT_INPUT-EMAIL`,
    SignUpStep2SceneTextInputPassword: `${SignUpStep2Scene}-TEXT_INPUT-PASSWORD`,
    SignUpStep2SceneButtonSignUp: `${SignUpStep2Scene}-BUTTON-SIGNUP`,
    SignUpStep2SceneTextPasswordTooShort:
        '**/XCUIElementTypeStaticText[`label == " Setidaknya 8 karakter"`]',
    SignUpStep2SceneIconPasswordTooShort:
        '**/XCUIElementTypeOther[`label == " Setidaknya 8 karakter"`]/XCUIElementTypeOther',
    SignUpStep2SceneIconHelp: 'SIGNUP_STEP_2_SCENE-BUTTON-HELP',
    PhoneNumberVerificationOptionsSceneButtonSms:
        `${PhoneNumberVerificationOptionsScene}-BUTTON-VERIFICATION_OPTIONS_SMS`,
    PhoneNumberVerificationOptionsSceneButtonWa:
        `${PhoneNumberVerificationOptionsScene}-BUTTON-VERIFICATION_OPTIONS_WA`,
    PhoneNumberVerificationOptionsSceneTextTitle:
        `${PhoneNumberVerificationOptionsScene}-TEXT-TITLE`,
    PhoneNumberVerificationOptionsSceneButton: `${PhoneNumberVerificationOptionsScene}-BUTTON-CHANGE_PHONE_NUMBER`,
    PhoneNumberVerificationSceneTextTitle: `${PhoneNumberVerificationScene}-TEXT-TITLE`,
    PhoneNumberVerificationSceneTextCounter: `${PhoneNumberVerificationScene}-TEXT-COUNTER`,
    PhoneNumberVerificationSceneButton: `${PhoneNumberVerificationScene}-BUTTON-CHANGE_PHONE_NUMBER`,
    SetUpPinSceneTextTitle: `${SetUpPinScene}-TEXT-TITLE`,
    SetUpPinSceneTextTitleSucceedNewUser: `${SetUpPinScene}-TEXT-TITLE_SUCCEED_NEW_USER`,
    SetUpPinSceneImageSucceedNewUser: `${SetUpPinScene}-IMAGE-SUCCEED_NEW_USER`,
    SetUpPinSceneButtonSucceedNewUserStartUsingFlip: `${SetUpPinScene}-BUTTON-SUCCEED_NEW_USER_START_USING_FLIP`,
    KycLandingSceneTextTitle: `${KycLandingScene}-TEXT-TITLE`,
    KycLandingSceneButtonNavbarClose:
        '**/XCUIElementTypeOther[`label == "KYC_LANDING_SCENE-BUTTON-NAVBAR_CLOSE"`][2]',
    KycLandingSceneButtonAcceptModalExit: `${KycLandingScene}-BUTTON-ACCEPT_MODAL_EXIT`,
    HomeContentSceneTextGreeting: `${HomeContentScene}-TEXT-GREETING`,
    PhoneNumberVerificationSceneKeyboardView: 'INPUT_VIEW-KEYBOARD_VIEW',
    OtpSceneTextInputOtp:
        '**/XCUIElementTypeStaticText[`label == "Masukkan kode OTP"`]',
    OtpSceneInputOtp: '//XCUIElementTypeOther[1]/XCUIElementTypeOther',
    ButtonStartUseFlip:
        '**/XCUIElementTypeOther[`label == "Mulai pakai Flip"`]',
    FullIdentityFormModalTextInputName: `${FullIdentityFormModal}-TEXT_INPUT-NAME`,
    FullIdentityFormModalPickerJob: `${FullIdentityFormModal}-PICKER-JOB`,
    FullIdentityFormModalFormBirthday: `${FullIdentityFormModal}-FORM-BIRTHDAY`,
    FullIdentityFormModalPickerBirthday: `${FullIdentityFormModal}-PICKER-BIRTHDAY`,
    FullIdentityFormModalFormDomicile: `${FullIdentityFormModal}-FORM-DOMICILE`,
    FullIdentityFormModalTextInputAddress: `${FullIdentityFormModal}-TEXT_INPUT-ADDRESS`,
    FullIdentityFormModalButtonSave: `${FullIdentityFormModal}-BUTTON-SAVE`,
    SelectCityModalListCity: `${SelectCityModal}-LIST-CITY`,
    BirthdayModalTouchableCancel: `${BirthdayModal}-TOUCHABLE_CANCEL`,
    BirthdayModalTouchableSelect: `${BirthdayModal}-TOUCHABLE_SELECT`,
    NavigationButtonBackLeft: 'NAVIGATION-BUTTON-BACK_LEFT',
    NavigationButtonClose: 'KYC_LANDING_SCENE-BUTTON-NAVBAR_CLOSE',
    PopUpPersonalDataButtonExit: 'KYC_LANDING_SCENE-BUTTON-ACCEPT_MODAL_EXIT',
};

platform.android = {
    SplashSceneButtonSignUp: `${SplashScene}-BUTTON-SIGN_UP`,
    SplashSceneButtonToggleLanguage: `${SplashScene}-BUTTON-TOGGLE_LANGUAGE`,
    SignUpSceneButtonToggleLanguage: `${SignUpScene}-BUTTON-TOGGLE_LANGUAGE`,
    SignUpSceneTextTitle: `${SignUpScene}-TEXT-TITLE`,
    SignUpSceneTextInputName: `${SignUpScene}-TEXT_INPUT-FULL_NAME`,
    SignUpSceneTextInputPhoneNumber: `${SignUpScene}-TEXT_INPUT-PHONE_NUMBER`,
    SignUpSceneButtonNext: `${SignUpScene}-BUTTON-NEXT`,
    SignUpSceneTextReferralBox: `${SignUpScene}-TEXT-REFERRAL_BOX`,
    SignUpSceneTextInputCountry: `${CountryModal}-TEXT_INPUT-SEARCH`,
    SignUpSceneSelectedCountry: `${CountryModal}-SELECTED-COUNTRY`,
    SignUpStep2SceneButtonToggleLanguage: `${SignUpStep2Scene}-BUTTON-TOGGLE_LANGUAGE`,
    SignUpStep2SceneButtonTextTermConditionAndPolicyPrivacy:
        `${SignUpStep2Scene}-BUTTON-TEXT_TERM_CONDITION_AND_POLICY_PRIVACY`,
    SignUpStep2SceneTextInputEmail: `${SignUpStep2Scene}-TEXT_INPUT-EMAIL`,
    SignUpStep2SceneTextInputPassword: `${SignUpStep2Scene}-TEXT_INPUT-PASSWORD`,
    SignUpStep2SceneButtonSignUp: `${SignUpStep2Scene}-BUTTON-SIGNUP`,
    SignUpStep2SceneTextPasswordTooShort:
        '//android.view.ViewGroup[@content-desc="SIGNUP_STEP_2_SCENE-TEXT-ERROR_INPUT_PASSWORD"]/android.widget.TextView[2]',
    SignUpStep2SceneIconPasswordTooShort:
        '//android.view.ViewGroup[@content-desc="SIGNUP_STEP_2_SCENE-TEXT-ERROR_INPUT_PASSWORD"]/android.view.ViewGroup[1]',
    SignUpStep2SceneIconHelp: 'SIGNUP_STEP_2_SCENE-BUTTON-HELP',
    PhoneNumberVerificationOptionsSceneButtonSms:
        `${PhoneNumberVerificationOptionsScene}-BUTTON-VERIFICATION_OPTIONS_SMS`,
    PhoneNumberVerificationOptionsSceneButtonWa:
        `${PhoneNumberVerificationOptionsScene}-BUTTON-VERIFICATION_OPTIONS_WA`,
    PhoneNumberVerificationOptionsSceneTextTitle:
        `${PhoneNumberVerificationOptionsScene}-TEXT-TITLE`,
    PhoneNumberVerificationOptionsSceneButton: `${PhoneNumberVerificationOptionsScene}-BUTTON-CHANGE_PHONE_NUMBER`,
    PhoneNumberVerificationSceneTextTitle: `${PhoneNumberVerificationScene}-TEXT-TITLE`,
    PhoneNumberVerificationSceneTextCounter: `${PhoneNumberVerificationScene}-TEXT-COUNTER`,
    PhoneNumberVerificationSceneButton: `${PhoneNumberVerificationScene}-BUTTON-CHANGE_PHONE_NUMBER`,
    SetUpPinSceneTextTitle: `${SetUpPinScene}-TEXT-TITLE`,
    SetUpPinSceneTextTitleSucceedNewUser: `${SetUpPinScene}-TEXT-TITLE_SUCCEED_NEW_USER`,
    SetUpPinSceneImageSucceedNewUser: `${SetUpPinScene}-IMAGE-SUCCEED_NEW_USER`,
    SetUpPinSceneButtonSucceedNewUserStartUsingFlip: `${SetUpPinScene}-BUTTON-SUCCEED_NEW_USER_START_USING_FLIP`,
    KycLandingSceneTextTitle: `${KycLandingScene}-TEXT-TITLE`,
    KycLandingSceneButtonNavbarClose: `${KycLandingScene}-BUTTON-NAVBAR_CLOSE`,
    KycLandingSceneButtonAcceptModalExit: `${KycLandingScene}-BUTTON-ACCEPT_MODAL_EXIT`,
    HomeContentSceneTextGreeting: `${HomeContentScene}-TEXT-GREETING`,
    PhoneNumberVerificationSceneKeyboardView: 'INPUT_VIEW-KEYBOARD_VIEW',
    OtpSceneTextInputOtp: 'PHONE_NUMBER_VERIFICATION_SCENE-TEXT-TITLE',
    OtpSceneInputOtp: '//android.view.ViewGroup[4]/android.widget.EditText',
    ButtonStartUseFlip:
        'SET_UP_PIN_SCENE-BUTTON-SUCCEED_NEW_USER_START_USING_FLIP',
    FullIdentityFormModalTextInputName: `${FullIdentityFormModal}-TEXT_INPUT-NAME`,
    FullIdentityFormModalPickerJob: `${FullIdentityFormModal}-PICKER-JOB`,
    FullIdentityFormModalFormBirthday: `${FullIdentityFormModal}-FORM-BIRTHDAY`,
    FullIdentityFormModalPickerBirthday: `${FullIdentityFormModal}-PICKER-BIRTHDAY`,
    FullIdentityFormModalFormDomicile: `${FullIdentityFormModal}-FORM-DOMICILE`,
    FullIdentityFormModalTextInputAddress: `${FullIdentityFormModal}-TEXT_INPUT-ADDRESS`,
    FullIdentityFormModalButtonSave: `${FullIdentityFormModal}-BUTTON-SAVE`,
    SelectCityModalListCity: `${SelectCityModal}-LIST-CITY`,
    BirthdayModalTouchableCancel: `${BirthdayModal}-TOUCHABLE_CANCEL`,
    BirthdayModalTouchableSelect: `${BirthdayModal}-TOUCHABLE_SELECT`,
    NavigationButtonBackLeft: 'NAVIGATION-BUTTON-BACK_LEFT',
    NavigationButtonClose: 'KYC_LANDING_SCENE-BUTTON-NAVBAR_CLOSE',
    PopUpPersonalDataButtonExit: 'KYC_LANDING_SCENE-BUTTON-ACCEPT_MODAL_EXIT',
};

const locators = driver.isIOS == true ? platform.ios : platform.android;
module.exports = locators;
