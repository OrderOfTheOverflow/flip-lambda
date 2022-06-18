import {requestApi} from '../../../networking/base';
import {
    TRANSACTION_TYPE_BUNDLE_TRANSFERS,
    TRANSACTION_TYPE_FORWARD_TRANSFERS,
    TRANSACTION_TYPE_REFUND_TRANSFERS,
    TRANSACTION_TYPE_TOP_UP_TRANSFERS,
    TRANSACTION_TYPE_WALLET_TOP_UP_TRANSFERS,
    TRANSACTION_TYPE_WITHDRAWAL_TRANSFERS,
} from '../../shared/data/transactions/transaction-type.data';

const {api} = require('../../../networking/base');
const {ENDPOINT} = require('./index');

const dotenv = require('dotenv');
dotenv.config();

const deleteTransaction = (data) => {
    return api.post(ENDPOINT.DELETE_TRANSACTION, data);
};

const deleteForwardTransferTransaction = (email, limit = 4) => {
    const data = {
        limit,
        transaction_type: TRANSACTION_TYPE_FORWARD_TRANSFERS,
        user_email: email,
    };
    requestApi(deleteTransaction(data));
};

const deleteTopUpTransferTransaction = (email, limit = 4) => {
    const data = {
        limit,
        transaction_type: TRANSACTION_TYPE_TOP_UP_TRANSFERS,
        user_email: email,
    };
    requestApi(deleteTransaction(data));
};

const deleteTopUpE2PayTransferTransaction = (email, limit = 4) => {
    const data = {
        limit,
        transaction_type: TRANSACTION_TYPE_WALLET_TOP_UP_TRANSFERS,
        user_email: email,
    };
    requestApi(deleteTransaction(data));
};

const deleteWithdrawalTransferTransaction = (email, limit = 4) => {
    const data = {
        limit,
        transaction_type: TRANSACTION_TYPE_WITHDRAWAL_TRANSFERS,
        user_email: email,
    };
    requestApi(deleteTransaction(data));
};

const deleteBundleTransferTransaction = (email, limit = 4) => {
    const data = {
        limit,
        transaction_type: TRANSACTION_TYPE_BUNDLE_TRANSFERS,
        user_email: email,
    };
    requestApi(deleteTransaction(data));
};

const deleteRefundTransferTransaction = (email, limit = 4) => {
    const data = {
        limit,
        transaction_type: TRANSACTION_TYPE_REFUND_TRANSFERS,
        user_email: email,
    };
    requestApi(deleteTransaction(data));
};

module.exports = {
    deleteForwardTransferTransaction,
    deleteTopUpE2PayTransferTransaction,
    deleteTopUpTransferTransaction,
    deleteWithdrawalTransferTransaction,
    deleteBundleTransferTransaction,
    deleteRefundTransferTransaction,
};
