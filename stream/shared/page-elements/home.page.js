const {isAndroid} = require('../../../helper');
const HomeContentScene = 'HOME_CONTENT_SCENE';
const MoreContentPopUp = 'HOME_SCENE-TOUCHABLE-BOTTOM_MENU';

module.exports = {
    HomeSceneTouchableTabHome: 'HOME_SCENE-BUTTON-TAB_HOME',
    HomeSceneTouchableTabTransaction: 'HOME_SCENE-BUTTON-TAB_TRANSACTION',
    HomeSceneTouchableTabHelp: 'HOME_SCENE-BUTTON-TAB_HELP',
    HomeSceneTouchableTabAccount: 'HOME_SCENE-BUTTON-TAB_ACCOUNT',
    HomeContentSceneButtonInviteFriend:
        'HOME_CONTENT_SCENE-BUTTON-INVITE_FRIENDS',
    HomeContentSceneButtonRatingLike: 'HOME_CONTENT_SCENE-BUTTON-RATING_LIKE',
    HomeContentSceneButtonRatingDislike:
        'HOME_CONTENT_SCENE-BUTTON-RATING_DISLIKE',
    HomeContentSceneImageEmoney: 'HOME_CONTENT_SCENE-IMAGE-EMONEY',
    HomeContentSceneTextBalance: 'HOME_CONTENT_SCENE-TEXT-BALANCE',
    HomeSceneTouchableFlipCoin: isAndroid() ?
        'HOME_SCENE-TOUCHABLE-FLIP_COIN' :
        '**/XCUIElementTypeOther[`label == "HOME_SCENE-TOUCHABLE-FLIP_COIN"`][4]',
    HomeSceneTextWhatIsFlipCoin: 'HOME_SCENE-TEXT-WHAT_IS_FLIP_COIN',
    HomeSceneTouchableUnderstandFlipCoin: 'HOME_SCENE-TOUCHABLE_UNDERSTAND-FLIP-COIN',
    HomeContentSceneTextEmptyTransaction:
        'HOME_CONTENT_SCENE-TEXT-EMPTY_TRANSACTION',
    HomeContentSceneTextGreeting: 'HOME_CONTENT_SCENE-TEXT-GREETING',
    HomeContentSceneTextTotalSaving: 'HOME_CONTENT_SCENE-TEXT-TOTAL_SAVING',
    HomeSceneButtonFlipGlobe: 'HOME_CONTENT_SCENE-ICON-MENU-0',
    HomeSceneButtonPulsa: 'HOME_CONTENT_SCENE-ICON-MENU-1',
    HomeSceneButtonElectric: 'HOME_CONTENT_SCENE-ICON-MENU-2',
    HomeSceneButtonData: 'HOME_CONTENT_SCENE-ICON-MENU-3',
    HomeSceneButtonMore: 'HOME_CONTENT_SCENE-ICON-MENU-4',
    HomeSceneButtonTopUpBalance: 'HOME_CONTENT_SCENE-BUTTON-TOP_UP',
    HomeSceneButtonTransfer: 'HOME_SCENE-BUTTON-SEND_MONEY',
    HomeSceneTransactionItem: 'TRANSACTION_CARD-ITEM',
    EmoneyActivationSuccessButtonClose: 'EMONEY_ACTIVATION_SUCCESS-BTN-CLOSE',
    EmoneyActivationTooltipButtonClose:
        'EMONEY_ACTIVATION_TOOLTIP-BUTTON-CLOSE',
    HomeContentSceneTouchableVerificationProgressBox: `${HomeContentScene}-TOUCHABLE-VERIFICATION_PROGRESS_BOX`,
    TextLimitBox: `${HomeContentScene}-TEXT-LIMIT_BOX`,
    MorePopUpButtonData: `${MoreContentPopUp}-data`,
    MorePopUpButtonPulsa: `${MoreContentPopUp}-credit`,
    MorePopUpButtonElectricity: `${MoreContentPopUp}-token`,
    MorePopUpButtonGlobe: `${MoreContentPopUp}-globe`,
    MorePopUpButtonRefund: `${MoreContentPopUp}-refund`,
    MorePopUpButtonWithdrawalCoin: `${MoreContentPopUp}-withdrawal`
};
