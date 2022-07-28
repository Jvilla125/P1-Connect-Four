/*----- constants -----*/
let chipCount;

/*----- app's state (variables) -----*/
const playerTracker = {
    playerOne: {
        playerEl: document.querySelector("#PlayerOne"),
        turnString: "Player 1's turn",
        turn: true,
        winner: false
    },
    playerTwo: {
        playerEl: document.querySelector("#PlayerTwo"),
        turnString: "Player 2's turn",
        winner: false
    }
};
// /*----- cached element references -----*/

const winnerMsg = document.querySelector("h2");
const playerOne = document.querySelector("#Playerturntracker > p");
const startButton = document.getElementById("Start-Button")
const playAgainButton = document.getElementById("Play-Again");
const cellEl = document.querySelectorAll("td");

/*----- event listeners -----*/

startButton.addEventListener('click', init)
playAgainButton.addEventListener('click', init)
/*----- functions -----*/

function init(){
    chipCount = 42;
    winnerMsg.style.display = "none";
    startButton.style.display = "none";
    playAgainButton.style.display = "none";
    playerTracker.playerTwo.playerEl.style.border = "none"
    playerTracker.playerOne.turn = true;
    rendor();
}

function playAgain(){
    playAgainButton.style.display = "block"
    playerTracker.playerOne.playerEl.style.border = "none";
    playerTracker.playerOne.playerEl.classList.remove("blue");
    playerTracker.playerTwo.playerEl.classList.remove("red");
    playerTracker.playerTwo.playerEl.style.border = "none";
    playerTracker.playerOne.playerEl.style.display = "none";
    playerTracker.playerTwo.playerEl.style.display = "none";
    playAgainButton.addEventListener('click', e =>{
        cellEl.forEach(item =>{
            item.classList.remove("red", "hasChip", "blue", "yellow");
        });
        init();
    });
}

function updatePlayersTurn(){        
    chipCount--;
    if (chipCount == 0){
        endGame();
    }
    if (playerTracker.playerOne.turn === true){
        playerTracker.playerOne.playerEl.style.border = "none"
        playerTracker.playerTwo.playerEl.style.border = "8px solid black";
        playerTracker.playerOne.turn = false;
    }else{
        playerTracker.playerOne.playerEl.style.border = "8px solid black";
        playerTracker.playerTwo.playerEl.style.border = "none";
        playerTracker.playerOne.turn = true;
    }
}

function checkWinner(){
    horizontalWinnerCheck();
    verticalWinnerCheck();
    diagonalUpWinnerCheck();
    diagonalDownWinnerCheck();
}

function horizontalWinnerCheck(){
     for (let i = 0; i < cellEl.length; i++){
        if(i+3 <= cellEl.length){  
            if (cellEl[i].classList.contains('blue') && cellEl[i+1].classList.contains('blue') 
                && cellEl[i+2].classList.contains('blue') && cellEl[i+3].classList.contains('blue')){
                cellEl[i].classList.add("yellow");
                cellEl[i+1].classList.add("yellow");
                cellEl[i+2].classList.add("yellow");
                cellEl[i+3].classList.add("yellow");
                playerTracker.playerOne.winner = true;
                endGame();
            }else{
                if(cellEl[i].classList.contains('red') && cellEl[i+1].classList.contains('red') 
                    && cellEl[i+2].classList.contains('red') && cellEl[i+3].classList.contains('red')){
                    cellEl[i].classList.add("yellow");
                    cellEl[i+1].classList.add("yellow");
                    cellEl[i+2].classList.add("yellow");
                    cellEl[i+3].classList.add("yellow");
                    playerTracker.playerOne.winner = false;
                    endGame();
                }
            } 
        }
    }
}

function verticalWinnerCheck(){
    for (let i = 0; i < cellEl.length; i++){
        if(i+21 <=cellEl.length){
            if ((cellEl[i].classList.contains('blue')) && (cellEl[i+7].classList.contains('blue')) 
                && (cellEl[i+14].classList.contains('blue')) && (cellEl[i+21].classList.contains('blue'))){
                cellEl[i].classList.add("yellow");
                cellEl[i+7].classList.add("yellow");
                cellEl[i+14].classList.add("yellow");
                cellEl[i+21].classList.add("yellow");
                playerTracker.playerOne.winner = true;
                endGame();
            }else{
                if((cellEl[i].classList.contains('red')) && (cellEl[i+7].classList.contains('red')) 
                && (cellEl[i+14].classList.contains('red')) && (cellEl[i+21].classList.contains('red'))){
                    cellEl[i].classList.add("yellow");
                    cellEl[i+7].classList.add("yellow");
                    cellEl[i+14].classList.add("yellow");
                    cellEl[i+21].classList.add("yellow");
                    playerTracker.playerOne.winner = false;
                    endGame();
                }   
            }
        }
    }
}

function diagonalUpWinnerCheck(){
    for (let i = 0; i <= cellEl.length; i++){
        if(i+18 <=cellEl.length){
            if (cellEl[i].classList.contains('blue') && cellEl[i+6].classList.contains('blue') 
                && cellEl[i+12].classList.contains('blue') && cellEl[i+18].classList.contains('blue')){
                cellEl[i].classList.add("yellow");
                cellEl[i+6].classList.add("yellow");
                cellEl[i+12].classList.add("yellow");
                cellEl[i+18].classList.add("yellow");
                playerTracker.playerOne.winner = true;
                endGame();
            }else{
                if(cellEl[i].classList.contains('red') && cellEl[i+6].classList.contains('red') 
                    && cellEl[i+12].classList.contains('red') && cellEl[i+18].classList.contains('red')){
                    cellEl[i].classList.add("yellow");
                    cellEl[i+6].classList.add("yellow");
                    cellEl[i+12].classList.add("yellow");
                    cellEl[i+18].classList.add("yellow");
                    playerTracker.playerOne.winner = false;
                    endGame();
                }
            } 
        }  
    }
}
function diagonalDownWinnerCheck(){
    for (let i = 0; i <= cellEl.length; i++){
        if(i+24 <= cellEl.length){
            if (cellEl[i].classList.contains('blue') && cellEl[i+8].classList.contains('blue') 
                && cellEl[i+16].classList.contains('blue') && cellEl[i+24].classList.contains('blue')){
                cellEl[i].classList.add("yellow");
                cellEl[i+8].classList.add("yellow");
                cellEl[i+16].classList.add("yellow");
                cellEl[i+24].classList.add("yellow");
                playerTracker.playerOne.winner = true;
                endGame();
            }else{
                if(cellEl[i].classList.contains('red') && cellEl[i+8].classList.contains('red') 
                    && cellEl[i+16].classList.contains('red') && cellEl[i+24].classList.contains('red')){
                    cellEl[i].classList.add("yellow");
                    cellEl[i+8].classList.add("yellow");
                    cellEl[i+16].classList.add("yellow");
                    cellEl[i+24].classList.add("yellow");
                    playerTracker.playerOne.winner = false;
                    endGame();
                }
            } 
        }
    }
}
 
function endGame(){
    if(chipCount == 0){
        winnerMsg.style.display = "block"
        winnerMsg.style.border ="8px solid black"
        winnerMsg.style.background = "yellow"
        winnerMsg.innerText = "Draw!"
        playAgain();
    }
    else if (playerTracker.playerOne.winner == true){
        winnerMsg.style.display = "block"
        winnerMsg.style.border ="8px solid black"
        winnerMsg.innerText = "Player 1 Wins!"
        winnerMsg.style.background = "yellow"
        
        playAgain();
    }else {
        winnerMsg.style.display = "block"
        winnerMsg.style.border ="8px solid black"
        winnerMsg.innerText = "Player 2 Wins!"
        winnerMsg.style.background = "yellow"
        playAgain();
    }
}

function rendor(){
    playerTracker.playerOne.playerEl.style.border = "8px solid black";
    playerTracker.playerOne.playerEl.classList.add("blue");
    playerTracker.playerTwo.playerEl.classList.add("red");
    playerTracker.playerOne.playerEl.style.display = "block";
    playerTracker.playerTwo.playerEl.style.display = "block";

    for (const track in playerTracker){
        playerTracker[track].playerEl.innerText = playerTracker[track].turnString;
    }

    //Iterate through of the the cells
    for (let i = 0; i < cellEl.length; i++){     
        cellEl[i].addEventListener('click', e =>{   
        if (cellEl[i].classList.contains("Row1") || (cellEl[i+7].classList.contains("hasChip"))){
                if(playerTracker.playerOne.turn === true){
                    if(!cellEl[i].classList.contains("blue") && !cellEl[i].classList.contains("red")){
                        cellEl[i].classList.add('hasChip');
                        cellEl[i].classList.add('blue');
                        updatePlayersTurn(); 
                        checkWinner();
                    } 
                }else{
                    if(!cellEl[i].classList.contains("red") && !cellEl[i].classList.contains("blue")){
                        cellEl[i].classList.add("hasChip");
                        cellEl[i].classList.add('red');
                        updatePlayersTurn();
                        checkWinner();
                    }      
                }      
            }   
        });
    }
}

