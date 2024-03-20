// Sheikh Jibran Ahmed    2024 / march / 20
// function with default values 
function make_shirt(title = 'unknown', color = 'transparent', size = 'general', manuNo = '00000') {
    return `The title of the shirt is "${title}" with the color of ${color} make sure size approx. '${size}'.\n The manufacture number of the product is : C${manuNo}`;
}
// store return value of function
let getShirtWithDefaultValue = make_shirt();
let getShirtWithParameter = make_shirt('the boss is coming', 'reddish', 'small', 89667);
//print our product
console.log('function with default value \n');
console.log(getShirtWithDefaultValue);
console.log('function with parameter \n');
console.log(getShirtWithParameter);
export {};
