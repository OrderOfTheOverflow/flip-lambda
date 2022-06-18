const platform = {};

platform.ios = {
    TextTitle: 'NAVIGATION-TEXT_HEADER_TITLE',
    ReferralCode: 'REFERRAL_SCENE-TEXT-REFERRAL_CODE',
    InviteFriendButton: 'REFERRAL_SCENE-BUTTON-INVITE_FRIENDS',
    BackButton: 'NAVIGATION-BUTTON-BACK_LEFT',
};

platform.android = {
    TextTitle: 'NAVIGATION-TEXT_HEADER_TITLE',
    ReferralCode: 'REFERRAL_SCENE-TEXT-REFERRAL_CODE',
    InviteFriendButton: 'REFERRAL_SCENE-BUTTON-INVITE_FRIENDS',
    BackButton: 'NAVIGATION-BUTTON-BACK_LEFT',
};

const locators = driver.isIOS == true ? platform.ios : platform.android;
module.exports = locators;