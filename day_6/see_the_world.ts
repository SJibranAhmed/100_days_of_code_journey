// Sheikh Jibran Ahmed   2024 / march / 07

//Program to sort & reverse our array
// list of world places i'd like a lot   
let favorite_place:string[] = ['Macca', 'London', 'Egypt', 'Spain']

// list are not in alphabetical order
console.log('Original order : ' + favorite_place.join('-'))
 
//now our list in alphabetic order without disturb original list called "deep copy"
console.log( '\n Alphabetic order : ' + [...favorite_place].sort().join('-'))

//see our original list aren't disturb
console.log('\n Original order again : ' + favorite_place.join('-'))

//now make our list in reverse alphabetical order
console.log( ' \n reverse alphabetic order : '  + [...favorite_place].sort().reverse().join('-'))

//print our original list
console.log('\n Back to original order : ' + favorite_place.join('-'))

//sort arry by sort() method
console.log('\n sorted array : ' + [...favorite_place].sort().join('-'))

//Reverse array by reverse() method
console.log('\n reverse array : ' + [...favorite_place].reverse().join('-'))