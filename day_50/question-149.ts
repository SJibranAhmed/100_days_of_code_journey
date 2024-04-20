// Sheikh Jibran Ahmed  20 / april / 2024

/*"EVENT LOOP" is a crucial concept for understanding how asynchronous code execution works.
JavaScript is single-threaded, meaning it can only execute one piece of code at a time.
However, it often needs to handle asynchronous tasks like fetching data from a server 
or responding to user input without blocking the execution of other code*/

// javascipt run with following pattern
// 1- call stack (store those function which is going to be run)
// 2- web API (delay to fetch a data from server: e.g  setTimeOut(), AJAX, API)
// 3- task queue (when the delay of fetching is complete the function is storing in it)
// 4- event loop (push waiting function or code in 'task queue' to 'call stack' )

// firstly this call run and add in call stack
console.log('starting JS code')

// this function is run after all the code is run
function callback() {
    console.log('fetched web API')
}


function printData() {
    // it send the code into webAPI for wait
    setTimeout(() => {
        callback()
    },3000)
}

// secondly this function run and goes in webAPI to fetch data or delay because it contain setTimeOut().
// after completing it'll go to task queue and then Event loop push it in call stack and this function is run
printData()
// thirdly this code is go to call stack and run
console.log('end JS code')