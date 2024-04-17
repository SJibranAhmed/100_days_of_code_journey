// Sheikh Jibran Ahmed   17 / march / 2024

// define type of an object
interface userDataType {
    name: string,
    email: string,
    contact: number,
    getBios: () => string
}

// object with method in which we use lexical 'this' to get properties of object under the function 
let userData: userDataType = {
    name: 'Jibran',
    email: 'abc@gmail.com',
    contact: 92035457651,
    getBios() {
        return `Hello "${this.name}"! you were loging us for this email "${this.email}" last time.`
    }
}

//store value of in variable
let getReturnValue: string = userData.getBios()

//printing value
console.log(getReturnValue)