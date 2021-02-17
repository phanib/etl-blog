import React, { useReducer } from "react";

const blogs = [{}, {}];

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  email: "tests",
  password: "",
  blogs,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, isLoggedIn: true };
    case "logout":
      return { ...state, isLoggedIn: false };
    case "updateUsername":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

const StateContext = React.createContext();
const DispatchContext = React.createContext();

export { StateContext, DispatchContext, initialState, reducer };
