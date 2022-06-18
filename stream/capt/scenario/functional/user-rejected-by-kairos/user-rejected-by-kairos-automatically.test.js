const LoginData = require('../../../data/user/login.data');
const PageElement = require('../../../page-elements/user-rejected-by-kairos.page');
const {login, navigateToLoginScene} = require('../../../../shared/scenario/common/login');
const {shouldShowElement} = require('../../../../../helper');
const {
    navigateToVerificationAccountScene,
    navigateToNewVerificationScene,
    navigateToIdentityCardVerificationExamplePage,
    navigateToVerificationFaceExamplePage,
    navigateToVerificationIdentityWithFaceExamplePage,
    openCameraAndTakePicture,
    uploadPicture,
    tapButtonVerifyIdentity,
} = require('../../../../shared/scenario/common/upload-identity-picture');

describe('User rejected by kairos automatically', () => {
    it('1692: User rejected by kairos automatically', () => {
        navigateToLoginScene();
        login(
            LoginData.VALID_LOGIN_REJECTED_BY_KAIROS.email,
            LoginData.VALID_LOGIN_REJECTED_BY_KAIROS.password
        );

        navigateToVerificationAccountScene();
        navigateToNewVerificationScene();

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

        shouldShowElement(PageElement.UserVerificationSceneViewAlert);
    });
});
