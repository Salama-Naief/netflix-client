import { createStore, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";
import RootReducer from "../reduceres/RootReducer";
const initialState = {};

const Store = createStore(
  RootReducer,
  initialState,
  compose(applyMiddleware(Thunk))
);

export default Store;
