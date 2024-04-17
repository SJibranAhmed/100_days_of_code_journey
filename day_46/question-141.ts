// Sheikh Jibran Ahmed    8 / april / 2024


// asynchronous function return promise when API is to late "await" is used to continue our program
// and the specific line is in pending in which 'await' is put  
let func = async () => {
    let url = "https://jsonplaceholder.typicode.com/posts/1"
    console.log('before await')

    // here is await is put
    let fetchData = await fetch(url)
    let convert = await fetchData.json()
    console.log(convert)
}

// calling a function
func()

console.log('after await')