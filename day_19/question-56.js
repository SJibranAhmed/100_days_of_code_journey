// Sheikh Jibran Ahmed   20 / april / 2024
// list of country and their communication code
let countryAndCode = [
    "Pakistan",
    92,
    "India",
    91,
    "Japan",
    81,
];
// store both distinct values in variables
let distinctCodes = [];
let distinctCounties = [];
// this function separate countries and codes of our list
function distinctCountriesAndCodes() {
    countryAndCode.filter((items) => {
        if (typeof items === "string") {
            distinctCounties.push(items);
        }
        else {
            distinctCodes.push(items);
        }
    });
}
// calling function
distinctCountriesAndCodes();
// print distinct countries list
console.log(distinctCounties);
// print distinct code list
console.log(distinctCodes);
export {};
