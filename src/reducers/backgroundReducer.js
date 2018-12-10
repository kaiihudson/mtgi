import {FETCH_CARDS_IMAGES} from "../Actions/types";

const initialState = {
    images: []}


export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CARDS_IMAGES:
            return {
                ...state,
                images: action.payload
            };
        default:
            return state;
    }
}