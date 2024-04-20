// Sheikh Jibran Ahmed   20 / april / 2024

// simple function to calculate area of triangle
function areaOfTriangle(base:number, height:number):string{
    return `The area of triangle is : ${0.5 * base * height} m²`
}

// store and print value
let result:string = areaOfTriangle(23, 43) 
console.log(result)

// refactor areaOfTriangle() into arrowFunc()
let arrowFunc = (base:number, height:number):string=>{
    return `The area of triangle is : ${0.5 * base * height} m²`
}

// store and print value
let arrowFuncResult:string = areaOfTriangle(23, 43) 
console.log(arrowFuncResult)