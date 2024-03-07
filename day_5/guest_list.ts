//Sheikh Jibran Ahmed  2024 / march / 03

// invite friends for invitation

//make guest in an array
let guestList:string[]= ['hasan', 'munaaf', 'talha']

// print message for everyone individually
guestList.forEach((guest:string)=>{
    console.log(`Hello! \n"${guest.toUpperCase()}" i want to dinner with you tonight are you agree?`)
})