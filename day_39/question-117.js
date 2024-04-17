// Sheikh Jibran Ahmed  17 / april / 2024
// store operator to perform operation in variable
let command = '+';
// values for operation
let val1 = 12;
let val2 = 43;
// simple calculator using switch statement
switch (command) {
    case '**':
        console.log(`${val1} ** ${val2} =  ${val1 ** val2}`);
        break;
    case '*':
        console.log(`${val1} * ${val2} =  ${val1 * val2}`);
        break;
    case '/':
        console.log(`${val1} / ${val2} =  ${val1 / val2}`);
        break;
    case '%':
        console.log(`${val1} % ${val2} =  ${val1 % val2}`);
        break;
    case '+':
        console.log(`${val1} + ${val2} =  ${val1 + val2}`);
        break;
    case '-':
        console.log(`${val1} - ${val2} =  ${val1 - val2}`);
        break;
    // when ths case is invalid default statement is run 
    default:
        console.log('Sorry! incorrect sign');
}
export {};
