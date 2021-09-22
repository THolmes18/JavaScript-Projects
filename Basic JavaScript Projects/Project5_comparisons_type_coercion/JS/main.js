//Nan as the answer is not a number
function Numbers() {
    document.getElementById("Numbers").innerHTML = 0/0;
}

function Real() {
    document.getElementById("Numbers").innerHTML = isNaN(); //This is a string showing if a number is true
}

function Fake() {
    document.getElementById("Numbers").innerHTML = isNaN('007');
}

document.write(2E310); //This will display Infinity
document.write(-3E310); //This will display -Infinity
document.write(5345310654105160146541540685410 + 2E310);

//Boolean values are true and false code would be as follow:
document.write(10 > 2); //This is true
document.write(10 < 2); //This is false

//tool used in browser to help debug code
console.log(2 + 2);
//Display "false" using Boolean and console
console.log(false);

//an output of true checking double equal signs.
document.write(10 == 10);
//false output
document.write(3 == 11);
//to check if something is equal you have 2 pieces of data
//A single (=) assigns a variable
x = 10;
y = 10;
document.write(x === y); //true is the output for comparison

x = 82;
y = "82";
document.write(x === y); //false is the output for comparison; numb and string not equal

a = "Magguy";
b = "Magguy";
document.write(a === b); //this is true

//&& operator determines logic (&&)=AND (||)=OR (!)=NOT
document.write(5 > 2 && 10 > 4); //Both are true so true is displayed

document.write(5 > 10 && 10 > 4); //False is displayed

document.write(5 > 10 || 10 > 4); //True is displayed

document.write(5 > 10 || 10 > 20); //false is displayed

//(!)Not operator checks if something is true step 1 add HTML code
//step 2 add this in code:
function not_function() {
    document.getElementById("Not").innerHTML = !(20 > 10);//this returns false
}
//for a double negative:
function not_function() {
    document.getElementById("Not").innerHTML = !(5 > 10);//this returns true
}