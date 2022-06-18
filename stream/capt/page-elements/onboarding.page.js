const platform = {};

platform.ios = {
    ButtonSignUp: 'SPLASH_SCENE-BUTTON-SIGN_UP',
    ButtonLogin: 'SPLASH_SCENE-BUTTON-LOGIN',
    ButtonToggleLanguage: 'SPLASH_SCENE-BUTTON-TOGGLE_LANGUAGE',
};

platform.android = {
    ButtonSignUp: 'SPLASH_SCENE-BUTTON-SIGN_UP',
    ButtonLogin: 'SPLASH_SCENE-BUTTON-LOGIN',
    ButtonToggleLanguage: 'SPLASH_SCENE-BUTTON-TOGGLE_LANGUAGE',
};

const locators = driver.isIOS ? platform.ios : platform.android;
module.exports = locators;
