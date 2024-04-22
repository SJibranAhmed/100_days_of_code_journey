// Sheikh Jibran Ahmed   22 / april / 2024

/*Self-Running User Profile: Create a quick, self-setup profile for a user
 that can tell you the user's name and age.*/

// Create method to get self-building user profile  
let createProfile = {
    // store user data
    name: 'Jibran',
    age: 21,
    // method for build profile
    selfRunnerUserProfile(): string {
        return `(User's Profile)
        Name : ${this.name.toUpperCase()}
        Age : ${this.age}`
    }
}

// store return value in variable
let showProfile = createProfile.selfRunnerUserProfile()

// print variable
console.log(showProfile)