// "use client";
import Link from "next/link";

import { CountryType } from "../types";
import { splitCountryName } from "../utils/helpers";

const ListCountry = ({ countries }: { countries: CountryType[] }) => {
  return (
    <ul className="w-[500px] py-5 overflow-hidden rounded-md shadow-md max-h-96 ">
      {countries.map((country) => (
        <li key={country.area} className="my-1 hover:bg-slate-300/20">
          <div className="mx-5 cursor-pointer">
            <Link
              href={`/${splitCountryName(country.name.official)}`}
              className=""
            >
              {country.name.official}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListCountry;

