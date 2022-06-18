const PageElement = require('../../../capt/page-elements/sign-up.page');
const {
    DEFAULT_VERY_LONG_WAIT,
    click,
    fillField,
    gestures,
    shouldShowElement,
    waitUntil,
} = require('../../../../helper');

const TEXT = {
    placeholderAddress: 'Alamat tidak harus sesuai kartu identitas',
};

export function personalData(birthPlace, domicile, address) {
    waitUntil(
        PageElement.FullIdentityFormModalTextInputName,
        DEFAULT_VERY_LONG_WAIT
    );
    gestures.swipeUp(0.7);
    click(PageElement.FullIdentityFormModalFormBirthday);
    driver.hideKeyboard();
    click(`${PageElement.SelectCityModalListCity}-${birthPlace}`);
    if (driver.isAndroid) {
        waitUntil(`${PageElement.SelectCityModalListCity}-${birthPlace}`);
        click(`${PageElement.SelectCityModalListCity}-${birthPlace}`);
    }
    shouldShowElement(PageElement.FullIdentityFormModalPickerBirthday);
    click(PageElement.FullIdentityFormModalPickerBirthday);
    click(PageElement.BirthdayModalTouchableSelect);
    shouldShowElement(PageElement.FullIdentityFormModalFormDomicile);
    click(PageElement.FullIdentityFormModalFormDomicile);
    driver.hideKeyboard();
    click(`${PageElement.SelectCityModalListCity}-${domicile}`);
    if (driver.isAndroid) {
        waitUntil(`${PageElement.SelectCityModalListCity}-${domicile}`);
        click(`${PageElement.SelectCityModalListCity}-${domicile}`);
    }
    if (driver.isIOS) {
        fillField(
            `${PageElement.FullIdentityFormModalTextInputAddress} ${TEXT.placeholderAddress}`,
            address
        );
    } else {
        fillField(PageElement.FullIdentityFormModalTextInputAddress, address);
    }
    gestures.swipeUp(0.2);
    click(PageElement.FullIdentityFormModalButtonSave);
    shouldShowElement(PageElement.HomeContentSceneTextGreeting);
}
