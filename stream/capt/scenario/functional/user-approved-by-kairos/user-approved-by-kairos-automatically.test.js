const SignUpData = require('../../../data/user/sign-up.data');
const PageElement = require('../../../page-elements/user-approved-by-kairos.page');
const {navigateToSignupScene, signup} = require('../../../../shared/scenario/common/sign-up');
const {otpVerification} = require('../../../../shared/scenario/common/otp');
const {personalData} = require('../../../../shared/scenario/common/personal-data');
const {fillIdentityNumberForm} = require('../../../../shared/scenario/common/identity-number');
const {gestures, shouldShowElement} = require('../../../../../helper');
const {
    navigateToVerificationAccountScene,
    navigateToIdentityCardVerificationExamplePage,
    navigateToVerificationFaceExamplePage,
    navigateToVerificationIdentityWithFaceExamplePage,
    openCameraAndTakePicture,
    uploadPicture,
    tapButtonVerifyIdentity,
} = require('../../../../shared/scenario/common/upload-identity-picture');
const {verifiedEmail} = require('../../../api/user');
const {requestApi} = require('../../../../../networking/base');

describe('user approved by kairos automatically', () => {
    it('C10465: user approved by kairos automatically', () => {
        navigateToSignupScene();
        signup(
            SignUpData.VALID_SIGN_UP_DATA.name,
            SignUpData.VALID_SIGN_UP_DATA.email,
            SignUpData.VALID_SIGN_UP_DATA.password,
            SignUpData.VALID_SIGN_UP_DATA.phone
        );
        otpVerification(SignUpData.VALID_SIGN_UP_DATA.email);
        personalData(
            SignUpData.VALID_SIGN_UP_DATA.birthPlace,
            SignUpData.VALID_SIGN_UP_DATA.domicile,
            SignUpData.VALID_SIGN_UP_DATA.address
        );
        requestApi(verifiedEmail(SignUpData.VALID_SIGN_UP_DATA.email));
        gestures.swipeDown(0.75); // refresh

        navigateToVerificationAccountScene();

        fillIdentityNumberForm(
            SignUpData.VALID_SIGN_UP_DATA.identity,
            SignUpData.VALID_SIGN_UP_DATA.identityNumber
        );

        navigateToIdentityCardVerificationExamplePage();
        openCameraAndTakePicture();
        uploadPicture();

        navigateToVerificationFaceExamplePage();
        openCameraAndTakePicture();
        uploadPicture();

        navigateToVerificationIdentityWithFaceExamplePage();
        openCameraAndTakePicture();
        uploadPicture();
        tapButtonVerifyIdentity();

        shouldShowElement(PageElement.UserVerificationSceneButtonBackToHome);
    });
});
