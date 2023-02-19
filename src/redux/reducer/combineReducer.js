import { combineReducers } from "redux";
import { orders } from "./orderReducer";

const reducer = combineReducers({
  orders,
});

export default reducer;
