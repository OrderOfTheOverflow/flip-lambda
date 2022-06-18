const platform = {};

platform.ios = {
    TextTitle: 'PROFILE_ACCOUNT_SCENE-TEXT-FIND_US',
    Instagram: 'PROFILE_ACCOUNT_SCENE-BUTTON-INSTAGRAM',
    Tiktok: 'PROFILE_ACCOUNT_SCENE-BUTTON-TIKTOK',
    Twitter: 'PROFILE_ACCOUNT_SCENE-BUTTON-TWITTER',
    Youtube: 'PROFILE_ACCOUNT_SCENE-BUTTON-YOUTUBE',
};

platform.android = {
    TextTitle: 'PROFILE_ACCOUNT_SCENE-TEXT-FIND_US',
    Instagram: 'PROFILE_ACCOUNT_SCENE-BUTTON-INSTAGRAM',
    Tiktok: 'PROFILE_ACCOUNT_SCENE-BUTTON-TIKTOK',
    Twitter: 'PROFILE_ACCOUNT_SCENE-BUTTON-TWITTER',
    Youtube: 'PROFILE_ACCOUNT_SCENE-BUTTON-YOUTUBE',
};

const locators = driver.isIOS == true ? platform.ios : platform.android;
module.exports = locators;