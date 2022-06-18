const platform = {};

platform.ios = {
    TextTitle: 'NAVIGATION-TEXT_HEADER_TITLE',
    InputPassword: 'CHANGE_PASSWORD_SCENE-TEXT-INPUT_OLD_PASSWORD',
    TextHeader: 'CHANGE_PASSWORD_SCENE-TEXT-HEADER_OLD_PASSWORD',
    NextButton: 'CHANGE_PASSWORD_SCENE-BUTTON-SUBMIT_OLD_PASSWORD',
    BackButton: 'NAVIGATION-BUTTON-BACK_LEFT',
};

platform.android = {
    TextTitle: 'NAVIGATION-TEXT_HEADER_TITLE',
    InputPassword: 'CHANGE_PASSWORD_SCENE-TEXT-INPUT_OLD_PASSWORD',
    TextHeader: 'CHANGE_PASSWORD_SCENE-TEXT-HEADER_OLD_PASSWORD',
    NextButton: 'CHANGE_PASSWORD_SCENE-BUTTON-SUBMIT_OLD_PASSWORD',
    BackButton: 'NAVIGATION-BUTTON-BACK_LEFT',
};

const locators = driver.isIOS == true ? platform.ios : platform.android;
module.exports = locators;