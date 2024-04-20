// Sheikh Jibran Ahmed   20 / april / 2024 

// Synchronous Example
// execution # 1
console.log('game is starting')

function scored() {
    console.log('please keep scoring')
}

// execution # 2
scored()

// execution # 3
console.log('game is over')


// Asynchronous Example
// execution # 1
console.log('Your time is start now..')

function collectionFunc() {
    setTimeout(() => {
        console.log('You collect many items')
    },3000)
}

// execution # 3
collectionFunc()

// execution # 2
console.log('ok that\'s all your time is over')