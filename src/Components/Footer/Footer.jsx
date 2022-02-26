import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import { AppContext } from "../../utils/ContextWrapper";
import cx from "classnames";

const Footer = () => {
  const context = React.useContext(AppContext);

  return (
    <div className="mt-8 main-footer flex flex-wrap flex-col justify-center  w-full">
      <img src={context.footerWave} alt="waves" className="w-full" />
      <div
        className={cx(
          context.name === "Async" ? `bg-[#F9A8D4]` : "bg-gaveit-fourth",
          `flex flex-wrap justify-around  min-w-full font-sansOpen`
        )}
      >
        <div className="flex flex-col  items-start mb-5">
          <h1 className="pb-2 text-6xl font-bold">
            <span className={cx(`${context.textSecondaryColor}`)}>
              {context.name[0][0]}
            </span>
            <span
              className={`${context.textPrimaryColor}`}
            >{`${context.name.replace(context.name[0][0], "")} Store`}</span>
          </h1>
          <input
            className="my-1 py-2 p-2 text-sm bg-white rounded shadow-lg border border-gray-300  mb-3 w-full text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent "
            type="email"
            placeholder="Enter your email"
          />
          <button className=" w-2/4 bg-white text-gray-600 hover:bg-gray-500 hover:text-gray-100 font-semibold py-1 px-1 border border-gray-400 rounded shadow">
            Suscribe
          </button>
        </div>

        <div
          className={`m-5 flex flex-col items-around ${context.textPrimaryColor}`}
        >
          <h2 className="font-bold text-xl">Contact Us</h2>
          <div className="">
            <li className="list-none">Phone: +1 (0) 000 0000 001</li>
            <li className="list-none">
              Email: {`${context.name}`}team@outlook.com
            </li>
            <li className="list-none">
              Address:1234 Street Name City, AA 99999
            </li>
          </div>
        </div>

        {/* {} */}
        <div className="flex flex-col m-5 justify-center ">
          <p className="yt">
            <a
              href="https://www.youtube.com/"
              className={cx(
                "px-4 py-2 font-semibold  inline-flex items-center space-x-2 rounded",
                context.name === "Async" ? "text-black" : "text-yellow-600"
              )}
            >
              <YouTubeIcon fontSize="large" />
            </a>

            <a
              href="https://www.facebook.com/"
              className={cx(
                "px-4 py-2 font-semibold  inline-flex items-center space-x-2 rounded",
                context.name === "Async" ? "text-black" : "text-yellow-600"
              )}
            >
              <FacebookIcon fontSize="large" />
            </a>

            <a
              href="http://www.instagram.com/"
              className={cx(
                "px-4 py-2 font-semibold  inline-flex items-center space-x-2 rounded",
                context.name === "Async" ? "text-black" : "text-yellow-600"
              )}
            >
              <InstagramIcon fontSize="large" />
            </a>

            <a
              href="https://wwww.twitter.com"
              className={cx(
                "px-4 py-2 font-semibold  inline-flex items-center space-x-2 rounded",
                context.name === "Async" ? "text-black" : "text-yellow-600"
              )}
            >
              <TwitterIcon fontSize="large" />
            </a>
          </p>
        </div>
      </div>
      <div
        style={{ fontFamily: "Open Sans" }}
        className={cx(
          context.name === "Async" ? `bg-[#F9A8D4]` : "bg-gaveit-fourth",
          `text-center w-full ${context.textPrimaryColor}`
        )}
      >
        Copyright © Team <span>{`${context.name}`}</span> All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
