import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import productsReducer from "./modules/products/reducer";
import cartProductsReducer from "./modules/cart/reducer";

const reducers = combineReducers({ products: productsReducer, cart: cartProductsReducer });
const store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;