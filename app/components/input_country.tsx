"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FC } from "react";
import useHandleInput from "../hooks/useHandleInput";
import { axiosInstanceV3 } from "../hooks/useAxios";
import ListCountry from "./list_country";

const findCountry = async (searchdata: string): Promise<any[]> => {
  const response = await axiosInstanceV3.get(`/name/${searchdata}`);

  return response.data;
};

const InputCountry: FC = () => {
  const { inputRef, handleInputFocus, handleInputBlur } = useHandleInput();
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    let isMounted = true;
    const fetchCountry = async () => {
      if (inputValue !== "") {
        const data = await findCountry(inputValue);
        const top5Data = data.slice(0, 5); // Limit the data to top 5 results
        setSearchResults(data.length > 5 ? top5Data : data);
      }
    };

    const timer = setTimeout(() => {
      fetchCountry();
    }, 500);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [inputValue]);

  return (
    <>
      <div className="relative flex">
        <input
          ref={inputRef}
          value={inputValue}
          type="text"
          className="aboslute outline-none rounded-md border border-slate-300 w-[500px] py-2 px-4 focus:border-2"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <div className="absolute top-0 right-0 flex items-center h-full pr-2">
          <AiOutlineSearch size={24} />
        </div>
      </div>
      <ListCountry />
    </>
  );
};

export default InputCountry;
