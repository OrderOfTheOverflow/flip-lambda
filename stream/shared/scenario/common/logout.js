import {DEFAULT_TIMEOUT} from '../../../../config/constant.conf';
import {click, gestures, isDisplayed, waitUntil} from '../../../../helper';
import PageElement from '../../../docter/page-elements/send-money.page';

export function logout() {
    click(PageElement.HomeSceneTouchableAccountIcon);
    if (!isDisplayed(PageElement.HomeSceneTouchableExitApps, DEFAULT_TIMEOUT)) {
        gestures.swipeUp();
        gestures.swipeUp();
    }
    waitUntil(PageElement.HomeSceneTouchableExitApps);
    click(PageElement.HomeSceneTouchableExitApps);
    waitUntil(PageElement.HomeSceneTouchableAcceptExitApps);
    click(PageElement.HomeSceneTouchableAcceptExitApps);
}
