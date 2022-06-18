const platform = {};

platform.ios = {
    ButtonTabHome: 'HOME_SCENE-BUTTON-TAB_HOME',
    ButtonTabTransaction: 'HOME_SCENE-BUTTON-TAB_TRANSACTION',
    ButtonTabHelp: 'HOME_SCENE-BUTTON-TAB_HELP',
    ButtonTabAccount: 'HOME_SCENE-BUTTON-TAB_ACCOUNT',
    ButtonTransfer: 'HOME_SCENE-BUTTON-SEND_MONEY',
    ButtonInviteFriend: 'HOME_CONTENT_SCENE-BUTTON-INVITE_FRIENDS',
    ButtonRatingLike: 'HOME_CONTENT_SCENE-BUTTON-RATING_LIKE',
    ButtonRatingDislike: 'HOME_CONTENT_SCENE-BUTTON-RATING_DISLIKE',
    ButtonFlipGlobe: 'HOME_CONTENT_SCENE-ICON-MENU-0',
    ButtonPulsa: 'HOME_CONTENT_SCENE-ICON-MENU-1',
    ButtonElectric: 'HOME_CONTENT_SCENE-ICON-MENU-2',
    ButtonData: 'HOME_CONTENT_SCENE-ICON-MENU-3',
    ButtonMore: 'HOME_CONTENT_SCENE-ICON-MENU-4',
    ButtonTopUpBalance: 'HOME_CONTENT_SCENE-BUTTON-TOP_UP',
    ButtonTransferSaldoClose: 'EMONEY_ACTIVATION_TOOLTIP-BUTTON-CLOSE',
    TextEmptyTransaction: 'HOME_CONTENT_SCENE-TEXT-EMPTY_TRANSACTION',
    TextGreeting: 'HOME_CONTENT_SCENE-TEXT-GREETING',
    TextTotalSaving: 'HOME_CONTENT_SCENE-TEXT-TOTAL_SAVING',
    EmoneyActivationSuccessButtonClose: 'EMONEY_ACTIVATION_SUCCESS-BTN-CLOSE',
};

platform.android = {
    ButtonTabHome: 'HOME_SCENE-BUTTON-TAB_HOME',
    ButtonTabTransaction: 'HOME_SCENE-BUTTON-TAB_TRANSACTION',
    ButtonTabHelp: 'HOME_SCENE-BUTTON-TAB_HELP',
    ButtonTabAccount: 'HOME_SCENE-BUTTON-TAB_ACCOUNT',
    ButtonTransfer: 'HOME_SCENE-BUTTON-SEND_MONEY',
    ButtonInviteFriend: 'HOME_CONTENT_SCENE-BUTTON-INVITE_FRIENDS',
    ButtonRatingLike: 'HOME_CONTENT_SCENE-BUTTON-RATING_LIKE',
    ButtonRatingDislike: 'HOME_CONTENT_SCENE-BUTTON-RATING_DISLIKE',
    ButtonFlipGlobe: 'HOME_CONTENT_SCENE-ICON-MENU-0',
    ButtonPulsa: 'HOME_CONTENT_SCENE-ICON-MENU-1',
    ButtonElectric: 'HOME_CONTENT_SCENE-ICON-MENU-2',
    ButtonData: 'HOME_CONTENT_SCENE-ICON-MENU-3',
    ButtonMore: 'HOME_CONTENT_SCENE-ICON-MENU-4',
    ButtonTopUpBalance: 'HOME_CONTENT_SCENE-BUTTON-TOP_UP',
    ButtonTransferSaldoClose: 'EMONEY_ACTIVATION_TOOLTIP-BUTTON-CLOSE',
    TextEmptyTransaction: 'HOME_CONTENT_SCENE-TEXT-EMPTY_TRANSACTION',
    TextGreeting: 'HOME_CONTENT_SCENE-TEXT-GREETING',
    TextTotalSaving: 'HOME_CONTENT_SCENE-TEXT-TOTAL_SAVING',
    EmoneyActivationSuccessButtonClose: 'EMONEY_ACTIVATION_SUCCESS-BTN-CLOSE',
};

const locators = driver.isIOS ? platform.ios : platform.android;
module.exports = locators;
