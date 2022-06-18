const platform = {};

platform.ios = {
    Webview: 'WEBVIEW_SCENE-HELP_CENTER',
};

platform.android = {
    Webview: 'WEBVIEW_SCENE-HELP_CENTER',
};

const locators = driver.isIOS == true ? platform.ios : platform.android;
module.exports = locators;