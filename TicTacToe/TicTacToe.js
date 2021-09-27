//this variable keeps track of whose turn it is.
let activePlayer = 'X';
//this array stores an array of moves..determines the winning conditions
let selectedSquares = [];

//this function is for placing an X or O in a square.
function placeXOrO(squareNumber) {
    //this condition ensures a square hasnt been selected.
    //the .some() methos id used to check each element of selectedSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        // this condition checks who's turn it is
    } else {
        //if active player is equal to '0' the o.png is placed in html
        select.style.backgroundImage = 'url("images/o.png")';
    }
//squareNumber and activeplayer are concatenated together and added to array.
selectedSquares.push(squareNumber + activePlayer);
//this calls a function to check for any win conditions
checkWinConditions();
//this condition is for changing the active player.
if (activePlayer === 'X') {
    //if activeplayer is X change it to O
    activePlayer = 'O';
    //if active player is anything other than X
} else {
    //change the activeplayer to X
    activePlayer = 'X';
}

//this function results in a random square being selected.
function computersTurn() {
    //this boolean is needed for while loop.
    let success = false;
    //this variable stores a random number 0-8.
    let pickASquare;
    //this condition allows while loop to keep trying if a square is selected already.
    while(!success) {
        //a random number between 0-8 is selected
        pickASquare = String(Math.floor(Math.random()* 9));
        //if the random number evaluated returns true, the square hasnt been selected yet.
        if (placeXOrO(pickASquare)) {
            //calling the function now:
            placeXOrO(pickASquare);
            //this changes boolean and ends the loop.
            success = true;
        }
    }
}
