/** @format */
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Shops from "./components/Shopjs/Shops";
import Collection from "./components/Collections/Collection";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Shops />
      <Collection />
    </div>
  );
};

export default App;
