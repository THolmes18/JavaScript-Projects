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