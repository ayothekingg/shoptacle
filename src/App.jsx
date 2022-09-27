/** @format */
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

import Body from "./components/Homejs/Body";
import SignUp from "./components/SignUp/Signup";
import LogIn from "./components/SignUp/LogIn";
import Welcome from "./components/Welcome/Welcome";

const App = () => {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Welcome />
      {/* <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes> */}
    </div>
  );
};

export default App;
