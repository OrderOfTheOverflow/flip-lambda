import SocialMediaPageElement from '../../page-elements/social-media.page';
import {
    click,
    DEFAULT_LONG_WAIT,
    DEFAULT_WAIT,
    expectText,
    gestures,
    pause,
    reset,
    shouldNotShowElement,
} from '../../../../helper';
import {VALID_LOGIN_DATA_FIVE_TRANSACTIONS} from '../../data/user/login.data';
import {loginFirstTimeUntilProfilePage} from '@auto-shared/scenario/common/login';

const {TEXT} = require('../../data/constant/copywriting/profile/text');

describe('C61170 - Successfully redirect to Flip\'s Instagram', () => {
    beforeAll(() => {
        loginFirstTimeUntilProfilePage(VALID_LOGIN_DATA_FIVE_TRANSACTIONS.email,
            VALID_LOGIN_DATA_FIVE_TRANSACTIONS.password, VALID_LOGIN_DATA_FIVE_TRANSACTIONS.pin);
    });

    it('C61170 - Expected redirect to Flip\'s Instagram page', () => {
        pause(DEFAULT_WAIT);
        gestures.swipeUp(0.8);
        expectText(
            SocialMediaPageElement.TextTitle,
            TEXT.ID.SocialMediaTextTitle,
            DEFAULT_LONG_WAIT,
        );

        click(SocialMediaPageElement.Instagram);
        shouldNotShowElement(SocialMediaPageElement.Instagram);
    });

    afterAll(() => {
        reset();
    });
});

describe('C61171 - Successfully redirect to Flip\'s Tiktok', () => {
    beforeAll(() => {
        loginFirstTimeUntilProfilePage(VALID_LOGIN_DATA_FIVE_TRANSACTIONS.email,
            VALID_LOGIN_DATA_FIVE_TRANSACTIONS.password, VALID_LOGIN_DATA_FIVE_TRANSACTIONS.pin);
    });

    it('C61171 - Expected redirect to Flip\'s Tiktok page', () => {
        pause(DEFAULT_WAIT);
        gestures.swipeUp(0.8);
        expectText(
            SocialMediaPageElement.TextTitle,
            TEXT.ID.SocialMediaTextTitle,
            DEFAULT_LONG_WAIT,
        );

        click(SocialMediaPageElement.Tiktok);
        shouldNotShowElement(SocialMediaPageElement.Tiktok);
    });

    afterAll(() => {
        reset();
    });
});

describe('C61172 - Successfully redirect to Flip\'s Twitter', () => {
    beforeAll(() => {
        loginFirstTimeUntilProfilePage(VALID_LOGIN_DATA_FIVE_TRANSACTIONS.email,
            VALID_LOGIN_DATA_FIVE_TRANSACTIONS.password, VALID_LOGIN_DATA_FIVE_TRANSACTIONS.pin);
    });

    it('C61172 - Expected redirect to Flip\'s Twitter page', () => {
        pause(DEFAULT_WAIT);
        gestures.swipeUp(0.8);
        expectText(
            SocialMediaPageElement.TextTitle,
            TEXT.ID.SocialMediaTextTitle,
            DEFAULT_LONG_WAIT,
        );

        click(SocialMediaPageElement.Twitter);
        shouldNotShowElement(SocialMediaPageElement.Twitter);
    });

    afterAll(() => {
        reset();
    });
});

describe('C61173 - Successfully redirect to Flip\'s Youtube', () => {
    beforeAll(() => {
        loginFirstTimeUntilProfilePage(VALID_LOGIN_DATA_FIVE_TRANSACTIONS.email,
            VALID_LOGIN_DATA_FIVE_TRANSACTIONS.password, VALID_LOGIN_DATA_FIVE_TRANSACTIONS.pin);
    });

    it('C61173 - Expected redirect to Flip\'s Youtube page', () => {
        pause(DEFAULT_WAIT);
        gestures.swipeUp(0.8);
        expectText(
            SocialMediaPageElement.TextTitle,
            TEXT.ID.SocialMediaTextTitle,
            DEFAULT_LONG_WAIT,
        );

        click(SocialMediaPageElement.Youtube);
        shouldNotShowElement(SocialMediaPageElement.Youtube);
    });
});
