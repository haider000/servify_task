import React from "react";
import Container from "./Container";
import cx from "classnames";
import { AppContext } from "../../utils/ContextWrapper";

const Items = ({ category, id }) => {
  const context = React.useContext(AppContext);
  console.log(context);
  return (
    <div id={id} className="items mt-20 mb-32">
      <div className="heading mb-8 flex justify-between">
        <div
          className={cx(
            "text-4xl ml-8  font-extrabold text-center inline-block",
            context.name === "Async" ? "text-white" : "text-yellow-600"
          )}
        >
          {category.heading}
        </div>
        <div
          className={`mr-4 self-end hover:cursor-pointer ${context.textPrimaryColor}`}
        >
          View More...
        </div>
      </div>
      <Container items={category.items} />
    </div>
  );
};

export default Items;
