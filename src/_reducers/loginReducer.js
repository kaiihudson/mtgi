import { LOGIN, LOGOUT} from "../_actions/types";
import { LOGGED_IN, LOG_ERROR, LOGGED_OUT } from '../_actions/loginActions'

const InitialState = {
    status: LOGGED_OUT
    loginData: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: action.payload
            };
        default:
            return state;
    }
}