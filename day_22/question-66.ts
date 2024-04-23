// Sheikh Jibran Ahmed  23 / April / 2024

/*Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values.
 It should only say true if both are true, using the && operator.*/

// function for checking two conditions  
function checks(con1:boolean, con2:boolean):string{
    if(con1 && con2){
        return "Both Statements are true"
    }else{
        return "checks the arguments in which one is false"
    }
 }

// condition 1
let con1 = true
// condition 2
let con2 = false

// store value in variable
let getBooleanValue = checks(con1, con2)
// print value
console.log(getBooleanValue)