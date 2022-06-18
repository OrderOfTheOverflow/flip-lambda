const {TIME_SCALING} = require('../config/constant.conf');

const getSelectors = (value) => {
    return {
        ANDROID_LISTVIEW: '//android.widget.ListView',
        IOS_PICKERWHEEL: `-ios predicate string:type == 'XCUIElementTypeOther' AND label == '${value}'`,
    };
};

class Picker {
    /**
     * Wait for the picker to be shown
     *
     * @param {boolean} isShown
     */
    static waitForIsShown(value, isShown = true) {
        const timeout = 11000 * TIME_SCALING;
        const selector = driver.isIOS
            ? getSelectors(value).IOS_PICKERWHEEL
            : getSelectors(value).ANDROID_LISTVIEW;
        $(selector).waitForExist({
            timeout,
            reverse: !isShown,
        });
    }

    /**
     * Select a value from the picker
     *
     * @param {string} value The value that needs to be selected
     */
    static selectValue(value) {
        // this.waitForIsShown(value, true);
        if (driver.isIOS) {
            this._setIosValue(value);
        } else {
            this._setAndroidValue(value);
        }
        // this.waitForIsShown(false);
    }

    /**
     * Set the value for Android
     *
     * @param {string} value
     *
     * @private
     */
    static _setAndroidValue(value) {
        $(`${getSelectors(value).ANDROID_LISTVIEW}

        /*[@text='${value}']`).click();
    }

    /**
     * Set the value for IOS
     *
     * @param {string} value
     *
     * @private
     */
    static _setIosValue(value) {
        $(getSelectors(value).IOS_PICKERWHEEL).click();
    }
}

export {
    Picker
};
