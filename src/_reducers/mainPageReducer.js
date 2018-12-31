import { actions } from '../_actions/mainPageActions'

const initialState = {
    howManyLoadings: 0
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.START_LOADING:
            return {
                ...state,
                howManyLoadings: state.howManyLoadings+1
            };
        case actions.STOP_LOADING:
            const newHowManyLoadings = state.howManyLoadings - 1
            return {
                ...state,
                howManyLoadings: newHowManyLoadings < 0 ? 0 : newHowManyLoadings
            };
        default:
            return state;
    }
}