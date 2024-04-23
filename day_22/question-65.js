// Sheikh Jibran Ahmed   23 / April / 2024
/*Question 65: Determine the Remainder: Make a function that gets two numbers and shows the leftover from
 dividing them using the % sign */
// function for giving remainder value in return
function remainder(num1, num2) {
    // check if num2 is zero to avoid division by zero error
    if (num2 === 0) {
        return "Error: Division by zero";
    }
    // perform modulus operation
    return num1 % num2;
}
// store function return value
let getVal = remainder(12, 0);
// Use ternary operator to check condition and print some statements
let result = typeof getVal === "number" ? `Your remainder is ${getVal}` : getVal;
// print our result
console.log(result);
export {};
