function aFunction() {
    var str = "(3+3)";
    var result = str.fontcolor("orange");
    document.getElementById("Math").innerHTML = result
}
document.write(3 + 4)

//Subtraction Function
function subtraction_Function () {
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;
}
document.write(5 - 2)
n
//Multiplication Function
function Multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Math;
}

//To show on HTML change onclick to whatever the function is example onlick="more_Math"

//Division Function
function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}


//Muliple Operations
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multipled by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}
document.write(1 + 2) * 10 / 2 -5

//Modulus Operator(The remainder after the dividend is divided by the divisor)
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

//Unary operator
function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

//syntax for increment increase
var x = 5;
x++;
document.write(x)
//decrement
var x = 5.25
x--;
document.write(x);

//random number between 0 and 1
window.alert(Math.random());
//random number between 0 and 100
window.alert(Math.random()* 100);