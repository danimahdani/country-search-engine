import React from "react";
import { CallingCodeType, CurrencyCountryType } from "../types";

type InfoCountryProps = {
  title: string;
  infoCountry: string;
  otherCountryLength: number;
  otherCountryUse: CallingCodeType[] | CurrencyCountryType[];
  remainderOtherCountry: number;
};

const InfoCountry = ({
  title,
  infoCountry,
  otherCountryLength,
  otherCountryUse,
  remainderOtherCountry,
}: InfoCountryProps) => {
  return (
    <div className="mt-5">
      <h5 className="text-lg font-medium">{title}</h5>
      <span className="text-5xl font-bold text-purple-primary">
        {infoCountry}
      </span>
      <div className="">
        <span className="relative group">
          <span className="underline text-purple-primary cursor-help">
            {otherCountryLength} country
          </span>
          <div className="absolute left-0 invisible p-5 mt-3 text-sm text-white transition-opacity duration-300 ease-in-out transform opacity-0 rounded-xl bg-tooltip-color w-max tooltip-text top-full group-hover:opacity-100 group-hover:visible">
            {otherCountryUse.map((country) => (
              <p className="my-1 whitespace-nowrap" key={country.area}>
                {country.name}
              </p>
            ))}

            {remainderOtherCountry != 0 && (
              <p>and {remainderOtherCountry} other country</p>
            )}
          </div>
        </span>{" "}
        with this calling code
      </div>
    </div>
  );
};

export default InfoCountry;
