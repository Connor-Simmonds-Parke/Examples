/*
    Background Scripts
    By me
*/

//Store the div that will hold the coloured boxes.
const bgContainer = document.getElementById("bg_container");

//Will be used to hold a box that was clicked.
var clickedBox;

//Add a coloured div box to the container.
function addBox() {
    //Create new div element.
    var newBox = document.createElement("div");

    //Give it the background box class.
    newBox.className = "bg_box";

    //Add an onclick listener that changes the background colour.
    newBox.addEventListener("click", changeColour);

    //Add the new coloured box to the container.
    bgContainer.appendChild(newBox);
}

//Change the colour of the box between red, blue, and green.
function changeColour() { 
    console.log(getComputedStyle(this).getPropertyValue("background-color"));  //Current rbg colour value.

    //Remove selected identifier if it exists.
    if (clickedBox != null) {
        clickedBox.innerHTML = "";
    }

    //Save the box that was clicked.
    clickedBox = this;

    //Add selected identifier.
    clickedBox.innerHTML = "^";

    //Check the box's colour, and cycle it.
    if (getComputedStyle(this).getPropertyValue("background-color") == "rgb(" + "255, 0, 0)") {
        this.style.backgroundColor = "blue";
    }
    else if (getComputedStyle(this).getPropertyValue("background-color") == "rgb(" + "0, 0, 255)") {
        this.style.backgroundColor = "green";
    }
    else if (getComputedStyle(this).getPropertyValue("background-color") == "rgb(" + "0, 128, 0)") {
        this.style.backgroundColor = "red";
    }
    else {
        this.style.backgroundColor = "red";
    }

    console.log("Box colour was changed");
}    

//Change the background colour to the value from the input box.
function alterColour(value) {
    //If there is an element clicked, change the colour to the value from the input box.
    if (clickedBox != null) {
        clickedBox.style.backgroundColor = value;
    }
}