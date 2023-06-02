"use client";

import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const InputCountry: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.classList.add("border-purple-600/50");
      const nextSibling = inputRef.current.nextSibling as HTMLElement;
      nextSibling?.classList.add("text-purple-600");
    }
  };

  const handleInputBlur = () => {
    if (inputRef.current) {
      inputRef.current.classList.remove("border-purple-600/50");
      const nextSibling = inputRef.current.nextSibling as HTMLElement;
      nextSibling?.classList.remove("text-purple-600");
    }
  };

  return (
    <div className="relative flex">
      <input
        ref={inputRef}
        type="text"
        className="aboslute outline-none rounded-md border border-slate-300 w-[500px] py-2 px-4 focus:border-2"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <div className="absolute right-0 top-0 h-full flex items-center pr-2">
        <AiOutlineSearch size={24} />
      </div>
    </div>
  );
};

export default InputCountry;
