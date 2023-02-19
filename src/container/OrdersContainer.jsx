import Orders from "../components/Orders";
import React from "react";
import { useSelector } from "react-redux";
import usePrototypes from "../hooks/usePrototypes";
import { useMemo } from "react";

export default function OrdersContainer() {
  const orders = useSelector((state) => state.orders);
  const prototypes = usePrototypes();
  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { id, quantity } = order;
        const prototype = prototypes.find((p) => p.id === id);
        return prototype.price * quantity;
      })
      .reduce((acu, cur) => acu + cur, 0);
  }, [orders, prototypes]);

  return (
    <Orders orders={orders} prototypes={prototypes} totalPrice={totalPrice} />
  );
}
