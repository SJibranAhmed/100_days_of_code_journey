// Sheikh Jibran Ahmed   20  / april / 2024
// store names in array
let array = [10, 20, 30, 40, 50];
// function which is pass in another function
function arrayFunc() {
    return array;
}
// this function modified our list
function callBackFunc(array, multiplyValue) {
    let modifiedArray = [];
    // to handlng the error i use try{}catch{} method
    try {
        array.filter(values => {
            let a = values * multiplyValue;
            modifiedArray.push(a);
            console.log(modifiedArray);
        });
    }
    catch {
        console.log('Please handle your code');
    }
}
// callback function with adding another values in array 
callBackFunc(arrayFunc(), 45);
export {};
