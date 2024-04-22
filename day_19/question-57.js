// Sheikh Jibran Ahmed
// list of grades 
let grades = [87, 65, 89, 53, 57];
// function to get average of any list 
function averageGrade(grades) {
    let sum = 0;
    // Using forEach to iterate through each element of the array
    grades.forEach((num) => {
        sum += num;
    });
    return sum / grades.length;
}
// store function return value
let averageResult = averageGrade(grades);
// print result value
console.log(averageResult);
export {};
