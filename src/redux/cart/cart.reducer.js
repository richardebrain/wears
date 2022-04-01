import { addItemToCart, removeItemFromCart } from "./cart.utils";
import cartActiontypes from "./cart.types"
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],

}
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActiontypes.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartActiontypes.ADD_ITEM:
    return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case cartActiontypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
      case cartActiontypes.REMOVE_ITEM:
      return{
        ...state,
        cartItems:removeItemFromCart(state.cartItems,action.payload)

      }
    default:
      return state;
  }

}
export default cartReducer
