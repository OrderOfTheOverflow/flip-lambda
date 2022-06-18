const dotenv = require('dotenv');
const {parsed} = dotenv.config({
    override: true,
});

const authorName = process.env.AUTHOR_NAME;

module.exports = {
    // DEVICE_NAME: 'Galaxy S22',
    // PLATFORM_VERSION: '12',
    DEVICE_NAME: 'Redmi Note 8',
    PLATFORM_VERSION: '11',
    BUNDLE_ID: 'id.flip.staging',
    AUTHOR_NAME: authorName,
    FILE_NAME: 'flip.apk',
    // FILE_NAME: 'flip.apk',
    APP_VERSION: '2.0',

    //LAMBDA TEST CONFIG
    USERNAME: process.env.LAMBDA_TEST_USERNAME,
    ACCESS_KEY: process.env.LAMBDA_TEST_ACCESS_KEY,
    APP_URL: parsed.APP_URL,
    BUILD: 'debug-send-money-v2-timeout-lambda',
    NAME: 'Debug Send Money v2 Timeout Lambda',

    DEFAULT_TIMEOUT: 10000,
    IS_USE_APPIUM_DESKTOP: false,
    BASE_URL: 'https://flip.id/',
    AUTO_ACCEPT_ALERT: true,
    TIME_SCALING: 1,
    SCENARIO_FILES: [
        './stream/docter/scenario/v2/send-money-to-bank/*.test.js',
    ],
};
