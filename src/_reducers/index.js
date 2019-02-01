import { combineReducers } from 'redux';
import postReducer from './backgroundReducer';
import searchReducer from "./searchReducer";
import mainPageReducer from "./mainPageReducer";

export default combineReducers({
    cardImages: postReducer,
    cardInfo: searchReducer,
    cardDetails: searchReducer,
    mainPage: mainPageReducer
})