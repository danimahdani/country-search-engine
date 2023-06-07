export function splitCountryName(countryName: string) {
  return countryName.split(" ").join("-");
}

export function countryNameToParamsUrl(countryName: string) {
  return countryName.split("-").join("%20");
}
