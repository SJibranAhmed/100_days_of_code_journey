// some data for fetching 
let userData = {
    name: 'Sheikh Jibran Ahmed',
    contact: '775634',
    email: 'abc889970@gmail.com'
};
console.log('before fetch');
// function which pass in argument of another function 
function asyncFunc() {
    return userData;
}
// async function which is run after all code is run
async function callBackFunc(getFunc, name, address) {
    let call = await getFunc();
    call[name] = address;
    console.log(call);
}
// in function argument pass is also function and some values 
callBackFunc(asyncFunc, 'address', 'house no : 331');
console.log('after fetch');
export {};
