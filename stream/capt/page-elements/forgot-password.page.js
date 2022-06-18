const platform = {};

const ForgotPasswordKey = 'FORGOT_PASSWORD_SCENE';

platform.ios = {
    TextTitle: `${ForgotPasswordKey}-TEXT_TITLE`,
    TextSubTitle: `${ForgotPasswordKey}-TEXT_SUB_TITLE`,
    TextInputEmail: `${ForgotPasswordKey}-TEXT_INPUT_EMAIL`,
    ButtonSendEmail: `${ForgotPasswordKey}-BUTTON_SEND_EMAIL`,
    ViewPopUpEmailSent: `${ForgotPasswordKey}-VIEW_POP_UP_EMAIL_SENT`,
    TextEmailSent: `${ForgotPasswordKey}-TEXT_EMAIL_SENT`,
    ButtonOpenEmail: `${ForgotPasswordKey}-BUTTON_OPEN_EMAIL`,
};

platform.android = {
    TextTitle: `${ForgotPasswordKey}-TEXT_TITLE`,
    TextSubTitle: `${ForgotPasswordKey}-TEXT_SUB_TITLE`,
    TextInputEmail: `${ForgotPasswordKey}-TEXT_INPUT_EMAIL`,
    ButtonSendEmail: `${ForgotPasswordKey}-BUTTON_SEND_EMAIL`,
    ViewPopUpEmailSent: `${ForgotPasswordKey}-VIEW_POP_UP_EMAIL_SENT`,
    TextEmailSent: `${ForgotPasswordKey}-TEXT_EMAIL_SENT`,
    ButtonOpenEmail: `${ForgotPasswordKey}-BUTTON_OPEN_EMAIL`,
};

const locators = driver.isIOS ? platform.ios : platform.android;
module.exports = locators;
