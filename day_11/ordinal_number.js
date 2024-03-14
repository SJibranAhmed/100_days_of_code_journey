//Sheikh Jibran Ahmed  14 / march / 2024
// print number with their ordinal suffixes
//give number to get their ordinal suffix
//starting number for ordinal numbers 
const startNum = 1;
//ending number for ordinal numbers 
let endOrdinalNumber = 10;
// for loop and if / else conditions use to print number with their ordinal suffix
for (let startNum = 1; startNum < endOrdinalNumber; startNum++) {
    if (startNum === 1) {
        console.log(startNum + 'st');
    }
    else if (startNum === 2) {
        console.log(startNum + 'nd');
    }
    else if (startNum === 3) {
        console.log(startNum + 'rd');
    }
    else {
        console.log(startNum + 'th');
    }
}
export {};
