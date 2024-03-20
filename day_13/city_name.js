//Sheikh Jibran Ahmed   2024 / march / 20
// fuction with returning formatted string
function cities(city, country = 'Pakistan') {
    return `${city} is the city of "${country}".`;
}
//calling and store functions with arguments
let returnValue = cities('Jeddah', 'Dubai');
//print return value of function
console.log(returnValue);
export {};
