const SendMoneyButtonData = require('../../../data/user/send-money-button.data');
const PageElement = require('../../../../docter/page-elements/send-money.page');
const LoginPageElement = require('../../../page-elements/login.page');
const {login, navigateToLoginScene, inputPin} = require('../../../../shared/scenario/common/login');
const {
    click,
    waitUntil,
    shouldShowElement,
    DEFAULT_LONG_WAIT,
    DEFAULT_VERY_LONG_WAIT
} = require('../../../../../helper');

describe('Send Money Button', () => {
    it('Navigate to login scene', () => {
        navigateToLoginScene();
    });

    it('Login using SendMoneyButtonData', () => {
        login(SendMoneyButtonData.user.email, SendMoneyButtonData.user.password);
        inputPin(SendMoneyButtonData.user.pin);

        shouldShowElement(LoginPageElement.HomeContentSceneTextGreeting, DEFAULT_VERY_LONG_WAIT);
        click(PageElement.HomeSceneClosePopUpBalanceActivation);

    });

    it('Navigate to Send Beneficiary Scene', () => {
        waitUntil(PageElement.HomeSceneButtonSendMoney, DEFAULT_LONG_WAIT); // loading

        // click send money button and navigate to send money beneficiary scene
        click(PageElement.HomeSceneButtonSendMoney);
        shouldShowElement(
            PageElement.SendMoneyCreateNewBeneficiaryAccountSceneTouchableBeneficiaryBank
        );
    });
});
