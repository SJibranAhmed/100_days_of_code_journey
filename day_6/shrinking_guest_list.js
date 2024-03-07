// Sheikh Jibran Ahmed   2024 / march / 07
//Program for shrinking guest list
//scenerio cancel i whether to reduce my guest list
//make guest in an array
var guestList = ['mateen', 'munaaf', 'fahim sir', 'moiz sir', 'haffi'];
//remove guest from start by using shift() method
guestList.shift();
//remove guest from middle by using shift() method
guestList.splice(0, 1);
//remove guest from end by using pop() method
guestList.pop();
// print message for everyone individually
guestList.forEach(function (guest) {
    console.log("Hello! \n\"".concat(guest.toUpperCase(), "\" i want to dinner with you tonight are you agree?"));
});
