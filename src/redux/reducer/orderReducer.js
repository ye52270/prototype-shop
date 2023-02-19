import { ADD_ORDER, REMOVE_ONE, REMOVE_ALL } from "../action/orderAction";

export function orders(state = [], action) {
  if (action.type === ADD_ORDER) {
    const finded = state.find((order) => order.id === action.id);

    if (finded === undefined) {
      return [...state, { id: action.id, quantity: 1 }];
    } else {
      return state.map((order) => {
        if (order.id === action.id) {
          return { id: action.id, quantity: order.quantity + 1 };
        } else {
          return order;
        }
      });
    }
  }

  if (action.type === REMOVE_ONE) {
    return { ...state, id: action.id };
  }

  if (action.type === REMOVE_ALL) {
    return { ...state, id: action.id };
  }

  return state;
}
