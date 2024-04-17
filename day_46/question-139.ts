// Reserve key in JavaScript
// 1- in
// 2- return
// 3- if

// "in" reserved key in javascript
let items:string[] = ['milk', 'egg', 'bread', 'butter']

0 in items?console.log('Welcome'):console.log('Sorry! we don\'t have this items in store')


// "return" reserved key in javascript
// function for get user name
let getName:any = (userName:string):string=>{
    return userName
}

// calling function to get user name in output
let result:string = getName('Fareed Alvi')
console.log(result)


// "if" reserved key in javascript
let age:number = 12

// if / else condition for checking something 
if(age < 18){
    console.log('You\'re child')
}else{
    console.log("welcome to future")
}