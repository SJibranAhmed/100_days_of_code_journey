// Sheikh Jibran Ahmed   18 / april / 2024

// promise for fetching data..
let newPromise = new Promise((resolve, reject) => {
    // store value for condition
    let res = false
    console.log('fetching data..')

    // delay added for fetching data
    setTimeout(() => {
        // if/else condition for resolve & reject response of promise()
        if (res) {
            // for resolution
            resolve('The promise is resolved.')
        } else {
            // for rejection
            reject('The promise is rejected.')
        }
    }, 2000)
})

//function for resolution of promise
function resolution(getResponse: unknown): void {
    console.log(getResponse)
}

//function for rejection of promise
function rejection(getResponse: unknown): void {
    console.log(getResponse)
}

// when pormise is resolved "then()" function is call 
newPromise.then(resolution)

// when pormise is rejected "catch()" function is call 
newPromise.catch(rejection)