/** @format */
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Shops from "./Shops";
import Collection from "./Collection";
import Deals from "./Deals";
import Client from "./Client";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Shops />
      <Collection />
      <Deals />
      <Client />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Body;
