import React from "react";
import AsyncIcon from "../Assets/Navbar/AsyncIcon";
import GaveitIcon from "../Assets/Navbar/GaveitIcon";
import asyncBanner from "../Assets/Banner/asyncBanner.svg";
import gaveitBanner from "../Assets/Banner/gaveitBag.svg";

export const configs = {
  Default: {
    name: "Async",
    logo: AsyncIcon,
    banner: asyncBanner,
    bgColor: "bg-slate-100",
    textPrimaryColor: "text-black",
    textSecondaryColor:"text-pink-500",
    tertiaryColor:"white",
    bgSecondaryColor:"bg-pink-500",
  },
  Gaveit: {
    name: "gaveit",
    logo: GaveitIcon,
    banner: gaveitBanner,
    bgColor: "bg-gaveit-bg-main",
    textPrimaryColor: "text-white",
    textSecondaryColor:"text-yellow-600",
    tertiaryColor:"gaveit-tertiary",
    bgSecondaryColor:"bg-yellow-600",
  },
};

const configName = process.env.BRAND || "Gaveit";

export const AppContext = React.createContext(null);

export const ContextWrapper = (props) => {
  const config = configs[configName];

  return (
    <AppContext.Provider value={config}>{props.children}</AppContext.Provider>
  );
};
