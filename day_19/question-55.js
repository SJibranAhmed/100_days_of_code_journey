// Sheikh Jibran Ahmed   21 / april / 2024
// our number going to double
let numberList = [10, 20, 30, 40];
// function to convert single number to double
function doubleNumberList() {
    // forEach() loop help to get all list items one by one
    numberList.forEach((num) => {
        let getDouble = num * 2;
        console.log(getDouble);
    });
}
// this function double all list values
doubleNumberList();
export {};
