// Sheikh Jibran Ahmed   22 / april / 2024

/* Question 58: Average Score Calculator: Write a simple program that can take lots of scores 
and find their average.*/


// function to get average of any list 
function averageScore(...score: number[]): number {

    let sum: number = 0;

    // Using forEach to iterate through each element of the array
    score.forEach((num) => {
        if (sum <= 100) {
            sum += num;
        }
    });

    return sum / score.length;
}

// store function return value
let averageResult: number = averageScore(67, 82, 12, 38, 93);

// print result value
console.log(averageResult);
