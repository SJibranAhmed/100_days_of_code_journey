// Sheikh Jibran Ahmed   18 / april / 2024

// promise for fetching data..
let newPromise = new Promise((response) => {
    console.log('Please wait 2 sec.')
    // "setTimeOut" use for delay which make sure delay of our statement 
    setTimeout(() => {
        response('Hello World')
    }, 3000)
})

// function which pass in argument of then() method get response of our promise()
function printResponse(getResponse: unknown): void {
    console.log(getResponse)
}

// calling promise which get callBack function 
newPromise.then(printResponse)