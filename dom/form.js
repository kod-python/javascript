let form = document.createElement("form")
// form.addEventListener("submit")//might add something

// create a label
let label = document.createElement("label")
label.textContent = "enter your name";

// label event listeners

// function labelHover(){
//     this.style.color = "orange";
// }

label.addEventListener('mouseover', function () {
    label.style.color = "red"
});

label.addEventListener('mouseout', function(){
    label.style.color = "green";

});


let inputField =  document.createElement("input")
inputField.type = "text"
inputField.placeholder = "enter your name"
inputField.id = "inputField"


form.appendChild(label);
form.appendChild(inputField);

