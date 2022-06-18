import axios from 'axios';
import queryString from 'querystring';

const dotenv = require('dotenv');
dotenv.config();

export const requestApi = (callback) => {
    return driver.call(() => callback);
};

const transformArray = (data) => {
    let str = '';
    if (data && typeof data === 'object') {
        const keys = Object.keys(data);
        keys.map((key) => {
            if (data[key] && Array.isArray(data[key])) {
                const suffix = '&';
                data[key].map(item => {
                    str = str + key + '[]=' + item + suffix;
                });
            }
        });
    }
    if (str) {
        str = str.substring(0, str.length - 1);
    }
    return str;
};
const api = axios.create({
    baseURL: process.env.FLIP_BASE_URL,
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
        'testing-api-key': process.env.TESTING_API_KEY,
    },
    // Since all api mobile v2 mostly x-www-form-urlencoded, we must stringify the request body
    // to allow pass request body as object.
    transformRequest: [
        function (data) {
            const transformedArray = transformArray(data);
            if (transformedArray) {
                return transformedArray;
            }
            return queryString.stringify(data);
        }
    ],
    // Always resolve axios promise
    validateStatus: function () {
        return true;
    },
});

export {
    api
};
