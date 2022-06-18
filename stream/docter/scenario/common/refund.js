import {clickLeftBackNavigationButton} from '../../../shared/scenario/common/send-money';
import ImagePickerPageElement from '../../page-elements/image-picker-slider.page';
import {
    acceptPreviewImageAfterTakePicture,
    click,
    DEFAULT_SHORT_WAIT,
    DEFAULT_WAIT,
    fillField,
    focusInput,
    gestures,
    getText,
    isClickable,
    pause,
    pressDoneOnKeyboard,
    shouldShowElement,
    takePictureInCameraApp,
    waitUntil
} from '../../../../helper';
import {loginNonEmoney} from '../../../shared/scenario/common/login';
import {VALID_LOGIN_REFUND_DATA} from '../../data/user/login.data';

const PageElement = require('../../page-elements/create-refund.page');

export function prepareCreateRefund() {
    loginNonEmoney(
        VALID_LOGIN_REFUND_DATA.email,
        VALID_LOGIN_REFUND_DATA.password,
        VALID_LOGIN_REFUND_DATA.pin,
    );
}

function openCameraAndTakePicture() {
    pause(); // wait until the camera app opened
    takePictureInCameraApp();
    pause(); // wait until the process take picture done
    acceptPreviewImageAfterTakePicture();
}

function openImagePickerSlider() {
    waitUntil(ImagePickerPageElement.ImagePickerSliderTextTitle, DEFAULT_SHORT_WAIT);
    shouldShowElement(ImagePickerPageElement.ImagePickerSliderButtonOpenGallery);
    shouldShowElement(ImagePickerPageElement.ImagePickerSliderButtonOpenCamera);
    click(ImagePickerPageElement.ImagePickerSliderButtonOpenCamera);
    openCameraAndTakePicture();
}

export function navigateToIntroScene() {
    waitUntil(PageElement.RefundIntroSceneTextTitle, DEFAULT_WAIT);
    shouldShowElement(PageElement.RefundIntroSceneTextTitle);
    shouldShowElement(PageElement.RefundIntroSceneButtonSubmitRefund);
    click(PageElement.RefundIntroSceneButtonSubmitRefund);
    openImagePickerSlider();
}

function checkRefundFormExist() {
    waitUntil(PageElement.RefundFormSceneTouchableChooseDate, DEFAULT_WAIT);

    shouldShowElement(PageElement.RefundFormSceneTouchableChooseDate);
    shouldShowElement(PageElement.RefundFormSceneTextInputAmount);
    shouldShowElement(PageElement.RefundFormSceneTouchableBeneficiaryBank);
}

function selectDate() {
    pause();
    click(PageElement.RefundFormSceneTouchableChooseDate);
    shouldShowElement(PageElement.RefundFormSceneDatePickerModalTouchableSelect, DEFAULT_WAIT);
    click(PageElement.RefundFormSceneDatePickerModalTouchableSelect);
}

function fillInputAmount(amount) {
    focusInput(PageElement.RefundFormSceneTextInputAmount);
    fillField(
        PageElement.RefundFormSceneTextInputAmount,
        amount
    );
    pressDoneOnKeyboard();
}

function selectBank(beneficiaryBank) {
    pause();
    click(PageElement.RefundFormSceneTouchableBeneficiaryBank);

    waitUntil(`${PageElement.RefundFormSceneTouchableBeneficiaryBankItem}-${beneficiaryBank.id}`);
    click(`${PageElement.RefundFormSceneTouchableBeneficiaryBankItem}-${beneficiaryBank.id}`);
}

function fillBankAccount(beneficiaryBank) {
    focusInput(PageElement.RefundFormSceneTextInputBeneficiaryAccount);
    fillField(
        PageElement.RefundFormSceneTextInputBeneficiaryAccount,
        beneficiaryBank.number
    );
    pressDoneOnKeyboard();
}

function scrollUpDateInDatePicker() {
    const SCREEN_SIZE = driver.getWindowRect();
    const from = {x: 25, y: 55};
    const to = {x: 25, y: 45};
    const fromScreenCoordinates = gestures._getDeviceScreenCoordinates(SCREEN_SIZE, from);
    const moveToScreenCoordinates = gestures._getDeviceScreenCoordinates(SCREEN_SIZE, to);

    gestures.swipe(fromScreenCoordinates, moveToScreenCoordinates);
}

export function createNewRefund(beneficiaryBank, amount = 10000) {
    checkRefundFormExist();

    selectDate();
    fillInputAmount(amount);
    selectBank(beneficiaryBank);
    fillBankAccount(beneficiaryBank);

    click(PageElement.RefundFormSceneButtonSubmitRefund);
}

export function createNewRefundWithEmptyDate(beneficiaryBank, amount = 10000) {
    checkRefundFormExist();

    fillInputAmount(amount);
    selectBank(beneficiaryBank);
    fillBankAccount(beneficiaryBank);

    if (!isClickable(PageElement.RefundFormSceneButtonSubmitRefund)) {
        clickLeftBackNavigationButton();
        clickLeftBackNavigationButton();
        pause();
    }
}

export function createNewRefundWithDateLaterThanToday() {
    checkRefundFormExist();

    click(PageElement.RefundFormSceneTouchableChooseDate);
    shouldShowElement(PageElement.RefundFormSceneDatePickerModalTouchableSelect, DEFAULT_WAIT);
    scrollUpDateInDatePicker();
    click(PageElement.RefundFormSceneDatePickerModalTouchableSelect);

    waitUntil(PageElement.RefundFormSceneTextRefundDateValue, DEFAULT_WAIT);
    const refundDateString = getText(PageElement.RefundFormSceneTextRefundDateValue);
    const refundDate = Date.parse(refundDateString);
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (refundDate <= today) {
        clickLeftBackNavigationButton();
        clickLeftBackNavigationButton();
        pause();
    }
}
