import axios from "axios";
import {
  GET_ALL_PRODUCTS_ERROR,
  GET_ALL_PRODUCTS_LOADING,
  GET_ALL_PRODUCTS_SUCCESS,
} from "./product.types";

export const getProducts = (category) => async (dispatch) => {
  dispatch({ type: GET_ALL_PRODUCTS_LOADING });
  const url = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : "https://fakestoreapi.com/products";
  try {
    const res = await axios.get(url);
    dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_ALL_PRODUCTS_ERROR });
  }
};
