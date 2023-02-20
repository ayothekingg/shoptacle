/** @format */
import React from "react";

import { Routes, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import Body from "./components/Homejs/Body";
import SignUp from "./components/SignUp/Signup";
import LogIn from "./components/SignUp/LogIn";
import Welcome from "./components/Welcome/Welcome";
import Arrivals from "./components/Arrivals";
import Commerce from "@chec/commerce.js";
import { useState } from "react";
import { useEffect } from "react";
import Carts from "./components/Carts/Carts";

const App = () => {
  const [cart, setCart] = useState({});
  console.log(cart);
  const fetchCart = async () => {
    const data = await commerce.cart.retrieve();
    setCart(data);
  };

  const handleAddToCart = async (productId, quantity) => {
    setCart(await commerce.cart.add(productId, quantity));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className="App">
      {/* <Welcome /> */}
      {/* <Body /> */}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          path="/arrivals/*"
          element={<Arrivals onAddToCart={handleAddToCart} cart={cart} />}
        />
      </Routes>
    </div>
  );
};

export default App;
