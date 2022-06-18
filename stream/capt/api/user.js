const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const {requestApi} = require('../../../networking/base');
const {api} = require('../../../networking/base');


const getOtp = (email) => {
    const OTP_TYPE_FLIP_REGULAR = 10;
    return api.post('/api/testing/user/get-latest-otp', {
        email,
        otp_type: OTP_TYPE_FLIP_REGULAR,
    });
};

const verifiedEmail = (email) => {
    return axios.get(
        requestApi(getEmailVerificationUrl(email)).data.email_verification_url
    );
};

const getEmailVerificationUrl = (email) => {
    return api.post('/api/testing/user/get-email-verification-url', {email});
};

module.exports = {
    getOtp,
    verifiedEmail,
};
