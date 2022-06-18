const platform = {};

const LoginKey = 'LOGIN_SCENE';
const SplashKey = 'SPLASH_SCENE';
const HomeContentKey = 'HOME_CONTENT_SCENE';
const HomeKey = 'HOME_SCENE';
const AppTrackingTransparencySlider = 'APP_TRACKING_TRANSPARENCY_SLIDER';
const EmoneyActivationSuccess = 'EMONEY_ACTIVATION_SUCCESS';
const EmoneyActivationTooltip = 'EMONEY_ACTIVATION_TOOLTIP';
const InputPinAfterLoginScene = 'INPUT_PIN_AFTER_LOGIN_SCENE';
const ProfileAccountScene = 'PROFILE_ACCOUNT_SCENE';
const SetUpPinSLider = 'SET_UP_PIN_SLIDER';
const ReferralScene = 'REFERRAL_SCENE';

platform.ios = {
    AppTrackingTransparencySliderButtonNext: `${AppTrackingTransparencySlider}-BUTTON-NEXT`,
    LoginSceneToggleLanguage: `${LoginKey}-BUTTON-TOGGLE_LANGUAGE`,
    LoginSceneButtonHelp: `${LoginKey}-BUTTON-HELP`,
    LoginSceneImageFlipLogo: `${LoginKey}-IMAGE-FLIP_LOGO`,
    LoginSceneTextTitle: `${LoginKey}-TEXT-TITLE`,
    LoginSceneTextInputEmail: `${LoginKey}-TEXT_INPUT-EMAIL`,
    LoginSceneTextErrorInputEmail: `${LoginKey}-TEXT-ERROR_INPUT_EMAIL`,
    LoginSceneTextInputPassword: `${LoginKey}-TEXT_INPUT-PASSWORD`,
    LoginSceneTextErrorInputPassword: `${LoginKey}-TEXT-ERROR_INPUT_PASSWORD`,
    LoginSceneButtonForgotPassword: `${LoginKey}-BUTTON-FORGOT_PASSWORD`,
    LoginSceneButtonShowPassword: `${LoginKey}-BUTTON-SHOW_PASSWORD`,
    LoginSceneButtonHidePassword: `${LoginKey}-BUTTON-HIDE_PASSWORD`,
    LoginSceneButtonLogin: `${LoginKey}-BUTTON-LOGIN`,
    LoginSceneButtonTextSignUp: `${LoginKey}-BUTTON-TEXT_SIGNUP`,
    LoginSceneButtonGoToRegister: `${LoginKey}-BUTTON-GOTO-REGISTER`,
    LoginSceneButtonReSubmitLogin: `${LoginKey}-BUTTON-RE_SUBMIT_LOGIN`,
    LoginSceneButtonCloseModalExceeded: `${LoginKey}-BUTTON-CLOSE_MODAL_EXCEEDED`,
    InputPinAfterLoginSceneTextTitle: `${InputPinAfterLoginScene}-TEXT-TITLE`,
    InputPinAfterLoginSceneButtonForgotPin: `${InputPinAfterLoginScene}-BUTTON-FORGOT_PIN`,
    SplashSceneButtonToggleLanguage: `${SplashKey}-BUTTON-TOGGLE_LANGUAGE`,
    SplashSceneButtonSignUp: `${SplashKey}-BUTTON-SIGN_UP`,
    SplashSceneButtonLogin: `${SplashKey}-BUTTON-LOGIN`,
    PhoneNumberVerificationScene: 'PHONE_NUMBER_VERIFICATION_SCENE',
    PhoneNumberVerificationSceneKeyboardView: 'INPUT_VIEW-KEYBOARD_VIEW',
    EmoneyActivationSuccessButtonClose: `${EmoneyActivationSuccess}-BTN-CLOSE`,
    EmoneyActivationTooltipButtonClose: `${EmoneyActivationTooltip}-BUTTON-CLOSE`,
    HomeContentSceneTextGreeting: `${HomeContentKey}-TEXT-GREETING`,
    HomeSceneButtonTabHome: `${HomeKey}-BUTTON-TAB_HOME`,
    HomeSceneButtonTabAccount: `${HomeKey}-BUTTON-TAB_ACCOUNT`,
    HomeContentSceneIconMenu: `${HomeContentKey}-ICON-MENU`,
    HomeContentSceneButtonTopUp: `${HomeContentKey}-BUTTON-TOP_UP`,
    HomeContentSceneButtonInviteFriends: `${HomeContentKey}-BUTTON-INVITE_FRIENDS`,
    ProfileAccountSceneTextAccountVerification: `${ProfileAccountScene}-TEXT-ACCOUNT_VERIFICATION`,
    ProfileAccountSceneButtonVerificationEmail: `${ProfileAccountScene}-BUTTON-VERIFICATION_EMAIL`,
    SetupPinSliderTextTitle: `${SetUpPinSLider}-TEXT-TITLE`,
    SetupPinSliderButtonCreatePin: `${SetUpPinSLider}-BUTTON-CREATE_PIN`,
    ReferralSceneButtonInviteFriends: `${ReferralScene}-BUTTON-INVITE_FRIENDS`,
    OkButtonOnPopUpFalseOTP: 'PHONE_NUMBER_VERIFICATION_SCENE-BUTTON-_OTP_EXCEEDS_LIMIT',
    ContactFlipViaChat: 'PHONE_NUMBER_VERIFICATION_SCENE-BUTTON-CONTACT_FLIP_VIA_CHAT',
    ContactCS: 'PHONE_NUMBER_VERIFICATION_SCENE-BUTTON-CONTACT_FLIP_VIA_PHONE'
};

platform.android = {
    AppTrackingTransparencySliderButtonNext: `${AppTrackingTransparencySlider}-BUTTON-NEXT`,
    LoginSceneToggleLanguage: `${LoginKey}-BUTTON-TOGGLE_LANGUAGE`,
    LoginSceneButtonHelp: `${LoginKey}-BUTTON-HELP`,
    LoginSceneImageFlipLogo: `${LoginKey}-IMAGE-FLIP_LOGO`,
    LoginSceneTextTitle: `${LoginKey}-TEXT-TITLE`,
    LoginSceneTextInputEmail: `${LoginKey}-TEXT_INPUT-EMAIL`,
    LoginSceneTextErrorInputEmail: `${LoginKey}-TEXT-ERROR_INPUT_EMAIL`,
    LoginSceneTextInputPassword: `${LoginKey}-TEXT_INPUT-PASSWORD`,
    LoginSceneTextErrorInputPassword: `${LoginKey}-TEXT-ERROR_INPUT_PASSWORD`,
    LoginSceneButtonForgotPassword: `${LoginKey}-BUTTON-FORGOT_PASSWORD`,
    LoginSceneButtonShowPassword: `${LoginKey}-BUTTON-SHOW_PASSWORD`,
    LoginSceneButtonHidePassword: `${LoginKey}-BUTTON-HIDE_PASSWORD`,
    LoginSceneButtonLogin: `${LoginKey}-BUTTON-LOGIN`,
    LoginSceneButtonTextSignUp: `${LoginKey}-BUTTON-TEXT_SIGNUP`,
    LoginSceneButtonGoToRegister: `${LoginKey}-BUTTON-GOTO-REGISTER`,
    LoginSceneButtonReSubmitLogin: `${LoginKey}-BUTTON-RE_SUBMIT_LOGIN`,
    LoginSceneButtonCloseModalExceeded: `${LoginKey}-BUTTON-CLOSE_MODAL_EXCEEDED`,
    InputPinAfterLoginSceneTextTitle: `${InputPinAfterLoginScene}-TEXT-TITLE`,
    InputPinAfterLoginSceneButtonForgotPin: `${InputPinAfterLoginScene}-BUTTON-FORGOT_PIN`,
    SplashSceneButtonToggleLanguage: `${SplashKey}-BUTTON-TOGGLE_LANGUAGE`,
    SplashSceneButtonSignUp: `${SplashKey}-BUTTON-SIGN_UP`,
    SplashSceneButtonLogin: `${SplashKey}-BUTTON-LOGIN`,
    PhoneNumberVerificationScene: 'PHONE_NUMBER_VERIFICATION_SCENE',
    PhoneNumberVerificationSceneKeyboardView: 'INPUT_VIEW-KEYBOARD_VIEW',
    EmoneyActivationSuccessButtonClose: `${EmoneyActivationSuccess}-BTN-CLOSE`,
    EmoneyActivationTooltipButtonClose: `${EmoneyActivationTooltip}-BUTTON-CLOSE`,
    HomeContentSceneTextGreeting: `${HomeContentKey}-TEXT-GREETING`,
    HomeSceneButtonTabHome: `${HomeKey}-BUTTON-TAB_HOME`,
    HomeSceneButtonTabAccount: `${HomeKey}-BUTTON-TAB_ACCOUNT`,
    HomeContentSceneIconMenu: `${HomeContentKey}-ICON-MENU`,
    HomeContentSceneButtonTopUp: `${HomeContentKey}-BUTTON-TOP_UP`,
    HomeContentSceneButtonInviteFriends: `${HomeContentKey}-BUTTON-INVITE_FRIENDS`,
    ProfileAccountSceneTextAccountVerification: `${ProfileAccountScene}-TEXT-ACCOUNT_VERIFICATION`,
    ProfileAccountSceneButtonVerificationEmail: `${ProfileAccountScene}-BUTTON-VERIFICATION_EMAIL`,
    SetupPinSliderTextTitle: `${SetUpPinSLider}-TEXT-TITLE`,
    SetupPinSliderButtonCreatePin: `${SetUpPinSLider}-BUTTON-CREATE_PIN`,
    ReferralSceneButtonInviteFriends: `${ReferralScene}-BUTTON-INVITE_FRIENDS`,
    OkButtonOnPopUpFalseOTP: 'PHONE_NUMBER_VERIFICATION_SCENE-BUTTON-_OTP_EXCEEDS_LIMIT',
    ContactFlipViaChat: 'PHONE_NUMBER_VERIFICATION_SCENE-BUTTON-CONTACT_FLIP_VIA_CHAT',
    ContactCS: '*//android.view.ViewGroup[@content-desc="PHONE_NUMBER_VERIFICATION_SCENE-BUTTON-CONTACT_FLIP_VIA_PHONE"]/android.widget.TextView'
};

const locators = driver.isIOS == true ? platform.ios : platform.android;
module.exports = locators;
