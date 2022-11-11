/*----- app's state (variables) -----*/
const playerTracker = { 
    playerOne: {
        playerEl: document.querySelector("#PlayerOne"),
        color: "Red",
        turnString: "Player 1's turn",
    },
    playerTwo: {
        playerEl: document.querySelector("#PlayerTwo"),
        color: "Yellow",
        turnString: "Player 2's turn",
    }
};

let playerOne = "Red";
let playerTwo = "Yellow";
let currentPlayer = playerOne;

let gameOver = false;
let board;

let currentColumns = []; 
let rows = 6;  
let columns = 7;

// /*----- cached element references -----*/

const winnerMsg = document.querySelector("#winner > h2");
const turnTracker = document.querySelector("#Playerturntracker > p");
const startButton = document.getElementById("Start-Button")
const playAgainButton = document.getElementById("Play-Again");
/*----- event listeners -----*/

startButton.addEventListener('click', init)
playAgainButton.addEventListener('click', init)
/*----- functions -----*/

function init(){
    startButton.style.display = "none";
    winnerMsg.style.display = "none";
    playAgainButton.style.display = "none";
    playerTracker.playerTwo.playerEl.style.border = "none"
    rendor();
}

function rendor(){
    setGame();
    playerTracker.playerOne.playerEl.style.border = "8px solid black";
    playerTracker.playerOne.playerEl.classList.add("red");
    playerTracker.playerTwo.playerEl.classList.add("yellow");
    playerTracker.playerOne.playerEl.style.display = "block";
    playerTracker.playerOne.playerEl.style.display = "block";
    for (const track in playerTracker){
        playerTracker[track].playerEl.innerText = playerTracker[track].turnString;
    }
}

function setGame(){
    board = [];
    currentColumns = [5, 5, 5, 5, 5, 5, 5];
    for (let r = 0; r < rows; r++){
        let row = [];
        for (let c = 0; c < columns; c++){
            row.push(' ');
            let chip = document.createElement('div');
            chip.id = r.toString() + "-" + c.toString();
            chip.classList.add("chip");
            chip.addEventListener("click", setPiece);
            document.getElementById("board").append(chip);
        }
        board.push(row);
    }
}

function setPiece(){
    if (gameOver){
        return;
    }
    let coord = this.id.split("-"); 
    let r = parseInt(coord[0]);
    let c = parseInt(coord[1]);

    r = currentColumns[c];
    if (r < 0) {
        return; 
    }
    board[r][c] = currentPlayer;
    let chip = document.getElementById(r.toString() + "-" + c.toString());
    
    if (currentPlayer == playerOne){
        chip.classList.add("playerOnePiece");
        playerTracker.playerOne.playerEl.style.border = "none";
        playerTracker.playerTwo.playerEl.style.border = "8px solid black";
        currentPlayer = playerTwo;
    }
    else {
        chip.classList.add("playerTwoPiece");
        playerTracker.playerOne.playerEl.style.border = "8px solid black";
        playerTracker.playerTwo.playerEl.style.border = "none";
        currentPlayer = playerOne;
    }

    r -= 1; // updating the row height for the column
 
    currentColumns[c] = r; // update the array 
    checkWinner();
}

function checkWinner(){
    // horizontally
    for (let r = 0; r < rows; r++){
        for (let c = 0; c < columns - 3; c++){
            if(board[r][c] != " "){
                if(board[r][c] == board[r][c+1] &&
                    board[r][c+1] == board[r][c+2] &&
                    board[r][c+2] == board[r][c+3]){
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
    // vertically
    for (let c = 0; c < columns; c++){
        for (let r = 0; r < rows-3; r++){
            if (board[r][c] != " "){
                if (board[r][c] == board[r+1][c] &&
                    board[r+1][c] == board[r+2][c] &&
                    board[r+2][c] == board[r+3][c]){
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
    // diagonal
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r-1][c+1] && 
                    board[r-1][c+1] == board[r-2][c+2] && 
                    board[r-2][c+2] == board[r-3][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
    // reverse diagonal
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r+1][c+1] && 
                    board[r+1][c+1] == board[r+2][c+2] && 
                    board[r+2][c+2] == board[r+3][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
}

function setWinner(r, c){
    if (board[r][c] == playerOne){
        winnerMsg.innerText = "Player 1 Wins!"
        winnerMsg.style.display = "block"
        playAgain();
    }else{
        winnerMsg.innerText = "Player Two Wins!"
        winnerMsg.style.display = "block"
        playAgain();
    }
    
    gameOver = true;
}

function playAgain(){      //playAgain function is called after there is a winner, diplays the start button after there is a winner
    playAgainButton.style.display = "block"    
    playerTracker.playerOne.playerEl.style.border = "none";
    playerTracker.playerTwo.playerEl.style.border = "none";
    playerTracker.playerOne.playerEl.classList.remove("red");
    playerTracker.playerTwo.playerEl.classList.remove("yellow");
    playerTracker.playerOne.playerEl.style.display = "none";
    playerTracker.playerTwo.playerEl.style.display = "none";
    playAgainButton.onclick = function () {
        location.reload();
    }
}

