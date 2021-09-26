var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
//Writing a loop saved us from writing document.write() for each method

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
//LEt assignment
var x = 82;
document.write(x);
{
    let x = 33;
    document.write("<br>" + x);
}
document.write("<br>" + x);

//return statement
function equation() {
    return Math.PI;
}
document.getElementById("return").innerHTML = equation();

//objects with properties
let car = {
    make: "Acura ",
    model: "MDX ",
    year: "2021 ",
    color: "Silver ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
//break statement
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;

//continue statement
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;