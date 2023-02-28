/** @format */
import React from "react";

import { Routes, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import Body from "./components/Homejs/Body";
import SignUp from "./components/SignUp/Signup";
import LogIn from "./components/SignUp/LogIn";

import Arrivals from "./components/Arrivals";

import { useState } from "react";
import { useEffect } from "react";

import Shipping from "./components/Checkout/Shipping";
import Payment from "./components/Checkout/Payment";
import Review from "./components/Checkout/Review";
import Confirmation from "./components/Checkout/Confirmation";

const App = () => {
  const [cart, setCart] = useState({});
  const [shippingData, setShippingData] = useState({});
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchCart = async () => {
    const data = await commerce.cart.retrieve();
    setCart(data);
  };

  const handleAddToCart = async (productId, quantity) => {
    setCart(await commerce.cart.add(productId, quantity));
  };
  const removeCart = async (productId) => {
    setCart(await commerce.cart.remove(productId));
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const next = (data) => {
    setShippingData(data);
  };

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateTokenFrom(cart.id, {
          type: "cart",
        });

        setCheckoutToken(token);
      } catch (error) {}
    };
    generateToken();
  }),
    [cart];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route
          path="/arrivals/*"
          element={
            <Arrivals
              onAddToCart={handleAddToCart}
              cart={cart}
              removeCart={removeCart}
            />
          }
        />
        <Route
          path="/shipping"
          element={<Shipping next={next} checkoutToken={checkoutToken} />}
        />
        <Route
          path="/payment"
          element={
            <Payment
              shippingData={shippingData}
              checkoutToken={checkoutToken}
              onCaptureCheckout={handleCaptureCheckout}
            />
          }
        />
        <Route
          path="/review"
          element={<Review cart={cart} checkoutToken={checkoutToken} />}
        />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
};

export default App;
