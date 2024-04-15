
// Sheikh Jibran Ahmed   14 / April / 2024

// interface or type of an object 
interface dataType {
    workerName: string,
    id: number,
    time: string,
    work: string
}

// object of an employee 
let employee_data: dataType = {
    workerName: 'Jibran',
    id: 452157,
    time: '2 hours',
    work: 'plumbing'
}

// adding indentation in string object as a third argument 
let changeObjectIntoString = JSON.stringify(employee_data, null ,' ')
console.log(changeObjectIntoString)