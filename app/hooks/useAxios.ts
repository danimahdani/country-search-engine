import axios from "axios";

const axiosInstanceV3 = axios.create({
  baseURL: "https://restcountries.com/v3.1",
  // timeout: 1000,
});

const axiosInstanceV2 = axios.create({
  baseURL: "https://restcountries.com/v2",
  // timeout: 1000,
});

export { axiosInstanceV2, axiosInstanceV3 };
