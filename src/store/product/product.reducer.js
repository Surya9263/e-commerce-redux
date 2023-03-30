import {
  GET_ALL_PRODUCTS_ERROR,
  GET_ALL_PRODUCTS_LOADING,
  GET_ALL_PRODUCTS_SUCCESS,
} from "./product.types";

const initState = {
  loading: false,
  error: false,
  products: [],
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        products: payload,
      };
    default:
      return state;
  }
};
