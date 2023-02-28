import React from "react";
import Product from "./Product";

const Products = ({ products, onAddToCart, totalItems }) => {
  return (
    <section>
      <div className="flex justify-between font-oswald max-w-[1240px] lg:ml-20 mb-4">
        <button className="bg-transparent border-2 border-black rounded-2xl px-2 py-1">
          <svg
            className="inline"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5625 4.0625H3.125"
              stroke="#121212"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.875 4.0625H9.6875"
              stroke="#121212"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.125 5.625C8.98794 5.625 9.6875 4.92544 9.6875 4.0625C9.6875 3.19956 8.98794 2.5 8.125 2.5C7.26206 2.5 6.5625 3.19956 6.5625 4.0625C6.5625 4.92544 7.26206 5.625 8.125 5.625Z"
              stroke="#121212"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.5625 9.6875H3.125"
              stroke="#121212"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.875 9.6875H14.6875"
              stroke="#121212"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.125 11.25C13.9879 11.25 14.6875 10.5504 14.6875 9.6875C14.6875 8.82456 13.9879 8.125 13.125 8.125C12.2621 8.125 11.5625 8.82456 11.5625 9.6875C11.5625 10.5504 12.2621 11.25 13.125 11.25Z"
              stroke="#121212"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.4375 15.3125H16.875"
              stroke="#121212"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.125 15.3125H5.3125"
              stroke="#121212"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.875 16.875C6.01206 16.875 5.3125 16.1754 5.3125 15.3125C5.3125 14.4496 6.01206 13.75 6.875 13.75C7.73794 13.75 8.4375 14.4496 8.4375 15.3125C8.4375 16.1754 7.73794 16.875 6.875 16.875Z"
              stroke="#121212"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All Filters
        </button>

        <button className="bg-transparent border-2 border-black rounded-2xl px-2 py-1">
          Sort by:
          <select name="filter" id="filter">
            <option className="" value="Most Recent">
              Most Recent
            </option>
          </select>
        </button>
      </div>
      <div className="flex flex-col items-center font-merriweather md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 max-w-[1240px] gap-8 lg:ml-20">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            totalItems={totalItems}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
