import axios from "axios";

const restCountriesV3 = axios.create({
  baseURL: "https://restcountries.com/v3.1",
  // timeout: 1000,
});

const restCountriesV2 = axios.create({
  baseURL: "https://restcountries.com/v2",
  // timeout: 1000,
});

export { restCountriesV2, restCountriesV3 };
