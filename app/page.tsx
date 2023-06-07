import InputCountry from "./components/input_country";

import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-5">
        <h1 className="box-border block text-5xl font-bold text-center">
          Country
        </h1>
        <InputCountry />
      </div>
    </div>
  );
};

export default Page;

