import { LOGIN, LOGOUT} from "../Actions/types";

const InitialState = {
    isLoggedIn: false
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