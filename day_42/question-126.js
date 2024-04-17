// Sheikh Jibran Ahmed   17 / march / 2024
// object with method in which we use lexical 'this' to get properties of object under the function 
var customer = {
    name: 'Jibran',
    id: 5648,
    charges: '123k',
    getBios: function () {
        // lexical this is store in variable for use in nested function
        var outerThis = this;
        function nestedFunc() {
            //use outer stored this which refer the object 
            console.log(outerThis);
        }
        return nestedFunc();
    }
};
//store value of in variable
var getReturnValue = customer.getBios();
//printing value
console.log(getReturnValue);
