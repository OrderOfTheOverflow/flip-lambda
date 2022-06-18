import LoginData from '../../data/user/login.data';
import LoginPageElement from '../../page-elements/login.page';
import HomePageElement from '../../../shared/page-elements/home.page';
import TopUpPageElement from '../../../docter/page-elements/top-up.page';
import {loginUsingEMoney} from '../../../shared/scenario/common/login';
import {
    click,
    DEFAULT_LONG_WAIT,
    DEFAULT_VERY_LONG_WAIT,
    isDisplayed,
    pause,
    reset,
    shouldShowElement,
} from '../../../../helper';

describe('C52953 - Successfully redirect to Top-up page using E2pay Account', () => {
    it('Login using emoney', () => {
        loginUsingEMoney(
            LoginData.VALID_LOGIN_DATA_E2PAY.email,
            LoginData.VALID_LOGIN_DATA_E2PAY.password,
            LoginData.VALID_LOGIN_DATA_E2PAY.pin,
        );
    });

    it('Navigate to home page', () => {
        shouldShowElement(HomePageElement.HomeSceneButtonTopUpBalance, DEFAULT_LONG_WAIT);
        shouldShowElement(HomePageElement.HomeSceneTouchableFlipCoin);
        shouldShowElement(HomePageElement.HomeContentSceneTextBalance);
        shouldShowElement(HomePageElement.HomeContentSceneImageEmoney);
    });

    it('Navigate to top up page', () => {
        pause(DEFAULT_LONG_WAIT);
        click(HomePageElement.HomeSceneButtonTopUpBalance);
        shouldShowElement(TopUpPageElement.TopUpEmoneyFormSceneTextTitleFlipSaldo, DEFAULT_VERY_LONG_WAIT);
        shouldShowElement(TopUpPageElement.TopUpEmoneyFormSceneButtonTopUpSaldo);
        shouldShowElement(TopUpPageElement.NavigationButtonBackLeft);
    });

    it('C52953 - Navigate back to home page', () => {
        click(TopUpPageElement.NavigationButtonBackLeft);
        shouldShowElement(LoginPageElement.HomeContentSceneTextGreeting, DEFAULT_VERY_LONG_WAIT);
        shouldShowElement(HomePageElement.HomeSceneButtonTopUpBalance, DEFAULT_LONG_WAIT);
        shouldShowElement(HomePageElement.HomeSceneTouchableFlipCoin);
        shouldShowElement(HomePageElement.HomeContentSceneTextBalance);
        shouldShowElement(HomePageElement.HomeContentSceneImageEmoney);
    });
    afterAll(() => {
        reset();
    });
});

describe('C52977 - Successfully tap Icon Flip Coin using E2pay Account', () => {
    it('Login using emoney', () => {
        loginUsingEMoney(
            LoginData.VALID_LOGIN_DATA_E2PAY.email,
            LoginData.VALID_LOGIN_DATA_E2PAY.password,
            LoginData.VALID_LOGIN_DATA_E2PAY.pin,
        );
    });

    it('Navigate to home page', () => {
        shouldShowElement(HomePageElement.HomeSceneButtonTopUpBalance, DEFAULT_LONG_WAIT);
        shouldShowElement(HomePageElement.HomeSceneTouchableFlipCoin);
        shouldShowElement(HomePageElement.HomeContentSceneTextBalance);
        shouldShowElement(HomePageElement.HomeContentSceneImageEmoney);
    });

    it('Tap icon flip coin', () => {
        pause(DEFAULT_LONG_WAIT);
        click(HomePageElement.HomeSceneTouchableFlipCoin);
    });

    it('Show popup flip coin', () => {
        shouldShowElement(HomePageElement.HomeSceneTextWhatIsFlipCoin);
        shouldShowElement(HomePageElement.HomeSceneTouchableUnderstandFlipCoin);
    });

    it('C52977 - Close popup flip coin', () => {
        click(HomePageElement.HomeSceneTouchableUnderstandFlipCoin);
        !isDisplayed(HomePageElement.HomeSceneTextWhatIsFlipCoin);
    });
});
