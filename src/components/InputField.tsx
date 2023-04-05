import React from "react";

interface Props {
  item: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ item, setItem, handleAdd }) => {
  return (
    <form
      className="flex items-center justify-center w-[100%] m-auto mb-10"
      onSubmit={handleAdd}
    >
      <input
        type="input"
        placeholder="Enter your item"
        className="pt-[20px] pb-[20px] pl-[20px] w-full rounded-[50px] text-slate-950 outline-none"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button className="bg-slate-950 ml-[-60px] p-[15px] rounded-[30px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </button>
    </form>
  );
};

export default InputField;
