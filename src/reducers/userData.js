import { USER_ID } from '../actions/types';
export default function(state = {}, action) {
    switch(action.type) {
        case USER_ID:
            return {...state, userId: action.payload}
        default:
            return state
    };
};