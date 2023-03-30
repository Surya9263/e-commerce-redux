import { USER_LOGIN, USER_LOGOUT, USER_SIGNUP } from "./user.types";

const initState = {
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || {},
  users: JSON.parse(localStorage.getItem("users")) || [],
};

export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_SIGNUP:
      const updatedUsers = [...state.users, payload];
      localStorage.setItem("currentUser", JSON.stringify(payload));
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return {
        ...state,
        currentUser: payload,
        users: updatedUsers,
      };
    case USER_LOGIN:
      localStorage.setItem("currentUser", JSON.stringify(payload));
      return {
        ...state,
        currentUser: payload,
      };
    case USER_LOGOUT:
      localStorage.removeItem("currentUser");
      return {
        ...state,
        currentUser: {},
      };
    default:
      return state;
  }
};
