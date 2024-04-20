//  Sheikh Jibran Ahmed   20 / april / 2024
// store names in array
let array = ['hammad', 'hasan', 'haris', 'humza'];
// function which is pass in another function
function arrayFunc() {
    return array;
}
// this function adding further items in their list
function callBackFunc(array, newItems) {
    //    variable to store new array
    let newArray = [];
    //   if/else condition to add new value in array if you want 
    if (newItems) {
        array.push(newItems);
    }
    //   this line of code is to capitalized array items
    array.filter((items) => {
        newArray.push(items.charAt(0).toUpperCase() + items.slice(1));
    });
    // print value
    console.log(newArray);
}
// callback function with adding another values in array 
callBackFunc(arrayFunc(), 'waqqar');
export {};
