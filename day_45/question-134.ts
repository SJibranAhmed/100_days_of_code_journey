//Sheikh Jibran Ahmed   15 / april / 2024

// as we know that stringify method "JSON.parse()" is reciprocal it which convert string data into javascript object  
let fetchDataFromLocalServer = '{"name":"John", "age":30, "city":"New York"}'

// check type of get data 
console.log('Type of data is : ' + typeof fetchDataFromLocalServer)
console.log(fetchDataFromLocalServer + '\n')

// Using json.parse() to convert string to javascript object 
let convertJSObject = JSON.parse(fetchDataFromLocalServer) 

// check type of converting data
console.log('Type of data is : ' + typeof convertJSObject)
console.log(convertJSObject)