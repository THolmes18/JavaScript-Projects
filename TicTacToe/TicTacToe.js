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
        if (activePlayer === 'X') { 
        //if activeplayer = x the x.png is placed in HTML
        select.style.backgroundImage = 'url("images/x.png")';
        //active player may only b X or O, if not X it must be O
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

        //this function plays placement sound
        audio('./media/place.mp3');
        //this condition checks to see if it is the computers turn.
        if(activePlayer === 'O') {
            //this function disables clicking for computer choice.
            disableClick();
            //this function waits 1sec before computer places images and enables click.
            setTimeout(function (){ computersTurn(); }, 1000)
        }
        //returning true is needed for our computersturn() function 
        return true;
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
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluated returns true, the square hasnt been selected yet.
            if (placeXOrO(pickASquare)) {
                //calling the function now:
                placeXOrO(pickASquare);
                //this changes boolean and ends the loop.
                success = true;
            };
        }
    }
}

//this function parses the selectedSquares array to search for win conditions.
//drawWinLine function is called to draw lone if condition is met.
function checkWinConditions() {
    //X 0, 1, 2 condition.
    if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // X 3, 4, 5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    // X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    // X 0, 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    // X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    // X 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    // X 6, 4, 2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    // X 0, 4, 8 condition.
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    // O 0, 1, 2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    // O 3, 4, 5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    // O 6, 7, 8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    // O 0, 3, 6 condition.
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    // O 1, 4, 7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    // O 2, 5, 8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    // O 6, 4, 2 condition.
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    // O 0, 4, 8 condition.
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    // this condition checks for tie. If none of the above conditions register and 9
    // squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        //this function playes the tie game sound.
        audio('./media/tie.mp3');
        //this function sets a .3 second timer before the resetGame is called.
        setTimeout(function() { resetGame(); }, 1000);
    }


    //this function checks if an array includes 3 strings.
    //it is used to check for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //these 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        //if the 3 variable we pass are all included in our array true is
        //returned and our else if condition executes the drawWinLine function.
        if (a === true && b === true && c === true) { return true }
    }
}
//this function makes our body element temporarily unclickable.
function disableClick() {
    //this makes body unclickable
    body.style.pointerEvents = 'none';
    //this makes our body clickable again after 1 sec.
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//this function takes a string parameter of the path you set earlier for
//placement sound ('.media/place.mp3')
function audio(audioURL) {
    //we create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //play method plays our audio sound.
    audio.play();
}

//this function utilizes html canvas to draw win line.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line acesses html canvas element.
    const canvas = document.getElementById('win-lines')
    //gives access to properties and methods used on canvas.
    const c = canvas.getContext('2d');
    //this line indicates where the start of a lines x axis is.
    let x1 = coordX1,
        //line indicates where the start of a lines y axis is.
        y1 = coordY1,
        //line indicates end of a line x
        x2 = coordX2,
        //end of line x axis
        y2 = coordY2,
        //temp.x axis we update in animaton loop
        x = x1,
        //temp y axis update in animation loop
        y = y1;

    //interacts with canvas
    function animateLineDrawing() {
        //creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //clears content from last loop iteration
        c.clearRect(0, 0, 608, 608)
        //starts a new path
        c.beginPath();
        //moves to starting point for line
        c.moveTo(x1, y1)
        //end point in our line
        c.lineTo(x, y)
        //sets line width
        c.lineWidth = 10;
        //color of the line
        c.strokeStyle = 'rgba(70, 225, 33, .8)';
        //draws everything mention above
        c.stroke();
        //checks if endpoint has been reached
        if (x1 <= x2 && y1 <= y2) {
            //condition adds 10 to previous end x point
            if (x < x2) { x += 10; }
            //adds 10 to previous y point
            if (y < y2) { y += 10; }
            //cancels animation loop
            //if end points are reached
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //similar to one above;needed for 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

//clears canvas after win line is drawn
    function clear() {
        //starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        //clears animation
        c.clearRect(0, 0, 608, 608);
        //stops animation loop
        cancelAnimationFrame(animationLoop);
    }
    //this line calls main animation loop. 
        animateLineDrawing();
        //1sec wait clears canvas resets game and allowsclickung again
        setTimeout(function () { clear(); resetGame(); }, 1000);
}
//rests game in tie or win
function resetGame() {
    //loop iterates through each html square element
    for (let i = 0; i < 9; i++) {
        //gets html element of 1
        let square = document.getElementById(String(i))
        //removes background image
        square.style.backgroundImage = ''
    }
    //resets array to start over
    selectedSquares = [];

}