export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export function fetchStart() {
  return {
    type: FETCH_START,
    loading: true,
  };
}

export function fetchSuccess(prototypes) {
  return {
    type: FETCH_SUCCESS,
    loading: false,
    prototypes,
    error: null,
  };
}

export function fetchFail(error) {
  return {
    type: FETCH_ERROR,
    loading: false,
    error,
  };
}
