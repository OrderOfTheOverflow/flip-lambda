import OnboardingPageElement from '../../page-elements/onboarding.page';
import HelpCenterPageElement from '../../page-elements/help-center.page';
import TnCPageElement from '../../page-elements/terms-and-conditions.page';
import InviteFriendPageElement from '../../page-elements/invite-friend.page';
import PrivacyPolicyPageElement from '../../page-elements/privacy-policy.page';
import {VALID_LOGIN_DATA_FIVE_TRANSACTIONS} from '../../data/user/login.data';
import ChangePasswordPageElement from '../../page-elements/change-password.page';
import ProfileAccountPageElement from '../../page-elements/profile-account.page';
import {
    click,
    DEFAULT_LONG_WAIT,
    DEFAULT_WAIT,
    expectText,
    gestures,
    pause,
    reset,
    shouldNotShowElement,
    shouldShowElement,
    waitUntil,
} from '../../../../helper';
import {loginFirstTimeUntilProfilePage, loginUntilProfilePage,} from '@auto-shared/scenario/common/login';
import {logout} from '../../helper';

const {TEXT} = require('../../data/constant/copywriting/profile/text');

describe('C52948 - Successfully redirect to Invite Friend page', () => {
    beforeAll(() => {
        loginFirstTimeUntilProfilePage(VALID_LOGIN_DATA_FIVE_TRANSACTIONS.email,
            VALID_LOGIN_DATA_FIVE_TRANSACTIONS.password, VALID_LOGIN_DATA_FIVE_TRANSACTIONS.pin);
    });

    it('C52948 - Expected redirect to Invite Friend page', () => {
        pause(DEFAULT_WAIT);
        click(ProfileAccountPageElement.AccountSceneButtonInviteFriend);

        shouldShowElement(InviteFriendPageElement.TextTitle);
        shouldShowElement(InviteFriendPageElement.ReferralCode);
        shouldShowElement(InviteFriendPageElement.BackButton);

        expectText(
            InviteFriendPageElement.TextTitle,
            TEXT.ID.InviteFriendSceneTextTitle,
            TEXT.ID.InviteFriendReferralCode,
        );

        click(InviteFriendPageElement.BackButton);
        pause(DEFAULT_WAIT);
    });

    afterAll(() => {
        logout();
    });
});

describe('C52949 - Successfully redirect to Edit Personal data page', () => {
    beforeAll(() => {
        loginUntilProfilePage(VALID_LOGIN_DATA_FIVE_TRANSACTIONS.email,
            VALID_LOGIN_DATA_FIVE_TRANSACTIONS.password, VALID_LOGIN_DATA_FIVE_TRANSACTIONS.pin);
    });

    it('C52949 - Expected redirect to Edit Personal data page', () => {
        click(ProfileAccountPageElement.AccountSceneButtonUpdateAccountData);
        waitUntil(HelpCenterPageElement.Webview, DEFAULT_WAIT);
        shouldNotShowElement(ProfileAccountPageElement.AccountSceneButtonUpdateAccountData);
    });

    afterAll(() => {
        reset();
    });
});

describe('C52950 - Successfully redirect to Change Password page', () => {
    beforeAll(() => {
        loginFirstTimeUntilProfilePage(VALID_LOGIN_DATA_FIVE_TRANSACTIONS.email,
            VALID_LOGIN_DATA_FIVE_TRANSACTIONS.password, VALID_LOGIN_DATA_FIVE_TRANSACTIONS.pin);
    });

    it('C52950 - Expected redirect to Change Password page', () => {
        click(ProfileAccountPageElement.AccountSceneButtonChangePassword);
        waitUntil(ChangePasswordPageElement.TextTitle, DEFAULT_WAIT);
        shouldShowElement(ChangePasswordPageElement.InputPassword);
        shouldShowElement(ChangePasswordPageElement.TextHeader);
        shouldShowElement(ChangePasswordPageElement.NextButton);
        shouldShowElement(ChangePasswordPageElement.BackButton);

        expectText(
            ChangePasswordPageElement.TextTitle,
            TEXT.ID.ChangePasswordSceneTextTitle,
            TEXT.ID.ChangePasswordInputPassword,
        );

        click(ChangePasswordPageElement.BackButton);
    });

    afterAll(() => {
        logout();
    });
});

describe('C52951 - Successfully redirect to Rate Flip page', () => {
    beforeAll(() => {
        loginUntilProfilePage(VALID_LOGIN_DATA_FIVE_TRANSACTIONS.email,
            VALID_LOGIN_DATA_FIVE_TRANSACTIONS.password, VALID_LOGIN_DATA_FIVE_TRANSACTIONS.pin);
    });

    it('C52951 - Expected redirect to Rate Flip page', () => {
        pause(DEFAULT_WAIT);
        click(ProfileAccountPageElement.ButtonRateFlip);
        shouldNotShowElement(ProfileAccountPageElement.ButtonRateFlip);
    });

    afterAll(() => {
        reset();
    });
});

describe('C61166 - Successfully redirect to Flip for Business page', () => {
    beforeAll(() => {
        loginFirstTimeUntilProfilePage(VALID_LOGIN_DATA_FIVE_TRANSACTIONS.email,
            VALID_LOGIN_DATA_FIVE_TRANSACTIONS.password, VALID_LOGIN_DATA_FIVE_TRANSACTIONS.pin);
    });

    it('C61166 - Expected redirect to Flip for Business page', () => {
        pause(DEFAULT_WAIT);
        click(ProfileAccountPageElement.ButtonBigFlip);
        shouldNotShowElement(ProfileAccountPageElement.ButtonBigFlip);
    });

    afterAll(() => {
        reset();
    });
});

describe('C61167 - Successfully redirect to Terms & Conditions page', () => {
    beforeAll(() => {
        loginFirstTimeUntilProfilePage(VALID_LOGIN_DATA_FIVE_TRANSACTIONS.email,
            VALID_LOGIN_DATA_FIVE_TRANSACTIONS.password, VALID_LOGIN_DATA_FIVE_TRANSACTIONS.pin);
    });

    it('C61167 - Expected redirect to Terms & Conditions page', () => {
        pause(DEFAULT_WAIT);
        click(ProfileAccountPageElement.ButtonTnC);
        shouldShowElement(TnCPageElement.Webview);
    });

    afterAll(() => {
        reset();
    });
});

describe('C61168 - Successfully redirect to Privacy Policy page', () => {
    beforeAll(() => {
        loginFirstTimeUntilProfilePage(VALID_LOGIN_DATA_FIVE_TRANSACTIONS.email,
            VALID_LOGIN_DATA_FIVE_TRANSACTIONS.password, VALID_LOGIN_DATA_FIVE_TRANSACTIONS.pin);
    });

    it('C61168 - Expected redirect to Privacy Policy page', () => {
        pause(DEFAULT_WAIT);
        gestures.swipeUp(0.8);
        click(ProfileAccountPageElement.ButtonPrivacyPolicy);
        pause(DEFAULT_WAIT);
        shouldShowElement(PrivacyPolicyPageElement.Webview);
    });

    afterAll(() => {
        reset();
    });
});

describe('C61169 - Successfully Logout', () => {
    beforeAll(() => {
        loginFirstTimeUntilProfilePage(VALID_LOGIN_DATA_FIVE_TRANSACTIONS.email,
            VALID_LOGIN_DATA_FIVE_TRANSACTIONS.password, VALID_LOGIN_DATA_FIVE_TRANSACTIONS.pin);
    });

    it('C61169 - Expected redirect to Onboarding page', () => {
        pause(DEFAULT_WAIT);
        logout();
        waitUntil(OnboardingPageElement.ButtonSignUp, DEFAULT_LONG_WAIT);
        shouldShowElement(OnboardingPageElement.ButtonLogin);
        shouldShowElement(OnboardingPageElement.ButtonToggleLanguage);
    });
});
