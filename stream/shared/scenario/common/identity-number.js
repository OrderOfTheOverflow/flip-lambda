const PageElement = require('../../page-elements/identity-number');
const IdentityNumberData = require('../../../capt/data/user/identity-number.data');
const {click, fillField} = require('../../../../helper');

export function fillIdentityNumberForm(identity, identityNumber) {
    click(PageElement.VerificationAccountSceneButtonVerifyIdentity);
    if (identity === IdentityNumberData.type.ktp) {
        click(PageElement.IdentityNumberFormModalRadioButtonKtp);
    }
    if (identity === IdentityNumberData.type.paspor) {
        click(PageElement.IdentityNumberFormModalRadioButtonPaspor);
    }
    fillField(
        PageElement.IdentityNumberFormModalTextInputIdentityNumber,
        identityNumber
    );
    click(PageElement.IdentityNumberFormModalButtonContinue);
}
