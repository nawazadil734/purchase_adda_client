import {AUTH_USER, AUTH_ERROR, USER_ID } from '../actions/types';
const INITIAL_STATE = {
    authenticated: '',
    errorMessage: '',
    userid: ''
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case AUTH_USER:
            return {...state, authenticated: action.payload };
        case AUTH_ERROR:
            return {...state, errorMessage: action.payload };
        case USER_ID:
            return {...state, userid: action.payload.userId};
        default:
            return state;
    };
};