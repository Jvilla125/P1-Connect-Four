/*----- constants -----*/
let chipCount;

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

const winnerMsg = document.querySelector("h2");
const turnTracker = document.querySelector("#Playerturntracker > p");
const startButton = document.getElementById("Start-Button")
const playAgainButton = document.getElementById("Play-Again");

/*----- event listeners -----*/

startButton.addEventListener('click', init)
playAgainButton.addEventListener('click', init)
/*----- functions -----*/

function setGame(){
    board = [];
    currentColumns = [5, 5, 5, 5, 5, 5, 5];
    

    for (let r = 0; r < rows; r++){
        let row = [];
        for (let c = 0; c < columns; c++){
            row.push(' ');
            let tile = document.createElement('div');
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

function setPiece(){
    if (gameOver){
        return;
    }
    chipCount = 42;
    let coord = this.id.split("-");
    let r = parseInt(coord[0]);
    let c = parseInt(coord[1]);

    r = currentColumns[c];
    if (r < 0) {
        return; 
    }

    board[r][c] = currentPlayer;
    let tile = document.getElementById(r.toString() + "-" + c.toString());
    if (currentPlayer == playerOne){
        tile.classList.add("playerOnePiece");
        playerTracker.playerOne.playerEl.style.border = "none";
        playerTracker.playerTwo.playerEl.style.border = "8px solid black";
        currentPlayer = playerTwo;
    }
    else {
        tile.classList.add("playerTwoPiece");
        playerTracker.playerOne.playerEl.style.border = "8px solid black";
        playerTracker.playerTwo.playerEl.style.border = "none";
        currentPlayer = playerOne;
    }

    r -= 1; // updating the row height for the column
    chipCount--;
    if (chipCount == 0){
        winnerMsg.style.display = "block"
        winnerMsg.style.border ="8px solid black"
        winnerMsg.style.background = "yellow"
        winnerMsg.innerText = "Draw!"
        gameOver = True;
    }
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
        for (let r = 0; r < rows; r++){
            if (board[r][c] != " "){
                if (board[r][c] == board[r+1][c] && board[r+1][c] == board[r+2][c] && board[r+2][c] == board[r+3][c]){
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
                if (board[r][c] == board[r-1][c+1] && board[r-1][c+1] == board[r-2][c+2] && board[r-2][c+2] == board[r-3][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
    // reverse diagonal
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r+1][c+1] && board[r+1][c+1] == board[r+2][c+2] && board[r+2][c+2] == board[r+3][c+3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
}

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

function setWinner(r, c){
    let winner = document.getElementById("winner")
    if (board[r][c] == playerOne){
        winnerMsg.style.display = "block"
        winnerMsg.style.border = "8px solid black"
        winnerMsg.innerText = "Player One Wins!"
    }else{
        winnerMsg.style.display = "block"
        winnerMsg.style.border = "8px solid black"
        winnerMsg.innerText = "Player Two Wins!"
    }
    gameOver = true;
}

// function init(){        //init function restarts the screen everytime it is called
//     chipCount = 42;
//     winnerMsg.style.display = "none";
    // startButton.style.display = "none";
//     playAgainButton.style.display = "none";
//     playerTracker.playerTwo.playerEl.style.border = "none"
//     playerTracker.playerOne.turn = true;
//     rendor();
// }

// function playAgain(){      //playAgain function is called after there is a winner, diplays the start button after there is a winner
//     playAgainButton.style.display = "block"    
//     playerTracker.playerOne.playerEl.style.border = "none";
//     playerTracker.playerOne.playerEl.classList.remove("red");
//     playerTracker.playerTwo.playerEl.classList.remove("yellow");
//     playerTracker.playerTwo.playerEl.style.border = "none";
//     playerTracker.playerOne.playerEl.style.display = "none";
//     playerTracker.playerTwo.playerEl.style.display = "none";
//     playAgainButton.addEventListener('click', e =>{
//         // cellEl.forEach(item =>{
//         //     item.classList.remove("red", "hasChip", "blue", "yellow");
//         // });
//         init();
//     });
// }

// function updatePlayersTurn(){       //After each turn, the total chip count is being reduced by 1
//     chipCount--;                    // as there are only 42 total turns. If that runs out before there is a winner
//     if (chipCount == 0){            // then the game will end in a draw
//         endGame();
//     }
//     if (playerTracker.playerOne.turn === true){
//         playerTracker.playerOne.playerEl.style.border = "none"
//         playerTracker.playerTwo.playerEl.style.border = "8px solid black";
//         playerTracker.playerOne.turn = false;
//     }else{
//         playerTracker.playerOne.playerEl.style.border = "8px solid black";
//         playerTracker.playerTwo.playerEl.style.border = "none";
//         playerTracker.playerOne.turn = true;
//     }
// }


// function endGame(){         //After there is a winner or draw, this function displays a messing on the header
//     if(chipCount == 0){     // and calls the function 'playAgain' to ask the user if they want to restart
//         winnerMsg.style.display = "block"
//         winnerMsg.style.border ="8px solid black"
//         winnerMsg.style.background = "yellow"
//         winnerMsg.innerText = "Draw!"
//         playAgain();
//     }
//     else if (board[r][c] == playerOne){
//         winnerMsg.style.display = "block"
//         winnerMsg.style.border ="8px solid black"
//         winnerMsg.innerText = "Player 1 Wins!"
//         // winnerMsg.style.background = ""
//         playAgain();
//     }else {
//         winnerMsg.style.display = "block"
//         winnerMsg.style.border ="8px solid black"
//         winnerMsg.innerText = "Player 2 Wins!"
//         // winnerMsg.style.background = "yellow"
//         playAgain();
//     }
// }



