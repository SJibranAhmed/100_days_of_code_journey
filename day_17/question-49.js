// Sheikh Jibran Ahmed   20 / april / 2024
// function with "...rest" parameter which get multiple arguments
function hobbiesFunc(...giveHobbies) {
    // use 'forEach loop' for each items 
    giveHobbies.forEach(hobby => {
        console.log(`Enjoy your '${hobby}' hobby`);
    });
}
// calling function with multiple arguments
hobbiesFunc('cricket', 'reading', 'fact about universe');
export {};
