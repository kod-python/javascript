

let body = document.body;

body.style.backgroundColor = "#232323"



let form = document.getElementById("form")



let logo = document.createElement("label")

logo.textContent = "PLease enter your details"


// mouse events
function onClick(){
    this.style.color = "black"
}

logo.addEventListener('click', onClick);


function onDoubleClick(){
    this.style.color = "#323232"
}

logo.addEventListener('dblclick', onDoubleClick);


function onRightClick(){
    this.style.color = "#232323"
}

logo.addEventListener('contextmenu', onRightClick);


function onMouseDown(){
    this.style.color = "brown"
}

logo.addEventListener('mousedown', onMouseDown);




function onMouseUp(){
    this.style.color = "ash"
}
logo.addEventListener('mouseup', onMouseUp);



function onWheel(){
    this.style.color = "gray"
}
logo.addEventListener('wheel', onWheel);


// hover

function onMouseOver(){
    this.style.color = "purple"
}

logo.addEventListener('mouseover', onMouseOver);



function onMouseOut(){
    this.style.color = "crimson"
}

logo.addEventListener('mouseout', onMouseOut);


// on drag

function onDragStart(){
    this.style.color = "violet"
}


logo.addEventListener('dragstart', onDragStart);


function onDrag(){
    this.style.color = "orange"
}

logo.addEventListener('drag', onDrag);



function onDragEnd(){
    this.style.color = "blue"
}
logo.addEventListener('dragend', onDragEnd);




// keyboard events

logo.addEventListener('keydown', function(){
    this.style.color = "yellow"
});



logo.addEventListener('keyup', function(){
    this.style.color = "pink"
})

logo.addEventListener('keypress', function(){
    this.style.color = "brown"
})



let inputField = document.createElement("input")
inputField.type = "text"
inputField.id = "inputF"



form.append(logo)
form.appendChild(inputField)