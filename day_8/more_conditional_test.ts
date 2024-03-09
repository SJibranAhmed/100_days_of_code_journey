//Sheikh Jibran Ahmed
import inquirer from "inquirer"

let userGet:any =await inquirer.prompt({
    type:'input',
    name:'personName',
    message:'check status of a person'
})

//storing status of person
enum Status {
    administrator = 'Administrator',
    teacher = 'Teacher',
    student = 'Student'

}

//list of names which store in computer data
const personList: string[] = ['Kamran Khan Tessori', 'abdul moiz', 'nofil', 'fahim']

//conditions check who are you in I.T program
function getStatus(name: string): any {
    if (name === personList[0].toLowerCase()) {
        return `Sir ${userGet.personName.toUpperCase()} is ${Status.administrator} of I.T initiative.I extend my heartfelt gratitude to you for your unwavering dedication and tireless efforts in serving the people of Sindh`
    } else if (personList.includes(name)) {
        return `Sir ${userGet.personName.toUpperCase()} is ${Status.teacher} of I.T initiative.Encourage students to set clear and achievable short-term and long-term goals. Help them understand the importance of having a vision for their future and breaking it down into actionable steps.`
    } else if (userGet.personName == '') {
        return 'Please enter your name again'
    } else {
        return `${userGet.personName.toUpperCase()} is ${Status.student} of I.T initiative.Set achievable goals for each day or week. Be realistic about what you can accomplish within a given timeframe to avoid burnout and frustration`
    }
}

//get result of our condition 
let result = getStatus(userGet.personName.toLowerCase())

//print value of our result
console.log(result)