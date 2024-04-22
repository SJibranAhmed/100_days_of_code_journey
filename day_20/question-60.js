// Sheikh Jibran Ahmed   22 / april / 2024
// Create method to get self-building user profile  
let createProfile = {
    // store user data
    name: 'Jibran',
    age: 21,
    // method for build profile
    selfRunnerUserProfile() {
        return `(User's Profile)
        Name : ${this.name.toUpperCase()}
        Age : ${this.age}`;
    }
};
// store return value in variable
let showProfile = createProfile.selfRunnerUserProfile();
// print variable
console.log(showProfile);
export {};
