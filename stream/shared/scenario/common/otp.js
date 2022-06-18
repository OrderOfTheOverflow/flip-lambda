const PageElement = require('../../../capt/page-elements/sign-up.page');
const {click, pause} = require('../../../../helper');
const {getOtp} = require('../../../capt/api/user');

export function otpVerification(email) {
    click(PageElement.PhoneNumberVerificationOptionsSceneButtonSms);
    pause(); // wait for backend to process OTP
    let userOtp = '';
    getOtp(email).then((response) => {
        const userOtpData = response.data.user_otp;
        userOtp = userOtpData.split('');
    });
    pause(); // wait for getOtp
    userOtp.forEach((number) => {
        click(`${PageElement.PhoneNumberVerificationSceneKeyboardView}-${number}`);
    });
}
