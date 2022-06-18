const platform = {};

platform.ios = {
    Webview: 'WEBVIEW_SCENE-TERMS_CONDITIONS',
};

platform.android = {
    Webview: 'WEBVIEW_SCENE-TERMS_CONDITIONS',
};

const locators = driver.isIOS == true ? platform.ios : platform.android;
module.exports = locators;