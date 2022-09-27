/** @format */
import React from "react";
import frame1 from "./frame1.jpg";
import frame2 from "./frame2.jpg";
import frame3 from "./frame3.jpg";
import frame4 from "./frame4.jpg";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section className="font-merriweather bg-welcome [&>*]:py-4 md:h-screen">
      <div className="flex flex-col justify-center">
        <svg
          className="m-auto"
          width="121"
          height="120"
          viewBox="0 0 121 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.7749 36.9844C25.0718 31.6594 23.8812 22.275 24.6687 17.1094C25.4562 11.9438 27.5187 7.18128 31.8218 5.29691C35.5437 3.67503 40.1843 5.39066 42.8655 9.40316C44.3937 11.6907 45.2655 14.5125 46.0062 17.3063C47.2718 22.1063 48.4812 28.6688 49.0905 33.6094"
            stroke="#B1922E"
            stroke-width="3"
            stroke-miterlimit="10"
          />
          <path
            d="M29.2902 109.35L6.63086 99.9094L11.8902 76.7157L10.7652 23.8594L68.1027 17.1282V22.1344L81.7434 23.8594L29.2902 109.35Z"
            fill="#D4AF37"
          />
          <path
            d="M86.6094 100.725L29.2813 109.406L24.4062 79.05V32.5312L81.7438 23.8594V70.3687L86.6094 100.725Z"
            fill="#DBBC58"
          />
          <path
            d="M24.4063 32.5313V27.3L10.7656 23.8594L68.2156 17.4844L70.0531 21.5531L81.7438 23.8594L24.4063 32.5313Z"
            fill="#263238"
          />
          <path
            d="M6.63086 99.9094C7.02461 99.9094 20.2059 89.4562 20.2059 89.4562L29.2809 109.406L27.3309 77.5969L24.3777 32.5312L20.5434 81.2344L6.63086 99.9094Z"
            fill="#B1922E"
          />
          <path
            d="M68.0473 18.0844L69.4348 21.2906L69.6129 21.7125L70.0535 21.825L77.0379 23.6157L25.3441 31.4438V26.5688L24.6316 26.3906L15.9316 24.1969L68.0473 18.0844ZM68.6379 17.0719L10.7754 23.8594L24.416 27.3V32.5406L81.7441 23.8594L70.2973 20.9156L68.6379 17.0719Z"
            fill="#D4AF37"
          />
          <path
            d="M41.7032 36.0468C41 30.7312 33.6782 10.3124 47.6938 7.7062C58.2875 5.73745 62.9657 28.3031 63.5844 33.2531"
            stroke="#DBBC58"
            stroke-width="3"
            stroke-miterlimit="10"
          />
          <path
            d="M43.4465 37.5282C42.6309 34.7813 41.7777 29.2313 41.7402 28.9875L44.5152 28.5657C44.5246 28.6219 45.5184 34.2844 46.6059 36.9376L43.4465 37.5282ZM65.309 34.2C64.4934 31.4532 63.6402 25.9032 63.6027 25.6594L66.3777 25.2375C66.3871 25.2938 67.5402 31.05 68.5059 33.6188L65.309 34.2ZM44.4121 107.119L52.2871 93.4782L48.5277 57.1125L79.9996 50.9907L63.1246 104.325L44.4121 107.119Z"
            fill="#D4AF37"
          />
          <path
            d="M69.0027 53.4844C69.0027 53.4844 65.459 34.6688 77.2621 35.9157C83.684 36.5907 83.4215 51.525 83.4215 51.525"
            stroke="#121212"
            stroke-width="3"
            stroke-miterlimit="10"
          />
          <path
            d="M70.3059 116.241L52.8965 108.956L56.9465 91.125L56.084 50.4937L100.146 45.3187V49.1719L110.628 50.4937L70.3059 116.241Z"
            fill="#121212"
          />
          <path
            d="M114.369 109.575L70.3061 116.25L66.5654 92.9156V57.1688L110.628 50.4938V86.25L114.369 109.575Z"
            fill="#3A3A3A"
          />
          <path
            d="M66.5652 57.1687L63.0402 54.4687L56.084 50.4937L100.146 45.3187L104.15 47.8406L110.628 50.4937L66.5652 57.1687Z"
            fill="#616161"
          />
          <path
            d="M99.9777 46.2843L107.525 50.0062L66.7621 56.175L58.8027 51.1125L99.9777 46.2843ZM100.146 45.3187L56.084 50.4937L66.5652 57.1687L110.628 50.4937L100.146 45.3187Z"
            fill="#121212"
          />
          <path
            d="M81.4623 60.7594C80.8342 58.6594 80.1873 54.3938 80.1592 54.2156L82.6342 53.8969C82.6436 53.9438 83.2717 58.2375 83.8529 60.2156L81.4623 60.7594ZM98.2342 58.1813C97.6061 56.0813 96.9592 51.8156 96.9311 51.6375L99.3779 51.3281C99.3873 51.375 99.8936 55.8 100.475 57.7781L98.2342 58.1813Z"
            fill="#121212"
          />
          <path
            d="M80.0753 60.8532C79.5316 56.7657 73.9628 39.5344 84.4628 38.0813C92.666 36.9469 96.2003 53.9157 96.6785 57.7125"
            stroke="#3A3A3A"
            stroke-width="3"
            stroke-miterlimit="10"
          />
          <path
            d="M52.8965 108.956L61.7934 101.419L70.3059 116.25L66.584 93.0562L66.6215 57.2812L65.5715 56.85L62.2527 93.2156L52.8965 108.956Z"
            fill="#040404"
          />
        </svg>
        <h1 className="text-xl md:text-5xl font-bold text-center">
          Welcome to <span className="text-main italic">Shoptacle</span>
        </h1>
      </div>
      <div className="flex flex-col justify-center md:grid lg:grid-cols-4 md:grid-cols-2 md:ml-8">
        <div className="relative cursor-pointer hover:scale-110">
          <img src={frame1} alt="frame-1" width="270" />
          <h1 className="absolute top-0 left-2 md:text-2xl">Browse</h1>
        </div>
        <div className="relative cursor-pointer hover:scale-110">
          <img src={frame2} alt="frame-2" width="270" />
          <h1 className="absolute top-0 left-2 md:text-2xl">Shop</h1>
        </div>
        <div className="relative cursor-pointer hover:scale-110">
          <img src={frame3} alt="frame-3" width="270" />
          <h1 className="absolute top-0 left-2 md:text-2xl">Order</h1>
        </div>
        <div className="relative cursor-pointer hover:scale-110">
          <img src={frame4} alt="frame-4" width="270" />
          <h1 className="absolute top-0 left-2 md:text-2xl">Delivered</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center">
        <Link to="/signup">
          <button className=" font-oswald  rounded-sm py-2 px-6 text-2xl text-white leading-[36px]   bg-buttonBlack hover:text-black  border-[1px] hover:bg-buttonWhite hover:border-black">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Welcome;
