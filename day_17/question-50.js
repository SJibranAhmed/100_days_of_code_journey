// Sheikh Jibran Ahmed   20 / april / 2024
// array to store multipe values
let about = ['Jibran', 'student of Generative AI', 'Inter passed in Pre-medical'];
// destructuring array to assign array items in distinct variable  
let [studentName, currJob, eligibilty] = about;
// printing all variable using template literal
let message = `
Name : ${studentName}
Current job : ${currJob}
Academic approach : ${eligibilty}`;
// print message
console.log(message);
export {};
