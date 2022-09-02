/** @format */
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Shops from "./components/Shopjs/Shops";
import Collection from "./components/Collections/Collection";
import Deals from "./components/Deals/Deals";
import Client from "./components/Client/Client";
import Subscribe from "./components/Subscribe/Subscribe";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Shops />
      <Collection />
      <Deals />
      <Client />
      <Subscribe />
    </div>
  );
};

export default App;
