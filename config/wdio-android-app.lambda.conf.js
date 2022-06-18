const dotenv = require('dotenv');
dotenv.config();
const {
    PLATFORM_VERSION, DEVICE_NAME, USERNAME, ACCESS_KEY,
    APP_URL, BUILD, NAME, AUTO_ACCEPT_ALERT
} = require('./constant.conf');
const {config} = require('./wdio-shared.lambda.conf');

const lambdaTestAccessKey = process.env.LAMBDA_TEST_ACCESS_KEY;
const lambdaTestAppURL = process.env.LAMBDA_TEST_APP_URL;
const lambdaTestUserName = process.env.LAMBDA_TEST_USERNAME;
const ciLambdaTestAppUrl = process.env.CI_APP_URL;

function getAppUrl() {
    if (ciLambdaTestAppUrl) {
        return JSON.parse(ciLambdaTestAppUrl).androidAppUrl;
    }
    return APP_URL || lambdaTestAppURL;
}

function getDeviceCapabilities() {
    const isFromPipeline = !!process.env.CI_PIPELINE_ID;
    if (isFromPipeline) {
        return {
            deviceName: 'Galaxy S21',
            platformVersion: '11',
        };
    }

    return {
        deviceName: DEVICE_NAME,
        platformVersion: PLATFORM_VERSION,
    };
}

const {deviceName, platformVersion} = getDeviceCapabilities();

config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        deviceName: deviceName,
        platformVersion: platformVersion,
        orientation: 'PORTRAIT',
        // automationName: 'UiAutomator2',
        automationName: 'Espresso',
        disableWindowAnimation: true,
        app: getAppUrl(),
        noReset: false,
        newCommandTimeout: 240,
        autoGrantPermissions: true,
        autoDismissAlerts: true,
        autoAcceptAlerts: AUTO_ACCEPT_ALERT,
        waitForIdleTimeout: 0,
        idleTimeout: 0,
        devicelog: true,
        isRealMobile: true,
        build: BUILD,
        name: NAME,
        user: USERNAME || lambdaTestUserName,
        accessKey: ACCESS_KEY || lambdaTestAccessKey,
    }
];

exports.config = config;
