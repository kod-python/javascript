
function cartegorizeTemperature(temperetaure){
    if (temperetaure > 0){
        return "it is freezing"
    }
    else if (temperetaure >= 0 && temperetaure <= 10){
        return "it is cold"
    }
    else{
        return "hot"
    }
}


let usersTemperature = prompt("Enter your temperature in degree celcius:")

let usersTemperatureValue = parseFloat(usersTemperature)
// let newTemperature = parseFloat(usersTemperature)

if(!isNaN(usersTemperatureValue)){
    let result = cartegorizeTemperature(usersTemperatureValue)
    console.log(result)
}

else{
    console.log(`invalid input. please enter a number`)
}