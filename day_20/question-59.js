// Sheikh Jibran Ahmed   22 / april / 2024
/*Question 59: Add a Special Number: Make a program that creates custom adders.
 These adders can add a specific number to any other number you give them later.*/
// function for add specific number
function addNumber(numAdd) {
    function specificNumber(specNum) {
        return specNum + numAdd;
    }
    // store a particular number which is add in every given number
    return specificNumber(12);
}
// Print return value
console.log(addNumber(30));
export {};
