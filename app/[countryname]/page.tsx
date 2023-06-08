import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Globe from "@/public/images/globe.svg";

interface CountryProps {
  params: {
    countryname: string;
  };
}

const Page = ({ params }: CountryProps) => {
  console.log(params.countryname.split("-").join("%20"));

  return (
    <div className="mx-auto my-20 max-w-7xl">
      <Link
        href="/"
        className="flex items-center p-3 text-white bg-purple-primary rounded-xl max-w-max"
      >
        <AiOutlineArrowLeft className="mr-3 font-bold" size={24} />
        <span className="">Back to Homepage</span>
      </Link>
      <div className="mt-10">
        <div className="flex items-center">
          <h1 className="mr-3 text-3xl font-extrabold">Indonesia</h1>
          <Image
            src="https://flagcdn.com/w320/id.png"
            alt="Flag Image"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="flex mt-1 text-white gap-x-3">
        <span className="px-3 py-1 max-w-2max rounded-xl bg-mint">ID</span>
        <span className="px-3 py-1 max-w-max rounded-2xl bg-mint">
          Republic of Indonesia
        </span>
        <span className="px-3 py-1 max-w-max rounded-2xl bg-mint">
          Republik Indonesia
        </span>
      </div>
      <div className="grid grid-cols-2 mt-10 gap-x-10">
        <div className="relative overflow-hidden shadow-md p-9 rounded-xl">
          <h6 className="mb-3 text-lg">LatLong</h6>
          <span className="text-5xl font-bold text-purple-primary">
            -5.0, 120.0
          </span>
          <div className="absolute right-1 top-5 w-60 h-60">
            <Globe />
          </div>
        </div>
        <div className="rounded-md shadow-md p-9">
          <div className="flex">
            <label className="mr-1">Capital:</label>
            <span className="font-semibold">Jakarta</span>
          </div>
          <div className="flex my-1">
            <label className="mr-1">Region:</label>
            <span className="font-semibold">Asia</span>
          </div>
          <div className="flex">
            <label className="mr-1">Subregion:</label>
            <span className="font-semibold">South-Eastern</span>
          </div>
        </div>
        <div className="mt-5">
          <span className="text-5xl font-bold text-purple-primary">62</span>
          <p className="">
            <span className="relative group">
              <span className="underline text-purple-primary">1 country</span>
              <div className="absolute left-0 invisible p-5 mt-3 text-sm text-white transition-opacity duration-300 ease-in-out transform opacity-0 rounded-xl bg-tooltip-color w-52 tooltip-text top-full group-hover:opacity-100 group-hover:visible">
                <span>Tooltip content goes here</span>
                <span>Tooltip content goes here</span>
                <span>Tooltip content goes here</span>
              </div>
            </span>{" "}
            with this calling code
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
