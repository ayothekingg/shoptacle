import React from "react";

const Product = ({ product, onAddToCart }) => {
  return (
    <div>
      <div className="relative">
        <img src={product.image.url} width="" alt={product.name} srcSet="" />
        <h1 className="font-bold text-lg">{product.name}</h1>
        <div className="justify-between flex font-oswald">
          <h1>{product.price.formatted_with_symbol}</h1>

          <span>
            <svg
              className="inline"
              width="15"
              height="25"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.04894 0.927052C9.3483 0.00574108 10.6517 0.00573985 10.9511 0.92705L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.5501 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                fill="#121212"
              />
            </svg>
            <h1 className="inline ">4.8</h1>
          </span>
        </div>

        <div className="absolute top-2 right-2 border-black border-2 w-8 rounded-xl py-1 ">
          <button>
            <svg
              className="hover:fill-primaryII"
              onClick={() => onAddToCart(product.id, 1)}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 21.75C8.32843 21.75 9 21.0784 9 20.25C9 19.4216 8.32843 18.75 7.5 18.75C6.67157 18.75 6 19.4216 6 20.25C6 21.0784 6.67157 21.75 7.5 21.75Z"
                fill="#121212"
              />
              <path
                d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z"
                fill="#121212"
              />
              <path
                d="M3.96562 6.75H20.7844L18.3094 15.4125C18.2211 15.7269 18.032 16.0036 17.7711 16.2C17.5103 16.3965 17.1922 16.5019 16.8656 16.5H7.88437C7.55783 16.5019 7.2397 16.3965 6.97886 16.2C6.71803 16.0036 6.52893 15.7269 6.44062 15.4125L3.04688 3.54375C3.00203 3.38696 2.9073 3.24905 2.77704 3.15093C2.64677 3.05282 2.48808 2.99983 2.325 3H0.75"
                stroke="#121212"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5349 19.8658L20.1286 12.272C21.9942 10.397 22.2661 7.33138 20.5036 5.372C20.0616 4.87823 19.5236 4.47977 18.9223 4.20096C18.3211 3.92215 17.6694 3.76885 17.0069 3.75042C16.3445 3.73199 15.6852 3.84883 15.0694 4.09379C14.4536 4.33875 13.8943 4.70669 13.4255 5.17513L12.0005 6.6095L10.7724 5.372C8.89737 3.50638 5.83175 3.2345 3.87237 4.997C3.3786 5.43902 2.98013 5.97707 2.70132 6.57829C2.42251 7.1795 2.26921 7.83124 2.25079 8.4937C2.23236 9.15616 2.3492 9.81542 2.59416 10.4312C2.83912 11.047 3.20706 11.6063 3.6755 12.0751L11.4661 19.8658C11.6083 20.0066 11.8004 20.0856 12.0005 20.0856C12.2006 20.0856 12.3927 20.0066 12.5349 19.8658V19.8658Z"
                stroke="#121212"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
