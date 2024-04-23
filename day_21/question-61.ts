// Sheikh Jibran Ahmed 23 / april / 2024

/*Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars,
 trucks, and motorcycles using enums, and show one example. */

// Enum(enumeration) is a data type in programming languages used to define a set of named constants,
//  usually related to a specific domain.

// Enum for vehicles
enum Vehicles{
    // like object enum contain "key = value" pair
 // key = value 
    cars = 'Cars',
    trucks = 'Trucks',
    motorcycles = 'Motorcycles'
}

// print enum value
console.log(`This is a ${Vehicles.motorcycles} track.`)

// enum for motorcycle priority
enum motorcyclesPriority{
    // enum first value is start from 0 by default. You can set their value 
    Honda,
    Suzuki,
    Yamaha,
    unique
}

// print performance of motorcycle
console.log("Priority of Yamaha is : " + motorcyclesPriority.Yamaha)