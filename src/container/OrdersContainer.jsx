import Orders from "../components/Orders";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useCallback } from "react";
import { remove, removeAll } from "../redux/action/orderAction";
import { getPrototypesThunk } from "../redux/action/prototypeAction";

export default function OrdersContainer() {
  const orders = useSelector((state) => state.orders);
  const prototypes = useSelector((state) => state.prototypes.prototypes);
  const dispatch = useDispatch();
  // const prototypes = usePrototypes();
  const getPrototypes = useCallback(() => {
    dispatch(getPrototypesThunk());
  }, [dispatch]);

  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const prototype = prototypes.find((p) => p.id === id);
        return prototype.price * quantity;
      })
      .reduce((acu, cur) => acu + cur, 0);
  }, [orders, prototypes]);
  const handdlerRemoveId = (id) => {
    dispatch(remove(id));
  };
  const handdlerRemoveAll = () => {
    dispatch(removeAll());
  };
  return (
    <Orders
      orders={orders}
      prototypes={prototypes}
      totalPrice={totalPrice}
      handdlerRemoveId={handdlerRemoveId}
      handdlerRemoveAll={handdlerRemoveAll}
      getPrototypes={getPrototypes}
    />
  );
}
