import React from "react";
import { Item } from "../model";
import SingleList from "./SingleList";

interface Props {
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const Lists: React.FC<Props> = ({ items, setItems }) => {
  return (
    <div>
      {items.map((item) => (
        <SingleList key={item.id} item={item} items={items} setItems={setItems} />
      ))}
    </div>
  );
};

export default Lists;
