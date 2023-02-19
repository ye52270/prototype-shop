import React from "react";
import Footer from "./components/Footer";
import OrdersContainer from "./container/OrdersContainer";
import Header from "./components/Header";
import Prototypes from "./components/Prototypes";
import AppStateProvider from "./providers/AppStateProvider";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className="container">
        <Prototypes />
        <OrdersContainer />
        <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;
