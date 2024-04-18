// Sheikh Jibran Ahmed  19 / april / 2024

// store magician name in list 
let magicianNames: string[] = ["Hussain",
    "Munaaf",
    "Faizan",
    "Mateen"]
    
console.log(`list before adding magician : \n${magicianNames}`)

// function for copy and add our list
function revealMagician(arr: string[], greatMagician?: any): void {
    let magicianCopy = [...arr]
    if (greatMagician) {
        magicianCopy.push(greatMagician)
    }
    console.log(`list in function : \n${magicianCopy}`)
}

// calling a function 
revealMagician(magicianNames, 'Sheikh Jibran Ahmed')
console.log(`list after adding magician : \n${magicianNames}`)

