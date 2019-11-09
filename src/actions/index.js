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
        FECTH_REQ_ITEMS,
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
        USER_WTR_ITEMS
    } from './types';
import history from '../history';
import { async } from 'q';

// save token in localStorage
export const fetchUserSaleItem = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/fetchUserSaleItem/${id}`);
        console.log("totla", response.data);
        dispatch({ type: USER_SALE_ITEMS, payload: response.data});
        history.push("/myitems");
    }
}

export const fetchUserRentItem = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/fetchUserRentItem/${id}`);
        console.log("totla", response.data);
        dispatch({ type: USER_RENT_ITEMS, payload: response.data});
        history.push("/myitems");
    }
}

export const fetchUserWTBItem = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/fetchUserwtbItem/${id}`);
        console.log("totla", response.data);
        dispatch({ type: USER_WTB_ITEMS, payload: response.data});
        history.push("/myitems");
    }
}

export const fetchUserWTRItem = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`/fetchUserwtrItem/${id}`);
        console.log("totla", response.data);
        dispatch({ type: USER_WTR_ITEMS, payload: response.data});
        history.push("/myitems");
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

export const fetchSaleItems = () => {
    return async (dispatch) => {
        const response = await axios.get('/fetchSaleItems');
        dispatch({ type: FECTH_SALE_ITEMS, payload: response.data});
        // history.push("/saleItems");
    }
}

export const fetchRentItems = () => {
    return async (dispatch) => {
        const response = await axios.get('/fetchRentItems');
        dispatch({ type: FECTH_RENT_ITEMS, payload: response.data});
        // history.push("/rentItems");
    }
}

export const fetchReqItems = () => {
    return async (dispatch) => {
        const response = await axios.get('/fetchReqItems');
        dispatch({ type: FECTH_REQ_ITEMS, payload: response.data});
        // history.push("/requestedItems");
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
        history.push('/requestedItems');
    }
}

export const uploadWtr = (formValues) => {
    return async (dispatch) => {
     const response = await axios.post("/uploadReqRent", formValues);
        console.log(response.data);
        dispatch({ type: RENT_ITEM_UPLOAD, payload: response.data});
        history.push('/requestedItems');
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
