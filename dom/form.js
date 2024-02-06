let form = document.createElement("form")
// form.addEventListener("submit")//might add something

// create a label
let label = document.createElement("label")
label.textContent = "enter your name"



// label event listeners

function labelHover(){
    this.style.color = "orange";
}

label.addEventListener("mouseover", labelHover);

label.addEventListener("mouseout", function(){
    this.style.color = "";

});





let inputField =  document.createElement("input")
inputField.type = "text"
inputField.Placeholder = "enter your name"
inputField.id = "inputField";


form.appendChild(label);
form.appendChild(inputField);