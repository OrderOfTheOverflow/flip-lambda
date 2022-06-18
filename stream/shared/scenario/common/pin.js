import {DEFAULT_VERY_SHORT_WAIT, shortPause} from '../../../../helper';

const {click} = require('../../../../helper');

const timeout = DEFAULT_VERY_SHORT_WAIT / 2;
export const inputPin = (pin, label) => {
    shortPause();
    pin.split('').forEach((number) => {
        shortPause(timeout);
        click(`${label}-${number}`);
    });
};
