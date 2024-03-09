//Sheikh Jibran Ahmed   2024 / march / 09

import inquirer from "inquirer"

//user expression get 
let userGetValue = await inquirer.prompt({
    type:'confirm',
    name:'expression',
    message:'Restriction 18+'
})

//user expression yes or no
let expression = userGetValue.expression

//condition for user expression
let result = expression == true ?'Welcome to our MetaVerse ': 'Sorry you\'re not allow'

//print result
console.log(result)