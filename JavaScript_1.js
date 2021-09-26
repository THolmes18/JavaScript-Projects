function Animal_Function() {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").ariaValueMax;
    var Animal_String = " is a wonderful animal!";
    switch(Animals) {
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
        break;
        case "Cat":
            Animal_Output = "Cat" + Animal_String;
        break;
        case "Bunny":
            Animal_Output = "Bunny" + Animal_String;
        break;
        case "Tiger":
            Animal_Output = "Tiger" + Animal_String;
        break;
        case "Lion":
            Animal_Output = "Lion" + Animal_String;
        break;
        case "Bear":
            Animal_Output = "Bear" + Animal_String;
        break;
        default:
            Animal_Output = "Please enter an animal as written above.";
    }
    document.getElementById("Output").innerHTML = Animal_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}
//linear gradient within canvas
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillstyle = grd;
ctx.fillRect(20, 20, 150, 100);