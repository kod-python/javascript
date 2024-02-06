
let body = document.body


// add bg color

body.style.backgroundColor ="orange"

// text color

body.style.color = "color"


let divContent = document.getElementById("content")


let paragraph = document.createElement("p");
paragraph.textContent = "please come home right now";

divContent.append(paragraph)


let heading = document.createElement("h1")
heading.textContent = "this is good"

divContent.appendChild(heading)


let myUl = document.createElement("ul")


let item1 = document.createElement("li")
item1.textContent = "item1"


let item2 = document.createElement("li")
item2.textContent = "item2"


let item3 = document.createElement("li")
item3.textContent = "item3"

myUl.appendChild(item1)
myUl.appendChild(item2)
myUl.appendChild(item3)

divContent.appendChild(myUl)


let button = document.createElement("button")

button.textContent = "click here"


// add evemt listener

button.addEventListener("click", function (){
    alert("button clicked")
})

divContent.appendChild(button)


// remove item
myUl - document.querySelector("ul")
item2 = myUl.children[1]
myUl.removeChild(item2)