// Sheikh Jibran Ahmed   18 / april / 2024
// function for prepare a sandwich 
// for multiple parameters we use "..." rest parameter 
function readySandwich(...items) {
    return console.log(`Making a sandwich with : ${items.join(", ")}.`);
}
// calling function with ingredients items or arguments
readySandwich('breads', 'eggs', 'tomato', 'onions', 'cucumber', 'cheese');
export {};
