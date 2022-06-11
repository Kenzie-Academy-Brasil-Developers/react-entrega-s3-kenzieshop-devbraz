const cartProductsReducer = (state = [], action) => {

  switch(action.type) {
    case 'ADD_SHOP':
      const {payload} = action
      console.log(payload)
      return [...state, payload]
    case 'SUB_SHOP':
      const newState = state.filter(product => product.id !== action.payload.id)
      return newState
    default:
      return state
  }

};

export default cartProductsReducer;