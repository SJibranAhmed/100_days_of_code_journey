// Sheikh Jibran Ahmed   14 / April / 2024
// object of an employee 
let employee_data = {
    workerName: 'Jibran',
    id: 452157,
    time: '2 hours',
    work: 'plumbing'
};
// adding indentation in string object as a third argument 
let changeObjectIntoString = JSON.stringify(employee_data, null, ' ');
console.log(changeObjectIntoString);
export {};
