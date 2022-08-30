/** @format */
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Shops from "./components/Shopjs/Shops";
import Collection from "./components/Collections/Collection";
import Deals from "./components/Deals/Deals";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Shops />
      <Collection />
      <Deals />
    </div>
  );
};

export default App;
