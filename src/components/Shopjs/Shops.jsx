/** @format */
import React from "react";
import bead from "./grid1.jpg";
import dress from "./grid2.jpg";
import call from "./grid3.jpg";

const Shops = () => {
  return (
    <section className="mb-40  font-merriweather max-w-[1240px] lg:ml-20">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-xl font-bold md:text-4xl">
          Why Shop With Us?
        </h1>
        <h2 className="text-center max-w-2xl mt-4 text-secondary ">
          Shoptacle is a large clothing store with several branches all over the
          country that deals with designers clothings, shoes and other fashion
          accessories.
        </h2>
      </div>

      <div className="max-w-[1120px]  flex flex-col  items-center md:grid  md:grid-cols-2 lg:grid-cols-3 md:mt-8 md:gap-14 md:ml-8 [&>div]:my-4  ">
        <div className="flex flex-col items-center max-w-sm ">
          <img src={bead} alt="bead-picture" />
          <h1 className="text-xl md:text-2xl font-bold text-center">
            Luxury & Quality
          </h1>
          <h2 className="text-center">
            Our watchword at Shoptacle is luxury and quality. We pride ourselves
            on delivering the very best to our customers.
          </h2>
        </div>
        <div className="flex flex-col items-center max-w-sm">
          {" "}
          <img src={dress} width="350" height="350" alt="dress-picture" />
          <h1 className="text-xl md:text-2xl font-bold text-center">
            Honesty & Efficiency
          </h1>
          <h2 className="text-center">
            Our customer’s needs are of high-priority to us and offer honesty &
            transparency in all of our dealings with them.
          </h2>
        </div>
        <div className="flex flex-col items-center max-w-sm">
          {" "}
          <img src={call} width="350" height="350" alt="call-picture" />
          <h1 className="text-xl md:text-2xl font-bold text-center">
            24/7 Customer Support
          </h1>
          <h2 className="text-center">
            Our customer support officers are ready 24 hours every single day to
            attend to all ofour client’s needs.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Shops;
