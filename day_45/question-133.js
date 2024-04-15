// Sheikh Jibran Ahmed   14 / April / 2024
// object of an employee 
let employee_data = {
    name: 'Jibran',
    fName: 'Abdul Raheem',
    pinCode: 778869,
    workingDays: ['monday', 'tuesday', 'saturday', 'sunday']
};
// JSON stringify method use to convert object or another data to string for store in server locally.It take small storage and data more readable.  
//change type object to string using "JSON.stringify" method
let objectChangedInString = JSON.stringify(employee_data);
// printing both normal and string changed object
console.log(employee_data);
console.log(objectChangedInString);
export {};
