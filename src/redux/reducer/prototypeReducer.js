import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
} from "../action/prototypeAction";

const initialState = {
  loading: false,
  prototypes: [],
  error: null,
};
export function prototypes(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SUCCESS:
      return { ...state, loading: false, prototypes: action.prototypes };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
