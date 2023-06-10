import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Globe from "@/public/images/globe.svg";
import { restCountriesV2, restCountriesV3 } from "../hooks/useAxios";
import {
  combineCallingCode,
  countryNameToParamsUrl,
  sliceDataMoreThanFive,
} from "../utils/helpers";
import { CallingCodeType, CountryType, CurrencyCountryType } from "../types";
import InfoCountry from "../components/info_country";

interface CountryProps {
  params: {
    countryname: string;
  };
}

const fullInfoCountry = async (countryName: string) => {
  const response = await restCountriesV3.get(
    `/name/${countryName}?fullText=true`
  );

  return response.data[0];
};

const callingCode = async (number: string) => {
  const response = await restCountriesV2.get(`/callingcode/${number}`);
  return sliceDataMoreThanFive(response.data);
};

const currencyCountry = async (currencyCode: string) => {
  const response = await restCountriesV2.get(`/currency/${currencyCode}`);
  return sliceDataMoreThanFive(response.data);
};

const Page = async ({ params }: CountryProps) => {
  const countryName = countryNameToParamsUrl(params.countryname);
  const resultFullInfoCountry: CountryType = await fullInfoCountry(countryName);

  const callingCodeCountry = combineCallingCode(resultFullInfoCountry.idd);
  const {
    data: callingCodeData,
    realDataLength: callingCodeLength,
    remainderCountry: callingCodeRemainder,
  }: {
    data: CallingCodeType[];
    realDataLength: number;
    remainderCountry: number;
  } = await callingCode(callingCodeCountry);

  const currencyCode = Object.keys(resultFullInfoCountry.currencies)[0];
  const {
    data: currencyData,
    realDataLength: currencyLength,
    remainderCountry: currencyRemainder,
  }: {
    data: CurrencyCountryType[];
    realDataLength: number;
    remainderCountry: number;
  } = await currencyCountry(currencyCode);

  return (
    <div className="mx-auto my-20 max-w-7xl">
      <Link
        href="/"
        className="flex items-center p-3 text-white bg-purple-primary rounded-xl max-w-max"
      >
        <AiOutlineArrowLeft className="mr-3 font-bold" size={24} />
        <span className="">Back to Homepage</span>
      </Link>

      {/* Country Identity */}
      <div className="mt-10">
        <div className="flex items-center">
          <h1 className="mr-3 text-3xl font-extrabold">
            {resultFullInfoCountry.name.common}
          </h1>
          <Image
            src={resultFullInfoCountry.flags.png}
            alt="Flag Image"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="flex mt-1 text-white gap-x-3">
        {resultFullInfoCountry.altSpellings.map((spelling, idx) => (
          <span key={idx} className="px-3 py-1 max-w-2max rounded-xl bg-mint">
            {spelling}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 grid-rows-2 mt-10 gap-x-10">
        {/* Longitude */}
        <div className="relative overflow-hidden shadow-md p-9 rounded-xl">
          <h6 className="mb-3 text-lg font-medium">LatLong</h6>
          <span className="text-5xl font-bold text-purple-primary">
            {resultFullInfoCountry.latlng
              .map((coordinate) => coordinate)
              .join(", ")}
          </span>
          <div className="absolute right-1 top-5 w-60 h-60">
            <Globe />
          </div>
        </div>

        {/* Location Detail */}
        <div className="rounded-md shadow-md p-9">
          <div className="flex">
            <label className="mr-1">Capital:</label>
            <span className="font-semibold">
              {resultFullInfoCountry.capital}
            </span>
          </div>
          <div className="flex my-1">
            <label className="mr-1">Region:</label>
            <span className="font-semibold">
              {resultFullInfoCountry.region}
            </span>
          </div>
          <div className="flex">
            <label className="mr-1">Subregion:</label>
            <span className="font-semibold">
              {resultFullInfoCountry.subregion}
            </span>
          </div>
        </div>

        {/* Calling Code */}
        <InfoCountry
          title="Calling Code"
          infoCountry={callingCodeCountry}
          otherCountryUse={callingCodeData}
          otherCountryLength={callingCodeLength}
          remainderOtherCountry={callingCodeRemainder}
        />

        {/* Currency */}
        <InfoCountry
          title="Currency"
          infoCountry={currencyCode}
          otherCountryUse={currencyData}
          otherCountryLength={currencyLength}
          remainderOtherCountry={currencyRemainder}
        />
      </div>
    </div>
  );
};

export default Page;
