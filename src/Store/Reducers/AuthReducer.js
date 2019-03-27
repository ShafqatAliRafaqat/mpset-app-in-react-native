import * as actions from "../Actions/type";
import { setItem, removeItem } from '../../util/functions';

const initSate = {
    user: null,
};

const AuthReducer = (state = initSate, action) => {

    switch (action.type) {

        case actions.LOGIN: {

            let user = { ...action.payload.user };

            user.auth = {
                ...action.payload.auth,
                accessToken: action.payload.access_token
            };
            localStorage = setItem("mpsetUser", JSON.stringify(user));

            return {
                ...state,
                user
            };
        }

        case actions.SET_USER: {

            let user = { ...action.payload };


            return {
                ...state,
                user
            };
        }


        case actions.LOGOUT: {
            removeItem('mpsetUser');
            return {
                ...state,
                user: null
            };
        }
        // case actions.Fetch: {
        //     console.log('action',action)
        //     return {
        //         ...state,
        //         data: action.data
        //     };
        // }

        default: {
            return state;
        }
    }

};


export default AuthReducer;