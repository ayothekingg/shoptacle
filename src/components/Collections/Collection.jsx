/** @format */

import React from "react";
import bag from "./bag.jpg";
import bead from "./bead.jpg";
import tie from "./tie.jpg";
import watch from "./watch.jpg";

const Collection = () => {
  return (
    <section className="font-merriweather md:max-w-[1240px] lg:ml-20 ">
      {" "}
      <h1 className="text-center text-xl font-bold md:text-4xl mb-16">
        Shop Our Collections...
      </h1>
      <div className="[&>*]:max-w-sm [&>*]:my-2 md:[&>*]:max-w-[1240px] flex flex-col items-center    md:grid md:gap-10  md:grid-cols-2  ">
        <div>
          <img src={bag} alt="bags-picture" />
        </div>

        <div className="grid grid-rows-2 gap-2">
          <img src={tie} alt="tie-picture" />

          <div className="grid grid-cols-2 md:gap-5">
            <div>
              {" "}
              <img src={watch} alt="watch-picture" />
            </div>
            <div>
              {" "}
              <img src={bead} alt="bead-picture" />
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Collection;
