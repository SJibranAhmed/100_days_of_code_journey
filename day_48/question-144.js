// Sheikh Jibran Ahmed   18 / april / 2024
// promise for fetching data..
// promise 1 is resolve 
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First promise resolved');
    }, 1 * 100);
});
// promise 2 is resolve 
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Second promise rejected');
    }, 2 * 100);
});
// promise 3 is resolve 
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Third promise resolved');
    }, 3 * 100);
});
/* Promise.all() is used to wait for all three promises (promise1, promise2, and promise3) to resolve,
 and then the .then() callback is executed with an array containing the resolved values of all the promises.
 If any of the promises are rejected, the .catch() callback will be executed with
 the reason of the first promise that was rejected.*/
Promise.all([promise1, promise2, promise3])
    .then((res) => {
    for (let index in res) {
        console.log(res[index]);
    }
})
    .catch((rej) => {
    console.log(rej);
});
export {};
