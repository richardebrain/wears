import userReducer from "./user/user.reducer";
import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import directoryReducer from "./directory-redux/directory.reducer";
import shopReducer from "./shop-redux/shop.reducer";

const persistConfig ={
  key:'roots',
  storage,
  whitelist:["cart"]
};   
const rootReducer = combineReducers({
  user:userReducer,
  cart:cartReducer,
  directory:directoryReducer,
  shop:shopReducer
});

export default persistReducer(persistConfig,rootReducer)