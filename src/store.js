import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index'

const initialState = {};
const middleWare = [thunk];

const toCompose = [
    applyMiddleware(...middleWare)
];

if (window.__REDUX_DEVTOOLS_EXTENSION__){
    toCompose.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}

const store  = createStore(
    rootReducer,
    initialState,
    compose(
        ...toCompose        
    ));


export default store