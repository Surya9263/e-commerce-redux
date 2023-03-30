import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./product/product.reducer";
import { userReducer } from "./user/user.reducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart:cartReducer,
  users:userReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
