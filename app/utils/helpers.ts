import { Idd } from "../types";

export function splitCountryName(countryName: string) {
  return countryName.split(" ").join("-");
}

export function countryNameToParamsUrl(countryName: string) {
  return countryName.split("-").join("%20");
}

export function combineCallingCode(idd: Idd) {
  const { root, suffixes } = idd;
  if (suffixes.length > 1) return root.slice(1);

  return root.slice(1) + suffixes[0];
}

export function sliceDataMoreThanFive(arrayData: []) {
  if (arrayData.length > 5) {
    const resultSliceData = arrayData.slice(0, 5);
    const resultReduction = arrayData.length - 5;

    const resultReturnWithSlice = {
      data: resultSliceData,
      realDataLength: arrayData.length,
      remainderCountry: resultReduction,
    };
    return resultReturnWithSlice;
  }

  const resultReturn = {
    data: arrayData,
    realDataLength: arrayData.length,
    remainderCountry: 0,
  };

  return resultReturn;
}
