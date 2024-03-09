// Sheikh Jibran Ahmed   2024 /Mrach/09
//this program return intentional error
//enter your name to check your are our user?
import inquirer from "inquirer";
let userGetValue = await inquirer.prompt({
    type: 'input',
    name: 'nameOfUser',
    message: 'Enter your name'
});
//list of our login user
let usersName = ['salman', 'jibran', 'hasan', 'haffi', 'hanzala'];
//program to check are your exist or not 
//this function pass boolean value 
function checkingFunc(elem) {
    return elem !== -1;
}
let getIndex = (elem) => {
    return usersName.indexOf(elem.toLowerCase());
};
let indexOF = getIndex(userGetValue.nameOfUser.toLowerCase());
const result = checkingFunc(indexOF);
//this statement is run to get boolean values and pass some message to you 
if (result) {
    console.log(`${usersName[indexOF].toUpperCase()} You're already exist`);
}
else {
    console.log('Intentional error');
    console.log(`Hello ${userGetValue.nameOfUser.toUpperCase()} let you excited to become our member \n`);
}
