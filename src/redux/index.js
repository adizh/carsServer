import {createStore, compose, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];
const composeFunction = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
const composeEnchantres = composeFunction(applyMiddleware(...middleware));
const store = createStore(rootReducer(), initialState, composeEnchantres);
export default store;