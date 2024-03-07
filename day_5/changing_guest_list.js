//Sheikh Jibran Ahmed  2024 / march / 03
// invite friends decline for invitation due to some reason update our list
//make guest in an array
var guestList = ['hasan', 'munaaf', 'talha'];
//for update your array use below pattern
guestList[0] = 'mateen';
guestList[2] = 'haffi';
// print message for everyone individually
guestList.forEach(function (guest) {
    console.log("Hello! \n\"".concat(guest.toUpperCase(), "\" i want to dinner with you tonight are you agree?"));
});
