import React from "react";
import Footer from "./components/Footer";
import Orders from "./components/Orders";
import Header from "./components/Header";
import Prototypes from "./components/Prototypes";
import AppStateProvider from "./providers/AppStateProvider";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;
