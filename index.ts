#! /usr/bin/env node
import inquirer from "inquirer"

import {differenceInSeconds, interval} from "date-fns"

console.log("================================================================")
console.log("===========:Well come to countdown Timer========================")
console.log("================================================================")
let time = await inquirer.prompt([
    {
        name:"user",
        type:"number",
        message:"Enter your number of second",
        validate:(input) =>{
            if(isNaN(input)){
                return "Enter valid number"
            }
            else if(input > 60){
                return "Seconds must be in 60"
            }
            else{
                return true
            }
        }
    }
])
let input = time.user
function timer(val:number){
    let setTime = new Date().setSeconds(new Date().getSeconds() +val)
let newTime = new Date(setTime)
    setInterval(() => {
        let currentTime = new Date()
        let timeDiff = differenceInSeconds(newTime,currentTime)
        if(timeDiff <= 0){
            console.log("Time Out")
            process.exit()
        }
        let min = Math.floor((timeDiff%(3600 * 24 )) / 3600)
        let sec = Math.floor(timeDiff%60)
        console.log(`${min.toString().padStart(2,'0')} : ${sec.toString().padStart(2,'0')}`)
    },1000)

}
timer(input)