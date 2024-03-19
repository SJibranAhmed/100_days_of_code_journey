// function for get shirt features
function T_shirt(size: string, color: string) {
    return `Size of T-Shirt : ${size},
Color of T-Shirt : ${color} \n`
}

// calling functions with their parameter 
let shirt1 = T_shirt('large', 'blue')
let shirt2 = T_shirt('Xlarge', 'reddish')
let shirt3 = T_shirt('medium', 'silver')

// printing function return values
console.log(shirt1)
console.log(shirt2)
console.log(shirt3)