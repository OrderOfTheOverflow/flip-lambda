const PageElement = require('../../../capt/page-elements/verification-scene.page');
const {
    click,
    waitUntil,
    shouldShowElement,
    isDisplayed,
    takePictureInCameraApp,
    acceptPreviewImageAfterTakePicture,
    pause,
    acceptAlert,
    isAlertOpen,
    gestures,
    DEFAULT_VERY_SHORT_WAIT,
    DEFAULT_LONG_WAIT,
} = require('../../../../helper');

function shouldShowElementButtonTakePicture() {
    shouldShowElement(
        PageElement.IdentityCardVerificationExamplePageButtonTakePicture
    );
}

export function openCameraAndTakePicture() {
    click(PageElement.IdentityCardVerificationExamplePageButtonTakePicture);

    if (isAlertOpen()) {
        acceptAlert(); // alert information flip want to access the camera and storage
    }
    if (isAlertOpen()) {
        acceptAlert(); // alert permission to access the camera
    }
    if (isAlertOpen()) {
        acceptAlert(); // alert permission to access the storage
    }

    pause(); // wait until the camera app opened
    takePictureInCameraApp();
    pause(); // wait until the process take picture done
    acceptPreviewImageAfterTakePicture();
}

export function uploadPicture() {
    waitUntil(PageElement.ImagePreviewComponentButtonUploadPicture);
    click(PageElement.ImagePreviewComponentButtonUploadPicture);
}

export function navigateToVerificationAccountScene() {
    waitUntil(
        PageElement.HomeContentSceneTouchableVerificationProgressBox,
        DEFAULT_LONG_WAIT
    );
    click(PageElement.HomeContentSceneTouchableVerificationProgressBox);

    const isDisplayedVerificationIntro = isDisplayed(
        PageElement.VerificationAccountIntroSceneButtonContinueVerify
    );

    if (isDisplayedVerificationIntro) {
        click(PageElement.VerificationAccountIntroSceneButtonContinueVerify);
    }

    shouldShowElement(
        PageElement.VerificationAccountSceneButtonVerifyIdentity,
        DEFAULT_LONG_WAIT
    );
}

export function navigateToNewVerificationScene() {
    click(PageElement.VerificationAccountSceneButtonVerifyIdentity);
    shouldShowElement(
        PageElement.NewVerificationSceneViewNewUserVerificationPage
    );
}

export function navigateToIdentityCardVerificationExamplePage() {
    click(PageElement.NewVerificationSceneButtonIdentity);
    shouldShowElementButtonTakePicture();
}

export function navigateToVerificationFaceExamplePage() {
    shouldShowElement(PageElement.NewVerificationSceneButtonFace);
    click(PageElement.NewVerificationSceneButtonFace);
    pause(DEFAULT_VERY_SHORT_WAIT);
    gestures.swipeUp(0.5);
    shouldShowElementButtonTakePicture();
}

export function navigateToVerificationIdentityWithFaceExamplePage() {
    shouldShowElement(PageElement.NewVerificationSceneButtonIdentityWithFace);
    click(PageElement.NewVerificationSceneButtonIdentityWithFace);
    shouldShowElementButtonTakePicture();
}

export function tapButtonVerifyIdentity() {
    shouldShowElement(PageElement.NewVerificationSceneButtonVerify);
    click(PageElement.NewVerificationSceneButtonVerify);
}
