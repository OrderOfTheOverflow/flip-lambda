const AccountNumberData = require('../../../data/user/account-number.data');
const PageElement = require('../../../../docter/page-elements/v2/send-money.page');
const {
    DEFAULT_VERY_LONG_WAIT,
} = require('../../../../../helper');
const {setAllBanksToNormal} = require('../../../api/bank');
const {deleteForwardTransferTransaction} = require('../../../api/transaction');
const LoginData = require('../../../data/user/login.data');
const {
    clickBottomSheetTransferType,
    clickSenderBankItem,
    clickTransactionConfirmationButton,
    createNewBeneficiaryAccount,
    fillTransferAmount,
    handleReviewScene,
} = require('../../../scenario/common/v2/send-money');
const {TRANSFER_TYPE} = require('@auto-shared/constants/transfer-type.constant');
const {prepareCreateTransactionForEmoneyUser} = require('../../../../shared/scenario/common/send-money');
const {waitUntil} = require("../../../../../helper/index");

describe('Send Money to Bank using Bank Transfer', () => {

    beforeAll(() => {
        setAllBanksToNormal();
    });

    afterAll('Delete transaction', () => {
        deleteForwardTransferTransaction(
            LoginData.SINGLE_TRANSFER_V2.email,
            1
        );
    });

    it('User able to create ST with nominal 10k, Flip Instan', () => {
        prepareCreateTransactionForEmoneyUser(
            LoginData.SINGLE_TRANSFER_V2.email,
            LoginData.SINGLE_TRANSFER_V2.password,
            LoginData.SINGLE_TRANSFER_V2.pin,
        );

        clickBottomSheetTransferType(TRANSFER_TYPE.transferBank);

        const amount = 10000;
        const beneficiaryBank = AccountNumberData.BTPN;
        const senderBank = 'bri';

        createNewBeneficiaryAccount(beneficiaryBank);
        fillTransferAmount(amount);

        handleReviewScene();

        clickSenderBankItem(senderBank);
        clickTransactionConfirmationButton();

        waitUntil(PageElement.ProcessSceneTextTransactionIdTitle, DEFAULT_VERY_LONG_WAIT);
    });

});
