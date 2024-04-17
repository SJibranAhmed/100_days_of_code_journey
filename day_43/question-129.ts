// Sheikh Jibran Ahemd   17 / april / 2024

//interface for object
interface objType{
    name:string,
    age:number,
    func():void
}

//object with traditional function 
let obj:objType = {
    name: 'Arafat',
    age: 26,
    func: function(){
        // this is refer to parent object
        return this.name
    }
}

// store and calling variable
let returnValue = obj.func()
console.log(returnValue)



//object with arrow function 
let obj2:objType = {
    name: 'Arafat',
    age: 26,
    func: () =>{
        // in arrow function this capture global value of this
        return obj2.age
    }
}

// store and calling variable
let returnValue2 = obj2.func()
console.log(returnValue2)