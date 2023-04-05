import "./App.css";
import InputField from "./components/InputField";
import { useState } from "react";
import { Item } from "./model";
import Lists from "./components/Lists";

const App: React.FC = () => {
  const [item, setItem] = useState<string>("");
  const [items, setItems] = useState<Item[]>([]);

  const HandleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (item) {
      setItems([...items, { id: Date.now(), item: item, isDone: false }]);
      setItem("");
    }
  };
  console.log(items);

  return (
    <div className="bg-slate-950 flex flex-col items-center justify-center h-[100vh] ">
      <h1 className="font-bold mt-20 mb-20 text-3xl">LIST.ALL</h1>
      <div className="h-full w-[100%] pl-5 pr-5 md:w-[70%] ">
        <InputField item={item} setItem={setItem} handleAdd={HandleAdd} />
        <Lists items={items} setItems={setItems} />
      </div>
    </div>
  );
};

export default App;
