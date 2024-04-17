// Sheikh Jibran Ahmed   17 / march / 2024

// define type of an object
interface objType {
    name: string,
    id: number,
    charges: string,
    getBios: () => any
}

// object with method in which we use lexical 'this' to get properties of object under the function 
let customer: objType = {
    name: 'Jibran',
    id: 5648,
    charges: '123k',
    getBios: function() {
        // lexical this is store in variable for use in nested function
        let outerThis = this
        function nestedFunc(){
            //use outer stored this which refer the object 
            console.log(outerThis)
        }
        return nestedFunc()
    }
}

//store value of in variable
let getReturnValue: string = customer.getBios()

//printing value
console.log(getReturnValue)