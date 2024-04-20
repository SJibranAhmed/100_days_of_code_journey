// Sheikh Jibran Ahmed   20 / april / 2024 

// function which is run a period of time 
let delayFunc = (name: string) => {
    console.log(`Hello ${name}! how are you?`)
}

console.log('Please wait...')

// setTimeout() is a function used to execute a specified function
//  or code block after a designated delay
setTimeout(() =>
    delayFunc('jibran')
    // we designated 2000 millisecond delay means 2 seconds delay
, 2000
)