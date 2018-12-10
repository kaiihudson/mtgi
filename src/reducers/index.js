import { combineReducers } from 'redux';
import postReducer from './postReducer';
import searchReducer from "./searchReducer";

export default combineReducers({
    cardImages: postReducer,
    cardInfo: searchReducer,
    cardDetails: searchReducer
})