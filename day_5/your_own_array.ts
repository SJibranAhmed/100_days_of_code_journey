//Sheikh Jibran Ahmed  2024 / march / 03

//storing list for mode of transportation name i like most
let carsName:string[] = ['sportage', 'sorento', 'niro']

//printing statements about our list items
for(let index = 0; index < carsName.length; index++){
    console.log(carsName[index].charAt(0).toUpperCase() + carsName[index].slice(1) + ' is model of KIA')
}
