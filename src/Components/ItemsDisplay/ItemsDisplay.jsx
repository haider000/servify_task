import Items from "./Items";
import { itemList } from "./data";

function ItemsDisplay() {
  return (
    <>
      {itemList.map((category, index) => {
        return <Items category={category} key={index} id={index} />;
      })}
    </>
  );
}

export default ItemsDisplay;
