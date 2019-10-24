import axios from '../apis/apis';
import {AUTH_USER, AUTH_ERROR, USER_ID, USER_DETAIL } from './types';
// import history from '../history';
// save token in localStorage
export const signUp = (formValues, callback) => {
    return async (dispatch) => {
        try {
        const response = await axios.post('/api/signup', formValues);
        dispatch({ type: AUTH_USER , payload: response.data.token });
        localStorage.setItem('token', response.data.token);
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
        localStorage.setItem('token', response.data.token);
        callback();
        } catch (e) {
            dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials'});
        } 
    };
};

export const fetchCurrentUserId = () => {
    return async (dispatch) => {
            let token = localStorage.getItem('token')
            const response = await axios.get('/api/userid', {
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                   'Content-Type': 'application/json',
                   "Authorization": token
                      }});
            // console.log("adil userid: " ,response.data);
            dispatch({ type: USER_ID, payload: response.data});
    }
}

export const fetchUserDetail = (id) => {
    return async (dispatch) => {
        const response = await axios.post('/api/userdata',{id: id});
        dispatch({ type: USER_DETAIL, payload: response.data})
    }
}


export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    };
};
