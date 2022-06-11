import iphone from './iphone-x.png'
import lg from './lg-g6.png'
import xiomi from './xiomi.png'

const initialState = [
  {id: 1, name: "Iphone X", price: 5279.00, image: iphone},
  {id: 2, name: "LG G6", price: 1499.00, image: lg},
  {id: 3, name: "Xiomi Redmi", price: 3499.00, image: xiomi}
]

const productsReducer = (state = initialState, action) => {

   return state;

};

export default productsReducer;