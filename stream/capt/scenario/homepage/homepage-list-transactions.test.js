import LoginData from '../../data/user/login.data';
import LoginPageElement from '../../page-elements/login.page';
import HomePageElement from '../../../shared/page-elements/home.page';
import {inputPin, login, navigateToLoginScene,} from '../../../shared/scenario/common/login';
import {
    click,
    DEFAULT_LONG_WAIT,
    DEFAULT_VERY_LONG_WAIT,
    gestures,
    shouldShowElement,
    shouldShowItemListElement,
    waitUntil,
} from '../../../../helper';
import {logout} from '../../helper';

describe('C51126 - Successfully redirect to Homepage using Account not have transaction', () => {
    beforeAll('Login & input PIN', () => {
        navigateToLoginScene();
        login(
            LoginData.UNVERIFIED_ACCOUNT.email,
            LoginData.UNVERIFIED_ACCOUNT.password,
        );
        inputPin(LoginData.UNVERIFIED_ACCOUNT.pin);
    });

    it('Redirected to Home Page', () => {
        waitUntil(LoginPageElement.HomeSceneButtonTabHome, DEFAULT_LONG_WAIT);
        shouldShowElement(HomePageElement.HomeSceneTouchableTabAccount);
        shouldShowElement(HomePageElement.HomeSceneTouchableTabHome);
        shouldShowElement(HomePageElement.HomeContentSceneTextGreeting);
    });

    it('C51126 - Empty Transaction Info', () => {
        gestures.swipeUp(0.9);
        shouldShowElement(HomePageElement.HomeContentSceneTextEmptyTransaction);
    });

    afterAll(() => {
        logout();
    });
});

describe('C51127 - Successfully redirect to Homepage using Account that has 1 transaction', () => {
    beforeAll('Login & input PIN', () => {
        navigateToLoginScene();
        login(
            LoginData.VALID_LOGIN_DATA_HAS_ONE_TRANSACTION.email,
            LoginData.VALID_LOGIN_DATA_HAS_ONE_TRANSACTION.password,
        );
        inputPin(LoginData.VALID_LOGIN_DATA_HAS_ONE_TRANSACTION.pin);
    });

    it('Redirected to Home Page', () => {
        waitUntil(LoginPageElement.HomeSceneButtonTabHome, DEFAULT_LONG_WAIT);
        shouldShowElement(HomePageElement.HomeSceneTouchableTabAccount);
        shouldShowElement(HomePageElement.HomeSceneTouchableTabHome);
        shouldShowElement(HomePageElement.HomeContentSceneTextGreeting);
    });

    it('C51127 - Redirected to Homepage and show 1 transaction', () => {
        gestures.swipeUp(0.9);
        shouldShowItemListElement(HomePageElement.HomeSceneTransactionItem, 1);
    });

    afterAll(() => {
        logout();
    });
});

describe('C51128 - Successfully redirect to Homepage using Account that has more 5 transaction', () => {
    beforeAll('Login & input PIN', () => {
        navigateToLoginScene();
        login(
            LoginData.VALID_LOGIN_DATA_VERIFIED_NORMAL_USER.email,
            LoginData.VALID_LOGIN_DATA_VERIFIED_NORMAL_USER.password,
        );
        inputPin(LoginData.VALID_LOGIN_DATA_VERIFIED_NORMAL_USER.pin);
    });

    it('C51128 - Redirected to Homepage and show than 5 transaction', () => {
        waitUntil(
            HomePageElement.EmoneyActivationTooltipButtonClose,
            DEFAULT_VERY_LONG_WAIT,
        );
        click(HomePageElement.EmoneyActivationTooltipButtonClose);
        gestures.swipeDown(0.1);
        gestures.swipeUp();
        shouldShowItemListElement(HomePageElement.HomeSceneTransactionItem, 5);
    });
});
