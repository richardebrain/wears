import { addItemToCart } from "./cart.utils";
import cartActiontypes from "./cart.actiontypes"
const INITIAL_STATE ={
  hidden:true,
  cartItems: []
}
const cartReducer =(state=INITIAL_STATE,action)=>{
  switch(action.type){
    case cartActiontypes.TOOGLE_CART_HIDDEN:
      return{
        ...state,
        hidden:!state.hidden
      };
      case cartActiontypes.ADD_ITEM :
        return{
          ...state,
          cartItems:addItemToCart(state.cartItems,action.payload)
        }
      default:
      return state;
  }

}
export default cartReducer
