import {ACCESS_KEY} from '../config/constant.conf';
import {SNACKBAR_TEXT} from '../stream/shared/page-elements/toast.page';

const dotenv = require('dotenv');
dotenv.config();

const { Picker } = require('./picker');
const { Gestures } = require('./gestures');
const { TIME_SCALING, BUNDLE_ID } = require('../config/constant.conf');

export const DEFAULT_VERY_SHORT_WAIT = 2000 * TIME_SCALING;
export const DEFAULT_SHORT_WAIT = 4000 * TIME_SCALING;
export const DEFAULT_WAIT = 8000 * TIME_SCALING;
export const DEFAULT_LONG_WAIT = 15000 * TIME_SCALING;
export const DEFAULT_VERY_LONG_WAIT = 25000 * TIME_SCALING;
export const DEFAULT_SUPER_LONG_WAIT = 2 * DEFAULT_VERY_LONG_WAIT;
export const expectText = (
    accessibilityLabel,
    textMatcher,
    timeout = DEFAULT_SHORT_WAIT
) => {
    const selector = buildSelector(accessibilityLabel);
    $(selector).waitForDisplayed({ timeout });
    const status = $(selector).getText();
    if ((isIOS()) && (!selector.includes('**'))) {
        contain(status, accessibilityLabel.replace('~', ''));
    } else {
        contain(status, textMatcher);
    }
};

export const expectRunningText = (
    accessibilityLabel,
    textMatcher,
    timeout = DEFAULT_VERY_LONG_WAIT
) => {
    const selector = buildSelector(accessibilityLabel);
    if (timeout > 0) {
        $(selector).waitForDisplayed({ timeout });
    }
    const status = $(selector).getText();
    if (isIOS()) {
        contain(status, accessibilityLabel.replace('~', ''));
    } else {
        contain(status, textMatcher);
    }
};

export const click = (selector) => $(buildSelector(selector)).click();
export const doubleClick = (selector) => $(buildSelector(selector)).doubleClick();

export const longPress = (selector, ms = 100) => {
    $(buildSelector(selector)).touchAction([
        {action: 'longPress'},
        {action: 'wait', ms},
        {action: 'release'}
    ]);
};

export const fillField = (selector, value) =>
    $(buildSelector(selector)).setValue(value);

export const clearTextField = (label) => {
    let element = $(buildSelector(label));

    if ((isIOS()) && (!label.includes('**'))) {
        element = $(
            `-ios predicate string:type == 'XCUIElementTypeTextField' AND label == '${label}'`
        );
    }else{
        element.clearValue();
    }

};

export const expectValueTextField = (selector, value) =>
    expect($(buildSelector(selector))).toHaveText(value);

export const clearTextPasswordField = (label) => {
    let element = $(buildSelector(label));

    if (isIOS() && !label.includes('**')) {
        element = $(
            `-ios predicate string:type == 'XCUIElementTypeSecureTextField' AND label == '${label}'`,
        );
    } else {
        element.clearValue();
    }
};

export const expectNativeToast = (text) => {
    let element = $(`*//android.widget.Toast[@text="${text}"]`);

    if (isIOS()) {
        element = $(
            `-ios predicate string:type == 'XCUIElementTypeStaticText' AND value == '${text}'`,
        );
    }

    expect(element).toHaveText(text);
};

export const expectToast = (text) => {
    const snackbar = getText(SNACKBAR_TEXT);
    expect(snackbar).toEqual(text);
};

export const expectLabel = (text) => {
    let element = $(`*//android.widget.TextView[@text="${text}"]`);

    if (isIOS()) {
        element = $(
            `-ios predicate string:type == 'XCUIElementTypeStaticText' AND value == '${text}'`
        );
    }

    expect(element).toHaveText(text);
};

export const shouldBeDefined = (selector) =>
    expect($(buildSelector(selector))).toBeDefined();

export const shouldShowElement = (
    accessibilityLabel,
    timeout,
    shouldReturn,
) => {
    const selector = $(buildSelector(accessibilityLabel));
    return waitForExist(selector, timeout, shouldReturn);
};

export const shouldShowItemListElement = (selector, totalCard) => {
    for (let i = 0; i < totalCard; i++) {
        waitUntil(`${selector}-${i}`, DEFAULT_VERY_LONG_WAIT);
    }
};

export const waitForExist = (
    selector,
    timeout = DEFAULT_VERY_SHORT_WAIT,
    shouldReturn,
    option,
) => {
    try {
        return selector.waitForExist({
            timeout,
            ...option,
        });
    } catch (error) {
        const { message } = error;
        const elementNotFoundMessage = 'still not existing';
        if (shouldReturn && message.includes(elementNotFoundMessage)) {
            return false;
        }
        throw error;
    }
};

export const shouldNotShowElement = (accessibilityLabel) => {
    const selector = $(buildSelector(accessibilityLabel));
    return !waitForExist(selector, DEFAULT_SHORT_WAIT, true);
};

export const pause = (duration = DEFAULT_SHORT_WAIT) => driver.pause(duration);

export const shortPause = (duration = DEFAULT_VERY_SHORT_WAIT) =>
    driver.pause(duration);

export const veryShortPause = (duration = 1000) => driver.pause(duration);

export const buildSelector = (selector) => {
    if (selector.includes('//')) {
        return `${selector}`;
    } else if (selector.includes('**/')) {
        return `-ios class chain:${selector}`;
    } else {
        return `~${selector}`;
    }
};

export const acceptAlert = () => driver.acceptAlert();

export const isAlertOpen = () => {
    try {
        pause(DEFAULT_VERY_SHORT_WAIT);
        return driver.getAlertText()?.length > 1;
    } catch (e) {
        return false;
    }
};

export const waitUntil = (selector, timeout = DEFAULT_WAIT) =>
    $(buildSelector(selector)).waitForDisplayed({ timeout });

export const contain = (text, matcher) => expect(text).toContain(matcher);

export const gestures = Gestures;

export const picker = (element, value) => {
    click(element);
    Picker.selectValue(value);
};

export const focusInput = (selector) => {
    pause(DEFAULT_VERY_SHORT_WAIT);
    let element = $(buildSelector(selector));

    if (isIOS()) {
        element = $(
            `-ios predicate string:type == 'XCUIElementTypeTextField' AND label == '${selector}'`,
        );
    }

    element.click();
};

export const isDisplayed = (accessibilityLabel, timeout) => {
    return shouldShowElement(accessibilityLabel, timeout, true);
};

export const clickNativeElement = (nativeElement) => $(nativeElement).click();

export const isNativeElementDisplayed = (
    nativeElement,
    timeout = DEFAULT_VERY_SHORT_WAIT
) => {
    pause(timeout);
    return $(nativeElement).isDisplayed();
};

export const pressDoneOnKeyboard = () => {
    if (isIOS()) {
        pressDoneOnIOSKeyboard();
    } else {
        driver.pressKeyCode(66);
    }
};

export const pressDoneOnIOSKeyboard = () => {
    if (isIOS()) {
        $(
            '-ios predicate string:type IN {\'XCUIElementTypeKeyboard\', \'XCUIElementTypeButton\'} AND label == \'Done\''
        ).click();
    }
};

export const pressKeyOnIOSKeyboard = (key) => {
    driver.hideKeyboard('pressKey',key);
};

export const isIOS = () => driver.isIOS;
export const isAndroid = () => !driver.isIOS;

export const takePictureInCameraApp = () => {
    const nativeElementTakePicture = '*//android.widget.ImageButton[@content-desc="Take picture"]';
    if (isNativeElementDisplayed(nativeElementTakePicture, DEFAULT_WAIT)) {
        clickNativeElement(nativeElementTakePicture);
    } else {
        driver.pressKeyCode(27);
    }
};

export const acceptPreviewImageAfterTakePicture = () => {
    const nativeElementPreviewImageWithButtonOk =
        '*//android.widget.Button[@resource-id="com.sec.android.app.camera:id/okay"]';
    const nativeElementPreviewImageWithTextViewOk =
        '*//android.widget.TextView[@resource-id="com.sec.android.app.camera:id/okay"]';
    const nativeElementPreviewImageWithButtonSave =
        '*//android.widget.Button[@resource-id="com.sec.android.app.camera:id/save"]';
    const nativeElementPreviewImageWithButtonCheck =
        '*//android.widget.ImageView[@resource-id="com.android.camera:id/inten_done_apply"]';
    const nativeElementPreviewImageWithDoneButtonCheck =
        '*//android.widget.ImageView[@resource-id="com.android.camera:id/done_button"]';
    const nativeElementPreviewImageWithButtonDone =
        '*//android.widget.ImageView[@content-desc="Done"]';
    const nativeElementPreviewImageWithDoneButtonOkay =
        '*//android.widget.ImageView[@resource-id="com.sec.android.app.camera:id/okay"]';
    const nativeElementWidgetButtonDone = '*//android.widget.ImageButton[@content-desc="Done"]';
    if (isNativeElementDisplayed(nativeElementPreviewImageWithButtonSave)) {
        clickNativeElement(nativeElementPreviewImageWithButtonSave);
    } else if (isNativeElementDisplayed(nativeElementPreviewImageWithButtonOk)) {
        clickNativeElement(nativeElementPreviewImageWithButtonOk);
    } else if (isNativeElementDisplayed(nativeElementPreviewImageWithTextViewOk)) {
        clickNativeElement(nativeElementPreviewImageWithTextViewOk);
    } else if (
        isNativeElementDisplayed(nativeElementPreviewImageWithButtonCheck)
    ) {
        clickNativeElement(nativeElementPreviewImageWithButtonCheck);
    } else if (
        isNativeElementDisplayed(nativeElementPreviewImageWithDoneButtonCheck)
    ) {
        clickNativeElement(nativeElementPreviewImageWithDoneButtonCheck);
    } else if (
        isNativeElementDisplayed(nativeElementPreviewImageWithButtonDone)
    ) {
        clickNativeElement(nativeElementPreviewImageWithButtonDone);
    } else if (isNativeElementDisplayed(nativeElementWidgetButtonDone)) {
        clickNativeElement(nativeElementWidgetButtonDone);
    } else if (isNativeElementDisplayed(nativeElementPreviewImageWithDoneButtonOkay)) {
        clickNativeElement(nativeElementPreviewImageWithDoneButtonOkay);
    }
};

export const isClickable = (selector) => $(buildSelector(selector)).isClickable();

export const getText = (selector) => $(buildSelector(selector)).getText();

export const escapeURL = (url) => {
    return url.replace(/\$/g, '\\$');
};

export const openDeeplink = (url) => {
    pause(DEFAULT_VERY_SHORT_WAIT);
    driver.execute(
        'mobile:deepLink',
        {
            url: escapeURL(url),
            package: BUNDLE_ID,
            appActivity: 'id.flip.MainActivity',
        }
    );
    pause(DEFAULT_WAIT);
};

const formatTwoDigit = (date) => {
    return date < 10 ? `0${date}` : date;
};

export const dateTimeAndroidCommand = ({time}) => {
    // date format for this command is mmdd hhmm yyyy.ss
    const date = new Date();
    const day = formatTwoDigit(date.getDate());
    const month = formatTwoDigit(date.getMonth() + 1);
    const year = date.getFullYear();

    return `date ${month}${day}${time}${year}.00 ; am broadcast -a android.intent.action.TIME_SET`;
};

export const timeZoneAndroidCommand = ({timezone}) => {
    return `service call alarm 3 s16 ${timezone}`;
};

export const executeCommand = (command) => {
    const accessKey = ACCESS_KEY || process.env.LAMBDA_TEST_ACCESS_KEY;
    const isFromScheduleJob =  process.env.CI_PIPELINE_SOURCE === 'schedule';

    console.warn('FlipTestLog', {
        ACCESS_KEY,
        accessKeyFromEnv: process.env.LAMBDA_TEST_ACCESS_KEY,
        source: process.env.CI_PIPELINE_SOURCE,
        isFromScheduleJob,
        shouldSkipCommand: accessKey || isFromScheduleJob,
    });

    // Disable adb in scheduled job or when it is running in lambda test because we have ensured the time
    if (accessKey || isFromScheduleJob) {
        console.warn('FlipTestLog', `command ${command} will be skipped`);
        return;
    }

    if (isAndroid()) {
        console.warn('FlipTestLog', `command ${command} will be executed`);
        driver.execute('mobile: shell', {command});
    }
};

/**
 * Create a cross platform solution for opening a deep link
 *
 * @param {string} url
 */
export const openDeepLinkUrl = (url) => {
    const dynamicLink = 'https://flipid.page.link';
    const TabBarId = 'TabBarItemTitle';
    const UrlId = 'URL';
    const OpenButtonViaDynamicLinkId = '**/XCUIElementTypeLink[`label == "OPEN"`]';
    const OpenButtonId = '**/XCUIElementTypeButton[`label == "Open"`]';

    if (driver.isIOS) {
        // Launch Safari to open the deep link
        driver.execute('mobile: launchApp', { bundleId: 'com.apple.mobilesafari' });

        // Wait for the url button to appear and click on it so the text field will appear
        if(!driver.isKeyboardShown()) {
            waitUntil(TabBarId, DEFAULT_WAIT);
            click(TabBarId);
        }

        // Submit the url and add a break
        fillField(UrlId, `${url}\uE007`);

        if(url.includes(dynamicLink)) {
            waitUntil(OpenButtonViaDynamicLinkId, DEFAULT_WAIT);
            click(OpenButtonViaDynamicLinkId);
        } else {
            waitUntil(OpenButtonId, DEFAULT_WAIT);
            click(OpenButtonId);
        }

    } else {
        driver.execute('mobile:deepLink', {
            url,
            package: 'id.flip.staging',
        });
    }
};

export const reset = () => {
    driver.reset();
};
