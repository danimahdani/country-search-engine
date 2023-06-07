import React from "react";

interface CountryProps {
  params: {
    countryname: string;
  };
}

const Page = ({ params }: CountryProps) => {
  // console.log(params.countryname.split("-").join("%20"));

  return (
    <div>
      <h1>{params.countryname}</h1>
    </div>
  );
};

export default Page;
