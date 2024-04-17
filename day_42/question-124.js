// Sheikh Jibran Ahmed   17 / march / 2024
// object with method in which we use lexical 'this' to get properties of object under the function 
let userData = {
    name: 'Jibran',
    getBios() {
        return this.name;
    }
};
//store value of in variable
let getReturnValue = userData.getBios();
//printing value
console.log(getReturnValue);
export {};
