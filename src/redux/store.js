import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer/combineReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
