import { combineReducers } from "redux";
import { orders } from "./orderReducer";
import { prototypes } from "./prototypeReducer";

const reducer = combineReducers({
  orders,
  prototypes,
});

export default reducer;
