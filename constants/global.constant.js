const dotenv = require('dotenv');
dotenv.config();

const SLACK_USER = {
    EQI: '<@UP4AJV6K9S>',
    ED: '<@U0B10T6N2TFA>',
    ADIT: '<@U01GKP0CBREZ>',
    FADEL: '<@UNNKADDQR0>',
    TE_CONSUMER_APP: '@te',
    TE_INTERNATIONAL: '@te-ir',
    TE_CONSUMER_SOLUTION_GROUP: '@te-consumer',
    TE_DOMESTIC: '@te-do',
    TE_BUSINESS_SOLUTIONS: '@te-b',
    TE_KYC: '@te-k',
};

function getPICMapper() {
    return SLACK_USER.ADIT
}

module.exports = {
    SLACK_USER,
    getPICMapper,
};
