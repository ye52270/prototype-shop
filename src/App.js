import React from "react";
import Footer from "./components/Footer";
import OrdersContainer from "./container/OrdersContainer";
import Header from "./components/Header";
import PrototypesContainer from "./container/PrototypesContainer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <PrototypesContainer />
        <OrdersContainer />
        <Footer />
      </div>
    </>
  );
}

export default App;
