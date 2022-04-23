import {applyMiddleware ,createStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import persistStore from "redux-persist/lib/persistStore";
import thunk from "redux-thunk";

const middlewares =[thunk];
if (process.env.NODE_ENV==='development'){
  middlewares.push(logger)
}

export const store = createStore(rootReducer,applyMiddleware(...middlewares));

export const persistor = persistStore(store)
// export default {store,persistor};