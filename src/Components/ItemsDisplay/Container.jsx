import React from "react";
import ItemCard from "./ItemCard";
import cx from "classnames";
import { AppContext } from "../../utils/ContextWrapper";

const Container = ({ items }) => {
  const context = React.useContext(AppContext);
  return (
    <>
      <div
        className={cx(
          "py-8 px-3  min-h-96 w-full rounded-xl flex flex-wrap justify-around items-center",
          context.name === "Async"
            ? "bg-gradient-to-r from-pink-100 to-blue-100 bg-opacity-20"
            : "bg-gradient-to-r from-bg-gaveit-bg-main to-yellow-600 bg-gaveit-fourth"
        )}
      >
        {items.map((obj, idx) => {
          return (
            <ItemCard
              imageurl={obj.imageurl}
              description={obj.description}
              key={idx}
            />
          );
        })}
      </div>
    </>
  );
};

export default Container;
