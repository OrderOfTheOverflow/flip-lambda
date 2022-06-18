import {DEFAULT_SELECTED_PACKAGE} from '../../../dp/data/prepaid-electricity';
import {LIST_PRODUCT} from '../../../dp/page-elements/prepaid-electricity.page';
import {isDisplayed, longPress, veryShortPause} from '../../../../helper';

const {
    click,
    shouldShowElement,
    waitUntil,
    DEFAULT_LONG_WAIT,
} = require('../../../../helper');
const {
    ICON_MENU,
    TouchableBottomMenu,
} = require('../../../docter/page-elements/home.page');

const otherMenuElement = ICON_MENU + '-4';
const electricityMenuElement = TouchableBottomMenu + '-token';
const mobileDataMenuElement = TouchableBottomMenu + '-data';
const mobileCreditMenuElement = TouchableBottomMenu + '-credit';
const refundMenuElement = TouchableBottomMenu + '-refund';
const withdrawalMenuElement = TouchableBottomMenu + '-withdrawal';

const openOtherMenu = () => {
    veryShortPause();
    waitUntil(otherMenuElement, DEFAULT_LONG_WAIT);

    /*
    * Need to retry click to open the menu slider
    * You may call it once if there is an issue
    * */

    longPress(otherMenuElement, 5);
    veryShortPause();
    if (!isDisplayed(refundMenuElement)) {
        longPress(otherMenuElement, 5);
        veryShortPause();
    }
    shouldShowElement(refundMenuElement);
};

const clickElectricityMenu = (productId) => {
    click(electricityMenuElement);
    const listItemSelector = `${LIST_PRODUCT}-${
        productId || DEFAULT_SELECTED_PACKAGE
    }`;
    waitUntil(listItemSelector);
};

const clickMobileDataMenu = () => {
    click(mobileDataMenuElement);
};

const clickMobileCreditMenu = () => {
    click(mobileCreditMenuElement);
};

const clickRefundMenu = () => {
    openOtherMenu();
    waitUntil(refundMenuElement, DEFAULT_LONG_WAIT);
    click(refundMenuElement);
};

const clickWithdrawalMenu = () => {
    waitUntil(withdrawalMenuElement, DEFAULT_LONG_WAIT);
    click(withdrawalMenuElement);
};

module.exports = {
    openOtherMenu,
    clickElectricityMenu,
    clickMobileCreditMenu,
    clickMobileDataMenu,
    clickRefundMenu,
    clickWithdrawalMenu,
};
