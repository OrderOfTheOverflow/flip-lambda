const dotenv = require('dotenv');

dotenv.config();
const {
    DEFAULT_TIMEOUT,
    TIME_SCALING,
    SCENARIO_FILES, ACCESS_KEY, USERNAME,
} = require('./constant.conf');
const slack = require('wdio-slack-service');

const lambdaTestAccessKey = process.env.LAMBDA_TEST_ACCESS_KEY;
const lambdaTestUserName = process.env.LAMBDA_TEST_USERNAME;
const accessKey = ACCESS_KEY || lambdaTestAccessKey;
const userName = USERNAME || lambdaTestUserName;
const slackWebhook = process.env.SLACK_WEBHOOK;

const hostnameLambda = 'mobile-hub.lambdatest.com';
const lambdaTestUrl = '/wd/hub';
const currentTime = new Date().toISOString();
const formattedHtmlUrl = encodeURI(`report-${currentTime}.html`);

exports.config = {
    framework: 'jasmine',
    user: userName,
    key: accessKey,
    hostname: hostnameLambda,
    path: lambdaTestUrl,
    logFile: './logDir/api.log',
    services: [
        ['lambdatest', {
            tunnel: false,
        }],
        [
            slack, {
            webHookUrl: slackWebhook, // Used to post notification to a particular channel
            notifyOnlyOnFailure: false, // Send notification only on test failure
            messageTitle: 'Automation Test Report' // Name of the notification
        }
        ],
    ],
    jasmineNodeOpts: {
        //15 minutes timeout
        defaultTimeoutInterval: 900000 * TIME_SCALING,
        helpers: [require.resolve('@babel/register')],
    },
    deprecationWarnings: true,
    bail: 0,
    waitforTimeout: DEFAULT_TIMEOUT * TIME_SCALING,
    connectionRetryTimeout: 100000 * TIME_SCALING,
    connectionRetryCount: 1,
    reporters: [
        'spec', ['junit', {
            outputDir: './logDir/junit-reports/',
            outputFileFormat: (options) => {
                return `results-${options.cid}.${currentTime}.xml`;
            }
        }],
        ['html-nice', {
            outputDir: './logDir/html-reports/',
            filename: formattedHtmlUrl,
            reportTitle: 'Flip Test Report Title',
            collapseTests: false,
            //to turn on screenshots after every test
            useOnAfterCommandForScreenshot: false,
        }]
    ],
    reporterOptions: {
        html: {
            outFile: formattedHtmlUrl
        }
    },
    browserName: '',
    specs: SCENARIO_FILES,
    port: 80,

    after: async (result) => {
        driver.execute('lambda-status='.concat(result == 0 ? 'passed' : 'failed'), undefined);
    },
};
