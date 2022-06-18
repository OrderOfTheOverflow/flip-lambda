import {hideKeyboard} from '../../../helper';
import {shortPause} from '../../../../../helper';

const PageElement = require('../../../page-elements/sign-up.page');
const {
    DEFAULT_VERY_LONG_WAIT,
    click,
    fillField,
    gestures,
    shouldShowElement,
    waitUntil,
} = require('../../../../../helper');

const TEXT = {
    placeholderAddress: 'Alamat tidak harus sesuai kartu identitas',
};

export function inputPersonalData(birthPlace, domicile, address) {
    waitUntil(
        PageElement.FullIdentityFormModalTextInputName,
        DEFAULT_VERY_LONG_WAIT
    );
    gestures.swipeUp(0.4);

    // TODO Input Job
    // Need add content-desc for picker job
    // click(PageElement.FullIdentityFormModalPickerJob);

    // Input Birthday Place
    click(PageElement.FullIdentityFormModalFormBirthday);
    hideKeyboard();
    // shortPause()
    // click(`${PageElement.SelectCityModalListCity}-${birthPlace}`);
    shortPause();
    if (driver.isAndroid) {
        waitUntil(`${PageElement.SelectCityModalListCity}-${birthPlace}`);
        click(`${PageElement.SelectCityModalListCity}-${birthPlace}`);
    }

    // Input Birthday Date
    shortPause();
    shouldShowElement(PageElement.FullIdentityFormModalPickerBirthday);
    click(PageElement.FullIdentityFormModalPickerBirthday);
    // Not simulate Date slider
    click(PageElement.BirthdayModalTouchableSelect);
    shortPause();

    // Input Domicile
    shouldShowElement(PageElement.FullIdentityFormModalFormDomicile);
    click(PageElement.FullIdentityFormModalFormDomicile);
    hideKeyboard();
    click(`${PageElement.SelectCityModalListCity}-${domicile}`);
    if (driver.isAndroid) {
        waitUntil(`${PageElement.SelectCityModalListCity}-${domicile}`);
        click(`${PageElement.SelectCityModalListCity}-${domicile}`);
    }
    if (driver.isIOS) {
        fillField(`${PageElement.FullIdentityFormModalTextInputAddress} ${TEXT.placeholderAddress}`, address);
    }
    shortPause();
    gestures.swipeUp(0.6);
    fillField(PageElement.FullIdentityFormModalTextInputAddress, address);

    // Save Data
    click(PageElement.FullIdentityFormModalButtonSave);

    // TODO
    // Need add content-desc for picker job

    // shouldShowElement(PageElement.HomeContentSceneTextGreeting);
}
