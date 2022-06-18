const platform = {};

platform.ios = {
    Webview: 'WEBVIEW_SCENE-PRIVACY_POLICY',
};

platform.android = {
    Webview: 'WEBVIEW_SCENE-PRIVACY_POLICY',
};

const locators = driver.isIOS == true ? platform.ios : platform.android;
module.exports = locators;