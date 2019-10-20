import axios from '../apis/apis';
import {AUTH_USER, AUTH_ERROR, USER_ID } from './types';
// import history from '../history';
// save token in localStorage
const token = "";
export const signUp = (formValues, callback) => {
    return async (dispatch) => {
        try {
        const response = await axios.post('/api/signup', formValues);
        dispatch({ type: AUTH_USER , payload: response.data.token });
        token = localStorage.setItem('token', response.data.token);
        callback();
        } catch (e) {
            dispatch({ type: AUTH_ERROR, payload: 'Email in Use'});
        }
    };
};

export const signIn = (formValues, callback) => {
    return async (dispatch) => {
        try {
        const response = await axios.post('/api/signin', formValues);
        dispatch({ type: AUTH_USER , payload: response.data.token });
        token = localStorage.setItem('token', response.data.token);
        callback();
        } catch (e) {
            dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials'});
        } 
    };
};

export const fetchCurrentUserId = () => {
    return async (dispatch) => {
        // try {
            const response = await axios.post('/api/userid', {Authorization: token});
            console.log(response.data);
            dispatch({ type: USER_ID, payload: response.data});
        // } catch(e) {
        //     dispatch({ type: USER_ID, payload: "user id not found"});
        // }
    }
}


export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    };
};
