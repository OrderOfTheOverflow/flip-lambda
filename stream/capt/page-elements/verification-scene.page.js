const platform = {};
const VerificationScene = 'USER_VERIFICATION_SCENE';

platform.ios = {
    VerificationAccountSceneTitle: '**/XCUIElementTypeStaticText[`label == "Lengkapi Informasi Kamu"`]',
    VerificationAccountIntroSceneButtonContinueVerify: 'VERIFICATION_ACCOUNT_INTRO_SCENE-BUTTON-CONTINUE_VERIFY',
    VerificationAccountSceneFillInPersonalData: '**/XCUIElementTypeOther[`label == "Isi Data Diri"`]',
    VerificationAccountSceneVerifyEmail: '**/XCUIElementTypeOther[`label == "Verifikasi Email"`]',
    VerificationAccountSceneButtonVerifyIdentity: 'VERIFICATION_ACCOUNT_SCENE-BUTTON-VERIFY_IDENTITY',
    IdentityCardVerificationExamplePageButtonTakePicture: 'IDENTITY_CARD_VERIFICATION_EXAMPLE_PAGE-BUTTON-TAKE_PICTURE',
    IdentityCardVerificationPageButtonVerifyIdentity: 'IDENTITY_CARD_VERIFICATION_PAGE-BUTTON-VERIFY_IDENTITY',
    ImagePreviewComponentButtonUploadPicture: 'IMAGE_PREVIEW_COMPONENT-BUTTON-UPLOAD_PICTURE',
    HomeContentSceneTouchableVerificationProgressBox: 'HOME_CONTENT_SCENE-TOUCHABLE-VERIFICATION_PROGRESS_BOX',
    NewVerificationSceneButtonIdentity: `${VerificationScene}-BUTTON-VERIFY_IDENTITY`,
    NewVerificationSceneButtonFace: `${VerificationScene}-BUTTON-FACE`,
    NewVerificationSceneButtonIdentityWithFace: `${VerificationScene}-BUTTON-IDENTITY_WITH_FACE`,
    NewVerificationSceneButtonVerify: `${VerificationScene}-BUTTON-VERIFY_IDENTITY`,
    NewVerificationSceneViewNewUserVerificationPage: `${VerificationScene}-VIEW-NEW_USER_VERIFICATION_PAGE`,
};

platform.android = {
    VerificationAccountSceneTitle: '//android.view.ViewGroup[2]/android.widget.TextView',
    VerificationAccountIntroSceneButtonContinueVerify: 'VERIFICATION_ACCOUNT_INTRO_SCENE-BUTTON-CONTINUE_VERIFY',
    VerificationAccountSceneFillInPersonalData: '//android.view.ViewGroup[2]/android.view.ViewGroup',
    VerificationAccountSceneVerifyEmail: '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup',
    VerificationAccountSceneButtonVerifyIdentity: 'VERIFICATION_ACCOUNT_SCENE-BUTTON-VERIFY_IDENTITY',
    IdentityCardVerificationExamplePageButtonTakePicture: 'IDENTITY_CARD_VERIFICATION_EXAMPLE_PAGE-BUTTON-TAKE_PICTURE',
    IdentityCardVerificationPageButtonVerifyIdentity: 'IDENTITY_CARD_VERIFICATION_PAGE-BUTTON-VERIFY_IDENTITY',
    ImagePreviewComponentButtonUploadPicture: 'IMAGE_PREVIEW_COMPONENT-BUTTON-UPLOAD_PICTURE',
    HomeContentSceneTouchableVerificationProgressBox: 'HOME_CONTENT_SCENE-TOUCHABLE-VERIFICATION_PROGRESS_BOX',
    NewVerificationSceneButtonIdentity: `${VerificationScene}-BUTTON-VERIFY_IDENTITY`,
    NewVerificationSceneButtonFace: `${VerificationScene}-BUTTON-FACE`,
    NewVerificationSceneButtonIdentityWithFace: `${VerificationScene}-BUTTON-IDENTITY_WITH_FACE`,
    NewVerificationSceneButtonVerify: `${VerificationScene}-BUTTON-VERIFY_IDENTITY`,
    NewVerificationSceneViewNewUserVerificationPage: `${VerificationScene}-VIEW-NEW_USER_VERIFICATION_PAGE`,
};

const locators = driver.isIOS == true ? platform.ios : platform.android;
module.exports = locators;
