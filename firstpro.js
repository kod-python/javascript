
// inner html

let firstPage = document.getElementById("signup-page");
console.log(firstPage)

firstPage.innerHTML = "<h1>please sign up</h1> <label>first name</label> <input><label>last name</label><input><label>Email</label><input> <label>Password</label><input>";




// input

let mySignup = document.querySelector("input")

mySignup.style.display = "grid"

mySignup.style.padding = "0.5rem"
mySignup.style.width = "500px"

// input ends here

// body
let body = document.querySelector("body")
body.style.backgroundColor = "#323232"
body.style.color = "white"
body.style.display = "flex"
body.style.alignItems = "center"
body.style.justifyContent = "center"
body.style.width = "100%"
body.style.height = "100vh"


// body ends here

// button section
let button = document.querySelector("button")
button.style.padding = "1rem 3rem"
button.style.display = "flex"
button.style.marginTop = "20px"
button.style.width = "150px"
// button ends here

// heading 
let header = document.querySelector("h1")
header.style.fontSize = "2rem"
header.style.textTransform = "uppercase"
header.style.textAlign = "center"
header.style.paddingBottom = "50px"

// heading ends here


// form
let form = document.querySelector("form")

form.style.display = "flex"

form.style.flexDirection = "column"
form.style.justifyContent = "center"

// form ends here

// labels

let label = document.querySelector("label")
label.style.fontSize = "1.5rem"

// labels ends here

let fName = document.getElementById("Lname")

fName.style.padding = "0.5rem"
fName.style.width = "500px"
fName.style.marginTop = "10px"


let email = document.getElementById("email")

email.style.padding = "0.5rem"
email.style.width = "500px"
email.style.marginTop = "10px"


let password = document.getElementById("password")

password.style.padding = "0.5rem"
password.style.width = "500px"
password.style.marginTop = "10px"


let Last = document.getElementsByClassName("last")
Last.style.fontSize = "1.5rem"

