/** @format */

import React from "react";
import { useState } from "react";
import Navbar from "../Homejs/Navbar.jsx";
import { useContext } from "react";
import { UserContext } from "../../contexts/context";
import { Link } from "react-router-dom";
import loginpage from "./loginpage.jpg";

import {
  signInWithGooglePopUp,
  createUserDocument,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase";

const defaultFields = {
  email: "",
  password: "",
};

const LogIn = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const { currentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    await createUserDocument(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <section>
      <Navbar />

      <div className="flex flex-col md:flex-row ">
        <div className="hidden  flex-[0_0_60%] md:flex justify-center">
          <img src={loginpage} alt="login-media" width="600px" />
        </div>
        <div className="flex flex-col items-center">
          {currentUser ? (
            <h1 className="text-center">
              Welcome,{" "}
              <span className="font-oswald font-bold">
                {currentUser.displayName}
              </span>{" "}
              !, please click{" "}
              <span className="text-main cursor-pointer">
                {" "}
                <Link to="/arrivals">
                  here to proceed to Shoptacle Store
                </Link>{" "}
              </span>{" "}
            </h1>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col [&>h1]:mt-2 [&>input]:mt-2 [&>button]:mt-36"
            >
              <h1 className="text-center md:text-start text-3xl font-bold">
                Log In
              </h1>
              <label> Email Address</label>
              <input
                value={email}
                onChange={handleChange}
                name="email"
                required
                className="w-full  md:w-96 py-2 md:pr-24 border-neutralII border-[0.5px]"
                placeholder="Enter Email Address"
                type="email"
              />

              <label>Password</label>
              <input
                value={password}
                name="password"
                onChange={handleChange}
                required
                className="w-full md:w-96 py-2 md:pr-24 border-neutralII border-[0.5px]"
                placeholder="Enter Password"
                type="password"
              />
              <span className="mt-2">
                <input
                  className="ring-main"
                  required
                  type="checkbox"
                  id="agree"
                  name="remember"
                  value="agree"
                />
                <label htmlFor="remember">Remember Me</label>
                <h1 className="float-right text-main">Forgot Password?</h1>
              </span>

              <button
                type="submit"
                className="font-oswald border-[0.5px]  rounded-sm py-1 px-12 text-lg text-white leading-[36px]  bg-buttonBrown  hover:bg-buttonBlack hover:text-buttonWhite "
              >
                Log In
              </button>

              <span className="mt-24 text-center">
                {" "}
                <button
                  onClick={logGoogleUser}
                  className="font-oswald text-sm text-buttonBlack  bg-buttonWhite py-2 px-6 border-solid border-2 border-buttonBlack ` hover:bg-buttonBlack hover:text-buttonWhite rounded-[4px]  "
                >
                  <svg
                    className="inline mr-2"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6486 7.36875H9.18066V10.8492H14.0182C13.8096 11.9742 13.1768 12.9258 12.2229 13.5633C11.4166 14.1023 10.3877 14.4211 9.17832 14.4211C6.83691 14.4211 4.85645 12.8391 4.14863 10.7133C3.97051 10.1742 3.86738 9.59766 3.86738 9.00469C3.86738 8.41172 3.97051 7.83516 4.14863 7.29609C4.85879 5.17266 6.83926 3.59063 9.18066 3.59063C10.5002 3.59063 11.6838 4.04531 12.6166 4.93594L15.1947 2.35547C13.6361 0.902344 11.6041 0.0117188 9.18066 0.0117188C5.66738 0.0117188 2.62754 2.02734 1.14863 4.96641C0.539258 6.18047 0.192383 7.55391 0.192383 9.00703C0.192383 10.4602 0.539258 11.8312 1.14863 13.0453C2.62754 15.9844 5.66738 18 9.18066 18C11.6088 18 13.6432 17.1938 15.1291 15.8203C16.8283 14.2547 17.8104 11.9484 17.8104 9.20859C17.8104 8.57109 17.7541 7.95937 17.6486 7.36875Z"
                      fill="#5B5B5B"
                    />
                  </svg>
                  Log In With Google
                </button>
                <button className="font-oswald text-sm text-buttonBlack  bg-buttonWhite py-2 px-6 border-solid border-2 border-buttonBlack ` hover:bg-buttonBlack hover:text-buttonWhite rounded-[4px] ml-2 ">
                  <svg
                    className="inline mr-2"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.477 0 0 4.477 0 10C0 14.991 3.657 19.128 8.438 19.879V12.89H5.898V10H8.438V7.797C8.438 5.291 9.93 3.907 12.215 3.907C13.309 3.907 14.453 4.102 14.453 4.102V6.562H13.193C11.95 6.562 11.563 7.333 11.563 8.124V10H14.336L13.893 12.89H11.563V19.879C16.343 19.129 20 14.99 20 10C20 4.477 15.523 0 10 0Z"
                      fill="#5B5B5B"
                    />
                  </svg>
                  Log In With FaceBook
                </button>
              </span>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default LogIn;
