import AsyncIcon from "../Assets/Navbar/AsyncIcon";
import GaveitIcon from "../Assets/Navbar/GaveitIcon";
import asyncBanner from "../Assets/Banner/asyncBanner.svg";
import gaveitBanner from "../Assets/Banner/gaveitBag.svg";
import asyncWaves from "../Assets/Footer/asyncWave.svg";
import gaveitWaves from "../Assets/Footer/gaveitWave.svg";

export const configs = {
  Default: {
    name: "Async",
    logo: AsyncIcon,
    banner: asyncBanner,
    footerWave: asyncWaves,
    bgColor: "bg-slate-100",
    textPrimaryColor: "text-black",
    textSecondaryColor: "text-pink-500",
    tertiaryColor: "white",
    bgSecondaryColor: "bg-pink-500",
  },
  Gaveit: {
    name: "gaveit",
    logo: GaveitIcon,
    banner: gaveitBanner,
    footerWave: gaveitWaves,
    bgColor: "bg-gaveit-bg-main",
    textPrimaryColor: "text-white",
    textSecondaryColor: "text-yellow-600",
    tertiaryColor: "gaveit-tertiary",
    bgSecondaryColor: "bg-yellow-600",
  },
};

export const configName = process.env.REACT_APP_BRAND;
