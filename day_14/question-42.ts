// Sheikh Jibran Ahmed  19 / april / 2024

// store magician name in list 
let magicianNames: string[] = ["Celestia Spellweaver",
    "Arcane Aurora",
    "Wizard Waverly",
    "Mystic Marlowe"]

// function for reveal magician name one by one
function revealMagician(arr: string[], greatMagician?: any): void {
    if (greatMagician) {
        arr.push(greatMagician)
    }
    arr.forEach((magician) => {
        console.log(magician)
    })
}

// calling a function 
revealMagician(magicianNames, 'Sheikh Jibran Ahmed')
// revealMagician(magicianNames)