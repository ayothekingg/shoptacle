/** @format */
import React from "react";

const Subscribe = () => {
  return (
    <section className=" font-merriweather max-w-[1240px] lg:ml-20 mb-40">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-xl font-bold md:text-4xl">
          Don’t be left out! Stay up to date.
        </h1>
        <h2 className="text-center max-w-4xl mt-4 text-secondary ">
          Get early access to our sales, discounts, and promotions. Also get
          updates on our new releases, latest news and information. Enter your
          email address below to stay in the loop.
        </h2>
      </div>

      <div className="[ mt-20 flex-col flex justify-center items-center ">
        <span className=" [&>*]:mx-2">
          <input
            className="w-48 md:w-96 py-2 md:pr-24 border-neutralII border-[0.5px]"
            placeholder="Enter Email Address"
            type="text"
          />

          <button className=" font-oswald border-[0.5px]  rounded-sm py-1 px-12 text-lg text-white leading-[36px]  bg-buttonBrown hover:text-buttonBrown hover:bg-buttonWhite hover:border-buttonBrown">
            Subscribe
          </button>
        </span>
      </div>
    </section>
  );
};

export default Subscribe;
