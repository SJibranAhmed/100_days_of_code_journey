//Sheikh Jibran Ahmed   2024 / march / 12
let users = ['salman', 'jibran', 'haseeb'];
//for loop for printing greeting for all users
for (let i = 0; i < users.length; i++) {
    if (users[i] === 'jibran') {
        console.log(`Hello ${users[i].toUpperCase()} you know you are admin`);
    }
    else if (users[i] === 'salman') {
        console.log(`Hello ${users[i].toUpperCase()} CEO of our project`);
    }
    else {
        console.log(`Hello ${users[i].toUpperCase()} how are you??`);
    }
}
export {};
