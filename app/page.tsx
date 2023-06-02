import InputCountry from "./components/input_country";

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl text-center font-bold inline-block">Country</h1>
        <InputCountry />
        <ul>
          <li className="">Negara 1</li>
          <li>Negara 1</li>
          <li>Negara 1</li>
          <li>Negara 1</li>
          <li>Negara 1</li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
