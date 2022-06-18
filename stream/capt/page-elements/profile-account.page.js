const platform = {};

platform.ios = {
    AccountSceneButtonInviteFriend: 'PROFILE_ACCOUNT_SCENE-BUTTON-INVITE_FRIEND',
    AccountSceneButtonUpdateAccountData: 'PROFILE_ACCOUNT_SCENE-BUTTON-CONTACT_US',
    AccountSceneButtonChangeLanguage: 'PROFILE_ACCOUNT_SCENE-BUTTON-CHANGE_LANGUAGE',
    AccountSceneButtonChangePassword: 'PROFILE_ACCOUNT_SCENE-BUTTON-CHANGE_PASSWORD',
    AccountSceneButtonLogout: 'HOME_SCENE-TOUCHABLE-EXIT_APPS',
    PopUpConfirmLogoutConfirmationText: 'HOME_SCENE-TEXT-TITLE_CONFIRMATION_MODAL',
    PopUpConfirmButtonLogout: 'HOME_SCENE-TOUCHABLE-ACCEPT_EXIT_APPS',
    PopUpConfirmButtonCancel: 'HOME_SCENE-BUTTON-CANCEL_TEXT_APP',
    ButtonRateFlip: 'PROFILE_ACCOUNT_SCENE-BUTTON-RATE_US',
    ButtonBigFlip: 'PROFILE_ACCOUNT_SCENE-BUTTON-BIG_FLIP',
    ButtonTnC: 'PROFILE_ACCOUNT_SCENE-BUTTON-TNC',
    ButtonPrivacyPolicy: 'PROFILE_ACCOUNT_SCENE-BUTTON-PRIVACY_POLICY',
};

platform.android = {
    AccountSceneButtonInviteFriend: 'PROFILE_ACCOUNT_SCENE-BUTTON-INVITE_FRIEND',
    AccountSceneButtonUpdateAccountData: 'PROFILE_ACCOUNT_SCENE-BUTTON-CONTACT_US',
    AccountSceneButtonChangeLanguage: 'PROFILE_ACCOUNT_SCENE-BUTTON-CHANGE_LANGUAGE',
    AccountSceneButtonChangePassword: 'PROFILE_ACCOUNT_SCENE-BUTTON-CHANGE_PASSWORD',
    AccountSceneButtonLogout: 'HOME_SCENE-TOUCHABLE-EXIT_APPS',
    PopUpConfirmLogoutConfirmationText: 'HOME_SCENE-TEXT-TITLE_CONFIRMATION_MODAL',
    PopUpConfirmButtonLogout: 'HOME_SCENE-TOUCHABLE-ACCEPT_EXIT_APPS',
    PopUpConfirmButtonCancel: 'HOME_SCENE-BUTTON-CANCEL_TEXT_APP',
    ButtonRateFlip: 'PROFILE_ACCOUNT_SCENE-BUTTON-RATE_US',
    ButtonBigFlip: 'PROFILE_ACCOUNT_SCENE-BUTTON-BIG_FLIP',
    ButtonTnC: 'PROFILE_ACCOUNT_SCENE-BUTTON-TNC',
    ButtonPrivacyPolicy: 'PROFILE_ACCOUNT_SCENE-BUTTON-PRIVACY_POLICY',
};

const locators = driver.isIOS == true ? platform.ios : platform.android;
module.exports = locators;