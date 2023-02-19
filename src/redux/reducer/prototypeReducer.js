import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
} from "../action/prototypeAction";

export function prototypes(state = [], action) {
  switch (action.type) {
    case FETCH_START:
      return {
        loading: true,
      };
    case FETCH_SUCCESS:
      return { ...state, prototypes, loading: false, error: null };
    case FETCH_ERROR:
      return { loading: false, error: action.error };
    default:
      return state;
  }
}
