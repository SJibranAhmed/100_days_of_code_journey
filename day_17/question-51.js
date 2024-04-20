// Sheikh Jibran Ahmed   20 / april / 2024
// simple function to calculate area of triangle
function areaOfTriangle(base, height) {
    return `The area of triangle is : ${0.5 * base * height} m²`;
}
// store and print value
let result = areaOfTriangle(23, 43);
console.log(result);
// refactor areaOfTriangle() into arrowFunc()
let arrowFunc = (base, height) => {
    return `The area of triangle is : ${0.5 * base * height} m²`;
};
// store and print value
let arrowFuncResult = areaOfTriangle(23, 43);
console.log(arrowFuncResult);
export {};
