// Sheikh Jibran Ahmed   18 / april / 2024

// Array for destructure 
let laptop:(string| number)[] = ['dell', '3rd generation', 2021, '35k']

// destructuring array mean array items store in variable one by one separately
let [companyName, , year, price] = laptop

// print variables
console.log(companyName)
console.log(price)
console.log(year)
