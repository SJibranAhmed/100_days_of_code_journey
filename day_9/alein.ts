//alein_color store in array
let alein_color:string[]= ['green', 'yellow', 'red']

//put value our statements
let aleinStatus:string = alein_color[0]

//this is first pattern to print our value with switch statement
switch(aleinStatus){
    case 'green':
    console.log(`alein_color is ${aleinStatus}`)
    break
    case 'red':
    console.log(`alein_color is ${aleinStatus}`)
    break
    case 'yellow':
    console.log(`alein_color is ${aleinStatus}`)
    break
}


//this is second pattern to print our value with if/else condition
if(aleinStatus == 'green'){
    console.log(`Your strength  is maximum '${alein_color[0]}' you're healthy`)
}else if(aleinStatus == 'yellow'){

    console.log(`Your strength color is become '${alein_color[1]}' you need some meal food`)
}else{
    console.log(`Your're strength color become '${alein_color[2]}' your're failed!`)
}