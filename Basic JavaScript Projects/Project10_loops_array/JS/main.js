var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
//Writing a loop saved us from writing document.write() fpr each method

function bunny_pics() {
    var Bunny_Picture = [];
    Bunny_Picture[0] = "sleeping";
    Bunny_Picture[1] = "playing";
    Bunny_Picture[2] = "eating";
    document.getElementById("Bunny").innerHTML = "In this picture, the bunny is " + Bunny_Picture[2] + ".";
}

function constant_function () {
    const Fruit_Flavors = {type: "pineapple", brand:"Hawaiian", color:"yellow"};
    Fruit_Flavors.color = "red";
    Fruit_Flavors.price = "$4";
    document.getElementById("Constant").innerHTML = "The cost of the " + Fruit_Flavors.type + " was " + Fruit_Flavors.price;
}