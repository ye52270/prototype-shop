import { createStore } from "redux";
import reducer from "./reducer/combineReducer";
const store = createStore(reducer);
export default store;
