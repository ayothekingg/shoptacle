/** @format */

import React from "react";
import glass from "./glass.jpg";

const Deals = () => {
  return (
    <section className="mb-40 bg-primaryII  font-merriweather   ">
      <div className="flex flex-col items-center lg:flex-row    lg:ml-20 lg:max-w-[1240px] ">
        <div className="lg:flex-[0_0_40%]">
          <img src={glass} alt="glass-picture" width="400" />
        </div>

        <div className=" py-2 flex flex-col mt-12 items-center justify-center first:">
          <div className="text-center md:text-start max-w-xl ">
            <h1 className="text-xl lg:text-2xl  font-bold ">
              Deals Of The Month!
            </h1>
            <h2 className="pt-4 text-lg md:text-xl  font-lato text-primary">
              Get to shop amazing deals and discount on the webshop just like
              you do in any of our physical stores. With a monthly clearance
              sale every month, you have the chance to get any of your desired
              fashion items with ease.
            </h2>
            <div className="pt-6 [&>*]:mx-2 [&>*]:text-secondary ">
              <button className="rounded-[100%] border-2 border-main px-4 py-2">
                <span className="text-2xl font-bold">14</span>
                <br />
                Days
              </button>
              <button className="rounded-[100%] border-2 border-main px-4 py-2">
                <span className="text-2xl font-bold">08</span>
                <br />
                Hours
              </button>
              <button className="rounded-[100%] border-2 border-main px-4 py-2">
                <span className="text-2xl font-bold">45</span>
                <br />
                Mins
              </button>
              <button className="rounded-[100%] border-2 border-main px-4 py-2">
                <span className="text-2xl font-bold">59</span>
                <br />
                Secs
              </button>
            </div>
            <button
              className="mt-8
            font-oswald border-none rounded-sm py-2 px-6 text-2xl text-white leading-[36px]  border-2 bg-buttonBlack hover:text-black hover:bg-buttonWhite"
            >
              Show More Deals
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
