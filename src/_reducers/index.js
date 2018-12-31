import { combineReducers } from 'redux';
import postReducer from './backgroundReducer';
import searchReducer from "./searchReducer";

export default combineReducers({
    cardImages: postReducer,
    cardInfo: searchReducer,
    cardDetails: searchReducer
})