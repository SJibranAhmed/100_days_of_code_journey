// Sheikh Jibran Ahmed   18 / april / 2024
// Two arrays for combinig together
let laptopSeries1 = [23000, 54000, 78000];
let laptopSeries2 = [17000, 65000, 25000];
// combining array with the help of "...rest" operator
let combineArray = [...laptopSeries1, ...laptopSeries2];
// print sorted array with the help of "sort()" method
console.log(combineArray.sort());
export {};
