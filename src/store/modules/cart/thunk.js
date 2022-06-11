import { addProduct, subProduct } from "./actions";
import {cartProductReducer } from './reducer'

export const addProductThunk = (cartProductsReducer) => (dispatch) => {


  localStorage.setItem(addProduct)
  localStorage.setItem(subProduct)

}

