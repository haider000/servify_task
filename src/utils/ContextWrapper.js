import React from "react";
import { configs, configName } from "../Config/Config";

export const AppContext = React.createContext(null);

export const ContextWrapper = (props) => {
  const config = configs[configName];

  return (
    <AppContext.Provider value={config}>{props.children}</AppContext.Provider>
  );
};
