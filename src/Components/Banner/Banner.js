import React from "react";
import { AppContext } from "../../utils/ContextWrapper";
import cx from "classnames"

const Banner = () => {
  const context = React.useContext(AppContext);
  return (
    <div className="flex items-center justify-between h-screen">
      <div className="ml-20">
        <p className="text-5xl font-bold mb-3 tracking-wide">
          <span className={`${context.textSecondaryColor}`}>{context.name[0][0]}</span> 
          <span className={`${context.textPrimaryColor}`}>{`${context.name.replace(context.name[0][0],"")} Store`}</span>
        </p>
        <p className={`${context.textPrimaryColor} font-medium tracking-widest text-xl`}>
          The perfect place to shop
        </p>
        <div>
          <button className={cx(`text-white ${context.bgSecondaryColor} rounded-md px-3 py-1 mt-3 border-2 hover:bg-white`, context.name==="Default" ? `hover:text-pink-500` : `hover:text-yellow-600`)}>
            Shop now
          </button>
        </div>
      </div>
      <img src={context.banner} alt="nothing" />
    </div>
  );
};

export default Banner;
