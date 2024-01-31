// console.log(window.document);

// console.dir(document);
// console.log(document.body);
// console.log(document.links[0]);
// document.write("working with dom");

// console.log(document.getElementById("main"));

// document.getElementById("main").innerHTML = "<h3>new add list for me</h3>"

// console.log(document.scripts[0]);


// for get element by id
let myTitle = document.getElementById("new-section");
console.log(myTitle)

myTitle.textContent - "shopping list"
myTitle.innerText = "my shopping list"
myTitle.innerHTML = "<strong>My shopping list</strong>"

// add css
myTitle.style.color = "blue"
myTitle.style.backgroundColor =  "green"
myTitle.style.padding = "20px"
myTitle.style.borderRadius = "8px"


// for get element by classname

let jsName = document.getElementsByClassName("new-name")[0]

console.log(jsName)


jsName.style.color = "blue"
jsName.style.backgroundColor =  "green"
jsName.style.padding = "20px"
jsName.style.borderRadius = "8px"




// by tag name
let myhtmltag =  document.getElementsByTagName("p")
console.log(myhtmltag)



// my query selector
// by usung a class

let myClassheading =  document.querySelector("heading")


// by using tag
let myTagname = document.querySelector("h1")


// by ID

let myIdname  = document.querySelector("new-section")


// psuedo class

let forPseoudo =  document.querySelector("li:first-child")
let forPseoudo =  document.querySelector("input [type="text"]")