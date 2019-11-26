import axios from '../apis/apis';
import {AUTH_USER, 
        AUTH_ERROR, 
        USER_ID, 
        USER_DETAIL, 
        UPLOAD_PROFILE_PHOTO,
        UPDATE_PROFILE_INFO,
        SALE_ITEM_UPLOAD,
        RENT_ITEM_UPLOAD,
        UPLOAD_SALE_PHOTO,
        FECTH_SALE_ITEMS,

        FECTH_REQ_WTB_ITEMS,
        FECTH_REQ_WTR_ITEMS,
        UPLOAD_RENT_PHOTO,
        FECTH_RENT_ITEMS,
        FETCH_SINGLE_SALE_ITEM,
        FETCH_SINGLE_SALE_OWNER,
        FETCH_SINGLE_RENT_ITEM,
        FETCH_SINGLE_RENT_OWNER,
        FETCH_OWNER_PROFILE,
        MESSEGING,
        FETCH_MESSEGE,
        USER_SALE_ITEMS,
        USER_RENT_ITEMS,
        USER_WTB_ITEMS,
        USER_WTR_ITEMS,

        DELETE_SALE_ITEM,
        DELETE_RENT_ITEM,
        DELETE_WTB_ITEM,
        DELETE_WTR_ITEM,

        UPDATE_SALE_ITEM_DETAIL,
        UPDATE_SALE_ITEM_PHOTO,



        FETCH_SINGLE_REQ_WTB,
        FETCH_SINGLE_REQ_WTB_OWNER,
        FETCH_SINGLE_REQ_WTR,
        FETCH_SINGLE_REQ_WTR_OWNER,

        UPDATE_REQ_BUY_ITEM,
        UPDATE_REQ_RENT_ITEM,

        RENT_REVIEW,
        SELLER_REVIEW,

        SELLER_RATING,

        QUERY_RESULT,

        FETCH_CHAT,



        FETCH_RENT_REVIEW

    } from './types';
import history from '../history';
import { async } from 'q';

// save token in localStorage

export const fetchRentReview = ({itemId, currentUser}) => {
    return async (dispatch) => {
        console.log(itemId, currentUser);
        const response = await axios.get(`/fetchRentReview/${itemId}/${currentUser}`);
        dispatch({ type: FETCH_RENT_REVIEW, payload: response.data});
    }
}

export const fetchChat = (id) => {
    return async (dispatch) => {
        console.log("index id " , id)
        const response = await axios.get(`/fetchChat/${id}`);
        dispatch({ type: FETCH_CHAT, payload: response.data});
    }
}

export const queryResult = (formValues) => {
    return async (dispatch) => {
        console.log("i am query", formValues);
        const response = await axios.post(`/searchQuery`, formValues);
        console.log("i am search result ", response.data);
        dispatch({ type: QUERY_RESULT, payload: response.data});
        history.push("/query");
    }
}

export const sellerRating = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/sellerRating/${id}`);
        dispatch({ type: SELLER_RATING, payload: response.data});
    }
}

export const sellerReview = (formValues) => {
    return async (dispatch) => {
        const response = await axios.post('/sellerReview', formValues);
        dispatch({ type: SELLER_REVIEW, payload: response.data});
    }
}

export const rentReview = (formValues) => {
    return async (dispatch) => {
        const response = await axios.post('/rentReview', formValues);
        dispatch({ type: RENT_REVIEW, payload: response.data});
    }
}

export const updateReqSaleItem = (formValues) => {
    return async (dispatch) => {
        const response = await axios.post('/updateReqSaleItem', formValues);
        dispatch({ type: UPDATE_REQ_BUY_ITEM, payload: response.data});
        history.push("/myitems");
    }
}

export const updateReqRentItem = (formValues) => {
    return async (dispatch) => {
        const response = await axios.post('/updateReqRentItem', formValues);
        dispatch({ type: UPDATE_REQ_RENT_ITEM, payload: response.data});
        history.push("/myitems");
    }
}

export const fetchSingleReqWtb = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/fetchSingleReqWtb/${id}`);
        dispatch({ type: FETCH_SINGLE_REQ_WTB, payload: response.data});
    }
}

export const fetchSingleReqWtbOwner = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/fetchSingleReqWtbOwner/${id}`);
        dispatch({ type: FETCH_SINGLE_REQ_WTB_OWNER, payload: response.data});
    }
}

export const fetchSingleReqWtr = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/fetchSingleReqWtr/${id}`);
        dispatch({ type: FETCH_SINGLE_REQ_WTR, payload: response.data});
    }
}

export const fetchSingleReqWtrOwner = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/fetchSingleReqWtrOwner/${id}`);
        dispatch({ type: FETCH_SINGLE_REQ_WTR_OWNER, payload: response.data});
    }
}






export const updateSaleItemDetail = (formValues) => {
    return async (dispatch) => {
        console.log("i am values", formValues);
        const response = axios.post('/updateSaleItemDetail', formValues);
        console.log(response.data);
        // history.push("/");
    }
}

export const updateRentItemDetail = (formValues) => {
    return async (dispatch) => {
        console.log("i am values", formValues);
        const response = axios.post('/updateRentItemDetail', formValues);
        console.log(response.data);
        // history.push("/");
    }
}

export const deleteSaleItem = (id) => {
    return async (dispatch) => {
        const response = axios.delete(`/deleteSaleItem/${id}`);
        console.log(response.data);
        dispatch({ type: DELETE_SALE_ITEM, payload: response.data});
        history.push("/myitems")
    }
}

export const deleteRentItem = (id) => {
    return async (dispatch) => {
        const response = axios.delete(`/deleteRentItem/${id}`);
        console.log(response.data);
        dispatch({ type: DELETE_RENT_ITEM, payload: response.data});
        history.push("/myitems")
    }
}

export const deletewtbItem = (id) => {
    return async (dispatch) => {
        const response = axios.delete(`/deletewtbItem/${id}`);
        console.log(response.data);
        dispatch({ type: DELETE_WTB_ITEM, payload: response.data});
        history.push("/myitems")
    }
}

export const deletewtrItem = (id) => {
    return async (dispatch) => {
        const response = axios.delete(`/deletewtrItem/${id}`);
        console.log(response.data);
        dispatch({ type: DELETE_WTR_ITEM, payload: response.data});
        history.push("/myitems")
    }
}

export const fetchUserSaleItem = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/fetchUserSaleItem/${id}`);
        console.log("totla", response.data);
        dispatch({ type: USER_SALE_ITEMS, payload: response.data});
        // history.push("/myitems");
    }
}

export const fetchUserRentItem = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/fetchUserRentItem/${id}`);
        console.log("totla", response.data);
        dispatch({ type: USER_RENT_ITEMS, payload: response.data});
        // history.push("/myitems");
    }
}

export const fetchUserWTBItem = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/fetchUserwtbItem/${id}`);
        console.log("totla", response.data);
        dispatch({ type: USER_WTB_ITEMS, payload: response.data});
        // history.push("/myitems");
    }
}

export const fetchUserWTRItem = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/fetchUserwtrItem/${id}`);
        console.log("totla", response.data);
        dispatch({ type: USER_WTR_ITEMS, payload: response.data});
        // history.push("/myitems");
    }
}

export const fetchMessage = (currentUser, owner) => {
    return async (dispatch) => {
        // console.log("cuur", currentUser);
        // console.log("woner", owner)
        const response = await axios.get(`/fetchMessage/${currentUser}/${owner}`);
        dispatch({ type: FETCH_MESSEGE, payload: response.data});
    }
}

export const messageOwner = (formValues) => {
    return async (dispatch) => {
        // console.log("index", formValues)
        const response = await axios.post("sendMessage", formValues);
        dispatch({ type: MESSEGING, payload: response.data});
        // history.push(`/ChatBox/${formValues.currentUser}/${formValues.owner}`);
    }
}



export const fetchSingleSaleItem = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/fetchSingleSaleItem/${id}`);
        dispatch({ type: FETCH_SINGLE_SALE_ITEM, payload: response.data});
    }
}

export const fetchSingleSaleOwner = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/fetchSingleSaleOwner/${id}`);
        dispatch({ type: FETCH_SINGLE_SALE_OWNER, payload: response.data});
    }
}

export const fetchSingleRentItem = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/fetchSingleRentItem/${id}`);
        dispatch({ type: FETCH_SINGLE_RENT_ITEM, payload: response.data});
    }
}

export const fetchSingleRentOwner = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/fetchSingleRentOwner/${id}`);
        dispatch({ type: FETCH_SINGLE_RENT_OWNER, payload: response.data});
    }
}
export const fetchOwnerProfile = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/fetchOwnerProfile/${id}`);
        dispatch({ type: FETCH_OWNER_PROFILE, payload: response.data});
    }
}

export const fetchSaleItems = (formValues) => {
    return async (dispatch) => {
        var defaultValues = {
            category : "category",
            minPrice: -1,
            maxPrice: -1
        }
        const response = await axios.post('/fetchSaleItems', formValues === undefined ? defaultValues : formValues);
        dispatch({ type: FECTH_SALE_ITEMS, payload: response.data});
        history.push("/saleItems");
    }
}

export const fetchRentItems = (formValues) => {
    return async (dispatch) => {
        var defaultValues = {
            category : "category",
            minPrice: -1,
            maxPrice: -1,
            minRating: -1
        }
        const response = await axios.post('/fetchRentItems',formValues === undefined ? defaultValues : formValues );
        dispatch({ type: FECTH_RENT_ITEMS, payload: response.data});
        // history.push("/rentItems");
    }
}

export const fetchReqWTBItems = (formValues) => {
    return async (dispatch) => {
        var defaultValues = {
            category : "category",
            minPrice: -1,
            maxPrice: -1,
            sort: 'default'
        }
        const response = await axios.post('/fetchReqWTBItems',formValues === undefined ? defaultValues : formValues);
        dispatch({ type: FECTH_REQ_WTB_ITEMS, payload: response.data});
        history.push("/requestedWTBItems");
    }
}

/// ia ma gerw
export const fetchReqWTRItems = (formValues) => {
    return async (dispatch) => {
        var defaultValues = {
            category : "category",
            minPrice: -1,
            maxPrice: -1,
            sort: 'default'
        }
        const response = await axios.post('/fetchReqWTRItems',formValues === undefined ? defaultValues : formValues);
        dispatch({ type: FECTH_REQ_WTR_ITEMS, payload: response.data});
        history.push("/requestedWTRItems");
    }
}

export const uploadSaleItem = (formValues) => {
    return async (dispatch) => {
        console.log("priting" ,formValues)
        const userSaleItem = {
            id: formValues.id,
            itemCategory: formValues.itemCategory,
            itemDescription: formValues.itemDescription,
            itemName: formValues.itemName,
            itemPrice: formValues.itemPrice,
            itemPurDate: formValues.itemPurDate
        }

        const res1 = await axios.post('/uploadSaleItem', userSaleItem);

        console.log("conslling ressd", res1.data.itemId);
        const res2 = await axios.post(`/uploadSaleItemImage/${res1.data.itemId}`, formValues.form);
        // console.log(res2.data)
        dispatch({ type: SALE_ITEM_UPLOAD, payload: res1.data});
        dispatch({ type: UPLOAD_SALE_PHOTO, payload: res2.data})
        history.push('/saleItems');
    }
}

export const uploadRentItem = (formValues) => {
    return async (dispatch) => {
        console.log("rent uplaod", formValues)
        const userRentItem = {
            user_id: formValues.id,
            item_category: formValues.itemCategory,
            item_desc:formValues.itemDescription,
            item_name:formValues.itemName,
            item_dop:formValues.itemPurDate,
            rent_duration_days:formValues.itemRentDurLimitDays,
            rent_duration_hours:formValues.itemRentDurLimitHours,
            rent_rate:formValues.itemRentRate
        }
        const res1 = await axios.post('/uploadRentItem', userRentItem);
        console.log("conslling ressd", res1.data.itemId);
        const res2 = await axios.post(`/uploadRentItemImage/${res1.data.itemId}`, formValues.form);
        dispatch({ type: RENT_ITEM_UPLOAD, payload: res1.data});
        dispatch({ type: UPLOAD_RENT_PHOTO, payload: res2.data})
        history.push('/rentItems');
    }
}

export const uploadWtb = (formValues) => {
    return async (dispatch) => {
     const response = await axios.post("/uploadReqBuy", formValues);
        console.log(response.data);
        dispatch({ type: RENT_ITEM_UPLOAD, payload: response.data});
        history.push('/requestedWTBItems');
    }
}

export const uploadWtr = (formValues) => {
    return async (dispatch) => {
     const response = await axios.post("/uploadReqRent", formValues);
        console.log(response.data);
        dispatch({ type: RENT_ITEM_UPLOAD, payload: response.data});
        history.push('/requestedWTRItems');
    }
}
export const updateProfileInfo = (formValues) => {
    return async (dispatch) => {
        const response = await axios.post('/updateprofileinfo', formValues);
        dispatch({ type: UPDATE_PROFILE_INFO, payload: response.data});
        history.push('/profile');
    }
}
export const signUp = (formValues, callback) => {
    return async (dispatch) => {
        try {
            console.log(formValues)
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

export const uploadProfilePhoto = (formValues) => {
    return async (dispatch) => {
        // console.log(formValues);
        const from = formValues.myFile[0];
        var form = new FormData();
        form.append("myFile", from)
        const response = await axios.post(`/uploadfile/${formValues.id}`, form);
        dispatch({ type: UPLOAD_PROFILE_PHOTO, payload: response.data})
        history.push('/profile')
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










////////////////////////////////////////////////////////////


export const uploadSaleItemSinglePhoto1 = (formValues) => {
    return async (dispatch) => {
        console.log("first testing", formValues);
        const from = formValues.myFile[0];
        var form = new FormData();
        form.append("myFile", from)
        const response = await axios.post(`/uploadSaleSinglePhoto1/${formValues.id}`, form);
        dispatch({ type: UPDATE_SALE_ITEM_PHOTO, payload: response.data})
        // history.push('/profile')
        window.history.go()
    }
}


export const uploadSaleItemSinglePhoto2 = (formValues) => {
    return async (dispatch) => {
        console.log("first testing", formValues);
        const from = formValues.myFile[0];
        var form = new FormData();
        form.append("myFile", from)
        const response = await axios.post(`/uploadSaleSinglePhoto2/${formValues.id}`, form);
        dispatch({ type: UPDATE_SALE_ITEM_PHOTO, payload: response.data})
        // history.push('/profile')
        window.history.go()
    }
}

export const uploadSaleItemSinglePhoto3 = (formValues) => {
    return async (dispatch) => {
        console.log("first testing", formValues);
        const from = formValues.myFile[0];
        var form = new FormData();
        form.append("myFile", from)
        const response = await axios.post(`/uploadSaleSinglePhoto3/${formValues.id}`, form);
        dispatch({ type: UPDATE_SALE_ITEM_PHOTO, payload: response.data})
        // history.push('/profile')
        window.history.go()
    }
}


export const uploadSaleItemSinglePhoto4 = (formValues) => {
    return async (dispatch) => {
        console.log("first testing", formValues);
        const from = formValues.myFile[0];
        var form = new FormData();
        form.append("myFile", from)
        const response = await axios.post(`/uploadSaleSinglePhoto4/${formValues.id}`, form);
        dispatch({ type: UPDATE_SALE_ITEM_PHOTO, payload: response.data})
        // history.push('/profile')
        window.history.go()
    }
}

export const uploadSaleItemSinglePhoto5 = (formValues) => {
    return async (dispatch) => {
        console.log("first testing", formValues);
        const from = formValues.myFile[0];
        var form = new FormData();
        form.append("myFile", from)
        const response = await axios.post(`/uploadSaleSinglePhoto5/${formValues.id}`, form);
        dispatch({ type: UPDATE_SALE_ITEM_PHOTO, payload: response.data})
        // history.push('/profile')
        window.history.go()
    }
}



export const uploadSaleItemSinglePhoto6 = (formValues) => {
    return async (dispatch) => {
        console.log("first testing", formValues);
        const from = formValues.myFile[0];
        var form = new FormData();
        form.append("myFile", from)
        const response = await axios.post(`/uploadSaleSinglePhoto6/${formValues.id}`, form);
        dispatch({ type: UPDATE_SALE_ITEM_PHOTO, payload: response.data})
        // history.push('/profile')
        window.history.go()
    }
}

////////////////////////////////////////////////////////////


export const uploadRentItemSinglePhoto1 = (formValues) => {
    return async (dispatch) => {
        console.log("first testing", formValues);
        const from = formValues.myFile[0];
        var form = new FormData();
        form.append("myFile", from)
        const response = await axios.post(`/uploadRentSinglePhoto1/${formValues.id}`, form);
        dispatch({ type: UPDATE_SALE_ITEM_PHOTO, payload: response.data})
        // history.push('/profile')
        window.history.go()
    }
}


export const uploadRentItemSinglePhoto2 = (formValues) => {
    return async (dispatch) => {
        console.log("first testing", formValues);
        const from = formValues.myFile[0];
        var form = new FormData();
        form.append("myFile", from)
        const response = await axios.post(`/uploadRentSinglePhoto2/${formValues.id}`, form);
        dispatch({ type: UPDATE_SALE_ITEM_PHOTO, payload: response.data})
        // history.push('/profile')
        window.history.go()
    }
}

export const uploadRentItemSinglePhoto3 = (formValues) => {
    return async (dispatch) => {
        console.log("first testing", formValues);
        const from = formValues.myFile[0];
        var form = new FormData();
        form.append("myFile", from)
        const response = await axios.post(`/uploadRentSinglePhoto3/${formValues.id}`, form);
        dispatch({ type: UPDATE_SALE_ITEM_PHOTO, payload: response.data})
        // history.push('/profile')
        window.history.go()
    }
}


export const uploadRentItemSinglePhoto4 = (formValues) => {
    return async (dispatch) => {
        console.log("first testing", formValues);
        const from = formValues.myFile[0];
        var form = new FormData();
        form.append("myFile", from)
        const response = await axios.post(`/uploadRentSinglePhoto4/${formValues.id}`, form);
        dispatch({ type: UPDATE_SALE_ITEM_PHOTO, payload: response.data})
        // history.push('/profile')
        window.history.go()
    }
}

export const uploadRentItemSinglePhoto5 = (formValues) => {
    return async (dispatch) => {
        console.log("first testing", formValues);
        const from = formValues.myFile[0];
        var form = new FormData();
        form.append("myFile", from)
        const response = await axios.post(`/uploadRentSinglePhoto5/${formValues.id}`, form);
        dispatch({ type: UPDATE_SALE_ITEM_PHOTO, payload: response.data})
        // history.push('/profile')
        window.history.go()
    }
}



export const uploadRentItemSinglePhoto6 = (formValues) => {
    return async (dispatch) => {
        console.log("first testing", formValues);
        const from = formValues.myFile[0];
        var form = new FormData();
        form.append("myFile", from)
        const response = await axios.post(`/uploadRentSinglePhoto6/${formValues.id}`, form);
        dispatch({ type: UPDATE_SALE_ITEM_PHOTO, payload: response.data})
        // history.push('/profile')
        window.history.go()
    }
}