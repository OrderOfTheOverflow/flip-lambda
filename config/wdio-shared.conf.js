const {
    BASE_URL,
    DEFAULT_TIMEOUT,
    IS_USE_APPIUM_DESKTOP,
    TIME_SCALING,
    SCENARIO_FILES,
} = require('./constant.conf');

exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'jasmine',
    path: IS_USE_APPIUM_DESKTOP ? '/wd/hub' : '/',
    jasmineNodeOpts: {
        // Updated the timeout to 9 seconds due to possible longer appium calls
        // When using XPATH
        defaultTimeoutInterval: 300000 * TIME_SCALING,
        helpers: [require.resolve('@babel/register')],
    },
    sync: true,
    deprecationWarnings: true,
    bail: 0,
    baseUrl: BASE_URL,
    waitforTimeout: DEFAULT_TIMEOUT * TIME_SCALING,
    connectionRetryTimeout: 90000 * TIME_SCALING,
    connectionRetryCount: 3,
    reporters: ['spec'],
    browserName: '',

    // ====================
    // Appium Configuration
    // ====================
    services: IS_USE_APPIUM_DESKTOP
        ? []
        : [
            [
                'appium',
                {
                    // For options see
                    // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                    args: {
                        // Auto download ChromeDriver
                        relaxedSecurity: true,
                        // chromedriverAutodownload: true,
                        // For more arguments see
                        // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                    },
                    command: 'appium',
                }
            ]
        ],
    port: 4723,
    specs: SCENARIO_FILES,
    beforeSuite: async () => {
        const event = process.env.npm_lifecycle_event;
        if (event.includes('ios')) {
            const {handlePermissionForNewUser} = require('../stream/shared/helper/index');
            handlePermissionForNewUser();
        }
    }
};
