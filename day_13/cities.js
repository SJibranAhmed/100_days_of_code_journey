// Sheikh Jibran Ahmed  2024 / march / 20
// fuction with default value
function cities(city, country = 'Pakistan') {
    console.log(`${city} is the city of "${country}".`);
}
//calling functions with arguments
cities('Islamabad');
cities('Jeddah', 'Dubai');
cities('Karachi');
export {};
