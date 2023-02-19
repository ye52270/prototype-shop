import React from "react";
// import useActions from "../hooks/useActions";

export default function Orders({ orders, prototypes, totalPrice }) {
  // const { remove, removeAll } = useActions();

  return orders.length === 0 ? (
    <aside>
      <div className="empty">
        <div className="title">You don't have any orders</div>
        <div className="subtitle">Click on a + to add an order</div>
      </div>
    </aside>
  ) : (
    <aside>
      <div className="order">
        <div className="body">
          {orders.map((order) => {
            const { id } = order;
            const prototype = prototypes.find((p) => p.id === id);
            // const click = () => {
            //   remove(id);
            // };
            return (
              <div className="item" key={id}>
                <div className="img">
                  <video src={prototype.thumbnail}></video>
                </div>
                <div className="content">
                  <p className="title">
                    {prototype.title} X {order.quantity}
                  </p>
                </div>
                <div className="action">
                  <p className="price">$ {prototype.price * order.quantity}</p>
                  {/* <button className="btn btn--link" onClick={click}> */}
                  <button className="btn btn--link">
                    <i className="icon icon--cross" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">
          <hr />
          <div className="item">
            <div className="content">Total </div>
            <div className="action">
              <div className="price">${totalPrice}</div>
            </div>
            {/* <button className="btn btn--link" onClick={removeAll}>
              <i className="icon icon--delete"></i>
            </button> */}
          </div>
          <button
            className="btn btn--secondary"
            style={{ width: "100%", marginTop: 10 }}
          >
            Checkout
          </button>
        </div>
      </div>
    </aside>
  );
}
