import { combineReducers } from "redux";
import feedsReducer from "./feedsReducer";

const myReducer = combineReducers({
  feeds: feedsReducer,
  cartItems: cartReducer,
});

export default myReducer;
