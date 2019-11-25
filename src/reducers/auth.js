import {AUTH_USER, 
    AUTH_ERROR, 
    USER_ID, 
    USER_DETAIL, 
    UPLOAD_PROFILE_PHOTO,
    FECTH_SALE_ITEMS,
    FECTH_REQ_WTB_ITEMS,
    FECTH_REQ_WTR_ITEMS,
    FECTH_RENT_ITEMS, 
    FETCH_SINGLE_SALE_ITEM, 
    FETCH_SINGLE_SALE_OWNER,
    FETCH_SINGLE_RENT_ITEM, 
    FETCH_SINGLE_RENT_OWNER,
    FETCH_OWNER_PROFILE,
    FETCH_MESSEGE,
    USER_SALE_ITEMS,
    USER_RENT_ITEMS,
    USER_WTB_ITEMS,
    USER_WTR_ITEMS,


    FETCH_SINGLE_REQ_WTB,
    FETCH_SINGLE_REQ_WTB_OWNER,
    FETCH_SINGLE_REQ_WTR,
    FETCH_SINGLE_REQ_WTR_OWNER,

    SELLER_RATING,
    QUERY_RESULT,

    FETCH_CHAT,

    FETCH_RENT_REVIEW

} from '../actions/types';
import { stat } from 'fs';
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
        case USER_DETAIL:
            return {...state, userDetail: action.payload};
        case UPLOAD_PROFILE_PHOTO:
            return {...state, profilePhoto: action.payload};
        case FECTH_SALE_ITEMS:
            return {...state, saleItems: action.payload};
        case FECTH_REQ_WTB_ITEMS:
            return {...state, reqItems: action.payload};
        case FECTH_REQ_WTR_ITEMS:
            return {...state, reqItems: action.payload};
        case FECTH_RENT_ITEMS:
            return {...state, rentItems: action.payload};
        case FETCH_SINGLE_SALE_ITEM:
            return {...state, singleSaleItem: action.payload};
        case FETCH_SINGLE_SALE_OWNER:
            return {...state, singleSaleOwner: action.payload};
        case FETCH_SINGLE_RENT_ITEM:
                return {...state, singleRentItem: action.payload};
        case FETCH_SINGLE_RENT_OWNER:
            return {...state, singleRentOwner: action.payload};
        case FETCH_MESSEGE:
            return {...state, messege: action.payload};
        case FETCH_OWNER_PROFILE:
            return {...state, fetchOwnerProfileDetail: action.payload};
        case USER_WTB_ITEMS:
            return {...state, fetchUserWTBuyItems: action.payload};
        case USER_WTR_ITEMS:
            return {...state, fetchUserWTRentItems: action.payload};
        case USER_SALE_ITEMS:
            return {...state, fetchUserSellingItems: action.payload};
        case USER_RENT_ITEMS:
            return {...state, fetchUserRentingItems: action.payload};
        case FETCH_SINGLE_REQ_WTB:
            return {...state, fetchUserWTBitem: action.payload};
        case FETCH_SINGLE_REQ_WTB_OWNER:
            return {...state, fetchSingleWTbOwner: action.payload};
        case FETCH_SINGLE_REQ_WTR:
            return {...state, fetchUserWTRitem: action.payload}
        case FETCH_SINGLE_REQ_WTR_OWNER:
            return {...state, fetchSingleWTrOwner: action.payload};
        case SELLER_RATING:
            return {...state, sellerRate: action.payload};
        case QUERY_RESULT:
            return {...state, query: action.payload};
        case FETCH_CHAT:
            return {...state, chatList: action.payload}
        case FETCH_RENT_REVIEW:
            return {...state, rent_review: action.payload}
        default:
        return state;
    };
};