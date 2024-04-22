// Sheikh Jibran Ahmed


// list of grades 
let grades: number[] = [87, 65, 89, 53, 57];

// function to get average of any list 
function averageGrade(grades: number[]): number {
    let sum: number = 0;

    // Using forEach to iterate through each element of the array
    grades.forEach((num) => {
        sum += num;
    });

    return sum / grades.length;
}

// store function return value
let averageResult: number = averageGrade(grades);

// print result value
console.log(averageResult);