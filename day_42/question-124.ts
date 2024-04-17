// Sheikh Jibran Ahmed   17 / march / 2024

// define type of an object
interface userDataType{
    name:string,
    getBios:()=> string
}

// object with method in which we use lexical 'this' to get properties of object under the function 
let userData:userDataType = {
    name: 'Jibran',
    getBios(){
       return this.name
    }
}

//store value of in variable
let getReturnValue:string = userData.getBios()

//printing value
console.log(getReturnValue)