import SENDER_BANK_DATA from '../../shared/data/banks/sender-bank.data';
import {requestApi} from '../../../networking/base';
import BENEFICIARY_BANKS_DATA from '../../shared/data/banks/beneficiary-bank.data';

const {api} = require('../../../networking/base');
const {ENDPOINT} = require('./index');

const dotenv = require('dotenv');
dotenv.config();

const updateBeneficiaryBankDisturbance = (data) => {
    return api.post(ENDPOINT.UPDATE_BENEFICIARY_BANK_DISTURBANCE, data);
};

const updateSenderBankDisturbance = (data) => {
    return api.post(ENDPOINT.UPDATE_SENDER_BANK_DISTURBANCE, data);
};

const setAllSenderBankToNormal = () => {
    const keys = Object.values(SENDER_BANK_DATA);
    const data = {
        normal: keys.map(key => key.id),
    };
    requestApi(updateSenderBankDisturbance(data));
};

const setAllBeneficiaryBankToNormal = () => {
    const keys = Object.values(BENEFICIARY_BANKS_DATA);
    const data = {
        normal: keys.map(key => key.id),
    };
    requestApi(updateBeneficiaryBankDisturbance(data));
};

const setAllBanksToNormal = () => {
    setAllBeneficiaryBankToNormal();
    setAllSenderBankToNormal();
};


module.exports = {
    updateBeneficiaryBankDisturbance,
    updateSenderBankDisturbance,
    setAllBeneficiaryBankToNormal,
    setAllSenderBankToNormal,
    setAllBanksToNormal,
};
