// Sheikh Jibran Ahmed   16 / april / 2024
// sentence for checking vowels character
let sentence = 'please check the vowels';
// vowels
let vowels = ['a', 'e', 'i', 'o', 'u'];
//loop for checking first vowel present in our sentence and then 'break' our loop 
for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i].toLowerCase();
    if (vowels.includes(char)) {
        console.log(`First vowel found in given sentence is : "${char}" at index of : "${i}"`);
        break;
    }
}
export {};
