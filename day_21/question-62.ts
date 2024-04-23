// Sheikh Jibran Ahmed   23 / april / 2024

// interface or blueprint of student information
interface stdBlueprint{
    name:string,
    age:number,
    subjectClasses:string[] 
}

// data of students  
let student:stdBlueprint = {
    name:"Junaid",
    age:21,
    subjectClasses:['Biology', 'Chemistry', 'Physic']
} 

// print student data
console.log(student)