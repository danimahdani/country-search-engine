"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FC } from "react";
import useHandleInput from "../hooks/useHandleInput";
import { restCountriesV3 } from "../hooks/useAxios";
import ListCountry from "./list_country";
import { CountryType } from "../types";
import { AxiosError } from "axios";

const findCountry = async (searchdata: string) => {
  try {
    const response = await restCountriesV3.get(`/name/${searchdata}`);

    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

const InputCountry: FC = () => {
  const { inputRef, handleInputFocus, handleInputBlur } = useHandleInput();
  const [searchResults, setSearchResults] = useState<CountryType[]>([]);
  const [isNotFound, setIsNotFound] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    let isMounted = true;
    const fetchCountry = async () => {
      if (inputValue !== "") {
        const data = await findCountry(inputValue);
        if (data.status === 404) {
          setIsNotFound(true);
          setSearchResults([]);
        } else {
          setIsNotFound(false);

          const top5Data = data.slice(0, 5); // Limit the data to top 5 results
          setSearchResults(data.length > 5 ? top5Data : data);
        }
      } else {
        setSearchResults([]);
      }
    };

    const timer = setTimeout(() => {
      fetchCountry();
    }, 1500);

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
          className="aboslute outline-none rounded-md border-2 box-border border-slate-300 w-[500px] py-2 px-4 focus:border-2"
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
      <div className="w-full h-52">
        {isNotFound && (
          <div className="w-[500px] py-5 overflow-hidden rounded-md shadow-md max-h-96">
            <span className="mx-5 text-rose-600">Data not Found</span>
          </div>
        )}

        {searchResults.length > 0 && <ListCountry countries={searchResults} />}
      </div>
    </>
  );
};

export default InputCountry;
