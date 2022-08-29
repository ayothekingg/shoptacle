/** @format */
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Shops from "./components/Shopjs/Shops";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Shops />
    </div>
  );
};

export default App;
