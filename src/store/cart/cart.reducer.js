import {
  ADD_TO_CART,
  GET_CART_ITEMS_SUCCESS,
  REMOVE_FROM_CART,
} from "./cart.types";

const initState = {
  loading: false,
  error: false,
  cartItems: [],
};

export const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };
    case REMOVE_FROM_CART:
      let remaining = state.cartItems.filter((e) => e.id != payload.id);
      return {
        ...state,
        cartItems: [...remaining],
      };
    case GET_CART_ITEMS_SUCCESS:
      let filtered = state.cartItems.filter((e) => e.email == payload);
      return {
        ...state,
        cartItems: filtered,
      };

    default:
      return state;
  }
};
