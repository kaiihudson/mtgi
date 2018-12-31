import {FETCH_CARDS, FETCH_CARD_DETAILS} from "../_actions/types";

const initialState = {
    cards: [],
    details: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CARDS:
            return {
                ...state,
                cards: action.payload
            };
        case FETCH_CARD_DETAILS:
            return {
                ...state,
                details: action.payload
            };
        default:
            return state;
    }
}