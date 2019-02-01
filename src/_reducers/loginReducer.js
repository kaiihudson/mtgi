import { LOGIN, LOGOUT} from "../_actions/types";

const initialState = {
        status: LOGGED_OUT,
        loginData: null
    };

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                status: action.payload.status,
                loginData: action.payload.loginData
            };
        case LOGOUT:
            return {
                ...state,
                status: action.payload.status,
                loginData: null
            };
        default:
            return state;
    }
}