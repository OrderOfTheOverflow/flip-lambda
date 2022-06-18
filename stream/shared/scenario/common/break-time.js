const {
    click,
    shouldNotShowElement,
    isDisplayed,
} = require('../../../../helper');
const BreakTimePageElement = require('../../../docter/page-elements/common/break-time.page');

export const handleBreakTimeModal = () => {
    if (isDisplayed(BreakTimePageElement.BUTTON_ACCEPT)) {
        click(BreakTimePageElement.BUTTON_ACCEPT);
        shouldNotShowElement(BreakTimePageElement.BUTTON_ACCEPT);
    }
};
