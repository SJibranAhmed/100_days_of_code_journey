// Sheikh Jibran Ahmed 23 / april / 2024
/*Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars,
 trucks, and motorcycles using enums, and show one example. */
// Enum(enumeration) is a data type in programming languages used to define a set of named constants,
//  usually related to a specific domain.
// Enum for vehicles
var Vehicles;
(function (Vehicles) {
    // like object enum contain "key = value" pair
    // key = value 
    Vehicles["cars"] = "Cars";
    Vehicles["trucks"] = "Trucks";
    Vehicles["motorcycles"] = "Motorcycles";
})(Vehicles || (Vehicles = {}));
// print enum value
console.log(`This is a ${Vehicles.motorcycles} track.`);
// enum for motorcycle priority
var motorcyclesPriority;
(function (motorcyclesPriority) {
    // enum first value is start from 0 by default. You can set their value 
    motorcyclesPriority[motorcyclesPriority["Honda"] = 0] = "Honda";
    motorcyclesPriority[motorcyclesPriority["Suzuki"] = 1] = "Suzuki";
    motorcyclesPriority[motorcyclesPriority["Yamaha"] = 2] = "Yamaha";
    motorcyclesPriority[motorcyclesPriority["unique"] = 3] = "unique";
})(motorcyclesPriority || (motorcyclesPriority = {}));
// print performance of motorcycle
console.log("Priority of Yamaha is : " + motorcyclesPriority.Yamaha);
export {};
