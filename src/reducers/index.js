import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import userData from './userData';
export default combineReducers ({
    auth: auth,
    form: formReducer,
    userData: userData
});