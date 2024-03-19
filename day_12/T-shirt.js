// function for get shirt features
function T_shirt(size, color) {
    return "Size of T-Shirt : ".concat(size, ",\nColor of T-Shirt : ").concat(color, " \n");
}
// calling functions with their parameter 
var shirt1 = T_shirt('large', 'blue');
var shirt2 = T_shirt('Xlarge', 'reddish');
var shirt3 = T_shirt('medium', 'silver');
// printing function return values
console.log(shirt1);
console.log(shirt2);
console.log(shirt3);
