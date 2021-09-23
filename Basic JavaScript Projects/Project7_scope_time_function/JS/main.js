//Global variable
var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();

//local variable
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var x = 10;
    console.log(15 + x);
}
function Add_numbers_2() {
    console.log(x + 100);
}
Add_numbers_1();
Add_numbers_2();

//if statements
if (1 < 2) {
    document.write("The left number is smaller than the number on the right.")
}

//HTML greeting = this code:
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
//The Date().getHours() method returns the hour in the specified date according to the local time, and the hours
//are listed as integers between 0 and 23.ex. 18 is equal to 6:00p.m. 12 is noon, etc.

//else statement
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}
function License_Function() {
    License = document.getElementById("License").value;
    if (License >= 2014) {
        License = "You do not have a license.";
    }
    else {
        License = "You should have a license.";
    }
    document.getElementById("What_year_were_you_born?").innerHTML = License;
}