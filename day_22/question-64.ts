// Sheikh Jibran Ahmed

/*Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. */

// Function for concatenate(join) string and number values
function joinStrAndNum(text:string, value:number):string{
    return text + value
}

// pass argument of string and number and get return value which is only string value
let result = joinStrAndNum('Student ID: ', 43214)

// print result 
console.log(result) //   "Student ID: 43214"