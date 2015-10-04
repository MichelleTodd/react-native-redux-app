'use strict';

export const REQUEST_DATA = 'REQUEST_DATA';

export function requestData() {
    return {
        type: REQUEST_DATA,
    };
};

export const RECEIVE_DATA = 'RECEIVE_DATA';

export function receiveData() {
    return {
        type: RECEIVE_DATA,
    };
};