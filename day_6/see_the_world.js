// Sheikh Jibran Ahmed   2024 / march / 07
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Program to sort & reverse our array
// list of world places i'd like a lot   
var favorite_place = ['Macca', 'London', 'Egypt', 'Spain'];
// list are not in alphabetical order
console.log('Original order : ' + favorite_place.join('-'));
//now our list in alphabetic order without disturb original list called "deep copy"
console.log('\n Alphabetic order : ' + __spreadArray([], favorite_place, true).sort().join('-'));
//see our original list aren't disturb
console.log('\n Original order again : ' + favorite_place.join('-'));
//now make our list in reverse alphabetical order
console.log(' \n reverse alphabetic order : ' + __spreadArray([], favorite_place, true).sort().reverse().join('-'));
//print our original list
console.log('\n Back to original order : ' + favorite_place.join('-'));
//sort arry by sort() method
console.log('\n sorted array : ' + __spreadArray([], favorite_place, true).sort().join('-'));
//Reverse array by reverse() method
console.log('\n reverse array : ' + __spreadArray([], favorite_place, true).reverse().join('-'));
