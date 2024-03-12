//Sheikh Jibran Ahmed  2024 / march / 12

//prompt for get person year of birth
let person_age:any = prompt('Enter your year of birth to find your age')

//calculation for user age 
let age = 2024 - parseInt(person_age) 


// if else statements for human stages 
if(age >= 1 && age <= 3){
  console.log(`You\'re infant because your age is ${age} years old`)
}else if(age >= 4 && age <= 17){
  console.log(`You\'re child because your age is ${age} years old`)
}else if(age >= 18 && age <= 40){
  console.log(`You\'re adult because your age is ${age} years old`)
}else if(age >= 41){
  console.log(`You\'re elder because your age is ${age} years old`)
}else{
    console.log('Please enter your valid year-of-birth')
}