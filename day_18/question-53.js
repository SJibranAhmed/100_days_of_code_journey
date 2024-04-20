// Sheikh Jibran Ahmed   20 / april / 2024
// object of arrays for computer programer
let developerSkills = {
    languages: ['Typescript', 'Python', 'C#', 'C++'],
    tools: ['Git', 'Docker', 'Webpack'],
    frameworks: ['Angular', 'React', 'Vue']
};
// destructuring object 
let { languages, tools, frameworks } = developerSkills;
// conduct message using template literal
let message = `
Hello program!
You want to learn this computer programming
language : ${languages[1]}
Tool : ${tools[0]}
Framework : ${frameworks[1]}`;
// print message
console.log(message);
export {};
