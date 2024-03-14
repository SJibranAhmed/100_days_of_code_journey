//Sheikh Jibran Ahmed  14 / march / 2024

// our current users list
let currentUsers: string[] = ['munaaf', 'hammad', 'azeem', 'dilaver']

//new users try to join us
let newUsers: string[] = ['suleman', 'dilaver', 'faizan', 'munaaf']

//checking our new user exist or not 
currentUsers.forEach(users => {
    if (newUsers.includes(users)) {
        console.log(`This user "${users.toUpperCase()}" is already exist.`)
    } else {
        console.log(`${users.toUpperCase()} Good you can join us`)
    }
})
