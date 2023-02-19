export const ADD_ORDER = "ADD_ORDER";
export const REMOVE_ONE = "REMOVE_ONE";
export const REMOVE_ALL = "REMOVE_ALL";

export default function addToOrder(id) {
  return {
    type: ADD_ORDER,
    id,
  };
}

export function remove(id) {
  return {
    type: REMOVE_ONE,
    id,
  };
}

export function removeAll() {
  return {
    type: REMOVE_ALL,
  };
}
