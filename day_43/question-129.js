// Sheikh Jibran Ahemd   17 / april / 2024
//object with traditional function 
var obj = {
    name: 'Arafat',
    age: 26,
    func: function () {
        // this is refer to parent object
        return this.name;
    }
};
// store and calling variable
var returnValue = obj.func();
console.log(returnValue);
//object with arrow function 
var obj2 = {
    name: 'Arafat',
    age: 26,
    func: function () {
        // in arrow function this capture global value of this
        return obj2.age;
    }
};
// store and calling variable
var returnValue2 = obj2.func();
console.log(returnValue2);
