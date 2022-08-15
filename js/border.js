/*
    Border Scripts
    By me
*/

//Store the Div that will be affected.
const box = document.getElementById("border_box");

//Get the current size of the border, trim off the string, convert to whole number.
var size = parseInt(getComputedStyle(box).getPropertyValue("border-width").replace("px", ""));

//Increase the border size of the box.
function increaseSize() {    
    //Arbitrary max border size. Check if current size is smaller. If yes, increase by 1 and change the size.
    if (size < 6) {
        size += 1;
        box.style.borderWidth = size + "px";
        console.log("Border Size increased")
    }

    console.log("Border Size:" + size);
}

//Decrease the border size of the box.
function decreaseSize() { 
    //Don't allow the border to dissapear (go below 1). Decrease size by 1 if above min.
    if (size > 1) {
        size -= 1;
        box.style.borderWidth = size + "px";
        console.log("Border Size decreased")
    }

    console.log("Border Size:" + size);               
}

//Change the Border style to dashed.
function turnDashed() {
    box.style.borderStyle = "dashed";
}

//Change the Border style to dotted.
function turnDotted() {
    box.style.borderStyle = "dotted";
}

//Turn the border on by changing style to solid.
function turnOn() {
    box.style.borderStyle = "solid";
}

//Turn off the border by hidding it.
function turnOff() {
    box.style.borderStyle = "hidden";
}