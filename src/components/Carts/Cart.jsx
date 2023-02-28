import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, OnRemoveCart }) => {
  return (
    <section>
      <div>
        <div className="flex justify-between max-w-[1240px] lg:ml-20">
          <h1 className="text-3xl font-semibold font-merriweather">
            Carts({cart.total_unique_items})
          </h1>

          <Link to="/arrivals">
            {" "}
            <h1 className="font-oswald text-main">Keep Shopping </h1>
          </Link>
        </div>
        <table>
          <tbody>
            <tr className="bg-welcome md:[&>*]:px-20  md:[&>*]:py-2 [&>*]:text-center w-full ">
              <th>Products</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Quantity</th>
              <th>Total Amount</th>
              <th>Action</th>
            </tr>
            {cart?.line_items?.map((items) => (
              <tr className="text-center ">
                <td className="">
                  <div className="flex justify-center">
                    {" "}
                    <img
                      className="w-24"
                      src={items.image.url}
                      alt={items.name}
                    />
                  </div>
                </td>
                <td>{items.name}</td>
                <td>{items.price.formatted_with_symbol}</td>
                <td>
                  {" "}
                  <select name="quantity" id="quantity">
                    <option value={items.quantity}>{items.quantity}</option>
                  </select>
                </td>
                <td>{items.line_total.formatted_with_symbol}</td>
                <td>
                  <svg
                    className="inline"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.625 6.125H4.375"
                      stroke="#BD2B45"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.375 11.375V18.375"
                      stroke="#BD2B45"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.625 11.375V18.375"
                      stroke="#BD2B45"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.875 6.125V22.75C21.875 22.9821 21.7828 23.2046 21.6187 23.3687C21.4546 23.5328 21.2321 23.625 21 23.625H7C6.76794 23.625 6.54538 23.5328 6.38128 23.3687C6.21719 23.2046 6.125 22.9821 6.125 22.75V6.125"
                      stroke="#BD2B45"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.375 6.125V4.375C18.375 3.91087 18.1906 3.46575 17.8624 3.13756C17.5342 2.80937 17.0891 2.625 16.625 2.625H11.375C10.9109 2.625 10.4658 2.80937 10.1376 3.13756C9.80937 3.46575 9.625 3.91087 9.625 4.375V6.125"
                      stroke="#BD2B45"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <button
                    className="font-oswald text-error inline cursor-pointer"
                    onClick={() => OnRemoveCart(items?.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className=" flex flex-col md:flex-row justify-between w-full max-w-[1240px] lg:ml-20 ">
          <div className="flex-1 mt-10 max-w-lg ml-3">
            <h1 className="font-oswald text-lg mb-2">Do you have a coupon?</h1>
            <input
              placeholder="Enter Coupon Code"
              className="font-oswald w-52 lg:w-80 py-2 border-2 border-secondary  placeholder:text-sm"
            />{" "}
            <span className="ml-2 border-2 text-sm font-oswald text-buttonWhite bg-buttonBlack py-2 px-6 border-solid border-black ` hover:border-buttonBlack  rounded-[4px] cursor-pointer  ">
              Apply Coupon
            </span>
          </div>

          <div className="w-full self-center mt-10 flex flex-1 flex-col font-oswald max-w-[250px] [&>*]:my-3 ">
            <div className="flex justify-between">
              <h1>Sub Total</h1>
              <h1>{cart?.subtotal?.formatted_with_symbol}</h1>
            </div>
            <div className="flex justify-between">
              <h1>Shipping Fee</h1>
              <h1 className="text-success">FREE</h1>
            </div>
            <div className="flex justify-between">
              <h1>Delivery Fee</h1>
              <h1 className="text-success">FREE</h1>
            </div>
            <div className="pt-3 flex justify-between border-t-2 border-secondary">
              <h1 className="font-merriweather font-bold">Total</h1>
              <h1>{cart?.subtotal?.formatted_with_symbol}</h1>
            </div>

            <Link to="/shipping">
              {" "}
              <button className="text-center ml-2 border-2 text-sm font-oswald text-buttonWhite bg-buttonBlack py-2 px-6 border-solid border-black ` hover:border-buttonBlack  rounded-[4px]  hover:text-success ">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
